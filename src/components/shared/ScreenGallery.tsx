import { useState, type KeyboardEvent } from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa6";
import { useReducedMotion } from "../../lib/motionPreference";

export interface GalleryShot {
  src: string;
  label: string;
  caption: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

/** One large screenshot with its caption, and a thumbnail strip to switch between shots. */
export default function ScreenGallery({ shots, title }: { shots: GalleryShot[]; title: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const shot = shots[index]!;
  const go = (d: number) => setIndex((i) => (i + d + shots.length) % shots.length);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <Box as="section" aria-label={`${title} screenshots`} onKeyDown={onKey}>
      {/* stage */}
      <Box
        position="relative"
        borderRadius="var(--radius-md)"
        overflow="hidden"
        border="1px solid var(--line)"
        bg="#0b1124"
        boxShadow="0 24px 48px -28px rgba(22,20,15,0.45)"
        style={{ aspectRatio: "16 / 9" }}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={shot.src}
            src={shot.src}
            alt={`${title}: ${shot.label}`}
            decoding="async"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
        </AnimatePresence>

        {shots.length > 1 &&
          ([-1, 1] as const).map((d) => (
            <Box
              as="button"
              key={d}
              onClick={() => go(d)}
              aria-label={d < 0 ? "Previous screenshot" : "Next screenshot"}
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              {...(d < 0 ? { left: 3 } : { right: 3 })}
              w="40px"
              h="40px"
              borderRadius="full"
              display="grid"
              placeItems="center"
              bg="rgba(22,20,15,0.55)"
              color="white"
              backdropFilter="blur(6px)"
              opacity={0.85}
              transition="opacity 0.2s, background 0.2s"
              _hover={{ opacity: 1, bg: "rgba(22,20,15,0.75)" }}
            >
              <Icon as={d < 0 ? FaChevronLeft : FaChevronRight} boxSize={3.5} />
            </Box>
          ))}

        <Box
          as="a"
          href={shot.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${shot.label} full size`}
          position="absolute"
          top={3}
          right={3}
          w="34px"
          h="34px"
          borderRadius="10px"
          display="grid"
          placeItems="center"
          bg="rgba(22,20,15,0.55)"
          color="white"
          _hover={{ bg: "rgba(22,20,15,0.75)" }}
        >
          <Icon as={FaExpand} boxSize={3} />
        </Box>
      </Box>

      {/* caption */}
      <HStack mt={3} justify="space-between" align="baseline" spacing={4}>
        <Box aria-live="polite" minW={0}>
          <Text as="span" fontWeight="700" fontSize="sm" color="var(--ink)">
            {shot.label}
          </Text>
          <Text as="span" fontSize="sm" color="var(--ink-soft)">
            {" "}
            — {shot.caption}
          </Text>
        </Box>
        <Text fontFamily="var(--font-mono)" fontSize="xs" color="var(--ink-muted)" flexShrink={0}>
          {index + 1} / {shots.length}
        </Text>
      </HStack>

      {/* thumbnails */}
      <HStack mt={4} spacing={3} overflowX="auto" pb={1} role="tablist" aria-label="Choose a screenshot">
        {shots.map((s, i) => {
          const on = i === index;
          return (
            <Box
              as="button"
              key={s.src}
              role="tab"
              aria-selected={on}
              aria-label={s.label}
              onClick={() => setIndex(i)}
              flexShrink={0}
              w={{ base: "96px", md: "132px" }}
              borderRadius="10px"
              overflow="hidden"
              border="2px solid"
              borderColor={on ? "var(--accent)" : "transparent"}
              boxShadow={on ? "0 6px 16px -8px var(--orange-shadow)" : "none"}
              opacity={on ? 1 : 0.6}
              transition="opacity 0.2s var(--ease-out), border-color 0.2s var(--ease-out)"
              _hover={{ opacity: 1 }}
            >
              <img
                src={s.src}
                alt=""
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left" }}
              />
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
}
