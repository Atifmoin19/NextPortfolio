import { useRef } from "react";
import type { ReactNode, PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

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
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  if (reduce) return <>{children}</>;

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(relX, relY);
    if (dist > range) return;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY, display: "inline-flex" }}
    >
      {children}
    </motion.div>
  );
}
