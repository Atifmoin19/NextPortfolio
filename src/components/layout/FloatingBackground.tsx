import { Box } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const BLOBS = [
  { color: "var(--mint)", size: 420, top: "-6%", left: "8%", duration: 26, delay: 0 },
  { color: "var(--lavender)", size: 380, top: "18%", left: "72%", duration: 32, delay: 2 },
  { color: "var(--orange)", size: 340, top: "62%", left: "12%", duration: 28, delay: 4 },
  { color: "var(--lavender)", size: 300, top: "78%", left: "68%", duration: 24, delay: 1 },
];

export default function FloatingBackground() {
  const reduce = useReducedMotion();

  return (
    <Box position="fixed" inset={0} overflow="hidden" pointerEvents="none" zIndex={-1}>
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            background: blob.color,
            opacity: 0.22,
            filter: "blur(70px)",
          }}
          initial={{ scale: 1 }}
          animate={
            reduce
              ? { scale: 1 }
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -30, 20, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
}
