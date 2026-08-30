import { Box, Container, Text, HStack, Icon, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import type { RootState } from "../../store";
import type { IconType } from "react-icons";

const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Portfolio: FaGlobe,
};

export default function Footer() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  if (!portfolioData) return null;

  return (
    <Box as="footer" py={16} borderTop="1px solid var(--line)" position="relative">
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={8}>
          <Text color="var(--ink-muted)" fontSize="sm">
            &copy; {new Date().getFullYear()} {portfolioData.hero.name}. Built with React and a lot of coffee.
          </Text>

          <HStack spacing={2}>
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
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  border="1px solid var(--line)"
                  color="var(--ink-soft)"
                  _hover={{ color: "var(--ink)", bg: "var(--mint)", borderColor: "var(--mint)" }}
                  transition="color 0.2s ease, background 0.2s ease, border-color 0.2s ease"
                >
                  <Icon as={IconComponent} boxSize={5} />
                </Box>
              );
            })}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
