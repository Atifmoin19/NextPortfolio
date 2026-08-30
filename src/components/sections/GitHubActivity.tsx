import { useRef } from "react";
import { Box, Container, Text, VStack, HStack, Icon, Link, Image } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function githubUsernameFromUrl(url: string) {
  const match = url.match(/github\.com\/([^/]+)/i);
  return match ? match[1] : null;
}

export default function GitHubActivity() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!portfolioData) return null;

  const githubSocial = portfolioData.contact.socials.find((s) => s.network === "GitHub");
  const username = githubSocial ? githubUsernameFromUrl(githubSocial.url) : null;
  if (!username) return null;

  return (
    <Box id="activity" py={{ base: 16, md: 20 }} px={{ base: 6, md: 12, lg: 24 }} position="relative">
      <Container maxW="container.xl">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box bg="var(--paper-raised)" border="1px solid var(--line)" borderRadius="var(--radius-bento)" p={{ base: 6, md: 8 }}>
            <VStack align="start" spacing={6} w="full">
              <HStack justify="space-between" w="full" flexWrap="wrap" gap={3}>
                <HStack spacing={3}>
                  <Icon as={FaGithub} boxSize={5} />
                  <Text fontFamily="var(--font-display)" fontWeight="800" fontSize={{ base: "xl", md: "2xl" }}>
                    Building in public
                  </Text>
                </HStack>
                <Link
                  href={githubSocial!.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontSize="sm"
                  fontWeight="600"
                  color="var(--ink-soft)"
                  _hover={{ color: "var(--ink)" }}
                >
                  @{username}
                  <Icon as={FaArrowUpRightFromSquare} boxSize={3} />
                </Link>
              </HStack>

              <Box w="full" overflowX="auto">
                <Image
                  src={`https://ghchart.rshah.org/f3a53d/${username}`}
                  alt={`${username}'s GitHub contribution graph`}
                  minW="640px"
                  w="full"
                />
              </Box>
            </VStack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
