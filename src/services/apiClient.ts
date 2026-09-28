const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const TOKEN_KEY = "adminToken";

export function getAdminToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function setAdminToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminToken(): void {
    localStorage.removeItem(TOKEN_KEY);
}

export class ApiError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new ApiError(res.status, body.detail ?? `Request failed with ${res.status}`);
    }

    return res.json() as Promise<T>;
}

let warmUpStarted = false;

export const apiClient = {
    /**
     * Fire-and-forget ping so a sleeping Render instance starts waking the moment the
     * page loads, not when the visitor first sends a chat or contact message. no-cors: the
     * response is never read, so no CORS check (and no console error) is needed.
     */
    warmUp() {
        if (warmUpStarted || !API_BASE_URL) return;
        warmUpStarted = true;
        fetch(`${API_BASE_URL}/health`, { mode: "no-cors", keepalive: true }).catch(() => {});
    },

    login(admin_id: string, password: string) {
        return request<{ access_token: string; token_type: string; expires_in: number }>(
            "/auth/login",
            { method: "POST", body: JSON.stringify({ admin_id, password }) },
        );
    },

    getContent<T>() {
        const token = getAdminToken();
        return request<T>("/content", {
            headers: { Authorization: `Bearer ${token}` },
        });
    },

    saveContent<T>(data: T) {
        const token = getAdminToken();
        return request<T>("/content", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify(data),
        });
    },

    chat(message: string, history: { role: string; content: string }[] = []) {
        return request<{ reply: string }>("/chat", {
            method: "POST",
            body: JSON.stringify({ message, history }),
        });
    },

    sendContactMessage(data: {
        first_name: string;
        last_name: string;
        email: string;
        mobile: string;
        message: string;
        website?: string;
    }) {
        return request<{ sent: boolean }>("/contact", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    async uploadResume(file: File) {
        const token = getAdminToken();
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${API_BASE_URL}/content/resume`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
        });

        if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            throw new ApiError(res.status, body.detail ?? `Request failed with ${res.status}`);
        }

        return res.json() as Promise<{ url: string }>;
    },

    getInquiries(afterId?: string, pageSize = 5) {
        const token = getAdminToken();
        const params = new URLSearchParams({ page_size: String(pageSize) });
        if (afterId) params.set("after_id", afterId);

        return request<{
            items: {
                id: string;
                fname: string;
                lname: string;
                email: string;
                mobile: string;
                message: string;
                date: string;
            }[];
            has_next: boolean;
        }>(`/content/inquiries?${params.toString()}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
};
