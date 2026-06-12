import { Section, FadeIn } from "./Section";
import { Award, ExternalLink } from "lucide-react";
import ciscoPdf from "@/assets/cisco-python-essentials.pdf";
import cisco2Pdf from "@/assets/cisco-python-essentials-2.pdf";
import microsoftPdf from "@/assets/microsoft-ai-fundamentals.pdf";
import ibmPdf from "@/assets/ibm-ai-fundamentals.pdf";

const certs = [
  {
    title: "Python Essentials 1",
    org: "Cisco Networking Academy",
    gradient: "from-teal-500 to-cyan-600",
    url: ciscoPdf,
  },
  {
    title: "Python Essentials 2",
    org: "Cisco Networking Academy",
    gradient: "from-teal-600 to-green-600",
    url: cisco2Pdf,
  },
  {
    title: "Introduction to Generative AI and Agents",
    org: "Microsoft",
    gradient: "from-sky-500 to-blue-600",
    url: microsoftPdf,
  },
  {
    title: "AI Fundamentals: Language and Vision in AI",
    org: "IBM SkillsBuild",
    gradient: "from-indigo-500 to-blue-700",
    url: ibmPdf,
  },
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
            <a
              href={c.url ?? undefined}
              target={c.url ? "_blank" : undefined}
              rel={c.url ? "noopener noreferrer" : undefined}
              onClick={(e) => { if (!c.url) e.preventDefault(); }}
              className={`group block h-full rounded-3xl glass overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${c.url ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className={`relative h-28 bg-gradient-to-br ${c.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.5),transparent_60%)]" />
                <Award className="absolute right-4 top-4 h-6 w-6 text-white/90" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{c.org}</div>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    View credential <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    Credential coming soon
                  </span>
                )}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}