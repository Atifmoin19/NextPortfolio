import { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StackSectionProps {
  children: React.ReactNode;
  index: number;
  bgColor?: string;
  id?: string;
}

export default function StackSection({
  children,
  index,
  bgColor = "white",
  id,
}: StackSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isHero = index === 1;

  useGSAP(
    () => {
      // 1. Entry Animation
      gsap.fromTo(
        contentRef.current,
        {
          scale: isHero ? 1 : 0.8,
          rotation: isHero ? 0 : index % 2 === 0 ? 25 : -25,
          y: isHero ? 0 : 0,
          opacity: 1,
        },
        {
          scale: 1,
          rotation: 0,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        },
      );

      // 2. The "Stay Stuck Forever" Stacking Pin
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "max",
        pin: contentRef.current,
        pinSpacing: false,
        id: `pin-${index}`,
      });

      // 3. The Internal Scrubbing (for long content like Projects/Skills)
      if (scrollRef.current && sectionRef.current && !isHero) {
        const contentHeight = scrollRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        const overflow = Math.max(0, contentHeight - viewportHeight);

        if (overflow > 0) {
          const trackExtra = overflow + 300;
          sectionRef.current.style.height = `calc(100vh + ${trackExtra}px)`;

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              const moveAmount = overflow + 50;
              gsap.set(scrollRef.current, { y: -moveAmount * self.progress });
            },
          });
        }
      }
    },
    { scope: sectionRef, dependencies: [children] },
  );

  return (
    <Box
      ref={sectionRef}
      as="section"
      id={id}
      w="100%"
      zIndex={index * 10}
      bg="transparent"
      minH="100vh"
      position="relative"
      overflowX="clip"
    >
      <Flex
        ref={contentRef}
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="100vh"
        bg={bgColor}
        position="relative"
        overflow="visible"
      >
        <Box w="100%" ref={scrollRef} position="relative">
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
