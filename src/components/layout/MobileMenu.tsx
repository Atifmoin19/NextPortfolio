import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineX } from "react-icons/hi";
import { NAV_SECTIONS } from "../../data/sections";
import OpenToRoles from "./OpenToRoles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCloseComplete: () => void;
  goTo: (id: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onCloseComplete, goTo }: Props) {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose} onCloseComplete={onCloseComplete}>
      <DrawerOverlay />
      <DrawerContent borderBottom="2px solid var(--ink)">
        <DrawerBody className="ps-wrap" w="full" py={4}>
          <Flex justify="space-between" align="center" mb={6}>
            <Text fontFamily="var(--font-display)" fontWeight={900} sx={{ fontStretch: "115%" }}>
              Atif Moin
            </Text>
            <IconButton
              aria-label="Close menu"
              icon={<HiOutlineX size={22} />}
              variant="ghost"
              minW="44px"
              h="44px"
              onClick={onClose}
            />
          </Flex>
          <VStack as="nav" aria-label="Sections" align="stretch" spacing={0}>
            {NAV_SECTIONS.map((s) => (
              <Box
                key={s.id}
                as="button"
                textAlign="left"
                onClick={() => goTo(s.id)}
                py={3}
                borderTop="2px solid var(--ink)"
                fontFamily="var(--font-display)"
                fontWeight={900}
                fontSize="1.9rem"
                letterSpacing="-0.03em"
                sx={{ fontStretch: "110%" }}
                _hover={{ color: "var(--red)" }}
              >
                {s.label}
              </Box>
            ))}
          </VStack>
          <Flex
            borderTop="2px solid var(--ink)"
            pt={4}
            mt={0}
            justify="space-between"
            align="center"
            gap={4}
            wrap="wrap"
          >
            <OpenToRoles />
            <Box
              as="button"
              className="mono"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent("toggle-command-palette"));
              }}
              textDecoration="underline"
            >
              Search (&#8984;K)
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
