import { useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container, Text, VStack, HStack, Wrap, WrapItem, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import type { RootState } from "../store";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingBackground from "../components/layout/FloatingBackground";
import ScrollProgress from "../components/layout/ScrollProgress";
import { slugify } from "../utils/slugify";
import { backendCity } from "../data/featured";

const CARD_CLASSES = ["bento-mint", "bento-lavender", "bento-orange", "bento-black"];

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const loading = useSelector((state: RootState) => state.portfolio.loading);

  const index = portfolioData?.projects.findIndex((p) => slugify(p.projectName) === slug) ?? -1;
  // The featured build lives in code, so its case study works even if the CMS doesn't list it
  const featured = slug === slugify(backendCity.projectName) ? backendCity : null;
  const project = index >= 0 ? portfolioData!.projects[index] : featured;
  const className = featured && index < 0 ? "bento-black" : index >= 0 ? CARD_CLASSES[index % CARD_CLASSES.length] : "bento-mint";

  useEffect(() => {
    document.title = project
      ? `${project.projectName} | Atif Moin`
      : "Atif Moin";
  }, [project]);

  if (!portfolioData && loading && !featured) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Text color="var(--ink-muted)">Loading...</Text>
      </Box>
    );
  }

  if (!project) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" px={6}>
        <VStack spacing={4}>
          <Text fontFamily="var(--font-display)" fontWeight="800" fontSize="3xl">
            Project not found
          </Text>
          <ChakraLink as={RouterLink} to="/" color="var(--ink-soft)" _hover={{ color: "var(--ink)" }}>
            &larr; Back to portfolio
          </ChakraLink>
        </VStack>
      </Box>
    );
  }

  const stack = (project as { stack?: string[] }).stack ?? [];
  const highlights = (project as { highlights?: string[] }).highlights ?? [];
  const problem = (project as { problem?: string }).problem ?? "";
  const approach = (project as { approach?: string }).approach ?? "";
  const gallery =
    (project as { gallery?: { src: string; label: string; caption: string }[] }).gallery ?? [];

  return (
    <>
      <FloatingBackground />
      <ScrollProgress />
      <Navbar />
      <Box as="main" pt={{ base: "120px", md: "160px" }} pb={20} px={{ base: 6, md: 12, lg: 24 }}>
        <Container maxW="container.lg">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <ChakraLink
              as={RouterLink}
              to="/"
              display="inline-flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
              fontWeight="600"
              color="var(--ink-soft)"
              _hover={{ color: "var(--ink)" }}
              mb={8}
            >
              <Icon as={FaArrowLeft} boxSize={3} />
              Back to portfolio
            </ChakraLink>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <Box className={className} borderRadius="var(--radius-bento)" p={{ base: 6, md: 10 }} mb={10}>
              <Text className="label-mono" opacity={0.7} mb={3}>
                {project.projectType}
              </Text>
              <Text fontFamily="var(--font-display)" fontWeight="800" fontSize={{ base: "4xl", md: "6xl" }} letterSpacing="-0.03em" mb={6}>
                {project.projectName}
              </Text>

              {stack.length > 0 && (
                <Wrap spacing={2} mb={project.link.code || project.link.project ? 6 : 0}>
                  {stack.map((tech) => (
                    <WrapItem key={tech}>
                      <Box px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="700" bg="rgba(255,255,255,0.35)">
                        {tech}
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>
              )}

              {(project.link.code || project.link.project) && (
                <HStack spacing={4}>
                  {project.link.project && (
                    <ChakraLink
                      href={project.link.project}
                      target="_blank"
                      rel="noopener noreferrer"
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      fontSize="sm"
                      fontWeight="700"
                    >
                      View live
                      <Icon as={FaArrowUpRightFromSquare} boxSize={3} />
                    </ChakraLink>
                  )}
                  {project.link.code && (
                    <ChakraLink
                      href={project.link.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      fontSize="sm"
                      fontWeight="700"
                    >
                      <Icon as={FaGithub} boxSize={4} />
                      Source
                    </ChakraLink>
                  )}
                </HStack>
              )}
            </Box>
          </motion.div>

          {gallery.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}>
              <Box as="section" aria-label="Screens" mb={12}>
                <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={5}>
                  {gallery.map((g, i) => (
                    <Box as="figure" key={g.src} gridColumn={i === 0 ? { md: "span 2" } : undefined} m={0}>
                      <ChakraLink
                        href={g.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        display="block"
                        borderRadius="var(--radius-md)"
                        overflow="hidden"
                        border="1px solid var(--line)"
                        bg="#0b1124"
                        boxShadow="0 24px 48px -28px rgba(22,20,15,0.45)"
                        transition="transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out)"
                        _hover={{ transform: "translateY(-3px)", boxShadow: "0 30px 56px -28px rgba(22,20,15,0.55)" }}
                        aria-label={`Open full-size screenshot: ${g.label}`}
                      >
                        <img
                          src={g.src}
                          alt={`${project.projectName}: ${g.label}`}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                          style={{ display: "block", width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top left" }}
                        />
                      </ChakraLink>
                      <Box as="figcaption" mt={3}>
                        <Text fontWeight="700" fontSize="sm" color="var(--ink)">{g.label}</Text>
                        <Text fontSize="sm" color="var(--ink-soft)" lineHeight="1.6">{g.caption}</Text>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          )}

          <VStack align="start" spacing={10} w="full">
            {problem && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ width: "100%" }}>
                <VStack align="start" spacing={3}>
                  <Text className="label-mono" color="var(--ink-muted)">Problem</Text>
                  <Text fontSize="lg" color="var(--ink-soft)" lineHeight="1.7">{problem}</Text>
                </VStack>
              </motion.div>
            )}

            {approach && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }} style={{ width: "100%" }}>
                <VStack align="start" spacing={3}>
                  <Text className="label-mono" color="var(--ink-muted)">Approach</Text>
                  <Text fontSize="lg" color="var(--ink-soft)" lineHeight="1.7">{approach}</Text>
                </VStack>
              </motion.div>
            )}

            {highlights.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }} style={{ width: "100%" }}>
                <VStack align="start" spacing={3} w="full">
                  <Text className="label-mono" color="var(--ink-muted)">Highlights</Text>
                  <VStack align="start" spacing={3} w="full">
                    {highlights.map((h, i) => (
                      <HStack key={i} align="flex-start" spacing={3}>
                        <Box mt="9px" w="4px" h="4px" borderRadius="full" bg="var(--accent)" flexShrink={0} />
                        <Text fontSize="md" color="var(--ink-soft)" lineHeight="1.7">{h}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </motion.div>
            )}
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
