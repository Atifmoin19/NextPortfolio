import { useRef } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaAngular,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiGreensock,
  SiChakraui,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiFlutter,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconMap: Record<string, React.ElementType> = {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  SiTypescript,
  SiRedux,
  SiGreensock,
  SiChakraui,
  TbBrandNextjs,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  FaAngular,
  SiFlutter,
  FaPython,
};

export default function Skills() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!portfolioData) return null;

  return (
    <Box ref={containerRef} w="100%" id="skills" p={"5rem"}>
      <Container maxW="container.xl" position="relative">
        <VStack spacing={12} align="start">
          <Heading
            as="h2"
            fontSize={["4xl", "5xl"]}
            mb={8}
            className="section-title"
            color="white" // Dark mode text
          >
            Skills
          </Heading>

          <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} w="full">
            {portfolioData.skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || FaReact;
              return (
                <Box
                  key={index}
                  className="skill-card"
                  bg="whiteAlpha.50" // Sleek dark card
                  p={8}
                  borderRadius="2xl"
                  borderWidth="1px"
                  borderColor="whiteAlpha.100"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "#D4FF00", // Lime accent
                    transform: "translateY(-5px)",
                    shadow: "xl",
                  }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={4}
                  boxShadow="none" // Remove default shadow
                >
                  <Icon
                    as={IconComponent}
                    boxSize={12}
                    color="#D4FF00"
                    aria-label={`${skill.name} icon`}
                    title={skill.name}
                  />
                  <Text fontSize="xl" fontWeight="bold" color="white">
                    {skill.name}
                  </Text>
                  <Box
                    w="full"
                    bg="whiteAlpha.200"
                    h={2}
                    borderRadius="full"
                    overflow="hidden"
                  >
                    <Box
                      h="full"
                      bg="#D4FF00" // Lime fill
                      w={`${skill.level}%`}
                      borderRadius="full"
                    />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
