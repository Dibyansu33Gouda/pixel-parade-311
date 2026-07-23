import { Section, FadeIn } from "./Section";
import { ExternalLink } from "lucide-react";
import ciscoPdf from "@/assets/cisco-python-essentials.pdf";
import cisco2Pdf from "@/assets/cisco-python-essentials-2.pdf";
import microsoftPdf from "@/assets/microsoft-ai-fundamentals.pdf";
import ibmPdf from "@/assets/ibm-ai-fundamentals.pdf";
import pythonImg from "@/assets/thumbs/cert-python.jpg";
import aiGenImg from "@/assets/thumbs/cert-ai-gen.jpg";
import aiVisionImg from "@/assets/thumbs/cert-ai-vision.jpg";
import pandasImg from "@/assets/thumbs/cert-pandas.jpg";
import aiBeginImg from "@/assets/thumbs/cert-ai-begin.jpg";
import hackathonImg from "@/assets/thumbs/cert-hackathon.jpg";

const certs = [
  { title: "Python Essentials 1", org: "Cisco Networking Academy", image: pythonImg, url: ciscoPdf },
  { title: "Python Essentials 2", org: "Cisco Networking Academy", image: pythonImg, url: cisco2Pdf },
  { title: "Introduction to Generative AI and Agents", org: "Microsoft", image: aiGenImg, url: microsoftPdf },
  { title: "AI Fundamentals: Language and Vision in AI", org: "IBM SkillsBuild", image: aiVisionImg, url: ibmPdf },
  { title: "Pandas", org: "Kaggle", image: pandasImg, url: "https://drive.google.com/file/d/1bF5lsMB_dQdFXJo14rumDSMmj05Tme_q/view?usp=drive_link" },
  { title: "AI For Beginners", org: "HP Life", image: aiBeginImg, url: "https://drive.google.com/file/d/1PeryaW4DCuih_gPj_GFmKHn4z_RnVRk1/view?usp=sharing" },
  { title: "VIBE2SHIP Hackathon", org: "Coding Ninjas × Google for Developers", image: hackathonImg, url: "https://drive.google.com/file/d/1YDI5suFNF_C5YIcOrIh5ZBgFK8uqKoMC/view?usp=sharing" },
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
              <div className="relative h-40 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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