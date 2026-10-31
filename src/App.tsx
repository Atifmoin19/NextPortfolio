import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { trackPageview } from "./lib/analytics";
import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "pages/Home";
import { MotionPreferenceProvider } from "./lib/motionPreference";
import { SectionTintProvider } from "./lib/sectionTint";
import { fetchPortfolioData } from "store/slices/portfolioSlice";
import type { AppDispatch } from "store";
import { apiClient } from "./services/apiClient";

// Only Home ships in the first bundle. Case studies and the admin (recharts, the content
// editor) load when visited, so a first-time visitor doesn't download them.
const ProjectDetail = lazy(() => import("pages/ProjectDetail"));
const AdminLogin = lazy(() => import("pages/admin/Login"));
const AdminDashboard = lazy(() => import("pages/admin/Dashboard"));
const ContentEditor = lazy(() => import("pages/admin/ContentEditor"));

// "#main" would be read as a route by HashRouter, so the link moves focus itself.
const SkipLink = () => (
  <a
    className="skip-link"
    href="#main"
    onClick={(e) => {
      e.preventDefault();
      const main = document.getElementById("main");
      main?.focus({ preventScroll: true });
      main?.scrollIntoView({ block: "start" });
    }}
  >
    Skip to main content
  </a>
);

// Overlays (palette, chat, motion opt-in) use Chakra's modal and framer-motion, so they
// load once the page is idle, or straight away on ⌘K / the nav's search button.
const CommandPalette = lazy(() => import("./components/shared/CommandPalette"));
const ChatWidget = lazy(() => import("./components/shared/ChatWidget"));
const MotionOptInPill = lazy(() => import("./components/shared/MotionOptInPill"));

function DeferredOverlays() {
  const [ready, setReady] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    if (ready) return;
    const arm = () => setReady(true);
    const openPalette = () => {
      setPaletteOpen(true);
      arm();
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("toggle-command-palette", openPalette);
    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle ? window.requestIdleCallback(arm, { timeout: 3000 }) : setTimeout(arm, 2000);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("toggle-command-palette", openPalette);
      if (hasIdle) window.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, [ready]);

  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <CommandPalette initialOpen={paletteOpen} />
      <ChatWidget />
      <MotionOptInPill />
    </Suspense>
  );
}

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPortfolioData());
    apiClient.warmUp(); // start waking the free-tier API before chat/contact need it
  }, [dispatch]);

  return (
    <MotionPreferenceProvider>
      <Router>
        <PageTracker />
        <SectionTintProvider>
        <SkipLink />
        <DeferredOverlays />
          <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/content" element={<ContentEditor />} />
          </Routes>
          </Suspense>
        </SectionTintProvider>
      </Router>
    </MotionPreferenceProvider>
  );
}

export default App;
