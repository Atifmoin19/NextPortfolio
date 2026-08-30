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

export const apiClient = {
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
};
