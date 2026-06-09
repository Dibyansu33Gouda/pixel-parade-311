import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";
import { GraduationCap, Sparkles, Target, BookOpen } from "lucide-react";

const techStack = ["Python", "C", "Git", "GitHub"];

const cards = [
  {
    Icon: GraduationCap,
    title: "Academic Journey",
    body: "B.Tech CSE at NIST University, Berhampur (2025 batch). Currently in my 3rd semester, learning the core of computer science.",
  },
  {
    Icon: Sparkles,
    title: "Interests",
    body: "AI, software development, and building real projects that actually work. I like turning ideas into code.",
  },
  {
    Icon: Target,
    title: "What I Do",
    body: "Write C programs, explore Python, work with Git, and keep building small projects to learn faster.",
  },
  {
    Icon: BookOpen,
    title: "How I Learn",
    body: "By doing. Reading docs is fine, but writing code and fixing bugs is where the real learning happens.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A student who likes to{" "}
          <span className="text-gradient">build stuff</span>.
        </>
      }
      description="I'm a B.Tech CSE student at NIST University, Berhampur (2025 batch), currently in my 3rd semester. I'm interested in AI, software development, and building real projects. I enjoy learning by doing — from writing C programs to exploring Python and working with Git."
    >
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent-2 text-primary-foreground mb-4">
                  <c.Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="rounded-3xl glass-strong p-8 shadow-glow">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Tech Stack
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {techStack.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium border border-border/60"
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border/60">
              <p className="text-sm text-muted-foreground italic">
                "The best way to learn is to build something that breaks, then fix it."
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
