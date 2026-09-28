import { portfolioData as initialData } from "../data/content";

// The public site only ever reads one document, so it uses Firestore's REST API instead of
// the Firebase SDK (~300 KB of JavaScript for a single GET). Writes go through the backend.
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID as string;
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY as string;
const DOC_URL =
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}` +
    `/databases/(default)/documents/content/portfolio?key=${API_KEY}`;

type FirestoreValue = {
    stringValue?: string;
    integerValue?: string;
    doubleValue?: number;
    booleanValue?: boolean;
    nullValue?: null;
    timestampValue?: string;
    mapValue?: { fields?: Record<string, FirestoreValue> };
    arrayValue?: { values?: FirestoreValue[] };
};

/** Firestore REST wraps every value in its type ({ stringValue: "x" }); unwrap to plain JSON. */
function decode(value: FirestoreValue): unknown {
    if (value.mapValue) return decodeFields(value.mapValue.fields ?? {});
    if (value.arrayValue) return (value.arrayValue.values ?? []).map(decode);
    if (value.integerValue !== undefined) return Number(value.integerValue);
    if (value.doubleValue !== undefined) return value.doubleValue;
    if (value.booleanValue !== undefined) return value.booleanValue;
    if (value.stringValue !== undefined) return value.stringValue;
    if (value.timestampValue !== undefined) return value.timestampValue;
    return null;
}

function decodeFields(fields: Record<string, FirestoreValue>): Record<string, unknown> {
    return Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, decode(v)]));
}

export const portfolioService = {
    async getPortfolioData() {
        try {
            const res = await fetch(DOC_URL);
            if (!res.ok) throw new Error(`Firestore read failed with ${res.status}`);
            const doc = (await res.json()) as { fields?: Record<string, FirestoreValue> };
            return decodeFields(doc.fields ?? {}) as unknown as typeof initialData;
        } catch (error) {
            console.error("Error fetching portfolio data, falling back to local content:", error);
            return initialData;
        }
    },
};
