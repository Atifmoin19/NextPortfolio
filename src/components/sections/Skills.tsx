import { useRef } from "react";
import { Box, Container, Text, VStack, Grid, Wrap, WrapItem, Icon } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { motion, useInView } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRedux,
  SiFastapi,
  SiRedis,
  SiPostgresql,
  SiSqlalchemy,
  SiGooglegemini,
  SiMeta,
  SiTailwindcss,
  SiChakraui,
  SiMui,
  SiGit,
  SiJira,
  SiAxios,
  SiDocker,
  SiClaude,
  SiPwa,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  FaDatabase,
  FaServer,
  FaBrain,
  FaPalette,
  FaScrewdriverWrench,
  FaShieldHalved,
  FaCode,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const ICON_SETS: Record<string, IconType> = {
  FaReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRedux,
  SiFastapi,
  SiRedis,
  SiPostgresql,
  SiSqlalchemy,
  SiGooglegemini,
  SiMeta,
  SiTailwindcss,
  SiChakraui,
  SiMui,
  SiGit,
  SiJira,
  SiAxios,
  SiDocker,
  SiClaude,
  SiPwa,
  TbBrandNextjs,
};

const CATEGORY_ORDER = ["Languages", "Frontend", "Backend", "Database", "AI/LLM", "UI", "Tools", "Other"];

const CATEGORY_CLASS: Record<string, string> = {
  Languages: "bento-mint",
  Frontend: "bento-lavender",
  Backend: "bento-orange",
  Database: "bento-black",
  "AI/LLM": "bento-lavender",
  UI: "bento-mint",
  Tools: "bento-black",
  Other: "bento-orange",
};

const CATEGORY_FALLBACK_ICON: Record<string, IconType> = {
  Languages: FaCode,
  Frontend: FaReact,
  Backend: FaServer,
  Database: FaDatabase,
  "AI/LLM": FaBrain,
  UI: FaPalette,
  Tools: FaScrewdriverWrench,
  Other: FaShieldHalved,
};

export default function Skills() {
  const portfolioData = useSelector((state: RootState) => state.portfolio.data);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!portfolioData) return null;

  const groups = new Map<string, typeof portfolioData.skills>();
  for (const skill of portfolioData.skills) {
    const category = (skill as { category?: string }).category || "Other";
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category)!.push(skill);
  }
  for (const list of groups.values()) list.sort((a, b) => b.level - a.level);

  const orderedCategories = CATEGORY_ORDER.filter((c) => groups.has(c));

  return (
    <Box id="skills" py={{ base: 16, md: 24 }} px={{ base: 6, md: 12, lg: 24 }} position="relative">
      <Container maxW="container.xl">
        <VStack align="start" spacing={10} w="full">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text
              fontFamily="var(--font-display)"
              fontWeight="800"
              fontSize={{ base: "4xl", md: "6xl" }}
              letterSpacing="-0.03em"
              color="var(--ink)"
            >
              Skills &amp; technologies
            </Text>
          </motion.div>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={5} w="full">
            {orderedCategories.map((category, groupIndex) => {
              const skills = groups.get(category)!;
              const className = CATEGORY_CLASS[category] || "bento-paper";
              const FallbackIcon = CATEGORY_FALLBACK_ICON[category] || FaCode;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.6, delay: 0.06 * groupIndex, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box className={className} borderRadius="var(--radius-bento)" p={7} h="full">
                    <Text className="label-mono" mb={4} opacity={0.7}>
                      {category}
                    </Text>
                    <Wrap spacing={3}>
                      {skills.map((skill) => {
                        const IconComponent = ICON_SETS[skill.icon] || FallbackIcon;
                        return (
                          <WrapItem key={skill.name}>
                            <Box
                              display="flex"
                              alignItems="center"
                              gap={2}
                              px={4}
                              h="44px"
                              borderRadius="full"
                              bg="rgba(255, 255, 255, 0.35)"
                              _hover={{ bg: "rgba(255, 255, 255, 0.6)" }}
                              transition="background 0.2s ease"
                              tabIndex={0}
                            >
                              <Icon as={IconComponent} boxSize={4} />
                              <Text fontSize="sm" fontWeight="600">
                                {skill.name}
                              </Text>
                            </Box>
                          </WrapItem>
                        );
                      })}
                    </Wrap>
                  </Box>
                </motion.div>
              );
            })}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
