import { useRef, useState } from "react";
import { Box, Container, Text, VStack, HStack, IconButton, Icon } from "@chakra-ui/react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa6";

const CARD_CLASSES = ["bento-mint", "bento-lavender", "bento-orange", "bento-black"];

function initialsFor(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const testimonials = portfolioData?.testimonials ?? [];
  if (testimonials.length === 0) return null;

  const active = testimonials[index];
  const className = CARD_CLASSES[index % CARD_CLASSES.length];

  const goTo = (next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  };

  return (
    <Box id="testimonials" py={{ base: 16, md: 24 }} px={{ base: 6, md: 12, lg: 24 }} position="relative">
      <Container maxW="container.lg">
        <VStack align="center" spacing={10} w="full">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text
              fontFamily="var(--font-display)"
              fontWeight="800"
              fontSize={{ base: "4xl", md: "6xl" }}
              letterSpacing="-0.03em"
              color="var(--ink)"
              textAlign="center"
            >
              What people say
            </Text>
          </motion.div>

          <Box position="relative" w="full" maxW="720px">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Box className={className} borderRadius="var(--radius-bento)" p={{ base: 6, md: 10 }}>
                  <Icon as={FaQuoteLeft} boxSize={6} opacity={0.4} mb={4} />
                  <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="1.6" mb={6}>
                    {active.quote}
                  </Text>
                  <HStack spacing={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="rgba(255,255,255,0.35)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="700"
                      fontSize="sm"
                    >
                      {initialsFor(active.name)}
                    </Box>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="700" fontSize="sm">
                        {active.name}
                      </Text>
                      <Text className="label-mono" opacity={0.7}>
                        {active.role}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

          {testimonials.length > 1 && (
            <HStack spacing={4}>
              <IconButton
                aria-label="Previous testimonial"
                icon={<FaChevronLeft />}
                variant="outline"
                borderColor="var(--line-strong)"
                borderRadius="full"
                onClick={() => goTo(index - 1)}
              />
              <HStack spacing={2}>
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    as="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    w={i === index ? "20px" : "8px"}
                    h="8px"
                    borderRadius="full"
                    bg={i === index ? "var(--ink)" : "var(--line-strong)"}
                    transition="all 0.2s ease"
                    onClick={() => goTo(i)}
                  />
                ))}
              </HStack>
              <IconButton
                aria-label="Next testimonial"
                icon={<FaChevronRight />}
                variant="outline"
                borderColor="var(--line-strong)"
                borderRadius="full"
                onClick={() => goTo(index + 1)}
              />
            </HStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
