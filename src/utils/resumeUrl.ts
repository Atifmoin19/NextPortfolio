const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);
const FALLBACK = "/SSEFE.pdf";

/**
 * The CMS stores whatever URL the API returned at upload time. If that upload happened
 * against a local backend (or the API's public URL wasn't configured), the saved link is
 * `http://localhost:8001/content/resume`, which is dead for every real visitor. Point any
 * such link at the configured API instead, and fall back to the bundled PDF if even that
 * is local while we're running on a real domain.
 */
export function resolveResumeUrl(stored?: string | null): string {
  if (!stored) return FALLBACK;
  if (typeof window === "undefined") return stored;
  const runningLocally = LOCAL_HOSTS.has(window.location.hostname);
  let url: URL;
  try {
    url = new URL(stored, window.location.origin);
  } catch {
    return FALLBACK;
  }
  if (runningLocally || !LOCAL_HOSTS.has(url.hostname)) return url.href;

  const api = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/+$/, "");
  if (api) {
    try {
      if (!LOCAL_HOSTS.has(new URL(api).hostname)) return `${api}${url.pathname}${url.search}`;
    } catch {
      /* fall through */
    }
  }
  return FALLBACK;
}
