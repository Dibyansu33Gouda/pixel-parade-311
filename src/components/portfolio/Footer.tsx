import { Github, Linkedin, Mail, Heart } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border bg-mesh">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent-2 text-primary-foreground">D</span>
            Dibyansu Gouda
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            CSE student at NIST University. Building, learning, and shipping every day.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Quick links</div>
          <ul className="grid grid-cols-2 gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Connect</div>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/" },
              { Icon: Linkedin, href: "https://linkedin.com/" },
              { Icon: Mail, href: "mailto:dibyansu@example.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full glass hover:scale-110 transition-transform"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Dibyansu Gouda. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            Designed & developed by Dibyansu Gouda <Heart className="h-3 w-3 text-primary fill-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
