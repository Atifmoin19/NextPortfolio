import { useEffect, useState, useCallback } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Center,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { apiClient, getAdminToken, clearAdminToken, ApiError } from "../../services/apiClient";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Todo {
  id: string;
  fname: string;
  lname: string;
  email: string;
  message: string;
  mobile: string;
  date: string;
}

const cardProps = {
  p: 6,
  bg: "var(--paper)",
  borderRadius: "var(--radius-card)",
  border: "1px solid var(--hair)",
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isStatsLoading] = useState(false);

  const fetchInitialPage = useCallback(async () => {
    setLoading(true);
    try {
      const page = await apiClient.getInquiries(undefined, 5);
      setTodos(page.items);
      setHasNextPage(page.has_next);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        clearAdminToken();
        navigate("/admin/login");
        return;
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const fetchNextPage = useCallback(async () => {
    if (!hasNextPage || loading || todos.length === 0) return;
    setLoading(true);
    try {
      const page = await apiClient.getInquiries(todos[todos.length - 1].id, 5);
      setTodos((prev) => [...prev, ...page.items]);
      setHasNextPage(page.has_next);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        clearAdminToken();
        navigate("/admin/login");
        return;
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [navigate, hasNextPage, loading, todos]);

  useEffect(() => {
    if (!getAdminToken()) {
      navigate("/admin/login");
      return;
    }

    fetchInitialPage();

    // Internal Firebase view tracking removed as per user request to rely on Google Analytics
  }, [navigate, fetchInitialPage]);

  const handleLogout = () => {
    clearAdminToken();
    navigate("/admin/login");
  };

  return (
    <Box minH="100vh" bg="var(--paper)">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
            <VStack align="start" spacing={1}>
              <Text fontFamily="var(--font-display)" fontWeight="800" fontSize="3xl" color="var(--ink)">
                Admin Dashboard
              </Text>
              <Text color="var(--ink-3)" fontSize="sm">
                Overview of your portfolio performance
              </Text>
            </VStack>
            <HStack spacing={3}>
              <Button as={Link} to="/" variant="ghost" size="sm" borderRadius="full" color="var(--ink-2)">
                View Portfolio
              </Button>
              <Button
                as="a"
                href="https://analytics.google.com/"
                target="_blank"
                variant="outline"
                size="sm"
                borderRadius="full"
                borderColor="var(--ink-3)"
                color="var(--ink)"
              >
                Open Google Analytics
              </Button>
              <Button
                onClick={handleLogout}
                borderRadius="full"
                size="sm"
                px={6}
                bg="var(--ink)"
                color="var(--paper)"
                _hover={{ bg: "var(--ink-2)" }}
              >
                Logout
              </Button>
            </HStack>
          </Flex>

          <Divider borderColor="var(--hair)" />

          {/* Quick Stats */}
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            <Stat {...cardProps}>
              <StatLabel color="var(--ink-3)">Total Leads</StatLabel>
              <StatNumber fontFamily="var(--font-mono)" fontSize="3xl" fontWeight="600" color="var(--ink)">
                {isStatsLoading ? <Spinner size="sm" /> : todos.length}
              </StatNumber>
              <StatHelpText color="var(--ink-3)">From contact form</StatHelpText>
            </Stat>
            <Stat {...cardProps}>
              <StatLabel color="var(--ink-3)">Live Traffic</StatLabel>
              <StatNumber fontSize="lg" fontWeight="700" color="var(--ink)">
                See Google Analytics
              </StatNumber>
              <StatHelpText color="var(--ink-3)">Internal counter disabled</StatHelpText>
            </Stat>
            <Stat {...cardProps}>
              <StatLabel color="var(--ink-3)">Response Rate</StatLabel>
              <StatNumber fontFamily="var(--font-mono)" fontSize="3xl" fontWeight="600" color="var(--ink)">
                100%
              </StatNumber>
              <StatHelpText color="var(--ink-3)">All messages logged</StatHelpText>
            </Stat>
          </SimpleGrid>

          {/* Charts Row */}
          <SimpleGrid columns={[1, 1, 2]} spacing={6}>
            <Box {...cardProps}>
              <Heading size="sm" mb={6} fontFamily="var(--font-display)" color="var(--ink)">
                Traffic Sources
              </Heading>
              <Box h="300px">
                <Center h="full">
                  <VStack spacing={4}>
                    <Text fontSize="sm" color="var(--ink-3)" fontWeight="500" textAlign="center">
                      Detailed traffic analytics are available in your Google
                      Analytics dashboard.
                    </Text>
                    <Button
                      as="a"
                      href="https://analytics.google.com/"
                      target="_blank"
                      size="xs"
                      variant="outline"
                      borderColor="var(--ink-3)"
                      color="var(--ink)"
                      borderRadius="full"
                    >
                      View Official Reports
                    </Button>
                  </VStack>
                </Center>
              </Box>
            </Box>

            <Box {...cardProps}>
              <Heading size="sm" mb={6} fontFamily="var(--font-display)" color="var(--ink)">
                Leads Performance
              </Heading>
              <Box h="300px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[{ name: "Total Inquiries", value: todos.length }]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--hair)" />
                    <XAxis dataKey="name" stroke="var(--ink-3)" />
                    <YAxis stroke="var(--ink-3)" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#f3a53d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </SimpleGrid>

          {/* Leads Table */}
          <Box {...cardProps}>
            <Flex justify="space-between" align="center" mb={6}>
              <Heading size="sm" fontFamily="var(--font-display)" color="var(--ink)">
                Recent Inquiries
              </Heading>
              <Button variant="link" size="sm" as={Link} to="/admin/content" color="var(--red)">
                Manage Content
              </Button>
            </Flex>
            <Box overflowX="auto">
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th color="var(--ink-3)">Visitor</Th>
                    <Th color="var(--ink-3)">Email/Mobile</Th>
                    <Th color="var(--ink-3)">Message</Th>
                    <Th color="var(--ink-3)">Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {todos.map((todo) => (
                    <Tr key={todo.id} _hover={{ bg: "var(--paper)" }} transition="0.2s">
                      <Td py={4}>
                        <Text fontWeight="700" color="var(--ink)">{`${todo.fname} ${todo.lname}`}</Text>
                      </Td>
                      <Td>
                        <VStack align="start" spacing={0}>
                          <Text fontSize="xs" color="var(--ink)">{todo.email}</Text>
                          <Text fontSize="xs" color="var(--ink-3)">
                            {todo.mobile}
                          </Text>
                        </VStack>
                      </Td>
                      <Td maxW="300px">
                        <Text isTruncated fontSize="sm" color="var(--ink)">
                          {todo.message}
                        </Text>
                      </Td>
                      <Td fontSize="xs" color="var(--ink-3)">
                        {todo.date}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>

            {loading && (
              <Center py={10}>
                <Spinner color="var(--red)" />
              </Center>
            )}

            {hasNextPage && !loading && (
              <Center mt={6}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fetchNextPage}
                  borderRadius="full"
                  borderColor="var(--ink-3)"
                  color="var(--ink)"
                >
                  Load More Leads
                </Button>
              </Center>
            )}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
