import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Only Firestore is used client-side - view tracking runs through react-ga4
// (Google Analytics) instead, and there's no Firebase Storage usage either.
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
