import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Phase = "writing" | "waiting" | "flying" | "gone";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const TARGET_POLL_TIMEOUT_MS = 2000;

/**
 * Writes the signature centered on screen, then - once the real page data is ready and
 * a landing spot exists at #hero-signature-target - measures that target's actual DOM
 * rect and animates an explicit x/y/scale transform onto it. This is deterministic
 * (a plain getBoundingClientRect + computed transform) rather than relying on Framer's
 * automatic layoutId matching across separate component trees, which proved unreliable
 * under StrictMode's double-invoke plus Suspense-lazy mount timing.
 *
 * This is a one-time, non-repeating, modest-amplitude entrance flourish (not a looping
 * or parallax effect), so it intentionally always plays at full speed rather than
 * fast-forwarding under prefers-reduced-motion.
 */
export default function Preloader({
  ready,
  onDone,
  onFlyStart,
}: {
  ready: boolean;
  onDone: () => void;
  onFlyStart?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("writing");
  const [flyTo, setFlyTo] = useState<{ x: number; y: number; scale: number } | null>(null);
  const [fontsReady, setFontsReady] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Without this, the signature can start its write-in using a fallback
    // system font (Caveat/Bricolage still downloading) and visibly swap
    // fonts mid-animation - wait until fonts are actually active first.
    if (typeof document === "undefined" || !("fonts" in document)) {
      setFontsReady(true);
      return;
    }
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) setFontsReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (phase !== "waiting" || !ready) return;

    let cancelled = false;
    let frame: number;
    const startedAt = performance.now();

    const tryMeasure = () => {
      if (cancelled) return;
      const target = document.getElementById("hero-signature-target");
      const source = textRef.current;

      if (target && source) {
        const targetRect = target.getBoundingClientRect();
        const sourceRect = source.getBoundingClientRect();
        const scale = targetRect.height / sourceRect.height;
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;
        const sourceCenterX = sourceRect.left + sourceRect.width / 2;
        const sourceCenterY = sourceRect.top + sourceRect.height / 2;

        setFlyTo({
          x: targetCenterX - sourceCenterX,
          y: targetCenterY - sourceCenterY,
          scale,
        });
        setPhase("flying");
        onFlyStart?.();
        return;
      }

      // Hero's Suspense boundary may not have swapped its real content in yet even
      // though the data is ready - keep polling a couple of frames rather than
      // giving up instantly (which used to just vanish with no travel animation).
      if (performance.now() - startedAt > TARGET_POLL_TIMEOUT_MS) {
        setPhase("gone");
        onDone();
        return;
      }
      frame = requestAnimationFrame(tryMeasure);
    };

    frame = requestAnimationFrame(tryMeasure);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [phase, ready, onDone, onFlyStart]);

  if (phase === "gone") return null;

  const flying = phase === "flying" && flyTo;

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "flying" ? 0 : 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: phase === "flying" ? 0.15 : 0 }}
        style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "#fdfdfc", pointerEvents: "none" }}
      />

      {fontsReady && (
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)", x: 0, y: 0, scale: 1 }}
          animate={
            flying
              ? { opacity: 1, clipPath: "inset(0 0% 0 0)", x: flyTo.x, y: flyTo.y, scale: flyTo.scale }
              : { opacity: 1, clipPath: "inset(0 0% 0 0)", x: 0, y: 0, scale: 1 }
          }
          transition={
            phase === "flying"
              ? { duration: 0.9, ease: EASE_OUT }
              : {
                  opacity: { duration: 0.3 },
                  clipPath: { duration: 1.3, ease: [0.65, 0, 0.35, 1] },
                }
          }
          onAnimationComplete={() => {
            if (phase === "writing") {
              window.setTimeout(() => setPhase("waiting"), 350);
            } else if (phase === "flying") {
              setPhase("gone");
              onDone();
            }
          }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
            zIndex: 10000,
            pointerEvents: "none",
          }}
        >
          <span
            ref={textRef}
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(2.75rem, 9vw, 5.5rem)",
              color: "var(--ink-muted)",
              lineHeight: 1,
              display: "inline-block",
            }}
          >
            Atif Moin
          </span>
        </motion.div>
      )}
    </>
  );
}
