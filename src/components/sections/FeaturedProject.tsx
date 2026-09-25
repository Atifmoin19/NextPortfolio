import { useEffect, useRef, useState } from "react";
import { Box, Grid, HStack, Icon, Text, VStack, Wrap, WrapItem, Link as ChakraLink, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCode,
  FaGithub,
  FaImage,
  FaPlay,
  FaServer,
  FaShieldHalved,
  FaCity,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { useReducedMotion } from "../../lib/motionPreference";
import { slugify } from "../../utils/slugify";
import { backendCity as project } from "../../data/featured";
import Magnetic from "../shared/Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;
const PROOF_ICONS: IconType[] = [FaCode, FaShieldHalved, FaCity];
const CYCLE_MS = 3800;

/**
 * Flagship showcase: a black bento with the pitch on the left and a browser window on the
 * right that cycles real screenshots, or loads the live app on demand (never on page load:
 * it's a full three.js scene and would slow the portfolio down).
 */
export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, ease }}
      style={{ width: "100%" }}
    >
      <Box
        className="bento-black"
        position="relative"
        borderRadius="var(--radius-bento)"
        overflow="hidden"
        p={{ base: 5, md: 8, lg: 10 }}
      >
        {/* Backend City's own night glow, bleeding in from behind the preview */}
        <Box
          aria-hidden
          position="absolute"
          right="-10%"
          top="-30%"
          w="70%"
          h="130%"
          pointerEvents="none"
          style={{
            background:
              "radial-gradient(closest-side, rgba(62,230,255,0.18), transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(178,124,255,0.18), transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        <Grid
          position="relative"
          templateColumns={{ base: "1fr", lg: "minmax(0, 0.9fr) minmax(0, 1.25fr)" }}
          gap={{ base: 8, lg: 12 }}
          alignItems="center"
        >
          <Pitch />
          <Preview />
        </Grid>
      </Box>
    </motion.div>
  );
}

