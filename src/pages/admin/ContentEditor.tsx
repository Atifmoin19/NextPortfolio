import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FaTrash, FaPlus, FaSave, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { portfolioService } from "../../services/portfolioService";
import { portfolioData as initialData } from "../../data/content";

type PortfolioData = typeof initialData;

const ContentEditor = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const loadData = useCallback(async () => {
    try {
      const result = await portfolioService.getPortfolioData();
      setData(result as PortfolioData);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error loading data",
        status: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (isAuthenticated !== "true") {
      navigate("/admin/login");
      return;
    }
    loadData();
  }, [navigate, loadData]);

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    try {
      await portfolioService.savePortfolioData(data);
      toast({
        title: "Portfolio updated successfully",
        status: "success",
        duration: 3000,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error saving data",
        status: "error",
        duration: 3000,
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Box p={10}>Loading content...</Box>;
  if (!data) return <Box p={10}>No data found.</Box>;

  // --- Handlers for different sections ---

  const updateHero = (field: keyof PortfolioData["hero"], value: string) => {
    setData({ ...data, hero: { ...data.hero, [field]: value } });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [...data.skills, { name: "", level: 50, icon: "" }],
    });
  };

  const removeSkill = (index: number) => {
    const newSkills = [...data.skills];
    newSkills.splice(index, 1);
    setData({ ...data, skills: newSkills });
  };

  const updateSkill = (
    index: number,
    field: keyof PortfolioData["skills"][0],
    value: string | number,
  ) => {
    if (!data) return;
    const newSkills = [...data.skills];
    newSkills[index] = {
      ...newSkills[index],
      [field]: value,
    } as PortfolioData["skills"][0];
    setData({ ...data, skills: newSkills });
  };

  const addExperience = () => {
    setData({
      ...data,
      experience: [
        ...data.experience,
        { company: "", role: "", duration: "", description: "" },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const newExp = [...data.experience];
    newExp.splice(index, 1);
    setData({ ...data, experience: newExp });
  };

  const updateExperience = (
    index: number,
    field: keyof PortfolioData["experience"][0],
    value: string,
  ) => {
    const newExp = [...data.experience];
    newExp[index] = { ...newExp[index], [field]: value };
    setData({ ...data, experience: newExp });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [
        ...data.projects,
        {
          projectName: "",
          projectType: "",
          link: { code: "", project: "" },
          image: "",
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    const newProjects = [...data.projects];
    newProjects.splice(index, 1);
    setData({ ...data, projects: newProjects });
  };

  const updateProject = (index: number, field: string, value: string) => {
    if (!data) return;
    const newProjects = [...data.projects];
    if (field.startsWith("link.")) {
      const linkField = field.split(".")[1] as "code" | "project";
      newProjects[index] = {
        ...newProjects[index],
        link: { ...newProjects[index].link, [linkField]: value },
      };
    } else {
      const key = field as keyof PortfolioData["projects"][0];
      newProjects[index] = {
        ...newProjects[index],
        [key]: value,
      } as PortfolioData["projects"][0];
    }
    setData({ ...data, projects: newProjects });
  };

  const updateContact = (
    field: keyof PortfolioData["contact"],
    value: string,
  ) => {
    if (!data) return;
    setData({
      ...data,
      contact: { ...data.contact, [field]: value } as PortfolioData["contact"],
    });
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <HStack justify="space-between">
          <Button
            leftIcon={<FaArrowLeft />}
            variant="ghost"
            onClick={() => navigate("/admin/dashboard")}
          >
            Back to Dashboard
          </Button>
          <Heading size="lg">Content Management</Heading>
          <Button
            leftIcon={<FaSave />}
            colorScheme="blue"
            isLoading={saving}
            onClick={handleSave}
          >
            Save All Changes
          </Button>
        </HStack>

        <Accordion allowMultiple defaultIndex={[0]}>
          {/* HERO SECTION */}
          <AccordionItem
            borderRadius="md"
            mb={4}
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <AccordionButton py={4}>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Hero Section
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={6}>
              <SimpleGrid columns={[1, 2]} spacing={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={data.hero.name}
                    onChange={(e) => updateHero("name", e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    value={data.hero.role}
                    onChange={(e) => updateHero("role", e.target.value)}
                  />
                </FormControl>
                <FormControl gridColumn="span 2">
                  <FormLabel>Tagline</FormLabel>
                  <Input
                    value={data.hero.tagline}
                    onChange={(e) => updateHero("tagline", e.target.value)}
                  />
                </FormControl>
                <FormControl gridColumn="span 2">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={data.hero.description}
                    onChange={(e) => updateHero("description", e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Primary Button</FormLabel>
                  <Input
                    value={data.hero.primaryAction}
                    onChange={(e) =>
                      updateHero("primaryAction", e.target.value)
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Secondary Button</FormLabel>
                  <Input
                    value={data.hero.secondaryAction}
                    onChange={(e) =>
                      updateHero("secondaryAction", e.target.value)
                    }
                  />
                </FormControl>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          {/* SKILLS SECTION */}
          <AccordionItem
            borderRadius="md"
            mb={4}
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <AccordionButton py={4}>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Skills ({data.skills.length})
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={6}>
              <VStack spacing={4} align="stretch">
                {data.skills.map((skill, index) => (
                  <HStack
                    key={index}
                    spacing={4}
                    bg="whiteAlpha.50"
                    p={3}
                    borderRadius="md"
                  >
                    <FormControl size="sm">
                      <FormLabel fontSize="xs">Name</FormLabel>
                      <Input
                        size="sm"
                        value={skill.name}
                        onChange={(e) =>
                          updateSkill(index, "name", e.target.value)
                        }
                      />
                    </FormControl>
                    <FormControl size="sm" width="100px">
                      <FormLabel fontSize="xs">Level %</FormLabel>
                      <Input
                        size="sm"
                        type="number"
                        value={skill.level}
                        onChange={(e) =>
                          updateSkill(index, "level", parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormControl size="sm">
                      <FormLabel fontSize="xs">Icon (Fa/Si/Tb)</FormLabel>
                      <Input
                        size="sm"
                        value={skill.icon}
                        onChange={(e) =>
                          updateSkill(index, "icon", e.target.value)
                        }
                      />
                    </FormControl>
                    <IconButton
                      aria-label="Remove"
                      icon={<FaTrash />}
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      alignSelf="flex-end"
                      onClick={() => removeSkill(index)}
                    />
                  </HStack>
                ))}
                <Button
                  leftIcon={<FaPlus />}
                  size="sm"
                  variant="outline"
                  onClick={addSkill}
                >
                  Add Skill
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          {/* EXPERIENCE SECTION */}
          <AccordionItem
            borderRadius="md"
            mb={4}
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <AccordionButton py={4}>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Experience ({data.experience.length})
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={6}>
              <VStack spacing={6} align="stretch">
                {data.experience.map((exp, index) => (
                  <Box
                    key={index}
                    p={4}
                    bg="whiteAlpha.50"
                    borderRadius="md"
                    position="relative"
                  >
                    <IconButton
                      position="absolute"
                      top={2}
                      right={2}
                      aria-label="Remove"
                      icon={<FaTrash />}
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(index)}
                    />
                    <SimpleGrid columns={[1, 2]} spacing={4}>
                      <FormControl>
                        <FormLabel fontSize="sm">Company</FormLabel>
                        <Input
                          size="sm"
                          value={exp.company}
                          onChange={(e) =>
                            updateExperience(index, "company", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm">Role</FormLabel>
                        <Input
                          size="sm"
                          value={exp.role}
                          onChange={(e) =>
                            updateExperience(index, "role", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm">Duration</FormLabel>
                        <Input
                          size="sm"
                          value={exp.duration}
                          onChange={(e) =>
                            updateExperience(index, "duration", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormControl gridColumn="span 2">
                        <FormLabel fontSize="sm">Description</FormLabel>
                        <Textarea
                          size="sm"
                          value={exp.description}
                          onChange={(e) =>
                            updateExperience(
                              index,
                              "description",
                              e.target.value,
                            )
                          }
                        />
                      </FormControl>
                    </SimpleGrid>
                  </Box>
                ))}
                <Button
                  leftIcon={<FaPlus />}
                  size="sm"
                  variant="outline"
                  onClick={addExperience}
                >
                  Add Experience
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          {/* PROJECTS SECTION */}
          <AccordionItem
            borderRadius="md"
            mb={4}
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <AccordionButton py={4}>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Projects ({data.projects.length})
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={6}>
              <VStack spacing={6} align="stretch">
                {data.projects.map((proj, index) => (
                  <Box
                    key={index}
                    p={4}
                    bg="whiteAlpha.50"
                    borderRadius="md"
                    position="relative"
                  >
                    <IconButton
                      position="absolute"
                      top={2}
                      right={2}
                      aria-label="Remove"
                      icon={<FaTrash />}
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeProject(index)}
                    />
                    <SimpleGrid columns={[1, 2]} spacing={4}>
                      <FormControl>
                        <FormLabel fontSize="sm">Project Name</FormLabel>
                        <Input
                          size="sm"
                          value={proj.projectName}
                          onChange={(e) =>
                            updateProject(index, "projectName", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm">Type</FormLabel>
                        <Input
                          size="sm"
                          value={proj.projectType}
                          onChange={(e) =>
                            updateProject(index, "projectType", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm">Project Link</FormLabel>
                        <Input
                          size="sm"
                          value={proj.link.project}
                          onChange={(e) =>
                            updateProject(index, "link.project", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="sm">Image URL</FormLabel>
                        <Input
                          size="sm"
                          value={proj.image}
                          onChange={(e) =>
                            updateProject(index, "image", e.target.value)
                          }
                        />
                      </FormControl>
                    </SimpleGrid>
                  </Box>
                ))}
                <Button
                  leftIcon={<FaPlus />}
                  size="sm"
                  variant="outline"
                  onClick={addProject}
                >
                  Add Project
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          {/* CONTACT SECTION */}
          <AccordionItem
            borderRadius="md"
            mb={4}
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <AccordionButton py={4}>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Contact & Socials
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={6}>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={data.contact.email}
                    onChange={(e) => updateContact("email", e.target.value)}
                  />
                </FormControl>
                <Divider />
                <Text fontWeight="bold" fontSize="sm">
                  Social Networks
                </Text>
                {data.contact.socials.map((social, index) => (
                  <HStack key={index} spacing={4}>
                    <FormControl size="sm">
                      <Input
                        size="sm"
                        placeholder="Network"
                        value={social.network}
                        onChange={(e) => {
                          const newSocials = [...data.contact.socials];
                          newSocials[index] = {
                            ...newSocials[index],
                            network: e.target.value,
                          };
                          setData({
                            ...data,
                            contact: { ...data.contact, socials: newSocials },
                          });
                        }}
                      />
                    </FormControl>
                    <FormControl size="sm">
                      <Input
                        size="sm"
                        placeholder="URL"
                        value={social.url}
                        onChange={(e) => {
                          const newSocials = [...data.contact.socials];
                          newSocials[index] = {
                            ...newSocials[index],
                            url: e.target.value,
                          };
                          setData({
                            ...data,
                            contact: { ...data.contact, socials: newSocials },
                          });
                        }}
                      />
                    </FormControl>
                    <FormControl size="sm">
                      <Input
                        size="sm"
                        placeholder="Icon"
                        value={social.icon}
                        onChange={(e) => {
                          const newSocials = [...data.contact.socials];
                          newSocials[index] = {
                            ...newSocials[index],
                            icon: e.target.value,
                          };
                          setData({
                            ...data,
                            contact: { ...data.contact, socials: newSocials },
                          });
                        }}
                      />
                    </FormControl>
                  </HStack>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button
          size="lg"
          leftIcon={<FaSave />}
          colorScheme="blue"
          isLoading={saving}
          onClick={handleSave}
          width="full"
          borderRadius="xl"
          mt={4}
        >
          Save All Portfolio Changes
        </Button>
      </VStack>
    </Container>
  );
};

export default ContentEditor;
