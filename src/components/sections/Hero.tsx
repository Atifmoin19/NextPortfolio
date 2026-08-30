import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Icon,
  Button,
  Grid,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa6";
import Magnetic from "../shared/Magnetic";
import { scrollToId } from "../../lib/smoothScroll";

const SOCIAL_ICONS: Record<string, typeof FaGithub> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Portfolio: FaGlobe,
};

function earliestYear(durations: string[]) {
  const years = durations
    .map((d) => d.match(/\d{4}/)?.[0])
    .filter((y): y is string => Boolean(y))
    .map((y) => parseInt(y, 10));
  return years.length ? Math.min(...years) : new Date().getFullYear();
}

export default function Hero() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const [badgeOpen, setBadgeOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const blobX = useMotionValue(0);
  const blobY = useMotionValue(0);
  const springX = useSpring(blobX, { stiffness: 90, damping: 22 });
  const springY = useSpring(blobY, { stiffness: 90, damping: 22 });

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    blobX.set(e.clientX - rect.left);
    blobY.set(e.clientY - rect.top);
  };

  if (!portfolioData) return null;

  const yearsExperience = Math.max(
    1,
    new Date().getFullYear() -
      earliestYear(portfolioData.experience.map((job) => job.duration)),
  );

  const taglineWords = portfolioData.hero.tagline.trim().split(/\s+/);
  const taglineLines =
    taglineWords.length > 1
      ? [taglineWords.slice(0, -1).join(" "), taglineWords.slice(-1).join(" ")]
      : taglineWords;

  const statCards = [
    { value: `${yearsExperience}+`, label: "Years experience" },
    { value: `${portfolioData.projects.length}+`, label: "Projects shipped" },
    { value: `${portfolioData.skills.length}+`, label: "Technologies" },
  ];

  return (
    <Box
      ref={containerRef}
      onPointerMove={handlePointerMove}
      id="hero"
      pt={{ base: "120px", md: "160px" }}
      pb={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      {/* One ambient gradient (zIndex 0) - the grid pattern (zIndex 1) paints on top of it so the
          lines read crisply over the color instead of the color hiding behind them. */}
      <Box
        aria-hidden
        position="absolute"
        top="-15%"
        right="-10%"
        width={{ base: "420px", md: "620px" }}
        height={{ base: "420px", md: "620px" }}
        pointerEvents="none"
        zIndex={0}
        style={{
          background:
            "radial-gradient(circle, rgba(155, 147, 242, 0.42) 0%, rgba(127, 118, 239, 0.28) 42%, rgba(195, 233, 215, 0.16) 66%, transparent 80%)",
          filter: "blur(45px)",
        }}
      />
      <Box
        aria-hidden
        position="absolute"
        inset={0}
        pointerEvents="none"
        zIndex={1}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(22,20,15,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,20,15,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 92%)",
        }}
      />
      {!reduce && (
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "460px",
            height: "460px",
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(155, 147, 242, 0.35) 0%, rgba(127, 118, 239, 0.16) 55%, transparent 75%)",
            filter: "blur(10px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.4fr 1fr" }}
          gap={{ base: 12, lg: 8 }}
          alignItems="end"
        >
          <VStack align="start" spacing={7} maxW="900px">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                as="button"
                onClick={() => setBadgeOpen((v) => !v)}
                aria-expanded={badgeOpen}
                display="flex"
                alignItems="center"
                gap={3}
                px={4}
                h="40px"
                borderRadius="full"
                bg="var(--paper-raised)"
                border="1px solid var(--line)"
                _hover={{ borderColor: "var(--ink)" }}
                transition="border-color 0.2s ease"
              >
                <Box w="7px" h="7px" borderRadius="full" bg="var(--orange)" />
                <Text className="label-mono" color="var(--ink-soft)">
                  Open for new opportunities
                </Text>
              </Box>
            </motion.div>

            <AnimatePresence initial={false}>
              {badgeOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden", marginTop: "-0.75rem" }}
                >
                  <Text fontSize="sm" color="var(--ink-muted)">
                    Based in India, usually replies within a day.
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Signature reveal: a left-to-right clip-path wipe with an eased, hand-drawn pace -
                reads like the name is being signed rather than just fading in. */}
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{
                opacity: { duration: 0.25, delay: 0.08 },
                clipPath: { duration: 1.1, delay: 0.1, ease: [0.65, 0, 0.35, 1] },
              }}
              style={{ display: "inline-block" }}
            >
              <Text
                fontFamily="var(--font-script)"
                fontSize="3xl"
                color="var(--ink-muted)"
                lineHeight="1"
                transform="rotate(-3deg)"
                display="inline-block"
              >
                {portfolioData.hero.name}
              </Text>
            </motion.div>

            <VStack align="start" spacing={0} w="full" mt={1}>
              {taglineLines.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.16 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Text
                    fontFamily="var(--font-display)"
                    fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                    fontWeight="800"
                    lineHeight="0.95"
                    letterSpacing="-0.04em"
                    color="var(--ink)"
                  >
                    {line}
                  </Text>
                </motion.div>
              ))}
            </VStack>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.36,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="var(--ink-soft)"
                lineHeight="1.6"
                maxW="640px"
              >
                {portfolioData.hero.description}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.48,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <HStack spacing={4} flexWrap="wrap">
                <Magnetic>
                  <Button
                    h="56px"
                    px={8}
                    borderRadius="full"
                    bg="var(--orange)"
                    color="var(--orange-ink)"
                    fontSize="md"
                    fontWeight="700"
                    _hover={{ bg: "var(--accent-strong)" }}
                    _active={{ transform: "scale(0.97)" }}
                    rightIcon={<Icon as={FaArrowRight} />}
                    onClick={() => scrollToId("projects", -88)}
                  >
                    {portfolioData.hero.primaryAction}
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    h="56px"
                    px={8}
                    borderRadius="full"
                    variant="outline"
                    borderColor="var(--line-strong)"
                    color="var(--ink)"
                    fontSize="md"
                    fontWeight="700"
                    _hover={{
                      bg: "var(--paper-raised)",
                      borderColor: "var(--ink)",
                    }}
                    _active={{ transform: "scale(0.97)" }}
                    onClick={() => scrollToId("contact", -88)}
                  >
                    {portfolioData.hero.secondaryAction}
                  </Button>
                </Magnetic>
              </HStack>
            </motion.div>
          </VStack>

          <VStack align={{ base: "start", lg: "end" }} w="full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Box
                bg="rgba(255, 255, 255, 0.78)"
                border="1px solid rgba(255, 255, 255, 0.6)"
                borderRadius="var(--radius-bento)"
                boxShadow="0 12px 32px -16px rgba(22, 20, 15, 0.18)"
                px={{ base: 6, md: 8 }}
                py={{ base: 6, md: 7 }}
                sx={{
                  backdropFilter: "blur(18px) saturate(160%)",
                  WebkitBackdropFilter: "blur(18px) saturate(160%)",
                  transform: "translateZ(0)",
                  willChange: "backdrop-filter",
                }}
              >
                <VStack spacing={{ base: 5, lg: 6 }} w="full">
                  <SimpleGrid columns={{ base: 3, lg: 1 }} spacing={{ base: 2, lg: 6 }} w="full">
                    {statCards.map((stat) => (
                      <VStack
                        key={stat.label}
                        align={{ base: "center", lg: "end" }}
                        spacing={1}
                      >
                        <Text
                          fontSize={{ base: "xs", lg: "sm" }}
                          color="var(--ink-muted)"
                          textAlign={{ base: "center", lg: "right" }}
                          maxW="220px"
                        >
                          {stat.label}
                        </Text>
                        <Text
                          fontFamily="var(--font-mono)"
                          fontSize={{ base: "2xl", lg: "4xl" }}
                          fontWeight="600"
                          color="var(--ink)"
                        >
                          {stat.value}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>

                  <Box w="full" h="1px" bg="var(--line)" />

                  <HStack spacing={3} w="full" justify={{ base: "center", lg: "flex-end" }} flexWrap="wrap">
                    {portfolioData.contact.socials.map((social) => {
                      const IconComponent = SOCIAL_ICONS[social.network];
                      if (!IconComponent) return null;
                      return (
                        <Box
                          key={social.network}
                          as="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.network}
                          w="44px"
                          h="44px"
                          borderRadius="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          bg="rgba(255, 255, 255, 0.5)"
                          color="var(--ink-soft)"
                          _hover={{ bg: "rgba(255, 255, 255, 0.85)", color: "var(--ink)" }}
                          transition="background 0.2s var(--ease-out), color 0.2s var(--ease-out)"
                        >
                          <Icon as={IconComponent} boxSize={5} />
                        </Box>
                      );
                    })}
                    <Link
                      href="/NextPortfolio/atif_Resume.pdf"
                      download
                      display="flex"
                      alignItems="center"
                      gap={2}
                      h="44px"
                      px={5}
                      borderRadius="full"
                      bg="var(--ink)"
                      color="var(--paper)"
                      fontSize="sm"
                      fontWeight="600"
                      _hover={{ bg: "var(--ink-soft)" }}
                      transition="background 0.2s var(--ease-out)"
                    >
                      <Icon as={FaDownload} boxSize={3.5} />
                      Resume
                    </Link>
                  </HStack>
                </VStack>
              </Box>
            </motion.div>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}
