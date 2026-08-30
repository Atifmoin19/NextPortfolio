import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "#fdfdfc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={onComplete}
      >
        <Box display="flex" alignItems="center" gap={3}>
          <Box w="36px" h="36px" borderRadius="full" bg="var(--ink)" />
          <Text fontFamily="var(--font-display)" fontWeight="800" fontSize="2xl" color="var(--ink)">
            Atif Moin
          </Text>
        </Box>
      </motion.div>
    </motion.div>
  );
}
