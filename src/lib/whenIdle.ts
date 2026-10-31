/**
 * Runs `cb` once the page has loaded and the main thread is idle, so prefetching never
 * competes with the first paint. Returns a cancel function.
 */
export function whenIdle(cb: () => void, timeout = 4000): () => void {
  let cancelled = false;
  let idleId = 0;
  let timerId = 0;
  const schedule = () => {
    if (cancelled) return;
    if (typeof window.requestIdleCallback === "function") idleId = window.requestIdleCallback(cb, { timeout });
    else timerId = window.setTimeout(cb, 1500);
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
  return () => {
    cancelled = true;
    window.removeEventListener("load", schedule);
    if (idleId) window.cancelIdleCallback(idleId);
    if (timerId) window.clearTimeout(timerId);
  };
}
