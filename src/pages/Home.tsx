import { lazy, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Navbar from "../components/layout/Navbar";
import ScrollProgress from "../components/layout/ScrollProgress";
import Footer from "../components/layout/Footer";
import StructuredData from "../components/SEO/StructuredData";
import type { RootState } from "../store";

const Hero = lazy(() => import("../components/sections/home/Hero"));
const StackMarquee = lazy(() => import("../components/sections/home/StackMarquee"));
const Work = lazy(() => import("../components/sections/home/Work"));
const SkillsPit = lazy(() => import("../components/sections/ps/SkillsPit"));
const CareerNotes = lazy(() => import("../components/sections/ps/CareerNotes"));
const NowHowIWork = lazy(() => import("../components/sections/ps/NowHowIWork"));
const OpenSource = lazy(() => import("../components/sections/ps/OpenSource"));
const Breather = lazy(() => import("../components/sections/ps/Breather"));
const ContactPostcard = lazy(() => import("../components/sections/ps/ContactPostcard"));

export default function Home() {
  const dataReady = useSelector((state: RootState) => !!state.portfolio.data);

  return (
    <>
      {dataReady && <StructuredData />}
      <ScrollProgress />
      <Box id="top" minH="100vh" position="relative" overflowX="clip">
        <Navbar />
        <Box as="main" minH="100vh">
          {dataReady && (
            <Suspense fallback={<Box minH="100vh" />}>
              <Hero />
              <StackMarquee />
              <Work />
              <SkillsPit />
              <CareerNotes />
              <NowHowIWork />
              <OpenSource />
              <Breather />
              <ContactPostcard />
            </Suspense>
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
