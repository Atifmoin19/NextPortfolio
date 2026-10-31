import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_TINT, SECTIONS } from "../data/sections";
import { ActiveSectionContext } from "./activeSection";

// Fades the page ground (--bg) to the tint of whichever section crosses the middle of
// the viewport, and exposes that section's id so the nav can mark it active.
// Sections mount lazily, so the observer re-scans whenever the DOM grows.

const CONFIG_TINT = new Map(SECTIONS.map((s) => [s.id, s.tint]));
const SELECTOR = [...SECTIONS.map((s) => `#${s.id}`), "[data-tint]"].join(",");

function tintFor(el: HTMLElement) {
  return el.dataset.tint ?? CONFIG_TINT.get(el.id) ?? DEFAULT_TINT;
}

export function SectionTintProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  // Keyed by path so a route change drops the old highlight without a reset render.
  const [seen, setSeen] = useState<{ path: string; id: string | null }>({ path: pathname, id: null });
  const active = seen.path === pathname ? seen.id : null;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--bg", DEFAULT_TINT);

    const observed = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          root.style.setProperty("--bg", tintFor(el));
          setSeen({ path: pathname, id: el.dataset.section ?? (el.id || null) });
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        io.observe(el);
      });
    };

    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    scan();

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
      root.style.setProperty("--bg", DEFAULT_TINT);
    };
  }, [pathname]);

  return (
    <ActiveSectionContext.Provider value={active}>{children}</ActiveSectionContext.Provider>
  );
}
