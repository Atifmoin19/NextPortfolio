import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../../lib/useMotionPreference";

// Stamped kinetic wordmark. Each letter's width and weight axes swell toward the
// cursor (or finger); with no pointer the letters breathe in a slow wave. Under
// reduced motion it renders one static frame at the default axes.

const RADIUS = 320;

export default function Wordmark({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const wordRef = useRef<HTMLDivElement>(null);
  const chars = [...text.toUpperCase()];

  useEffect(() => {
    const word = wordRef.current;
    if (!word || reduce) return;

    const letters = [...word.querySelectorAll<HTMLSpanElement>("span:not(.sp)")];
    const cur = letters.map(() => ({ w: 100, g: 900 }));
    let mx: number | null = null;
    let visible = true;
    let raf = 0;

    const io = new IntersectionObserver((e) => (visible = e[0].isIntersecting), {
      rootMargin: "80px",
    });
    io.observe(word);

    const frame = (t: number) => {
      if (visible) {
        letters.forEach((el, i) => {
          let tw: number;
          let tg: number;
          if (mx !== null) {
            const r = el.getBoundingClientRect();
            const k = Math.max(0, 1 - Math.abs(mx - (r.left + r.width / 2)) / RADIUS);
            tw = 86 + 39 * k;
            tg = 900 - 600 * k;
          } else {
            const s = Math.sin(t / 1100 - i * 0.55);
            tw = 100 + 9 * s;
            tg = 820 + 80 * s;
          }
          const c = cur[i];
          c.w += (tw - c.w) * 0.1;
          c.g += (tg - c.g) * 0.1;
          el.style.setProperty("--w", c.w.toFixed(1));
          el.style.setProperty("--g", c.g.toFixed(0));
        });
      }
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => (mx = e.clientX);
    const onLeave = () => (mx = null);
    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") mx = null;
    };
    word.addEventListener("pointermove", onMove);
    word.addEventListener("pointerleave", onLeave);
    word.addEventListener("pointerup", onUp);
    word.addEventListener("pointercancel", onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      word.removeEventListener("pointermove", onMove);
      word.removeEventListener("pointerleave", onLeave);
      word.removeEventListener("pointerup", onUp);
      word.removeEventListener("pointercancel", onLeave);
      letters.forEach((el) => {
        el.style.removeProperty("--w");
        el.style.removeProperty("--g");
      });
    };
  }, [reduce, text]);

  return (
    <div
      ref={wordRef}
      className={reduce ? "ps-word static" : "ps-word"}
      role="img"
      aria-label={text}
    >
      {chars.map((ch, i) =>
        ch === " " ? (
          <span key={i} className="sp" aria-hidden="true" />
        ) : (
          <span key={i} aria-hidden="true">
            {ch}
          </span>
        ),
      )}
    </div>
  );
}
