import { useRef } from "react";
import type { ReactNode, PointerEvent } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useReducedMotion } from "../../lib/motionPreference";
import { useLerpMotionValue } from "../../hooks/useLerpMotionValue";

export default function Magnetic({
  children,
  strength = 0.35,
  range = 60,
}: {
  children: ReactNode;
  strength?: number;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useLerpMotionValue(x, 0.14);
  const smoothY = useLerpMotionValue(y, 0.14);

  if (reduce) return <>{children}</>;

  const handlePointerEnter = () => {
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !rectRef.current) return;
    const rect = rectRef.current;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(relX, relY);
    if (dist > range) return;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handlePointerLeave = () => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: smoothX, y: smoothY, display: "inline-flex" }}
    >
      {children}
    </motion.div>
  );
}
