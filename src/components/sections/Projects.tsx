import { useRef } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid, // Restore SimpleGrid
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { portfolioData } from "store/../data/content";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }: { project: any; index: number }) => {
  return (
    <Box
      className="project-card-container"
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      bg="whiteAlpha.50"
      border="1px solid"
      borderColor="whiteAlpha.100"
      transition="all 0.4s ease-out"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
        borderColor: "whiteAlpha.300",
        bg: "whiteAlpha.100",
      }}
      role="group"
      // Removed fixed dimensions for responsive grid
    >
      {/* Image Section */}
      <Box h="220px" overflow="hidden" position="relative">
        <Image
          src={project.image}
          alt={project.projectName}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          _groupHover={{ transform: "scale(1.1)" }}
        />
        <Box
          position="absolute"
          inset="0"
          bg="blackAlpha.300"
          transition="background 0.3s"
          _groupHover={{ bg: "transparent" }}
        />
      </Box>

      {/* Content Section */}
      <VStack p={6} align="start" spacing={4}>
        <VStack align="start" spacing={1}>
          <Heading as="h3" size="md" color="white" fontWeight="bold">
            {project.projectName}
          </Heading>
          <Text fontSize="sm" color="gray.400" fontWeight="medium">
            {project.projectType}
          </Text>
        </VStack>

        <HStack spacing={3} pt={2} w="full">
          {project.link.project && (
            <Button
              as={Link}
              href={project.link.project}
              isExternal
              size="sm"
              variant="solid"
              colorScheme="whiteAlpha"
              color="white"
              bg="whiteAlpha.200"
              _hover={{ bg: "white", color: "black" }}
              leftIcon={<FaExternalLinkAlt size="12px" />}
              borderRadius="full"
              px={5}
              fontSize="xs"
              aria-label={`View live demo of ${project.projectName}`}
            >
              Demo
            </Button>
          )}
          {project.link.code && (
            <Button
              as={Link}
              href={project.link.code}
              isExternal
              size="sm"
              variant="outline"
              color="gray.400"
              borderColor="whiteAlpha.300"
              _hover={{ borderColor: "white", color: "white" }}
              leftIcon={<FaGithub size="14px" />}
              borderRadius="full"
              fontSize="xs"
              aria-label={`View source code of ${project.projectName} on GitHub`}
            >
              Code
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // No internal ScrollTrigger logic needed for simple grid.
  // Parent StackSection handles the "card entry" animation.

  return (
    <Box ref={containerRef} w="100%" id="projects" p={"5rem"}>
      <Container maxW="container.xl" px={[4, 8]}>
        <Flex justify="space-between" align="center" mb={12}>
          <Heading
            as="h2"
            fontSize={["3xl", "4xl", "5xl"]}
            color="white"
            letterSpacing="-0.02em"
          >
            Selected Projects
          </Heading>
          <Text color="gray.500" fontSize="sm" display={["none", "block"]}>
            A showcase of my recent work
          </Text>
        </Flex>

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {portfolioData.projects.map((project: any, index: number) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
