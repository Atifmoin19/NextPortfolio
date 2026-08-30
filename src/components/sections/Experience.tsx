import { useRef } from "react";
import { Box, Container, Text, VStack, HStack, Grid, Wrap, WrapItem } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const PANEL_CLASSES = ["bento-lavender", "bento-mint", "bento-orange", "bento-black"];

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

          <VStack w="full" spacing={6}>
            {portfolioData.experience.map((job, index) => {
              const bullets = splitIntoBullets(job.description);
              const relevantTags = portfolioData.skills
                .map((s) => s.name)
                .filter((name) => job.description.toLowerCase().includes(name.toLowerCase()));
              const panelClass = PANEL_CLASSES[index % PANEL_CLASSES.length];

              return (
                <motion.div
                  key={`${job.company}-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: "100%" }}
                >
                  <Box
                    bg="var(--paper-raised)"
                    border="1px solid var(--line)"
                    borderRadius="var(--radius-bento)"
                    overflow="hidden"
                  >
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1.6fr" }}>
                      <Box
                        className={panelClass}
                        position="relative"
                        overflow="hidden"
                        p={{ base: 6, md: 8 }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        minH={{ base: "auto", md: "220px" }}
                      >
                        <Text
                          position="absolute"
                          right={-2}
                          bottom={-10}
                          fontFamily="var(--font-display)"
                          fontWeight="800"
                          fontSize="9xl"
                          opacity={0.12}
                          lineHeight="1"
                          userSelect="none"
                        >
                          {job.company.charAt(0)}
                        </Text>
                        <VStack align="start" spacing={1} position="relative">
                          <Text fontFamily="var(--font-display)" fontWeight="800" fontSize={{ base: "2xl", md: "3xl" }}>
                            {job.company}
                          </Text>
                          <Text fontSize="sm" fontWeight="700" opacity={0.75}>
                            {job.role}
                          </Text>
                        </VStack>
                        <Text className="label-mono" opacity={0.65} position="relative">
                          {job.duration}
                        </Text>
                      </Box>

                      <Box p={{ base: 6, md: 8 }}>
                        <VStack align="start" spacing={3} mb={bullets.length ? 6 : 0}>
                          {bullets.map((bullet, j) => (
                            <HStack key={j} align="flex-start" spacing={3}>
                              <Box mt="9px" w="4px" h="4px" borderRadius="full" bg="var(--ink)" opacity={0.4} flexShrink={0} />
                              <Text fontSize="md" lineHeight="1.7" color="var(--ink-soft)">
                                {bullet}.
                              </Text>
                            </HStack>
                          ))}
                        </VStack>

                        {relevantTags.length > 0 && (
                          <Wrap spacing={2}>
                            {relevantTags.map((tag) => (
                              <WrapItem key={tag}>
                                <Box
                                  px={3}
                                  py={1}
                                  borderRadius="full"
                                  fontSize="xs"
                                  fontWeight="700"
                                  bg="var(--paper)"
                                  border="1px solid var(--line)"
                                  color="var(--ink-soft)"
                                >
                                  {tag}
                                </Box>
                              </WrapItem>
                            ))}
                          </Wrap>
                        )}
                      </Box>
                    </Grid>
                  </Box>
                </motion.div>
              );
            })}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
