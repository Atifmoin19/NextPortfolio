import { useRef, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Input,
  Textarea,
  useColorModeValue,
  useToast,
  SimpleGrid,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "store/../data/content";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase/index";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useGSAP(
    () => {
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // 1. Save to Firebase (already working)
      await addDoc(collection(firestore, "todos"), {
        fname: data.firstName,
        lname: data.lastName,
        email: data.email,
        mobile: data.mobile,
        message: data.message,
        date: new Date().toLocaleString(),
      });

      // 2. Send Auto-Reply via EmailJS
      // Replace these strings with your actual EmailJS keys
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        to_name: data.firstName,
        to_email: data.email,
        from_name: "Atif Moin",
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message & Auto-Reply Sent!",
        description: `Thanks ${data.firstName}, check your email for a confirmation.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      reset();
    } catch (e) {
      console.error("Submission error: ", e);
      toast({
        title: "Submission Error",
        description:
          "Firestore saved, but email failed. Check your EmailJS keys.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      ref={containerRef}
      py={0}
      minH="100vh"
      h="auto"
      p={"5rem"}
      display="flex"
      alignItems="center"
      id="contact"
    >
      <Container
        maxW="container.md"
        className="contact-content"
        position="relative"
      >
        <VStack spacing={8} align="center" textAlign="center">
          <Heading as="h2" fontSize={["4xl", "5xl"]}>
            Let's Work Together
          </Heading>
          <Text fontSize="xl" color="gray.500" maxW="600px">
            Have a project in mind? I'm always open to discussing new ideas and
            opportunities.
          </Text>

          <VStack
            w="full"
            spacing={4}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <SimpleGrid columns={[1, 2]} spacing={4} w="full">
              <FormControl isInvalid={!!errors.firstName}>
                <Input
                  placeholder="First Name"
                  size="lg"
                  bg={inputBg}
                  border="none"
                  _focus={{ ring: 2, ringColor: "cyan.400" }}
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.lastName}>
                <Input
                  placeholder="Last Name"
                  size="lg"
                  bg={inputBg}
                  border="none"
                  _focus={{ ring: 2, ringColor: "cyan.400" }}
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
              </FormControl>
            </SimpleGrid>

            <FormControl isInvalid={!!errors.email}>
              <Input
                placeholder="Email"
                size="lg"
                bg={inputBg}
                border="none"
                _focus={{ ring: 2, ringColor: "cyan.400" }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.mobile}>
              <Input
                placeholder="Mobile Number"
                size="lg"
                bg={inputBg}
                border="none"
                _focus={{ ring: 2, ringColor: "cyan.400" }}
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
              />
              <FormErrorMessage>{errors.mobile?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.message}>
              <Textarea
                placeholder="Message"
                size="lg"
                rows={6}
                bg={inputBg}
                border="none"
                _focus={{ ring: 2, ringColor: "cyan.400" }}
                {...register("message", { required: "Message is required" })}
              />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>

            <Button
              size="lg"
              colorScheme="cyan"
              w="full"
              fontSize="lg"
              h={14}
              type="submit"
              isLoading={isLoading}
              loadingText="Sending..."
            >
              Send Message
            </Button>
          </VStack>

          <Text pt={10} color="gray.500">
            Or email me directly at{" "}
            <Text as="span" color="cyan.400" fontWeight="bold">
              {portfolioData.contact.email}
            </Text>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
