import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import todoImg from "@/assets/thumbs/project-todo.jpg";
import careerImg from "@/assets/thumbs/project-career.jpg";
import fifaImg from "@/assets/thumbs/project-fifa.jpg";

type Cat = "All" | "Python" | "Web" | "Cloud" | "AI";

const projects: { title: string; desc: string; tags: string[]; cats: Cat[]; image: string; github?: string; demo?: string }[] = [
  {
    title: "Python To-Do CLI",
    desc: "A command-line to-do app built in Python. Supports adding, deleting, searching tasks by ID, and marking them complete. Data is stored persistently in a JSON file with nested details like priority, category, and deadline.",
    tags: ["Python", "JSON", "CLI"],
    cats: ["Python"],
    image: todoImg,
    github: "https://github.com/Dibyansu33Gouda/python-todo-cli2",
  },
  {
  title: "CareerCompass AI",
  desc: "An AI-powered career roadmap generator. Paste your resume, pick a target role, and get a personalized 30/60/90-day action plan with weekly tasks, ATS resume scanner, mock interview prep, and progress tracking.",
  tags: ["React", "TypeScript", "AI", "Tailwind CSS"],
  cats: ["Web", "AI"],
  image: careerImg,
  github: "https://github.com/Dibyansu33Gouda/career-compass-ai-242",
  demo: "https://career-compass-ai-belv-56zacrjzk-dibyansu-coding.vercel.app/",
  },
  {
  title: "FIFA World Cup 2026 Player & Team Analysis ",
  desc: "Cleaned and analysed a player/team performances dataset - fixed a chained-assignment bug and a datetime parsing issue, then built groupby aggregation pipelines with per-90 normalization to compare players fairly across playing time.",
  tags: ["Python" , "Pandas" , "NumPy" , "EDA"],
  cats:["Python" , "AI"] as Cat[],
  image: fifaImg,
  github: "https://github.com/Dibyansu33Gouda/kaggle_practice_dataset",
  },
];

const cats: Cat[] = ["All", "Python", "Web", "Cloud", "AI"];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="transition-transform duration-200 will-change-transform"
    >
      {children}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = projects.filter((p) => filter === "All" || p.cats.includes(filter));

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I've <span className="text-gradient">built</span>
        </>
      }
      description="A selection of projects exploring software development, web, cloud, and AI."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === c
                ? "bg-foreground text-background shadow-glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard>
                <div className="group h-full rounded-3xl glass overflow-hidden flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={768}
                      height={512}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white font-display text-sm font-semibold drop-shadow">
                      {p.cats[0]}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-2">
                      <a
                        href={p.github ?? "#"}
                        onClick={(e) => { if (!p.github) e.preventDefault(); }}
                        className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-transform hover:scale-105"
                      >
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium transition-transform hover:scale-105"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filtered.length === 0 && (
        <div className="rounded-3xl glass p-12 text-center">
          <p className="text-lg font-semibold">Projects coming soon</p>
          <p className="mt-2 text-sm text-muted-foreground">
            I'm currently building a few projects across software, web, and AI. They'll show up here shortly.
          </p>
        </div>
      )}
    </Section>
  );
}
