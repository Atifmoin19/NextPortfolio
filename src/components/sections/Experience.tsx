import { useRef } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  HStack,
  Circle,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // The early return for portfolioData inside useGSAP is fine,
      // as it prevents GSAP animations from running if data isn't available.
      if (!portfolioData) return;
      const items = gsap.utils.toArray<HTMLElement>(".experience-item");
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef },
  );

  if (!portfolioData) return null;

  return (
    <Box
      ref={containerRef}
      minH="100vh"
      h="auto"
      display="flex"
      alignItems="center"
      id="experience"
      p={"5rem"}
    >
      <Container maxW="container.md" position="relative" pr={[0, 20]}>
        <Heading
          as="h2"
          fontSize={["4xl", "5xl"]}
          mb={16}
          textAlign="center"
          color="white"
        >
          Experience
        </Heading>

        <VStack spacing={0} align="stretch" position="relative">
          {/* Vertical Line */}
          <Box
            position="absolute"
            left="19px"
            top="5px"
            bottom="5px"
            w="2px"
            bg="whiteAlpha.400"
            zIndex={0}
          />

          {portfolioData.experience.map((job, index) => (
            <Box
              key={index}
              className="experience-item"
              pb={6} // Reduced from 12
              position="relative"
              zIndex={1}
            >
              <HStack align="start" spacing={6}>
                <Circle
                  size="40px"
                  bg="#D4FF00" // Lime
                  color="black"
                  fontWeight="bold"
                >
                  {index + 1}
                </Circle>
                <VStack align="start" spacing={1} pt={1}>
                  <Text fontSize="sm" color="#D4FF00" fontWeight="bold">
                    {job.duration}
                  </Text>
                  <Heading size="md" color="white">
                    {job.role}
                  </Heading>
                  <Text fontWeight="bold" fontSize="lg" color="gray.200">
                    {job.company}
                  </Text>
                  <Text color="gray.400" pt={2} maxW="container.sm">
                    {job.description}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}
