import { useEffect, useRef, useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaComment, FaXmark, FaPaperPlane } from "react-icons/fa6";
import { apiClient, ApiError } from "../../services/apiClient";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content: "Hi, I'm Atif's portfolio assistant. Ask me about his skills, experience, or projects.",
};

export default function ChatWidget() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  if (location.pathname.startsWith("/admin")) return null;

  const send = async () => {
    const message = input.trim();
    if (!message || isLoading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: message }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const history = nextMessages
        .filter((m) => m !== GREETING)
        .slice(0, -1)
        .map((m) => ({ role: m.role, content: m.content }));
      const { reply } = await apiClient.chat(message, history);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      const text =
        err instanceof ApiError && err.status === 429
          ? "Too many messages, please wait a moment before trying again."
          : "Something went wrong. Please try again in a moment.";
      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box position="fixed" bottom={{ base: 5, md: 8 }} right={{ base: 5, md: 8 }} zIndex={1200}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: "64px",
              right: 0,
              width: "min(360px, 90vw)",
            }}
          >
            <Box
              bg="var(--paper-raised)"
              border="1px solid var(--line)"
              borderRadius="var(--radius-bento)"
              boxShadow="0 20px 40px -16px rgba(22, 20, 15, 0.3)"
              overflow="hidden"
            >
              <HStack px={4} py={3} borderBottom="1px solid var(--line)" justify="space-between">
                <Text fontFamily="var(--font-display)" fontWeight="800" fontSize="sm">
                  Ask about Atif
                </Text>
              </HStack>

              <VStack ref={scrollRef} align="stretch" spacing={3} p={4} maxH="360px" overflowY="auto">
                {messages.map((m, i) => (
                  <Box
                    key={i}
                    alignSelf={m.role === "user" ? "flex-end" : "flex-start"}
                    maxW="85%"
                    px={3}
                    py={2}
                    borderRadius="var(--radius-md)"
                    bg={m.role === "user" ? "var(--ink)" : "var(--paper)"}
                    color={m.role === "user" ? "var(--paper)" : "var(--ink)"}
                    fontSize="sm"
                  >
                    {m.content}
                  </Box>
                ))}
                {isLoading && (
                  <Box alignSelf="flex-start" px={3} py={2} borderRadius="var(--radius-md)" bg="var(--paper)" fontSize="sm" color="var(--ink-muted)">
                    Thinking...
                  </Box>
                )}
              </VStack>

              <HStack p={3} borderTop="1px solid var(--line)" spacing={2}>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask a question..."
                  size="sm"
                  borderRadius="full"
                  bg="var(--paper)"
                />
                <IconButton
                  aria-label="Send"
                  icon={<Icon as={FaPaperPlane} boxSize={3.5} />}
                  size="sm"
                  borderRadius="full"
                  bg="var(--orange)"
                  color="var(--orange-ink)"
                  _hover={{ bg: "var(--accent-strong)" }}
                  onClick={send}
                  isLoading={isLoading}
                />
              </HStack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <IconButton
        aria-label={isOpen ? "Close chat" : "Open chat"}
        icon={<Icon as={isOpen ? FaXmark : FaComment} boxSize={5} />}
        onClick={() => setIsOpen((v) => !v)}
        w="56px"
        h="56px"
        borderRadius="full"
        bg="var(--ink)"
        color="var(--paper)"
        _hover={{ bg: "var(--ink-soft)" }}
        boxShadow="0 12px 24px -8px rgba(22, 20, 15, 0.4)"
      />
    </Box>
  );
}
