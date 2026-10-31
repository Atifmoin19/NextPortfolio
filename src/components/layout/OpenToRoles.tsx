import { Box, HStack, Text } from "@chakra-ui/react";

export default function OpenToRoles() {
  return (
    <HStack spacing={2} fontSize="0.9rem" whiteSpace="nowrap">
      <Box w="10px" h="10px" bg="var(--red)" flexShrink={0} aria-hidden="true" />
      <Text as="span">Open to senior roles</Text>
    </HStack>
  );
}
