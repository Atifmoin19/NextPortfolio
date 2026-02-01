import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Container,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(0, 0, 0, 0.6)",
  );
  const borderColor = useColorModeValue("gray.200", "gray.800");

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: navRef },
  );

  const handleThemeChange = () => {
    // Animate the button rotation
    gsap.to(".theme-icon", {
      rotation: "+=360",
      duration: 0.5,
      ease: "back.out(1.7)",
    });
    toggleColorMode();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and rendering
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <Box
      ref={navRef}
      position="fixed"
      top={4}
      left={0}
      right={0}
      zIndex={100}
      display="flex"
      justifyContent="center"
    >
      <Container maxW="container.lg">
        <Flex
          bg={bg}
          backdropFilter="blur(10px)"
          borderRadius="full"
          border="1px solid"
          borderColor={borderColor}
          px={8}
          py={3}
          align="center"
          justify="space-between"
          boxShadow="lg"
        >
          <Text
            fontWeight="bold"
            fontSize="lg"
            letterSpacing="tighter"
            as={Link}
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Atif Moin Home"
            title="Atif Moin | Home"
          >
            AM.
          </Text>

          <HStack spacing={8} display={["none", "none", "flex"]}>
            {["Skills", "Projects", "Experience", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                size="sm"
                fontWeight="medium"
                _hover={{ bg: "whiteAlpha.200", transform: "scale(1.05)" }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              fontWeight="medium"
              _hover={{ bg: "whiteAlpha.200", transform: "scale(1.05)" }}
              as={Link}
              to="/admin"
            >
              Admin
            </Button>
          </HStack>

          <IconButton
            aria-label="Toggle theme"
            icon={
              colorMode === "dark" ? (
                <FaSun className="theme-icon" />
              ) : (
                <FaMoon className="theme-icon" />
              )
            }
            onClick={handleThemeChange}
            variant="ghost"
            borderRadius="full"
            size="sm"
          />
        </Flex>
      </Container>
    </Box>
  );
}
