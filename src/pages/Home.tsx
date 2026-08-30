import { useState, useEffect, lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Preloader from "../components/layout/Preloader";
import FloatingBackground from "../components/layout/FloatingBackground";
import ScrollProgress from "../components/layout/ScrollProgress";
import Footer from "../components/layout/Footer";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import StructuredData from "../components/SEO/StructuredData";

const importHero = () => import("../components/sections/Hero");
const importSkills = () => import("../components/sections/Skills");
const importExperience = () => import("../components/sections/Experience");
const importGitHubActivity = () => import("../components/sections/GitHubActivity");
const importProjects = () => import("../components/sections/Projects");
const importTestimonials = () => import("../components/sections/Testimonials");
const importContact = () => import("../components/sections/Contact");

const Hero = lazy(importHero);
const Skills = lazy(importSkills);
const Experience = lazy(importExperience);
const GitHubActivity = lazy(importGitHubActivity);
const Projects = lazy(importProjects);
const Testimonials = lazy(importTestimonials);
const Contact = lazy(importContact);

export default function Home() {
  const { data, loading: dataLoading } = useSelector(
    (state: RootState) => state.portfolio,
  );
  const dataReady = !dataLoading && !!data;
  const [handoffDone, setHandoffDone] = useState(false);

  // Prefetch every below-the-fold chunk while the preloader is still playing, so the
  // page is ready to mount (and its signature target measurable) the instant data loads.
  useEffect(() => {
    void Promise.all([
      importHero(),
      importSkills(),
      importExperience(),
      importGitHubActivity(),
      importProjects(),
      importTestimonials(),
      importContact(),
    ]);
  }, []);

  return (
    <>
      {!handoffDone && (
        <Preloader ready={dataReady} onDone={() => setHandoffDone(true)} />
      )}

      {dataReady && (
        <>
          <StructuredData />
          <FloatingBackground />
          <ScrollProgress />

          <Box minH="100vh" position="relative" overflow="hidden">
            <Navbar />
            <main>
              <Suspense fallback={<Box minH="100vh" />}>
                <Hero />
                <Skills />
                <Experience />
                <GitHubActivity />
                <Projects />
                <Testimonials />
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </Box>
        </>
      )}
    </>
  );
}
