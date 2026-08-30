import { useState, lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import SmoothScroll from "../components/layout/SmoothScroll";
import Preloader from "../components/layout/Preloader";
import FloatingBackground from "../components/layout/FloatingBackground";
import ScrollProgress from "../components/layout/ScrollProgress";
import Footer from "../components/layout/Footer";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import StructuredData from "../components/SEO/StructuredData";
import { AnimatePresence } from "framer-motion";

const Hero = lazy(() => import("../components/sections/Hero"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Experience = lazy(() => import("../components/sections/Experience"));
const GitHubActivity = lazy(() => import("../components/sections/GitHubActivity"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Testimonials = lazy(() => import("../components/sections/Testimonials"));
const Contact = lazy(() => import("../components/sections/Contact"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { data, loading: dataLoading } = useSelector(
    (state: RootState) => state.portfolio,
  );

  const isCompleteLoading = loading || dataLoading || !data;

  return (
    <>
      <AnimatePresence>
        {isCompleteLoading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!isCompleteLoading && (
        <SmoothScroll>
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
        </SmoothScroll>
      )}
    </>
  );
}
