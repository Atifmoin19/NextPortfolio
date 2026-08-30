import { useRef } from "react";
import { Box, Container, Text, VStack, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

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
        <VStack align="start" spacing={12} w="full">
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

          <Box position="relative" w="full">
            <Box
              position="absolute"
              left={0}
              top="14px"
              bottom="6px"
              w="1px"
              bg="var(--line-strong)"
              transform="translateX(-50%)"
            />

            <VStack align="stretch" spacing={10} w="full">
              {portfolioData.experience.map((job, index) => {
                const bullets = splitIntoBullets(job.description);
                const relevantTags = portfolioData.skills
                  .map((s) => s.name)
                  .filter((name) => job.description.toLowerCase().includes(name.toLowerCase()));
                const isCurrent = index === 0;

                return (
                  <motion.div
                    key={`${job.role}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Box position="relative" pl={{ base: 6, md: 8 }}>
                      <Box
                        position="absolute"
                        left={0}
                        top="8px"
                        w={{ base: "11px", md: "15px" }}
                        h={{ base: "11px", md: "15px" }}
                        borderRadius="full"
                        bg={isCurrent ? "var(--accent)" : "var(--paper)"}
                        border={isCurrent ? "none" : "2px solid var(--line-strong)"}
                        transform="translateX(-50%)"
                      />

                      <HStack justify="space-between" align="baseline" flexWrap="wrap" gap={2} mb={2}>
                        <HStack spacing={3} flexWrap="wrap">
                          <Text fontFamily="var(--font-display)" fontWeight="800" fontSize={{ base: "xl", md: "2xl" }} color="var(--ink)">
                            {job.role}
                          </Text>
                          {isCurrent && (
                            <Box px={2} py="2px" borderRadius="full" bg="var(--accent-soft)" border="1px solid var(--accent-border)">
                              <Text className="label-mono" color="var(--accent-strong)" fontSize="10px">
                                Current
                              </Text>
                            </Box>
                          )}
                        </HStack>
                        <Text className="label-mono" color="var(--ink-muted)">
                          {job.duration}
                        </Text>
                      </HStack>

                      <Text fontSize="sm" fontWeight="600" color="var(--accent)" mb={4}>
                        {job.company}
                      </Text>

                      <VStack align="start" spacing={2} mb={relevantTags.length ? 4 : 0}>
                        {bullets.map((bullet, j) => (
                          <HStack key={j} align="flex-start" spacing={3}>
                            <Box mt="9px" w="4px" h="4px" borderRadius="full" bg="var(--ink-muted)" flexShrink={0} />
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
                              <Box px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="600" bg="var(--paper-raised)" border="1px solid var(--line)" color="var(--ink-soft)">
                                {tag}
                              </Box>
                            </WrapItem>
                          ))}
                        </Wrap>
                      )}
                    </Box>
                  </motion.div>
                );
              })}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
