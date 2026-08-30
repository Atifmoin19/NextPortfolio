import { useEffect, useMemo, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  VStack,
  HStack,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaDownload,
  FaRegCopy,
  FaFolderOpen,
  FaLock,
} from "react-icons/fa6";
import type { RootState } from "../../store";
import { slugify } from "../../utils/slugify";

const SOCIAL_ICONS: Record<string, typeof FaGithub> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Portfolio: FaGlobe,
};

interface Command {
  id: string;
  label: string;
  hint?: string;
  icon: typeof FaArrowRight;
  run: () => void;
  hidden?: boolean;
}

export default function CommandPalette() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = () => {
    setIsOpen(false);
    setQuery("");
    setHighlighted(0);
  };

  const goHomeThenScroll = (section: string) => {
    close();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    };
    const toggleHandler = () => setIsOpen((v) => !v);
    window.addEventListener("keydown", handler);
    window.addEventListener("toggle-command-palette", toggleHandler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("toggle-command-palette", toggleHandler);
    };
  }, []);

  const commands: Command[] = useMemo(() => {
    const list: Command[] = [
      { id: "nav-skills", label: "Skills", hint: "Jump to section", icon: FaArrowRight, run: () => goHomeThenScroll("skills") },
      { id: "nav-experience", label: "Experience", hint: "Jump to section", icon: FaArrowRight, run: () => goHomeThenScroll("experience") },
      { id: "nav-projects", label: "Projects", hint: "Jump to section", icon: FaArrowRight, run: () => goHomeThenScroll("projects") },
      { id: "nav-contact", label: "Contact", hint: "Jump to section", icon: FaArrowRight, run: () => goHomeThenScroll("contact") },
    ];

    if (portfolioData) {
      for (const project of portfolioData.projects) {
        list.push({
          id: `project-${project.projectName}`,
          label: project.projectName,
          hint: "Open case study",
          icon: FaFolderOpen,
          run: () => {
            close();
            navigate(`/project/${slugify(project.projectName)}`);
          },
        });
      }

      for (const social of portfolioData.contact.socials) {
        const IconComponent = SOCIAL_ICONS[social.network] || FaGlobe;
        list.push({
          id: `social-${social.network}`,
          label: social.network,
          hint: social.url.replace(/^https?:\/\//, ""),
          icon: IconComponent,
          run: () => {
            close();
            window.open(social.url, "_blank", "noopener,noreferrer");
          },
        });
      }

      list.push({
        id: "copy-email",
        label: "Copy email address",
        hint: portfolioData.contact.email,
        icon: FaRegCopy,
        run: () => {
          navigator.clipboard.writeText(portfolioData.contact.email).catch(() => {});
          close();
        },
      });
    }

    list.push({
      id: "download-resume",
      label: "Download resume",
      icon: FaDownload,
      run: () => {
        close();
        const link = document.createElement("a");
        link.href = "/NextPortfolio/atif_Resume.pdf";
        link.download = "";
        link.click();
      },
    });

    // Hidden: only surfaces once the query matches, never in the default/empty list.
    list.push({
      id: "admin-login",
      label: "Admin login",
      hint: "Owner only",
      icon: FaLock,
      hidden: true,
      run: () => {
        close();
        navigate("/admin/login");
      },
    });

    return list;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolioData, location.pathname]);

  const filtered = commands.filter((c) => {
    if (c.hidden && query.trim() === "") return false;
    return c.label.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    setHighlighted(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[highlighted]?.run();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={close} isCentered initialFocusRef={inputRef} size="lg">
      <ModalOverlay bg="rgba(22, 20, 15, 0.5)" />
      <ModalContent bg="var(--paper-raised)" borderRadius="var(--radius-bento)" mx={4} overflow="hidden">
        <ModalBody p={0}>
          <HStack px={5} py={4} borderBottom="1px solid var(--line)" spacing={3}>
            <Icon as={FaMagnifyingGlass} color="var(--ink-muted)" boxSize={4} />
            <Input
              ref={inputRef}
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search sections, projects, socials..."
              variant="unstyled"
              fontSize="md"
            />
            <Text className="label-mono" color="var(--ink-muted)">
              ESC
            </Text>
          </HStack>

          <VStack align="stretch" spacing={0} maxH="360px" overflowY="auto" py={2}>
            {filtered.length === 0 && (
              <Text px={5} py={6} color="var(--ink-muted)" fontSize="sm">
                No matches.
              </Text>
            )}
            {filtered.map((command, i) => (
              <Box
                key={command.id}
                as="button"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={5}
                py={3}
                bg={i === highlighted ? "var(--paper)" : "transparent"}
                onMouseEnter={() => setHighlighted(i)}
                onClick={() => command.run()}
                textAlign="left"
              >
                <HStack spacing={3}>
                  <Icon as={command.icon} boxSize={4} color="var(--ink-soft)" />
                  <Text fontSize="sm" fontWeight="600">
                    {command.label}
                  </Text>
                </HStack>
                {command.hint && (
                  <Text fontSize="xs" color="var(--ink-muted)" isTruncated maxW="220px">
                    {command.hint}
                  </Text>
                )}
              </Box>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
