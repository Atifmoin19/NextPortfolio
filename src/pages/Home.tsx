import { useState, lazy, Suspense } from "react";

import { Box } from "@chakra-ui/react";
import Navbar from "store/../components/layout/Navbar";
import SmoothScroll from "store/../components/layout/SmoothScroll";
import Preloader from "store/../components/layout/Preloader";
import StackSection from "store/../components/layout/StackSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolioData } from "../store/slices/portfolioSlice";
import type { RootState, AppDispatch } from "../store";
import { portfolioService } from "../services/portfolioService";

const Hero = lazy(() => import("store/../components/sections/Hero"));
const Skills = lazy(() => import("store/../components/sections/Skills"));
const Projects = lazy(() => import("store/../components/sections/Projects"));
const Experience = lazy(
  () => import("store/../components/sections/Experience"),
);
const Contact = lazy(() => import("store/../components/sections/Contact"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading: dataLoading } = useSelector(
    (state: RootState) => state.portfolio,
  );

  useEffect(() => {
    dispatch(fetchPortfolioData());

    // Only increment view if not already done in this session
    const hasIncremented = sessionStorage.getItem("view_incremented");
    if (!hasIncremented) {
      portfolioService.incrementViewCount();
      portfolioService.addAnalyticsEvent();
      sessionStorage.setItem("view_incremented", "true");
    }
  }, [dispatch]);

  const isCompleteLoading = loading || dataLoading || !data;

  return (
    <>
      {isCompleteLoading && <Preloader onComplete={() => setLoading(false)} />}

      {!isCompleteLoading && (
        <SmoothScroll>
          <Box minH="100vh" bg="black">
            {" "}
            {/* Set generic background to black */}
            <Navbar />
            <main>
              <Suspense fallback={<Box bg="black" minH="100vh" />}>
                <StackSection index={1} bgColor="#E6E1D6">
                  <Hero />
                </StackSection>

                <StackSection index={2} bgColor="#111111">
                  <Skills />
                </StackSection>

                <StackSection index={3} bgColor="#0F392B">
                  <Experience />
                </StackSection>

                <StackSection index={4} bgColor="#111111">
                  <Projects />
                </StackSection>

                <StackSection index={5} bgColor="#E6E1D6">
                  <Contact />
                </StackSection>
              </Suspense>
            </main>
            <Box
              as="footer"
              py={2}
              textAlign="center"
              fontSize="sm"
              color="whiteAlpha.600"
              bg="black"
              position="relative"
              zIndex={100}
            >
              © {new Date().getFullYear()} Atif Moin. All rights reserved.
            </Box>
          </Box>
        </SmoothScroll>
      )}
    </>
  );
}
