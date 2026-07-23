import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { MouseGlow } from "@/components/portfolio/MouseGlow";
import { Home } from "@/pages/Home";
import { SkillsPage } from "@/pages/SkillsPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { CertificationsPage } from "@/pages/CertificationsPage";
import { EducationPage } from "@/pages/EducationPage";
import { ContactPage } from "@/pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-clip flex flex-col">
        <MouseGlow />
        <Navbar />
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
