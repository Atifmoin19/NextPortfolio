import { doc, getDoc, setDoc, updateDoc, increment, collection, addDoc, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import { portfolioData as initialData } from "../data/content";

const COLLECTION_NAME = "content";
const DOCUMENT_ID = "portfolio";

export const portfolioService = {
    async getPortfolioData() {
        try {
            const docRef = doc(firestore, COLLECTION_NAME, DOCUMENT_ID);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return docSnap.data() as typeof initialData;
            } else {
                // If it doesn't exist, seed it with the initial data
                await this.savePortfolioData(initialData);
                return initialData;
            }
        } catch (error) {
            console.error("Error fetching portfolio data:", error);
            throw error;
        }
    },

    async savePortfolioData(data: typeof initialData) {
        try {
            const docRef = doc(firestore, COLLECTION_NAME, DOCUMENT_ID);
            await setDoc(docRef, data);
        } catch (error) {
            console.error("Error saving portfolio data:", error);
            throw error;
        }
    },

    async updateSection(section: string, data: unknown) {
        try {
            const docRef = doc(firestore, COLLECTION_NAME, DOCUMENT_ID);
            await updateDoc(docRef, {
                [section]: data,
            });
        } catch (error) {
            console.error(`Error updating section ${section}:`, error);
            throw error;
        }
    },

    async incrementViewCount() {
        try {
            const docRef = doc(firestore, "stats", "views");
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, { count: 1 });
            } else {
                await updateDoc(docRef, {
                    count: increment(1)
                });
            }
        } catch (error) {
            console.error("Error incrementing view count:", error);
        }
    },

    async getViewCount() {
        try {
            const docRef = doc(firestore, "stats", "views");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data().count;
            }
            return 0;
        } catch (error) {
            console.error("Error getting view count:", error);
            return 0;
        }
    },

    async addAnalyticsEvent() {
        try {
            const userAgent = navigator.userAgent;
            const referrer = document.referrer || "Direct";
            const date = new Date().toISOString();
            const day = new Date().toLocaleDateString();

            // Store event for detailed logs
            await addDoc(collection(firestore, "analytics"), {
                userAgent,
                referrer,
                date,
                day
            });

            // Update aggregated stats for charts
            const statsRef = doc(firestore, "stats", "sources");
            const statsSnap = await getDoc(statsRef);

            const sourceKey = this.getCleanSource(referrer);

            if (!statsSnap.exists()) {
                await setDoc(statsRef, { [sourceKey]: 1 });
            } else {
                await updateDoc(statsRef, {
                    [sourceKey]: increment(1)
                });
            }
        } catch (error) {
            console.error("Error adding analytics event:", error);
        }
    },

    getCleanSource(referrer: string) {
        if (referrer === "Direct") return "Direct";
        if (referrer.includes("google")) return "Google";
        if (referrer.includes("github")) return "GitHub";
        if (referrer.includes("linkedin")) return "LinkedIn";
        if (referrer.includes("twitter") || referrer.includes("t.co")) return "Twitter";
        return "Other";
    },

    async getAnalyticsData() {
        try {
            const statsRef = doc(firestore, "stats", "sources");
            const statsSnap = await getDoc(statsRef);
            if (statsSnap.exists()) {
                const data = statsSnap.data();
                return Object.entries(data).map(([name, value]) => ({ name, value }));
            }
            return [];
        } catch (error) {
            console.error("Error getting analytics data:", error);
            return [];
        }
    },

    subscribeToViewCount(onUpdate: (count: number) => void) {
        const docRef = doc(firestore, "stats", "views");
        return onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                onUpdate(docSnap.data().count);
            }
        }, (error) => {
            console.error("Error listening to view count:", error);
        });
    },

    async resetStats() {
        try {
            await setDoc(doc(firestore, "stats", "views"), { count: 0 });
            await setDoc(doc(firestore, "stats", "sources"), {});
            // Optionally clear the analytics collection too if you want to be thorough
        } catch (error) {
            console.error("Error resetting stats:", error);
        }
    }
};
