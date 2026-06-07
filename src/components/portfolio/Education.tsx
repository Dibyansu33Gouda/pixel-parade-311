import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, School, BookOpen } from "lucide-react";

const items = [
  {
    Icon: GraduationCap,
    period: "2024 — Present",
    title: "Bachelor of Technology, Computer Science Engineering",
    org: "NIST University",
    detail: "Currently in 2nd year. Coursework spans data structures, databases, operating systems, and software engineering.",
  },
  {
    Icon: School,
    period: "2022 — 2024",
    title: "Higher Secondary — Science (PCM + CS)",
    org: "Pre-University",
    detail: "Built foundations in mathematics and an early love for programming with Python and C.",
  },
  {
    Icon: BookOpen,
    period: "Always",
    title: "Self-directed Learning",
    org: "Online courses, docs & projects",
    detail: "Continuous learning through curated courses, open-source exploration, and building side projects.",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          A timeline of <span className="text-gradient">learning</span>
        </>
      }
      description="My academic path and the habits keeping me sharp outside the classroom."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />
        <div className="space-y-12">
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`md:[direction:ltr] ${left ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <div className="ml-12 md:ml-0">
                    <div className="text-xs font-medium text-primary mb-2">{it.period}</div>
                    <div className="rounded-3xl glass p-6 inline-block text-left">
                      <h3 className="text-lg font-semibold">{it.title}</h3>
                      <div className="mt-1 text-sm text-muted-foreground font-medium">{it.org}</div>
                      <p className="mt-3 text-sm text-muted-foreground">{it.detail}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-2 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent-2 text-primary-foreground shadow-glow"
                  >
                    <it.Icon className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
