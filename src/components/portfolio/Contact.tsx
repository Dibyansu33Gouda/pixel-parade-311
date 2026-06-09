import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { Section, FadeIn } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build <span className="text-gradient">something</span>
        </>
      }
      description="Open to internships, collaborations, and a good conversation about tech. I'll reply soon."
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <FadeIn>
          <div className="h-full rounded-3xl glass-strong p-7 shadow-glow flex flex-col gap-5">
            <a
              href="mailto:babugoudaa44@gmail.com"
              className="group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent-2 text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium truncate">babugoudaa44@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+917852918341"
              className="group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-2 to-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="font-medium truncate">+91 78529 18341</div>
              </div>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-3 to-primary text-primary-foreground">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="font-medium">@dibyansu</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dibyansu-gouda-b5b432379"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-2 to-accent-3 text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="font-medium">in/dibyansu-gouda</div>
              </div>
            </a>
            <div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <MapPin className="h-4 w-4" /> NIST University, India
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 2500);
            }}
            className="rounded-3xl glass p-7 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-muted-foreground">Name</span>
                <input
                  required
                  className="mt-1.5 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  className="mt-1.5 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Subject</span>
              <input
                className="mt-1.5 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="What's this about?"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                className="mt-1.5 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="Tell me a little about your idea or opportunity…"
              />
            </label>
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-glow transition-transform hover:scale-[1.02]"
            >
              {sent ? "Sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}
