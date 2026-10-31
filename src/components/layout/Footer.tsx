import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { scrollToTop } from "../../lib/smoothScroll";

const QUIET_SECONDS = 20;

function stayLine(seconds: number) {
  if (seconds < QUIET_SECONDS) return "Thanks for stopping by.";
  const m = Math.floor(seconds / 60);
  return m < 1
    ? `You've been here ${seconds} seconds. Thanks for staying.`
    : `You've been here ${m} min ${seconds % 60}s. Thanks for staying.`;
}

export default function Footer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t0 = Date.now();
    const id = window.setInterval(() => {
      setSeconds(Math.floor((Date.now() - t0) / 1000));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Box as="footer" borderTop="2px solid var(--rule)">
      <Box
        className="ps-wrap"
        pt={6}
        pb={10}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        flexWrap="wrap"
        fontSize="0.9rem"
        color="var(--ink-2)"
      >
        <Text as="span">Atif Moin, {new Date().getFullYear()}</Text>
        <Text as="span" fontFamily="var(--font-hand)" fontSize="1.1rem" color="var(--ink)">
          {stayLine(seconds)}
        </Text>
        <Box
          as="a"
          href="#top"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            scrollToTop();
          }}
          _hover={{ color: "var(--red)" }}
        >
          Back to top
        </Box>
      </Box>
    </Box>
  );
}
