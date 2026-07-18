import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";
import { Code, Wrench, Cpu, Rocket } from "lucide-react";

const groups = [
  {
    Icon: Code,
    title: "Programming",
    items: [
      { name: "Python", level: 85 },
      { name: "C", level: 78 },
      { name: "SQL", level: 72 },
      { name: "Pandas", level: 70 },
      { name: "numpy" , level: 65 },
    ],
  },
  {
    Icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 82 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    Icon: Cpu,
    title: "Technologies",
    items: [
      { name: "Cloud Computing", level: 65 },
      { name: "Databases", level: 80 },
      { name: "AI Fundamentals", level: 60 },
      { name: "JSON" , level: 70 },
    ],
  },
  {
    Icon: Rocket,
    title: "Currently Learning",
    items: [
      { name: "Web Development", level: 55 },
      { name: "DSA", level: 60 },
      { name: "Azure", level: 45 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Tools of my <span className="text-gradient">craft</span>
        </>
      }
      description="A growing toolkit — from programming fundamentals to the technologies powering modern software."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, idx) => (
          <FadeIn key={g.title} delay={idx * 0.08}>
            <div className="h-full rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-3/60 to-primary/60 text-primary-foreground mb-4">
                <g.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-5">{g.title}</h3>
              <div className="space-y-4">
                {g.items.map((it, i) => (
                  <div key={it.name}>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span>{it.name}</span>
                      <span className="text-muted-foreground">{it.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary via-accent-2 to-accent-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
