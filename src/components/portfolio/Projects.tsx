import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";

type Cat = "All" | "Python" | "Web" | "Cloud" | "AI";

const projects: { title: string; desc: string; tags: string[]; cats: Cat[]; gradient: string; github?: string }[] = [
  {
    title: "Python To-Do CLI",
    desc: "A command-line to-do app built in Python. Supports adding, deleting, searching tasks by ID, and marking them complete. Data is stored persistently in a JSON file with nested details like priority, category, and deadline.",
    tags: ["Python", "JSON", "CLI"],
    cats: ["Python"],
    gradient: "from-teal-500 to-cyan-600",
    github: "https://github.com/Dibyansu33Gouda/python-todo-cli2",
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
                  <div className={`relative h-40 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_60%)]" />
                    <div className="absolute bottom-3 left-4 text-white/90 font-display text-sm font-semibold">
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
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium transition-transform hover:scale-105"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </a>
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
