// Native smooth scrolling for every programmatic jump (nav, hero CTA, ⌘K, case-study
// index). Sections carry scroll-margin-top (index.css) so the sticky nav never covers a
// heading. Under reduced motion the jump is instant.

function behavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

/**
 * Scroll to the element with this id. When the target is not in the DOM yet (a route
 * change or a lazy section still loading) it retries for up to `waitMs`.
 */
export function scrollToId(id: string, waitMs = 2000) {
  const start = performance.now();
  const attempt = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: behavior(), block: "start" });
      return;
    }
    if (performance.now() - start < waitMs) requestAnimationFrame(attempt);
  };
  attempt();
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: behavior() });
}
