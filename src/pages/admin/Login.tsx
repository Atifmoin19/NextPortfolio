import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
  Container,
  Text,
  useColorModeValue,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const bgColor = useColorModeValue("gray.50", "black");
  const cardBg = useColorModeValue("white", "whiteAlpha.50");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const envAdminId = import.meta.env.VITE_ADMIN_ID;
    const envAdminPass = import.meta.env.VITE_ADMIN_PASS;

    if (adminId === envAdminId && password === envAdminPass) {
      localStorage.setItem("isAdminAuthenticated", "true");
      toast({
        title: "Login Successful",
        description: "Welcome back, Administrator.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid credentials provided.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box minH="100vh" bg={bgColor} position="relative" overflow="hidden">
      {/* Header for Back Navigation */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        p={6}
        zIndex={10}
        borderBottom="1px solid"
        borderColor={borderColor}
        bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
        backdropFilter="blur(10px)"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={2} as={Link} to="/" _hover={{ opacity: 0.8 }}>
              <Icon as={FaArrowLeft} size="12px" />
              <Text fontWeight="bold" fontSize="sm">
                Back to Portfolio
              </Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaShieldAlt} color="blue.400" />
              <Text
                fontWeight="bold"
                fontSize="xs"
                letterSpacing="widest"
                textTransform="uppercase"
              >
                Secure Access
              </Text>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Login Form Container */}
      <Flex minH="100vh" alignItems="center" justifyContent="center" pt={20}>
        <Container maxW="md">
          <Box
            p={10}
            bg={cardBg}
            backdropFilter="blur(10px)"
            borderRadius="3xl"
            borderWidth={1}
            borderColor={borderColor}
            boxShadow="2xl"
          >
            <VStack spacing={8} as="form" onSubmit={handleLogin}>
              <VStack spacing={2} textAlign="center">
                <Box
                  p={4}
                  borderRadius="2xl"
                  bg="blue.400"
                  mb={2}
                  boxShadow="0 0 20px rgba(66, 153, 225, 0.4)"
                >
                  <Icon as={FaShieldAlt} boxSize={8} color="white" />
                </Box>
                <Heading
                  size="xl"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                  fontWeight="800"
                >
                  ADMIN LOGIN
                </Heading>
                <Text color="gray.500" fontSize="sm">
                  Authorized access only. Use your credentials to sign in.
                </Text>
              </VStack>

              <VStack spacing={4} width="full">
                <FormControl isRequired>
                  <FormLabel
                    fontSize="xs"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="widest"
                  >
                    Admin ID
                  </FormLabel>
                  <Input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="Enter your ID"
                    variant="filled"
                    h={14}
                    borderRadius="2xl"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel
                    fontSize="xs"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="widest"
                  >
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    variant="filled"
                    h={14}
                    borderRadius="2xl"
                  />
                </FormControl>
              </VStack>

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                h={14}
                borderRadius="2xl"
                fontSize="md"
                fontWeight="bold"
                bgGradient="linear(to-r, blue.400, blue.600)"
                _hover={{
                  bgGradient: "linear(to-r, blue.500, blue.700)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px -10px rgba(66, 153, 225, 0.5)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.2s"
              >
                Sign In to Dashboard
              </Button>
            </VStack>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
};

export default AdminLogin;
