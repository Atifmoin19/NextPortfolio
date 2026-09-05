import { useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  useToast,
  SimpleGrid,
  FormControl,
  FormErrorMessage,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useForm } from "react-hook-form";
import { apiClient } from "../../services/apiClient";
import { FaEnvelope, FaGithub, FaLinkedin, FaGlobe, FaPaperPlane } from "react-icons/fa";
import type { IconType } from "react-icons";
import Magnetic from "../shared/Magnetic";
import ParticleBurst from "../webgl/ParticleBurst";
import type { ParticleBurstHandle } from "../webgl/ParticleBurst";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}

const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Portfolio: FaGlobe,
};

const CARD_CLASSES = ["bento-mint", "bento-lavender", "bento-orange", "bento-black"];

export default function Contact() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const sectionBoxRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const burstRef = useRef<ParticleBurstHandle>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  if (!portfolioData) return null;

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // The backend saves the inquiry and attempts the email notification -
      // an email-delivery hiccup there is handled server-side and still
      // reports success, since the message itself is guaranteed saved.
      await apiClient.sendContactMessage({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        mobile: data.mobile,
        message: data.message,
      });

      toast({
        title: "Message sent",
        description: "I'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      reset();

      const btnRect = submitBtnRef.current?.getBoundingClientRect();
      const sectionRect = sectionBoxRef.current?.getBoundingClientRect();
      if (btnRect && sectionRect) {
        burstRef.current?.burst(
          btnRect.left + btnRect.width / 2 - sectionRect.left,
          btnRect.top + btnRect.height / 2 - sectionRect.top,
        );
      }
    } catch (e) {
      console.error("Submission error:", e);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        status: "error",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    height: "56px",
    bg: "var(--paper-raised)",
    border: "1px solid var(--line)",
    borderRadius: "var(--radius-md)",
    color: "var(--ink)",
    _placeholder: { color: "var(--ink-muted)" },
    _hover: { borderColor: "var(--line-strong)" },
    _focus: { borderColor: "var(--accent)", boxShadow: "0 0 0 1px var(--accent)" },
  };

  const infoCards = [
    { icon: FaEnvelope, label: "Email", value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
    ...portfolioData.contact.socials
      .filter((s) => SOCIAL_ICONS[s.network])
      .map((s) => ({ icon: SOCIAL_ICONS[s.network], label: s.network, value: s.url.replace(/^https?:\/\//, ""), href: s.url })),
  ];

  return (
    <Box
      ref={sectionBoxRef}
      id="contact"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12, lg: 24 }}
      position="relative"
      overflow="hidden"
    >
      <ParticleBurst ref={burstRef} />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          <VStack align="start" spacing={8}>
            <motion.div
              ref={sectionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <VStack align="start" spacing={4}>
                <Text
                  fontFamily="var(--font-display)"
                  fontWeight="800"
                  fontSize={{ base: "4xl", md: "6xl" }}
                  letterSpacing="-0.03em"
                  color="var(--ink)"
                >
                  Let&apos;s work together
                </Text>
                <Text color="var(--ink-soft)" fontSize="lg" maxW="420px">
                  Available for full-time roles and freelance projects.
                </Text>
              </VStack>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box
                    as="a"
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    display="block"
                    className={CARD_CLASSES[i % CARD_CLASSES.length]}
                    borderRadius="var(--radius-bento)"
                    p={5}
                    transition="transform 0.25s var(--ease-out)"
                    _hover={{ transform: "translateY(-3px)" }}
                  >
                    <HStack spacing={4}>
                      <Flex
                        w="44px"
                        h="44px"
                        borderRadius="var(--radius-sm)"
                        bg="rgba(255,255,255,0.35)"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <Icon as={card.icon} boxSize={4} />
                      </Flex>
                      <VStack align="start" spacing={0} minW={0}>
                        <Text className="label-mono" opacity={0.7}>
                          {card.label}
                        </Text>
                        <Text fontSize="sm" fontWeight="600" isTruncated maxW="180px">
                          {card.value}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box bg="var(--paper-raised)" border="1px solid var(--line)" borderRadius="var(--radius-bento)" p={{ base: 6, md: 8 }}>
              <VStack spacing={5} as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
                  <FormControl isInvalid={!!errors.firstName}>
                    <Input placeholder="First name" {...inputStyle} {...register("firstName", { required: "Required" })} />
                    <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.lastName}>
                    <Input placeholder="Last name" {...inputStyle} {...register("lastName", { required: "Required" })} />
                    <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                  </FormControl>
                </SimpleGrid>

                <FormControl isInvalid={!!errors.email}>
                  <Input
                    placeholder="Email address"
                    {...inputStyle}
                    {...register("email", {
                      required: "Required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                    })}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.mobile}>
                  <Input placeholder="Phone number" {...inputStyle} {...register("mobile", { required: "Required" })} />
                  <FormErrorMessage>{errors.mobile?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.message}>
                  <Textarea
                    placeholder="Tell me about your project"
                    {...inputStyle}
                    height="140px"
                    py={4}
                    {...register("message", { required: "Required" })}
                  />
                  <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                </FormControl>

                <Magnetic>
                  <Button
                    ref={submitBtnRef}
                    type="submit"
                    w="full"
                    h="56px"
                    bg="var(--accent)"
                    color="var(--accent-ink)"
                    borderRadius="var(--radius-md)"
                    fontSize="sm"
                    fontWeight="700"
                    isLoading={isLoading}
                    loadingText="Sending"
                    _hover={{ bg: "var(--accent-strong)" }}
                    _active={{ transform: "scale(0.98)" }}
                    rightIcon={<Icon as={FaPaperPlane} />}
                  >
                    Send message
                  </Button>
                </Magnetic>
              </VStack>
            </Box>
          </motion.div>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
