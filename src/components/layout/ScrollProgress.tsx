import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 1100,
        background: "var(--line)",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          transformOrigin: "left",
          scaleX: progress,
          background: "linear-gradient(90deg, var(--mint-deep), var(--lavender), var(--orange))",
        }}
      />
    </div>
  );
}
