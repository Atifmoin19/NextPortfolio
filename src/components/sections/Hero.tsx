import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { Box, Container, Text, HStack, VStack, Icon, Button, Grid, Link } from "@chakra-ui/react";
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaClock,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa6";
import Magnetic from "../shared/Magnetic";

const SOCIAL_ICONS: Record<string, typeof FaGithub> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Portfolio: FaGlobe,
};

function yearsSince(duration: string) {
  const match = duration.match(/\d{4}/);
  if (!match) return 1;
  return Math.max(1, new Date().getFullYear() - parseInt(match[0], 10));
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

  const yearsExperience = portfolioData.experience[0]
    ? yearsSince(portfolioData.experience[0].duration)
    : 1;

  const taglineWords = portfolioData.hero.tagline.trim().split(/\s+/);
  const taglineLines =
    taglineWords.length > 1
      ? [taglineWords.slice(0, -1).join(" "), taglineWords.slice(-1).join(" ")]
      : taglineWords;

  const statCards = [
    { className: "bento-mint", value: `${yearsExperience}+`, label: "Years experience", icon: FaClock },
    { className: "bento-lavender", value: `${portfolioData.projects.length}+`, label: "Projects shipped", icon: FaLayerGroup },
    { className: "bento-black", value: `${portfolioData.skills.length}+`, label: "Technologies", icon: FaCode },
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
              "radial-gradient(circle, rgba(155, 147, 242, 0.35) 0%, rgba(243, 165, 61, 0.18) 55%, transparent 75%)",
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />
      )}
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack align="start" spacing={6} maxW="900px">
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text fontFamily="var(--font-script)" fontSize="3xl" color="var(--ink-muted)" lineHeight="1" transform="rotate(-3deg)" display="inline-block">
              {portfolioData.hero.name}
            </Text>
          </motion.div>

          <VStack align="start" spacing={0} w="full">
            {taglineLines.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Text
                  fontFamily="var(--font-display)"
                  fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                  fontWeight="800"
                  lineHeight="0.88"
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
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text fontSize={{ base: "lg", md: "xl" }} color="var(--ink-soft)" lineHeight="1.6" maxW="560px">
              {portfolioData.hero.description}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
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
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
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
                  _hover={{ bg: "var(--paper-raised)", borderColor: "var(--ink)" }}
                  _active={{ transform: "scale(0.97)" }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {portfolioData.hero.secondaryAction}
                </Button>
              </Magnetic>
            </HStack>
          </motion.div>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
          gap={5}
          w="full"
          mt={{ base: 12, md: 16 }}
        >
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: "100%" }}
            >
              <Box
                className={card.className}
                position="relative"
                borderRadius="var(--radius-bento)"
                p={6}
                h="full"
                minH="140px"
                transition="transform 0.25s ease"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Text fontFamily="var(--font-mono)" fontSize="3xl" fontWeight="600">
                  {card.value}
                </Text>
                <Text fontSize="sm" fontWeight="600" mt={1}>
                  {card.label}
                </Text>
                <Icon as={card.icon} position="absolute" top={5} right={5} boxSize={4} opacity={0.4} />
              </Box>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.79, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: "100%" }}
          >
            <Box
              as="a"
              href="#contact"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bento-orange"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              borderRadius="var(--radius-bento)"
              p={6}
              h="full"
              minH="140px"
              transition="transform 0.25s ease"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Text fontSize="sm" fontWeight="700">
                Let&apos;s talk
              </Text>
              <Icon as={FaArrowUpRightFromSquare} boxSize={5} />
            </Box>
          </motion.div>
        </Grid>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <HStack spacing={5} pt={8}>
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
                  color="var(--ink-muted)"
                  _hover={{ color: "var(--ink)" }}
                  transition="color 0.2s ease"
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
              color="var(--ink-muted)"
              fontSize="sm"
              _hover={{ color: "var(--ink)" }}
            >
              <Icon as={FaDownload} boxSize={3.5} />
              Resume
            </Link>
          </HStack>
        </motion.div>
      </Container>
    </Box>
  );
}
