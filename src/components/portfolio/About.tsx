import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section, FadeIn } from "./Section";
import { GraduationCap, Sparkles, Target, BookOpen } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Projects Built", value: 8, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "Learning Hours", value: 500, suffix: "+" },
];

const cards = [
  {
    Icon: GraduationCap,
    title: "Academic Journey",
    body: "Currently in my 2nd year of B.Tech in Computer Science Engineering at NIST University, building strong foundations in software and systems.",
  },
  {
    Icon: Sparkles,
    title: "Interests",
    body: "Software development, cloud computing, AI fundamentals, and exploring how modern tools can solve real-world problems.",
  },
  {
    Icon: Target,
    title: "Career Goals",
    body: "Aspiring software engineer aiming to build scalable, intelligent products and contribute to impactful open-source work.",
  },
  {
    Icon: BookOpen,
    title: "Approach",
    body: "Curious by nature, consistent by habit. I learn by building — turning ideas into shipped projects and shareable demos.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A student-developer who loves{" "}
          <span className="text-gradient">building things</span>.
        </>
      }
      description="I blend curiosity with consistency — exploring computer science deeply while shipping projects that connect theory to practice."
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
              By the numbers
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border/60">
              <p className="text-sm text-muted-foreground italic">
                "Every line of code is a step toward becoming the engineer I want to be."
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
