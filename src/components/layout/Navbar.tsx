import {
  Box,
  Flex,
  Container,
  HStack,
  Text,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Magnetic from "../shared/Magnetic";

const NAV_LINKS = ["Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId.toLowerCase());
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (section: string) => {
    onClose();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 150);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          padding: "16px 24px 0",
        }}
      >
        <Box
          w="full"
          maxW="1180px"
          borderRadius="full"
          bg={scrolled ? "rgba(255, 255, 255, 0.72)" : "rgba(255, 255, 255, 0.45)"}
          border="1px solid"
          borderColor={scrolled ? "var(--line-strong)" : "rgba(255, 255, 255, 0.6)"}
          boxShadow={scrolled ? "0 12px 32px -16px rgba(22, 20, 15, 0.25)" : "none"}
          sx={{ backdropFilter: "blur(18px) saturate(160%)", WebkitBackdropFilter: "blur(18px) saturate(160%)" }}
          transition="background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
        >
          <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
            <Flex align="center" justify="space-between" h={{ base: "64px", md: "72px" }}>
              <HStack
                as="button"
                spacing={3}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Flex
                  w="36px"
                  h="36px"
                  borderRadius="full"
                  bg="var(--ink)"
                  color="var(--paper)"
                  align="center"
                  justify="center"
                  fontFamily="var(--font-display)"
                  fontWeight="800"
                  fontSize="sm"
                >
                  AM
                </Flex>
                <Text
                  display={{ base: "none", sm: "block" }}
                  fontFamily="var(--font-display)"
                  fontWeight="800"
                  fontSize="lg"
                  letterSpacing="-0.02em"
                  color="var(--ink)"
                >
                  Atif Moin
                </Text>
              </HStack>

              <HStack spacing={3} display={{ base: "none", md: "flex" }}>
                {NAV_LINKS.map((item, i) => (
                  <HStack key={item} spacing={3}>
                    {i > 0 && (
                      <Text color="var(--ink-muted)" fontSize="sm">
                        /
                      </Text>
                    )}
                    <Button
                      variant="ghost"
                      px={2}
                      h="40px"
                      fontSize="sm"
                      fontWeight="600"
                      color="var(--ink-soft)"
                      _hover={{ bg: "transparent", color: "var(--ink)" }}
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                    </Button>
                  </HStack>
                ))}
              </HStack>

              <HStack spacing={3} display={{ base: "none", md: "flex" }}>
                <Button
                  onClick={() => window.dispatchEvent(new CustomEvent("toggle-command-palette"))}
                  variant="outline"
                  h="40px"
                  px={4}
                  borderRadius="full"
                  borderColor="var(--line-strong)"
                  fontSize="xs"
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                  color="var(--ink-soft)"
                  _hover={{ bg: "var(--paper)", color: "var(--ink)" }}
                  aria-label="Open command palette"
                >
                  &#8984;K
                </Button>

              <Box display={{ base: "none", md: "block" }}>
                <Magnetic>
                  <Button
                    h="44px"
                    px={6}
                    borderRadius="full"
                    bg="var(--ink)"
                    color="var(--paper)"
                    fontSize="sm"
                    fontWeight="700"
                    _hover={{ bg: "var(--ink-soft)" }}
                    _active={{ transform: "scale(0.97)" }}
                    onClick={() => handleNavClick("Contact")}
                  >
                    Hire me
                  </Button>
                </Magnetic>
              </Box>
              </HStack>

              <IconButton
                aria-label="Open menu"
                icon={<HiOutlineMenu size={22} />}
                variant="ghost"
                color="var(--ink)"
                display={{ base: "flex", md: "none" }}
                minW="44px"
                h="44px"
                onClick={onOpen}
              />
            </Flex>
          </Container>
        </Box>
      </motion.div>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay bg="rgba(22, 20, 15, 0.5)" />
        <DrawerContent bg="var(--paper)" borderBottom="1px solid var(--line)">
          <DrawerBody px={6} py={6}>
            <Flex justify="space-between" align="center" mb={8}>
              <Text fontFamily="var(--font-display)" fontWeight="800" fontSize="xl" color="var(--ink)">
                Atif Moin
              </Text>
              <IconButton
                aria-label="Close menu"
                icon={<HiOutlineX size={22} />}
                variant="ghost"
                color="var(--ink)"
                minW="44px"
                h="44px"
                onClick={onClose}
              />
            </Flex>
            <VStack align="stretch" spacing={1}>
              {NAV_LINKS.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  justifyContent="flex-start"
                  h="56px"
                  fontSize="lg"
                  fontWeight="700"
                  color="var(--ink)"
                  _hover={{ bg: "var(--mint)" }}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </Button>
              ))}
              <Button
                mt={4}
                h="56px"
                borderRadius="full"
                bg="var(--ink)"
                color="var(--paper)"
                fontWeight="700"
                _hover={{ bg: "var(--ink-soft)" }}
                onClick={() => handleNavClick("Contact")}
              >
                Hire me
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
