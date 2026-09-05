import { useState } from "react";
import { Box, HStack, Text, Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWandMagicSparkles, FaXmark } from "react-icons/fa6";
import { useMotionPreference } from "../../lib/motionPreference";

// Only rendered for visitors whose OS has Reduce Motion on - the vast
// majority of visitors never see this. Gives them a way to opt back into
// the site's animated showcase without having to change a system setting,
// since "go flip this in your OS settings" isn't a reasonable ask.
export default function MotionOptInPill() {
  const { osReduce, overridden, enableMotion } = useMotionPreference();
  const [dismissed, setDismissed] = useState(false);

  const visible = osReduce && !overridden && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            left: "24px",
            bottom: "24px",
            zIndex: 1200,
          }}
        >
          <Box
            bg="var(--paper)"
            border="1px solid var(--line-strong)"
            borderRadius="full"
            boxShadow="0 12px 28px -12px rgba(22, 20, 15, 0.28)"
            pl={4}
            pr={2}
            py={2}
          >
            <HStack spacing={3}>
              <Icon as={FaWandMagicSparkles} color="var(--orange)" boxSize={3.5} />
              <Box
                as="button"
                onClick={enableMotion}
                textAlign="left"
                _hover={{ textDecoration: "underline" }}
              >
                <Text fontSize="xs" color="var(--ink-muted)" lineHeight="1.3">
                  Reduced motion is on
                </Text>
                <Text fontSize="sm" fontWeight="600" color="var(--ink)" lineHeight="1.3">
                  View animated version
                </Text>
              </Box>
              <Box
                as="button"
                aria-label="Dismiss"
                onClick={() => setDismissed(true)}
                p={2}
                borderRadius="full"
                _hover={{ bg: "var(--paper-raised)" }}
              >
                <Icon as={FaXmark} boxSize={3} color="var(--ink-muted)" />
              </Box>
            </HStack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
