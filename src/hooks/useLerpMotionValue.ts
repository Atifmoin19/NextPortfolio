import { useEffect, useRef } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

/**
 * Chases `source` with exponential smoothing (a damped lerp) instead of spring
 * physics - no overshoot/bounce, just a smooth, decelerating follow. The rAF
 * loop only runs while the value is actually settling, not continuously.
 */
export function useLerpMotionValue(source: MotionValue<number>, factor = 0.15) {
  const output = useMotionValue(source.get());
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const step = () => {
      const target = source.get();
      const current = output.get();
      const diff = target - current;
      if (Math.abs(diff) < 0.01) {
        output.set(target);
        frameRef.current = null;
        return;
      }
      output.set(current + diff * factor);
      frameRef.current = requestAnimationFrame(step);
    };

    const unsubscribe = source.on("change", () => {
      if (frameRef.current == null) {
        frameRef.current = requestAnimationFrame(step);
      }
    });

    return () => {
      unsubscribe();
      if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
    };
  }, [source, output, factor]);

  return output;
}
