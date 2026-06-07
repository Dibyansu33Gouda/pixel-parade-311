import { Section, FadeIn } from "./Section";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Python for Everybody", org: "Coursera", gradient: "from-violet-400 to-indigo-400" },
  { title: "Introduction to Cloud", org: "IBM SkillsBuild", gradient: "from-sky-400 to-cyan-400" },
  { title: "AI Fundamentals", org: "Microsoft Learn", gradient: "from-pink-400 to-rose-400" },
  { title: "SQL Essentials", org: "HackerRank", gradient: "from-amber-400 to-orange-400" },
  { title: "Git & GitHub Basics", org: "freeCodeCamp", gradient: "from-emerald-400 to-teal-400" },
  { title: "Web Dev Bootcamp (in progress)", org: "Udemy", gradient: "from-fuchsia-400 to-pink-400" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={
        <>
          Credentials & <span className="text-gradient">milestones</span>
        </>
      }
      description="A growing collection of certifications marking my self-learning journey."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.06}>
            <div className="group h-full rounded-3xl glass overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className={`relative h-28 bg-gradient-to-br ${c.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.5),transparent_60%)]" />
                <Award className="absolute right-4 top-4 h-6 w-6 text-white/90" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{c.org}</div>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                >
                  View credential <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
