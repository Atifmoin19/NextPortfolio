import { useRef } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(textRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.8,
          ease: "power3.in",
          delay: 0.5,
        })
        .to(containerRef.current, {
          height: 0,
          duration: 1,
          ease: "expo.inOut",
        });
    },
    { scope: containerRef },
  );

  return (
    <Box
      ref={containerRef}
      position="fixed"
      top={0}
      left={0}
      w="100%"
      h="100vh"
      bg={bg}
      zIndex={9999}
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box
        ref={textRef}
        fontSize={["4xl", "6xl", "8xl"]}
        fontWeight="bold"
        color={color}
        opacity={0}
        transform="translateY(50px)"
        fontFamily="heading"
      >
        LOADING...
      </Box>
    </Box>
  );
}
