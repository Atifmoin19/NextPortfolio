import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { scrollToId } from "../../lib/smoothScroll";

const SECTION_IDS = ["hero", "skills", "experience", "projects", "contact"];

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const THRESHOLDS = Array.from({ length: 11 }, (_, i) => i / 10);
const ELEMENT_POLL_TIMEOUT_MS = 2000;

export default function SectionMinimap() {
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);

  useEffect(() => {
    // Track how much of EACH section is currently on screen and pick whichever
    // is most visible, rather than a single narrow trigger line - that approach
    // missed updates when a section's own height exceeded the viewport.
    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = SECTION_IDS[0];
        let bestRatio = -1;
        for (const id of SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        setActiveId(bestId);
      },
      { threshold: THRESHOLDS },
    );

    // The sections are lazy/Suspense-loaded and may not have swapped their real
    // DOM in yet on this component's first effect run - poll briefly rather
    // than silently observing nothing if getElementById comes back null.
    let cancelled = false;
    let frame: number;
    const startedAt = performance.now();
    const observed = new Set<string>();

    const tryObserve = () => {
      if (cancelled) return;
      for (const id of SECTION_IDS) {
        if (observed.has(id)) continue;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      }
      if (
        observed.size === SECTION_IDS.length ||
        performance.now() - startedAt > ELEMENT_POLL_TIMEOUT_MS
      ) {
        return;
      }
      frame = requestAnimationFrame(tryObserve);
    };

    frame = requestAnimationFrame(tryObserve);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      position="fixed"
      right={{ base: "16px", md: "28px" }}
      top="50%"
      transform="translateY(-50%) translateZ(0)"
      // borderRadius="full"
      py={6}
      px={2}
      zIndex={900}
      display={{ base: "none", md: "flex" }}
      flexDirection="column"
      alignItems="center"
      gap={3}
      sx={{
        // This sits in the page's plain right margin, where there's rarely
        // any colorful content behind it to actually blur - a strong tint
        // does the visual work here, blur is just a secondary touch.
        background: "rgba(22, 20, 15, 0.32)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        boxShadow: "0 8px 24px -12px rgba(22, 20, 15, 0.35)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        // Fully transparent at the top/bottom edges, the tinted blur only
        // shows through in a band around the center where the bars live.
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      {SECTION_IDS.map((id) => {
        const isActive = activeId === id;
        return (
          <Box
            key={id}
            as="button"
            aria-label={`Jump to section ${id}`}
            onClick={() => scrollToId(id, -20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            bg="transparent"
            border="none"
            // p={1}
          >
            <motion.div
              animate={{
                height: isActive ? 5 : 4,
                width: 24,
                opacity: isActive ? 1 : 0.4,
                backgroundColor: isActive ? "#f3a53d" : "#8a8371",
              }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              style={{ width: 24, height: 4, borderRadius: 999 }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
