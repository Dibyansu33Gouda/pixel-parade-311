import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { MouseGlow } from "@/components/portfolio/MouseGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dibyansu Gouda — CSE Student & Developer Portfolio" },
      { name: "description", content: "Portfolio of Dibyansu Gouda, B.Tech CSE student at NIST University. Software, cloud, and AI projects." },
      { property: "og:title", content: "Dibyansu Gouda — Portfolio" },
      { property: "og:description", content: "B.Tech CSE student at NIST University. Software, cloud, and AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
