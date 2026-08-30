import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "pages/Home";
import ProjectDetail from "pages/ProjectDetail";
import AdminLogin from "pages/admin/Login";
import AdminDashboard from "pages/admin/Dashboard";
import ContentEditor from "pages/admin/ContentEditor";
import CommandPalette from "./components/shared/CommandPalette";
import ChatWidget from "./components/shared/ChatWidget";
import SmoothScroll from "./components/layout/SmoothScroll";
import { fetchPortfolioData } from "store/slices/portfolioSlice";
import type { AppDispatch } from "store";

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
  }, [dispatch]);

  return (
    <Router>
      <PageTracker />
      <CommandPalette />
      <ChatWidget />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/content" element={<ContentEditor />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