function Pitch() {
  return (
    <VStack align="start" spacing={6} minW={0}>
      <HStack spacing={3} flexWrap="wrap">
        <Text className="label-mono" opacity={0.7}>
          Featured build
        </Text>
        <HStack
          spacing={2}
          px={2.5}
          py={1}
          borderRadius="full"
          bg="rgba(77,255,154,0.12)"
          border="1px solid rgba(77,255,154,0.35)"
        >
          <Box as="span" position="relative" w="8px" h="8px">
            <Box as="span" className="fp-ping" position="absolute" inset={0} borderRadius="full" bg="#4dff9a" />
            <Box as="span" position="absolute" inset={0} borderRadius="full" bg="#4dff9a" />
          </Box>
          <Text fontSize="xs" fontWeight="700" color="#8dffbf" letterSpacing="0.04em">
            LIVE
          </Text>
        </HStack>
      </HStack>

      <VStack align="start" spacing={3}>
        <Text
          as="h3"
          fontFamily="var(--font-display)"
          fontWeight="800"
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight="0.95"
          letterSpacing="-0.035em"
        >
          Backend City
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} opacity={0.82} lineHeight="1.6" maxW="52ch">
          {project.tagline}
        </Text>
      </VStack>

      <VStack as="ul" align="stretch" spacing={4} listStyleType="none" w="full">
        {project.proof.map((p, i) => (
          <HStack as="li" key={p.title} align="start" spacing={3}>
            <Box
              flexShrink={0}
              w="34px"
              h="34px"
              borderRadius="10px"
              display="grid"
              placeItems="center"
              bg="rgba(255,255,255,0.08)"
              border="1px solid rgba(255,255,255,0.12)"
              color="#7ff0ff"
            >
              <Icon as={PROOF_ICONS[i] ?? FaServer} boxSize={3.5} />
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="sm">
                {p.title}
              </Text>
              <Text fontSize="sm" opacity={0.7} lineHeight="1.55">
                {p.body}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>

      <Wrap spacing={2}>
        {(project.stack ?? []).map((t) => (
          <WrapItem key={t}>
            <Text
              fontFamily="var(--font-mono)"
              fontSize="xs"
              px={2.5}
              py={1}
              borderRadius="full"
              border="1px solid rgba(255,255,255,0.16)"
              opacity={0.85}
            >
              {t}
            </Text>
          </WrapItem>
        ))}
      </Wrap>

      <HStack spacing={3} flexWrap="wrap" rowGap={3}>
        <Magnetic>
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            h="52px"
            px={7}
            borderRadius="full"
            bg="var(--orange)"
            color="var(--orange-ink)"
            fontWeight="700"
            _hover={{ bg: "var(--accent-strong)" }}
            _active={{ transform: "scale(0.97)" }}
            rightIcon={<Icon as={FaArrowUpRightFromSquare} boxSize={3.5} />}
          >
            Play it live
          </Button>
        </Magnetic>
        <Magnetic>
          <Button
            as={RouterLink}
            to={`/project/${slugify(project.projectName)}`}
            h="52px"
            px={6}
            borderRadius="full"
            variant="outline"
            borderColor="rgba(255,255,255,0.28)"
            color="var(--black-card-ink)"
            fontWeight="700"
            _hover={{ bg: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.6)" }}
            rightIcon={<Icon as={FaArrowRight} boxSize={3.5} />}
          >
            Case study
          </Button>
        </Magnetic>
        {project.repos.map((r) => (
          <ChakraLink
            key={r.url}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            gap={2}
            h="52px"
            px={3}
            fontSize="sm"
            fontWeight="600"
            opacity={0.8}
            _hover={{ opacity: 1, textDecoration: "none" }}
            aria-label={`${r.label} source on GitHub`}
          >
            <Icon as={FaGithub} boxSize={4} /> {r.label}
          </ChakraLink>
        ))}
      </HStack>
    </VStack>
  );
}

/** Browser window: screenshot tour by default, the real running app on request. */
function Preview() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<"screens" | "live">("screens");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [liveLoaded, setLiveLoaded] = useState(false);
  const host = new URL(project.liveUrl).host;

  useEffect(() => {
    if (reduce || paused || mode !== "screens") return;
    const t = setInterval(() => setIndex((i) => (i + 1) % project.screens.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [reduce, paused, mode]);

  const screen = project.screens[index]!;

  return (
    <Box minW={0} style={{ perspective: "1400px" }}>
      <motion.div
        initial={false}
        whileHover={reduce ? undefined : { rotateY: -2, rotateX: 1.5 }}
        transition={{ duration: 0.6, ease }}
        style={{ transformStyle: "preserve-3d" }}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        <Box
          borderRadius="18px"
          overflow="hidden"
          bg="#0e1630"
          border="1px solid rgba(255,255,255,0.14)"
          boxShadow="0 40px 80px -30px rgba(0,0,0,0.75), 0 0 0 1px rgba(62,230,255,0.12), 0 0 60px -20px rgba(62,230,255,0.35)"
        >
          {/* window chrome */}
          <HStack px={4} h="44px" spacing={3} bg="rgba(255,255,255,0.05)" borderBottom="1px solid rgba(255,255,255,0.08)">
            <HStack spacing={1.5} aria-hidden>
              <Box w="10px" h="10px" borderRadius="full" bg="#ff5f57" />
              <Box w="10px" h="10px" borderRadius="full" bg="#febc2e" />
              <Box w="10px" h="10px" borderRadius="full" bg="#28c840" />
            </HStack>
            <HStack
              flex={1}
              minW={0}
              h="26px"
              px={3}
              borderRadius="8px"
              bg="rgba(0,0,0,0.35)"
              fontFamily="var(--font-mono)"
              fontSize="xs"
              opacity={0.75}
              spacing={2}
            >
              <Icon as={FaShieldHalved} boxSize={2.5} color="#4dff9a" />
              <Text isTruncated>{host}</Text>
            </HStack>
            <ModeToggle mode={mode} onChange={setMode} />
          </HStack>

          {/* viewport */}
          <Box position="relative" style={{ aspectRatio: "16 / 10" }} bg="#0b1124">
            {mode === "screens" ? (
              <AnimatePresence initial={false} mode="sync">
                <motion.img
                  key={screen.src}
                  src={screen.src}
                  alt={`Backend City: ${screen.label}`}
                  loading="lazy"
                  decoding="async"
                  initial={reduce ? false : { opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left" }}
                />
              </AnimatePresence>
            ) : (
              <>
                {!liveLoaded ? (
                  <VStack position="absolute" inset={0} justify="center" spacing={3} color="rgba(255,255,255,0.8)">
                    <Box className="fp-spin" w="28px" h="28px" borderRadius="full" border="2px solid rgba(62,230,255,0.25)" borderTopColor="#3ee6ff" />
                    <Text fontSize="sm">Booting the real city (three.js, first load ~5 s)…</Text>
                  </VStack>
                ) : null}
                <iframe
                  title="Backend City, live"
                  src={project.liveUrl}
                  onLoad={() => setLiveLoaded(true)}
                  loading="lazy"
                  allow="autoplay"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, opacity: liveLoaded ? 1 : 0, transition: "opacity 0.6s" }}
                />
              </>
            )}
          </Box>
        </Box>
      </motion.div>

      {/* screen picker / live hint */}
      {mode === "screens" ? (
        <HStack mt={4} spacing={2} flexWrap="wrap" rowGap={2} role="tablist" aria-label="Backend City screens">
          {project.screens.map((s, i) => {
            const on = i === index;
            return (
              <Box
                as="button"
                key={s.src}
                role="tab"
                aria-selected={on}
                onClick={() => setIndex(i)}
                px={3}
                py={1.5}
                borderRadius="full"
                fontSize="xs"
                fontWeight="600"
                border="1px solid"
                borderColor={on ? "rgba(62,230,255,0.6)" : "rgba(255,255,255,0.14)"}
                bg={on ? "rgba(62,230,255,0.12)" : "transparent"}
                color={on ? "#9ff4ff" : "inherit"}
                opacity={on ? 1 : 0.7}
                transition="all 0.2s var(--ease-out)"
                _hover={{ opacity: 1 }}
              >
                {s.label}
              </Box>
            );
          })}
        </HStack>
      ) : (
        <Text mt={4} fontSize="xs" opacity={0.6}>
          This is the deployed app running inside the frame. To sign up and play, open it in its own tab with{" "}
          <b>Play it live</b>.
        </Text>
      )}
    </Box>
  );
}

function ModeToggle({ mode, onChange }: { mode: "screens" | "live"; onChange: (m: "screens" | "live") => void }) {
  const items: { key: "screens" | "live"; label: string; icon: IconType }[] = [
    { key: "screens", label: "Tour", icon: FaImage },
    { key: "live", label: "Live", icon: FaPlay },
  ];
  return (
    <HStack spacing={0.5} p={0.5} borderRadius="9px" bg="rgba(0,0,0,0.35)" role="radiogroup" aria-label="Preview mode">
      {items.map((it) => {
        const on = it.key === mode;
        return (
          <Box
            as="button"
            key={it.key}
            role="radio"
            aria-checked={on}
            onClick={() => onChange(it.key)}
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            h="24px"
            px={2.5}
            borderRadius="7px"
            fontSize="xs"
            fontWeight="700"
            bg={on ? "rgba(255,255,255,0.14)" : "transparent"}
            color={on ? "#fff" : "rgba(255,255,255,0.65)"}
            transition="all 0.2s var(--ease-out)"
          >
            <Icon as={it.icon} boxSize={2.5} color={on && it.key === "live" ? "#4dff9a" : undefined} />
            {it.label}
          </Box>
        );
      })}
    </HStack>
  );
}
