import { useEffect, useRef } from "react";

// Thin red reading-progress bar. One passive scroll listener writing a transform, so it
// costs nothing at load (no animation library on the critical path).
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 1100, pointerEvents: "none" }}
    >
      <div
        ref={bar}
        style={{
          height: "100%",
          transformOrigin: "left",
          transform: "scaleX(0)",
          background: "var(--red)",
          transition: "transform 0.12s linear",
        }}
      />
    </div>
  );
}
