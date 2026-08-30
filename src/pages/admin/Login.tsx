import { useState } from "react";
import type { FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Container,
  Text,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaLock } from "react-icons/fa6";
import { apiClient, setAdminToken, ApiError } from "../../services/apiClient";

const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const { access_token } = await apiClient.login(adminId, password);
      setAdminToken(access_token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Invalid credentials provided.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    height: "56px",
    bg: "var(--paper)",
    border: "1px solid var(--line)",
    borderRadius: "var(--radius-md)",
    color: "var(--ink)",
    _placeholder: { color: "var(--ink-muted)" },
    _hover: { borderColor: "var(--line-strong)" },
    _focus: { borderColor: "var(--accent)", boxShadow: "0 0 0 1px var(--accent)" },
  };

  return (
    <Box minH="100vh" bg="var(--paper)" position="relative">
      <Box position="absolute" top={0} left={0} right={0} p={6} zIndex={10} borderBottom="1px solid var(--line)">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={2} as={Link} to="/" color="var(--ink-soft)" _hover={{ color: "var(--ink)" }}>
              <Icon as={FaArrowLeft} boxSize={3} />
              <Text fontWeight="700" fontSize="sm">
                Back to Portfolio
              </Text>
            </HStack>
            <Text className="label-mono" color="var(--ink-muted)">
              Secure Access
            </Text>
          </Flex>
        </Container>
      </Box>

      <Flex minH="100vh" alignItems="center" justifyContent="center" pt={20} px={4}>
        <Container maxW="md">
          <Box bg="var(--paper-raised)" border="1px solid var(--line)" borderRadius="var(--radius-bento)" p={{ base: 6, md: 10 }}>
            <VStack spacing={8} as="form" onSubmit={handleLogin}>
              <VStack spacing={3} textAlign="center">
                <Flex w="56px" h="56px" borderRadius="var(--radius-md)" bg="var(--ink)" align="center" justify="center">
                  <Icon as={FaLock} boxSize={5} color="var(--paper)" />
                </Flex>
                <Text fontFamily="var(--font-display)" fontWeight="800" fontSize="2xl" letterSpacing="-0.02em" color="var(--ink)">
                  Admin Login
                </Text>
                <Text color="var(--ink-muted)" fontSize="sm">
                  Authorized access only. Use your credentials to sign in.
                </Text>
              </VStack>

              <VStack spacing={4} width="full">
                <FormControl isRequired>
                  <FormLabel className="label-mono" color="var(--ink-muted)">
                    Admin ID
                  </FormLabel>
                  <Input
                    type="text"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="Enter your ID"
                    {...inputStyle}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel className="label-mono" color="var(--ink-muted)">
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    {...inputStyle}
                  />
                </FormControl>
              </VStack>

              {error && (
                <Text w="full" fontSize="sm" color="var(--orange-ink)" bg="var(--orange)" px={4} py={2} borderRadius="var(--radius-sm)">
                  {error}
                </Text>
              )}

              <Button
                type="submit"
                w="full"
                h={14}
                borderRadius="full"
                fontSize="md"
                fontWeight="700"
                bg="var(--ink)"
                color="var(--paper)"
                isLoading={isLoading}
                loadingText="Signing in"
                _hover={{ bg: "var(--ink-soft)" }}
                _active={{ transform: "scale(0.98)" }}
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
