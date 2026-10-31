import { lazy, Suspense, useEffect } from "react";
import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import ScrollProgress from "../components/layout/ScrollProgress";
import Footer from "../components/layout/Footer";
import StructuredData from "../components/SEO/StructuredData";
import Hero from "../components/sections/home/Hero";
import StackMarquee from "../components/sections/home/StackMarquee";
import Work from "../components/sections/home/Work";

// Above the fold (Hero, marquee, work list) ships in the main chunk and paints straight
// from the local seed content. Everything below loads in its own chunk, each behind its
// own Suspense with a placeholder roughly the section's height, so nothing jumps.
const loaders = {
  skills: () => import("../components/sections/ps/SkillsPit"),
  experience: () => import("../components/sections/ps/CareerNotes"),
  now: () => import("../components/sections/ps/NowHowIWork"),
  openSource: () => import("../components/sections/ps/OpenSource"),
  breather: () => import("../components/sections/ps/Breather"),
  contact: () => import("../components/sections/ps/ContactPostcard"),
};
const SkillsPit = lazy(loaders.skills);
const CareerNotes = lazy(loaders.experience);
const NowHowIWork = lazy(loaders.now);
const OpenSource = lazy(loaders.openSource);
const Breather = lazy(loaders.breather);
const ContactPostcard = lazy(loaders.contact);

// The section's own id goes on the placeholder too, so a nav jump that lands before the
// chunk does still finds its target.
function Slot({ id, h, children }: { id: string; h: string; children: ReactNode }) {
  return (
    <Suspense fallback={<div id={id} className="ps-sec" style={{ minHeight: h }} aria-busy="true" />}>
      {children}
    </Suspense>
  );
}

export default function Home() {
  useEffect(() => {
    // Fetch the below-the-fold chunks once the first paint is done.
    const prefetch = () => {
      Object.values(loaders).forEach((load) => void load());
      void import("./ProjectDetail");
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(prefetch, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <Box id="top" minH="100vh" position="relative" overflowX="clip">
        <Navbar />
        <Box as="main" id="main" tabIndex={-1} minH="100vh" _focus={{ outline: "none" }}>
          <Hero />
          <StackMarquee />
          <Work />
          <Slot id="skills" h="clamp(850px, 120vw, 1050px)">
            <SkillsPit />
          </Slot>
          <Slot id="experience" h="clamp(1000px, 200vw, 1800px)">
            <CareerNotes />
          </Slot>
          <Slot id="now" h="clamp(1030px, 240vw, 2200px)">
            <NowHowIWork />
          </Slot>
          <Slot id="open-source" h="clamp(980px, 180vw, 1700px)">
            <OpenSource />
          </Slot>
          <Slot id="breather" h="1100px">
            <Breather />
          </Slot>
          <Slot id="contact" h="clamp(890px, 140vw, 1100px)">
            <ContactPostcard />
          </Slot>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
