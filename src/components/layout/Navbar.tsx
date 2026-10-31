import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
  VisuallyHidden,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { scrollToId, scrollToTop } from "../../lib/smoothScroll";
import { useActiveSection } from "../../lib/activeSection";
import { NAV_SECTIONS } from "../../data/sections";

function OpenToRoles() {
  return (
    <HStack spacing={2} fontSize="0.9rem" whiteSpace="nowrap">
      <Box w="10px" h="10px" bg="var(--red)" flexShrink={0} aria-hidden="true" />
      <Text as="span">Open to senior roles</Text>
    </HStack>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = useActiveSection();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // From the mobile drawer, wait until it has closed: its scroll lock would swallow the jump.
  const pending = useRef<string | null>(null);
  const goTo = (id: string) => {
    if (location.pathname !== "/") navigate("/");
    if (isOpen) {
      pending.current = id;
      onClose();
    } else {
      scrollToId(id);
    }
  };
  const afterDrawerClose = () => {
    if (pending.current) scrollToId(pending.current);
    pending.current = null;
  };

  const goHome = () => {
    onClose();
    if (location.pathname !== "/") navigate("/");
    else scrollToTop();
  };

  return (
    <>
      <Box
        as="header"
        position="sticky"
        top="env(safe-area-inset-top, 0px)"
        zIndex={40}
        borderBottom="2px solid var(--rule)"
        sx={{
          background: "color-mix(in oklab, var(--bg) 88%, transparent)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          transition: "background-color 1.2s var(--ease)",
        }}
      >
        <Box
          className="ps-wrap"
          display="grid"
          gridTemplateColumns={{ base: "1fr auto", lg: "1fr auto 1fr" }}
          alignItems="center"
          gap={4}
          minH="var(--nav-h)"
          py={2}
        >
          <Box
            as="button"
            onClick={goHome}
            justifySelf="start"
            fontFamily="var(--font-display)"
            fontWeight={900}
            fontSize="1.05rem"
            letterSpacing="-0.01em"
            sx={{ fontStretch: "115%" }}
          >
            Atif Moin
          </Box>

          <HStack as="nav" aria-label="Sections" spacing="6px" display={{ base: "none", lg: "flex" }}>
            {NAV_SECTIONS.map((s) => {
              const on = active === s.id;
              return (
                <Box
                  key={s.id}
                  as="a"
                  href={`#${s.id}`}
                  aria-current={on ? "true" : undefined}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    goTo(s.id);
                  }}
                  fontWeight={500}
                  px="0.75rem"
                  py="0.35rem"
                  borderRadius="999px"
                  border="2px solid"
                  borderColor={on ? "var(--ink)" : "transparent"}
                  bg={on ? "var(--paper)" : "transparent"}
                  transition="border-color 0.2s, background 0.2s"
                  _hover={{ borderColor: "var(--ink)", bg: "var(--paper)" }}
                >
                  {s.label}
                </Box>
              );
            })}
          </HStack>

          <HStack justifySelf="end" spacing={4}>
            <Box
              as="button"
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
              aria-keyshortcuts="Meta+K Control+K"
              display={{ base: "none", md: "inline-flex" }}
              className="mono"
              px="0.6rem"
              py="0.2rem"
              border="2px solid var(--ink)"
              borderRadius="var(--radius-sm)"
              bg="var(--paper)"
              _hover={{ bg: "var(--butter)" }}
            >
              <span aria-hidden="true">&#8984;K</span>
              <VisuallyHidden>Search</VisuallyHidden>
            </Box>
            <Box display={{ base: "none", sm: "block" }}>
              <OpenToRoles />
            </Box>
            <IconButton
              aria-label="Open menu"
              icon={<HiOutlineMenu size={22} />}
              variant="ghost"
              display={{ base: "flex", lg: "none" }}
              minW="44px"
              h="44px"
              onClick={onOpen}
            />
          </HStack>
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} onCloseComplete={afterDrawerClose}>
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
    </>
  );
}
