import { Routes, Route } from "react-router-dom";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:slug" element={<ProjectPage />} />
        {/* Legacy static URLs (…/portfolio/<slug>/index.html) resolve too. */}
        <Route path="/portfolio/:slug/index.html" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
