import { useRef } from "react";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GuideCharacter() {
  const characterRef = useRef<HTMLDivElement>(null);

  // Use a futuristic drone/robot image placeholder
  // In a real app, this could be a Lottie animation or a 3D model
  const characterImage =
    "https://api.dicebear.com/7.x/bottts/svg?seed=Guide&backgroundColor=transparent";

  const glowColor = useColorModeValue("cyan.400", "cyan.200");

  useGSAP(
    () => {
      const character = characterRef.current;

      // Initial floating animation
      gsap.to(character, {
        y: -15,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });

      // Landing spots configuration
      // We will define these IDs in the respective sections
      const stops = [
        { id: "#guide-hero", x: "10vw", y: "20vh", scale: 1.2 },
        { id: "#guide-skills", x: "80vw", y: "0", scale: 0.8 },
        { id: "#guide-experience", x: "15vw", y: "10vh", scale: 1 },
        { id: "#guide-projects", x: "85vw", y: "-5vh", scale: 0.9 },
        { id: "#guide-contact", x: "50vw", y: "-10vh", scale: 1.5 },
      ];

      // Create a timeline linked to scroll
      stops.forEach((stop) => {
        // Find the target section container
        const triggerId = stop.id.replace("guide-", ""); // e.g., 'hero', 'skills'
        const triggerEl = document.getElementById(triggerId);

        if (triggerEl) {
          gsap.to(character, {
            scrollTrigger: {
              trigger: triggerEl,
              start: "top center",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
              // scrub: 1, // Smoothly scrub the animation
            },
            left: stop.x,
            top: "50vh", // Keep it centered vertically relative to viewport usually, or adjust per section
            scale: stop.scale,
            duration: 1.5,
            ease: "back.out(1.2)",
            overwrite: "auto",
          });
        }
      });

      // Make the character fixed but move it around with absolute positioning relative to viewport
      // Wait, simpler approach: Fixed position container, and we just move top/left/transform based on scroll triggers
    },
    { scope: characterRef },
  );

  return (
    <Box
      ref={characterRef}
      position="fixed"
      top="30vh"
      left="10vw"
      zIndex={50}
      pointerEvents="none"
      transition="filter 0.3s"
      className="guide-character"
    >
      <Box position="relative" width="100px" height="100px">
        {/* Glow Effect */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="100px"
          height="100px"
          bg={glowColor}
          filter="blur(30px)"
          opacity={0.4}
          borderRadius="full"
        />

        {/* Character Image */}
        <Image
          src={characterImage}
          alt="Guide"
          w="full"
          h="full"
          objectFit="contain"
          filter="drop-shadow(0 0 10px rgba(0,255,255,0.5))"
        />

        {/* Speech Bubble / Status Light */}
        <Box
          position="absolute"
          top="0"
          right="10px"
          w="3"
          h="3"
          bg="green.400"
          borderRadius="full"
          boxShadow="0 0 10px #48BB78"
          animation="pulse 2s infinite"
        />
      </Box>
    </Box>
  );
}
