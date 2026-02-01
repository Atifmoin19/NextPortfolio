import { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  VStack,
  HStack,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { portfolioData } from "store/../data/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const accentColor = useColorModeValue("teal.500", "cyan.400");

  useGSAP(
    () => {
      const tl = gsap.timeline(); // Start immediately

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        skewY: 7,
      })
        .from(
          textRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8",
        );

      // Mouse movement parallax effect
      const moveHero = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX - window.innerWidth / 2) / 20;
        const y = (clientY - window.innerHeight / 2) / 20;

        gsap.to(".hero-content", {
          x: x,
          y: y,
          duration: 2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", moveHero);

      return () => {
        window.removeEventListener("mousemove", moveHero);
      };
    },
    { scope: containerRef },
  );

  return (
    <Box
      ref={containerRef}
      h="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      id="hero"
      pt={["32", "0"]}
    >
      {/* Background decorations - Vibrant & Bold Ambient Glows */}
      <Box
        position="absolute"
        top="0"
        right="0"
        w="900px"
        h="900px"
        transform="translate(25%, -25%)"
        bg={accentColor}
        filter="blur(250px)" // Even softer blur for high opacity
        opacity={0.6} // Bold opacity
        borderRadius="full"
        zIndex={-1}
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="700px"
        h="700px"
        transform="translate(-25%, 25%)"
        bg="purple.500"
        filter="blur(200px)"
        opacity={0.5} // Bold opacity
        borderRadius="full"
        zIndex={-1}
      />

      <Container maxW="container.xl" className="hero-content">
        <Stack spacing={8} alignItems="center" textAlign="center" w="full">
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="widest"
            color={accentColor}
            fontWeight="bold"
          >
            Hello, I'm {portfolioData.hero.name}
          </Text>

          <VStack spacing={6} w="full" align="center" maxW="container.lg">
            <Heading
              ref={titleRef} // Keep ref for GSAP
              as="h1"
              fontSize={["5xl", "7xl", "8xl", "9xl"]} // Responsive sizing
              lineHeight="0.9"
              letterSpacing="-0.04em"
              color="#111111" // Deep black
              className="hero-title"
              fontWeight="900"
              textTransform="uppercase"
              textAlign="center"
            >
              Frontend <br />
              <Text
                as="span"
                color="transparent"
                sx={{ WebkitTextStroke: "2px #111111" }}
              >
                Engineer.
              </Text>
            </Heading>

            <Text
              ref={textRef} // Keep ref for GSAP
              fontSize={["xl", "2xl"]}
              color="#111111" // Black text
              maxW="container.md"
              lineHeight="1.4"
              className="hero-subtitle"
              fontWeight="500"
              textAlign="center"
            >
              Motivated and detail-oriented Software Engineer specializing in
              building responsive, user-centric web applications with React,
              Next.js, and modern UI libraries.
            </Text>

            <HStack
              ref={buttonsRef}
              spacing={5}
              pt={8}
              className="hero-buttons"
              justify="center"
              w="full"
            >
              <Button
                as="a"
                href="/NextPortfolio/atif_Resume.pdf"
                download="Atif_Moin_Resume.pdf"
                size="lg"
                variant="solid"
                bg="#D4FF00"
                color="black"
                px={10}
                py={7}
                fontSize="lg"
                borderRadius="full"
                aria-label="Download Atif Moin's Resume"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "black",
                  color: "white",
                }}
                transition="all 0.3s"
              >
                Download Resume
              </Button>
              <Button
                as="a"
                href="#projects"
                size="lg"
                variant="outline"
                borderColor="#111111"
                color="#111111"
                px={10}
                py={7}
                fontSize="lg"
                borderRadius="full"
                _hover={{
                  bg: "blackAlpha.50",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s"
              >
                View Projects
              </Button>
              <Button
                as="a"
                href="#contact"
                size="lg"
                variant="ghost"
                color="#111111"
                px={10}
                py={7}
                fontSize="lg"
                borderRadius="full"
                _hover={{
                  bg: "blackAlpha.50",
                  transform: "translateY(-2px)",
                }}
              >
                Contact Me
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
