import { Fragment, useRef } from "react";
import { Box, Container, Text, VStack, HStack, Grid, Icon, Wrap, WrapItem } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { FaBriefcase } from "react-icons/fa6";

const MAIN_CLASSES = ["bento-lavender", "bento-mint", "bento-orange", "bento-black"];
const ACCENT_CLASSES = ["bento-orange", "bento-black", "bento-lavender", "bento-mint"];

function splitIntoBullets(description: string) {
  return description
    .split(/(?<=[.!])\s+(?=[A-Z])/)
    .map((sentence) => sentence.trim().replace(/\.$/, ""))
    .filter(Boolean);
}

export default function Experience() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!portfolioData) return null;

  return (
    <Box id="experience" py={{ base: 16, md: 24 }} px={{ base: 6, md: 12, lg: 24 }} position="relative">
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
              Where I&apos;ve worked
            </Text>
          </motion.div>

          <Grid templateColumns="repeat(4, 1fr)" gap={5} w="full" autoRows="min-content">
            {portfolioData.experience.map((job, index) => {
              const bullets = splitIntoBullets(job.description);
              const relevantTags = portfolioData.skills
                .map((s) => s.name)
                .filter((name) => job.description.toLowerCase().includes(name.toLowerCase()));
              const mainClass = MAIN_CLASSES[index % MAIN_CLASSES.length];
              const accentClass = ACCENT_CLASSES[index % ACCENT_CLASSES.length];

              return (
                <Fragment key={`${job.company}-${index}`}>
                  <Box gridColumn={{ base: "span 4", md: "span 3" }}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{ height: "100%" }}
                    >
                      <Box className={mainClass} borderRadius="var(--radius-bento)" p={{ base: 6, md: 8 }} h="full">
                        <HStack justify="space-between" align="start" mb={5} flexWrap="wrap" gap={2}>
                          <VStack align="start" spacing={1}>
                            <Text fontFamily="var(--font-display)" fontWeight="800" fontSize={{ base: "xl", md: "2xl" }}>
                              {job.company}
                            </Text>
                            <Text fontSize="sm" fontWeight="700" opacity={0.75}>
                              {job.role}
                            </Text>
                          </VStack>
                          <Text className="label-mono" opacity={0.65}>
                            {job.duration}
                          </Text>
                        </HStack>

                        <VStack align="start" spacing={3} mb={relevantTags.length ? 5 : 0}>
                          {bullets.map((bullet, j) => (
                            <HStack key={j} align="flex-start" spacing={3}>
                              <Box mt="9px" w="4px" h="4px" borderRadius="full" bg="currentColor" opacity={0.5} flexShrink={0} />
                              <Text fontSize="md" lineHeight="1.7" opacity={0.9}>
                                {bullet}.
                              </Text>
                            </HStack>
                          ))}
                        </VStack>

                        {relevantTags.length > 0 && (
                          <Wrap spacing={2}>
                            {relevantTags.map((tag) => (
                              <WrapItem key={tag}>
                                <Box px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="700" bg="rgba(255,255,255,0.35)">
                                  {tag}
                                </Box>
                              </WrapItem>
                            ))}
                          </Wrap>
                        )}
                      </Box>
                    </motion.div>
                  </Box>

                  <Box gridColumn={{ base: "span 4", md: "span 1" }}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.7, delay: index * 0.1 + 0.08, ease: [0.16, 1, 0.3, 1] }}
                      style={{ height: "100%" }}
                    >
                      <Box className={accentClass} position="relative" borderRadius="var(--radius-bento)" p={6} h="full" minH="140px">
                        <Text fontFamily="var(--font-mono)" fontSize="lg" fontWeight="600" lineHeight="1.3">
                          {job.duration}
                        </Text>
                        <Text fontSize="sm" fontWeight="600" mt={1} opacity={0.8}>
                          {index === 0 ? "Current role" : "Tenure"}
                        </Text>
                        <Icon as={FaBriefcase} position="absolute" top={5} right={5} boxSize={4} opacity={0.4} />
                      </Box>
                    </motion.div>
                  </Box>
                </Fragment>
              );
            })}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
