import { Section, FadeIn } from "./Section";
import { Code, Wrench, Cpu, Rocket } from "lucide-react";

const groups = [
  {
    Icon: Code,
    title: "Programming",
    items: ["Python", "C", "SQL", "Pandas", "NumPy"],
  },
  {
    Icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    Icon: Cpu,
    title: "Technologies",
    items: ["Cloud Computing", "Databases", "AI Fundamentals", "JSON"],
  },
  {
    Icon: Rocket,
    title: "Currently Learning",
    items: ["Web Development", "DSA", "Azure"],
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
              <div className="flex flex-wrap gap-2">
                {g.items.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
