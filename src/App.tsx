import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "pages/Home";
import CommandPalette from "./components/shared/CommandPalette";
import ChatWidget from "./components/shared/ChatWidget";
import MotionOptInPill from "./components/shared/MotionOptInPill";
import SmoothScroll from "./components/layout/SmoothScroll";
import { MotionPreferenceProvider } from "./lib/motionPreference";
import { fetchPortfolioData } from "store/slices/portfolioSlice";
import type { AppDispatch } from "store";
import { apiClient } from "./services/apiClient";

// Only Home ships in the first bundle. Case studies and the admin (recharts, the content
// editor) load when visited, so a first-time visitor doesn't download them.
const ProjectDetail = lazy(() => import("pages/ProjectDetail"));
const AdminLogin = lazy(() => import("pages/admin/Login"));
const AdminDashboard = lazy(() => import("pages/admin/Dashboard"));
const ContentEditor = lazy(() => import("pages/admin/ContentEditor"));

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
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
        <CommandPalette />
        <ChatWidget />
        <MotionOptInPill />
        <SmoothScroll>
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
        </SmoothScroll>
      </Router>
    </MotionPreferenceProvider>
  );
}

export default App;
