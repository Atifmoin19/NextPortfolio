import { useEffect, useState } from "react";
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
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { useFirebasePagination } from "../../hooks/useFirebasePagination";
import { portfolioService } from "../../services/portfolioService";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
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

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const {
    data: todos,
    loading,
    fetchNextPage,
    fetchInitialPage,
    hasNextPage,
  } = useFirebasePagination<Todo>("todos", 5);
  const [viewCount, setViewCount] = useState<number>(0);
  const [analyticsData, setAnalyticsData] = useState<
    { name: string; value: number }[]
  >([]);
  const [isStatsLoading, setIsStatsLoading] = useState(true);

  const cardBg = useColorModeValue("white", "whiteAlpha.50");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (isAuthenticated !== "true") {
      navigate("/admin/login");
      return;
    }

    fetchInitialPage();

    // Set up real-time listener for view count
    const unsubscribe = portfolioService.subscribeToViewCount((count) => {
      setViewCount(count);
      setIsStatsLoading(false);
    });

    const loadStats = async () => {
      try {
        const analytics = await portfolioService.getAnalyticsData();
        setAnalyticsData(analytics);
      } catch (err) {
        console.error(err);
      }
    };
    loadStats();

    return () => unsubscribe();
  }, [navigate, fetchInitialPage]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin/login");
  };

  const handleResetStats = async () => {
    if (
      window.confirm(
        "Are you sure you want to reset all view stats? This cannot be undone.",
      )
    ) {
      await portfolioService.resetStats();
      window.location.reload();
    }
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "black")}>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Flex justify="space-between" align="center">
            <VStack align="start" spacing={1}>
              <Heading
                size="lg"
                bgGradient="linear(to-r, blue.400, purple.500, cyan.400)"
                bgClip="text"
                fontWeight="800"
              >
                ADMIN DASHBOARD
              </Heading>
              <Text color="gray.500" fontSize="sm">
                Overview of your portfolio performance
              </Text>
            </VStack>
            <HStack spacing={4}>
              <Button
                as={Link}
                to="/"
                variant="ghost"
                size="sm"
                borderRadius="full"
              >
                View Portfolio
              </Button>
              <Button
                as="a"
                href="https://analytics.google.com/"
                target="_blank"
                variant="outline"
                colorScheme="orange"
                size="sm"
                borderRadius="full"
              >
                Open Google Analytics
              </Button>
              <Button
                colorScheme="red"
                variant="solid"
                onClick={handleLogout}
                borderRadius="full"
                size="sm"
                px={6}
              >
                Logout
              </Button>
            </HStack>
          </Flex>

          <Divider borderColor={borderColor} />

          {/* Quick Stats */}
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            <Stat
              p={6}
              bg={cardBg}
              borderRadius="2xl"
              borderWidth={1}
              borderColor={borderColor}
              shadow="sm"
            >
              <StatLabel color="gray.500">Total Leads</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">
                {isStatsLoading ? <Spinner size="sm" /> : todos.length}
              </StatNumber>
              <StatHelpText>From contact form</StatHelpText>
            </Stat>
            <Stat
              p={6}
              bg={cardBg}
              borderRadius="2xl"
              borderWidth={1}
              borderColor={borderColor}
              shadow="sm"
            >
              <StatLabel color="gray.500">Profile Views</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">
                {isStatsLoading ? (
                  <Spinner size="sm" />
                ) : (
                  viewCount.toLocaleString()
                )}
              </StatNumber>
              <StatHelpText>Total site visits</StatHelpText>
            </Stat>
            <Stat
              p={6}
              bg={cardBg}
              borderRadius="2xl"
              borderWidth={1}
              borderColor={borderColor}
              shadow="sm"
            >
              <StatLabel color="gray.500">Response Rate</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">
                100%
              </StatNumber>
              <StatHelpText>All messages logged</StatHelpText>
            </Stat>
          </SimpleGrid>

          {/* Charts Row */}
          <SimpleGrid columns={[1, 1, 2]} spacing={6}>
            <Box
              p={6}
              bg={cardBg}
              borderRadius="2xl"
              borderWidth={1}
              borderColor={borderColor}
              shadow="sm"
            >
              <Heading size="sm" mb={6}>
                Traffic Sources
              </Heading>
              <Box h="300px">
                {analyticsData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {analyticsData.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <Center h="full">
                    <VStack spacing={2}>
                      <Text fontSize="sm" color="gray.500" fontWeight="medium">
                        Waiting for first visitors...
                      </Text>
                      <Text fontSize="xs" color="gray.600">
                        Traffic sources will appear here.
                      </Text>
                    </VStack>
                  </Center>
                )}
              </Box>
            </Box>

            <Box
              p={6}
              bg={cardBg}
              borderRadius="2xl"
              borderWidth={1}
              borderColor={borderColor}
              shadow="sm"
            >
              <Heading size="sm" mb={6}>
                Activity Overview
              </Heading>
              <Box h="300px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Views", value: viewCount },
                      { name: "Leads", value: todos.length },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </SimpleGrid>

          {/* Leads Table */}
          <Box
            p={6}
            bg={cardBg}
            borderRadius="2xl"
            borderWidth={1}
            borderColor={borderColor}
            shadow="sm"
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Heading size="sm">Recent Inquiries</Heading>
              <Button
                colorScheme="blue"
                variant="link"
                size="sm"
                as={Link}
                to="/admin/content"
              >
                Manage Content
              </Button>
            </Flex>
            <Box overflowX="auto">
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th color="gray.400">Visitor</Th>
                    <Th color="gray.400">Email/Mobile</Th>
                    <Th color="gray.400">Message</Th>
                    <Th color="gray.400">Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {todos.map((todo) => (
                    <Tr
                      key={todo.id}
                      _hover={{ bg: "blackAlpha.50" }}
                      transition="0.2s"
                    >
                      <Td py={4}>
                        <Text
                          fontWeight="bold"
                          color="blue.400"
                        >{`${todo.fname} ${todo.lname}`}</Text>
                      </Td>
                      <Td>
                        <VStack align="start" spacing={0}>
                          <Text fontSize="xs">{todo.email}</Text>
                          <Text fontSize="xs" color="gray.500">
                            {todo.mobile}
                          </Text>
                        </VStack>
                      </Td>
                      <Td maxW="300px">
                        <Text isTruncated fontSize="sm">
                          {todo.message}
                        </Text>
                      </Td>
                      <Td fontSize="xs" color="gray.500">
                        {todo.date}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>

            {loading && (
              <Center py={10}>
                <Spinner color="blue.500" />
              </Center>
            )}

            {hasNextPage && !loading && (
              <Center mt={6}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fetchNextPage}
                  borderRadius="full"
                >
                  Load More Leads
                </Button>
              </Center>
            )}
          </Box>

          <Box textAlign="center" pt={4}>
            <Button
              variant="link"
              color="red.400"
              size="xs"
              onClick={handleResetStats}
              opacity={0.6}
              _hover={{ opacity: 1 }}
            >
              Reset Internal Database Stats
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
