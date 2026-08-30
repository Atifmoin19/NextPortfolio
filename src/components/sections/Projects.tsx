import { useRef } from "react";
import type { ReactNode, PointerEvent } from "react";
import { Box, Container, Text, VStack, Grid, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaRobot,
  FaLayerGroup,
  FaEnvelope,
  FaWandMagicSparkles,
  FaGauge,
  FaMobileScreen,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { slugify } from "../../utils/slugify";

const CARD_CLASSES = ["bento-mint", "bento-lavender", "bento-orange", "bento-black"];

const ICON_KEYWORDS: [string[], IconType][] = [
  [["zenova", "agent", "orchestration"], FaRobot],
  [["component library", "zopper ui", "design system"], FaLayerGroup],
  [["email"], FaEnvelope],
  [["animation", "interesting ui"], FaWandMagicSparkles],
  [["virtual-scroll", "performance", "virtualization"], FaGauge],
  [["pwa", "updater"], FaMobileScreen],
];

function iconFor(project: { projectName: string; projectType: string }) {
  const text = `${project.projectName} ${project.projectType}`.toLowerCase();
  for (const [keywords, icon] of ICON_KEYWORDS) {
    if (keywords.some((k) => text.includes(k))) return icon;
  }
  return FaLayerGroup;
}

function TiltCard({ children, colSpan }: { children: ReactNode; colSpan: { base: number; md: number } }) {
  const reduce = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 250, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 250, damping: 20 });

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(relX * 8);
    rotateX.set(relY * -8);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Box gridColumn={{ base: `span ${colSpan.base}`, md: `span ${colSpan.md}` }} style={{ perspective: "1000px" }}>
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX: springX, rotateY: springY, height: "100%" }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

export default function Projects() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!portfolioData) return null;

  return (
    <Box id="projects" py={{ base: 16, md: 24 }} px={{ base: 6, md: 12, lg: 24 }} position="relative">
      <Container maxW="container.xl">
        <VStack align="start" spacing={10} w="full">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text
              fontFamily="var(--font-display)"
              fontWeight="800"
              fontSize={{ base: "4xl", md: "6xl" }}
              letterSpacing="-0.03em"
              color="var(--ink)"
            >
              Selected work
            </Text>
          </motion.div>

          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={5}
            w="full"
            autoRows="200px"
          >
            {portfolioData.projects.map((project, index) => {
              const isFeature = index % 4 === 0;
              const colSpan = isFeature ? { base: 2, md: 2 } : { base: 2, md: 1 };
              const className = CARD_CLASSES[index % CARD_CLASSES.length];
              const isDark = className === "bento-black";
              const ProjectIcon = iconFor(project);

              return (
                <TiltCard key={project.projectName} colSpan={colSpan}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      className={className}
                      position="relative"
                      h="full"
                      borderRadius="var(--radius-bento)"
                      overflow="hidden"
                      p={5}
                      transition="transform 0.2s ease"
                      _hover={{ transform: "translateY(-3px)" }}
                    >
                      <Icon
                        as={ProjectIcon}
                        boxSize={isFeature ? 10 : 7}
                        opacity={0.5}
                      />

                      <VStack position="absolute" left={5} bottom={5} right={5} align="start" spacing={1}>
                        <Text className="label-mono" opacity={0.7}>
                          {project.projectType}
                        </Text>
                        <Text
                          fontFamily="var(--font-display)"
                          fontWeight="800"
                          fontSize={isFeature ? "2xl" : "lg"}
                          letterSpacing="-0.02em"
                        >
                          {project.projectName}
                        </Text>
                      </VStack>

                      <ChakraLink
                        as={RouterLink}
                        to={`/project/${slugify(project.projectName)}`}
                        aria-label={`Open case study for ${project.projectName}`}
                        position="absolute"
                        inset={0}
                        zIndex={1}
                      />

                      {project.link.code && (
                        <ChakraLink
                          href={project.link.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source for ${project.projectName}`}
                          onClick={(e) => e.stopPropagation()}
                          position="absolute"
                          top={4}
                          right={4}
                          zIndex={2}
                          w="36px"
                          h="36px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="var(--radius-sm)"
                          bg={isDark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)"}
                          _hover={{ bg: isDark ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.8)" }}
                        >
                          <Icon as={FaGithub} boxSize={4} />
                        </ChakraLink>
                      )}

                      <Icon
                        as={FaArrowUpRightFromSquare}
                        position="absolute"
                        top={5}
                        right={project.link.code ? 14 : 5}
                        boxSize={3.5}
                        opacity={0.5}
                      />
                    </Box>
                  </motion.div>
                </TiltCard>
              );
            })}

            <Box gridColumn={{ base: "span 2", md: "span 3" }}>
              <Box
                className="bento-black"
                h="full"
                borderRadius="var(--radius-bento)"
                display="flex"
                alignItems="center"
                gap={4}
                px={6}
              >
                <Text fontFamily="var(--font-mono)" fontSize="4xl" fontWeight="600">
                  {portfolioData.projects.length}
                </Text>
                <Text fontSize="md" fontWeight="600" maxW="240px">
                  Shipped builds and counting
                </Text>
              </Box>
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
