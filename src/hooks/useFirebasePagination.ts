import { useState, useCallback } from "react";
import {
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    startAfter,
    type QueryDocumentSnapshot,
    type DocumentData,
} from "firebase/firestore";
import { firestore } from "../firebase";

interface PaginationResult<T> {
    data: T[];
    loading: boolean;
    error: string | null;
    fetchNextPage: () => Promise<void>;
    fetchInitialPage: () => Promise<void>;
    hasNextPage: boolean;
}

export const useFirebasePagination = <T extends { id: string }>(
    collectionName: string,
    pageSize: number = 5
): PaginationResult<T> => {
    const [data, setData] = useState<T[]>([]);
    const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasNextPage, setHasNextPage] = useState(true);

    const fetchInitialPage = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const q = query(
                collection(firestore, collectionName),
                orderBy("date", "desc"), // Assuming "date" exists as shown in image
                limit(pageSize)
            );
            const querySnapshot = await getDocs(q);
            const docs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as T[];

            setData(docs);
            setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1] || null);
            setHasNextPage(querySnapshot.docs.length === pageSize);
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError("An unknown error occurred");
        } finally {
            setLoading(false);
        }
    }, [collectionName, pageSize]);

    const fetchNextPage = useCallback(async () => {
        if (!lastDoc || !hasNextPage || loading) return;

        setLoading(true);
        try {
            const q = query(
                collection(firestore, collectionName),
                orderBy("date", "desc"),
                startAfter(lastDoc),
                limit(pageSize)
            );
            const querySnapshot = await getDocs(q);
            const docs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as T[];

            if (docs.length > 0) {
                setData((prev) => [...prev, ...docs]);
                setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
                setHasNextPage(querySnapshot.docs.length === pageSize);
            } else {
                setHasNextPage(false);
            }
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError("An unknown error occurred");
        } finally {
            setLoading(false);
        }
    }, [collectionName, pageSize, lastDoc, hasNextPage, loading]);

    return { data, loading, error, fetchNextPage, fetchInitialPage, hasNextPage };
};
