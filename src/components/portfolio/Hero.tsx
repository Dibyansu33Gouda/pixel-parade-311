import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Download, Code2, Cloud, Sparkles, Database, Cpu, GitBranch } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const floatIcons = [
  { Icon: Code2, top: "10%", left: "8%", delay: 0 },
  { Icon: Cloud, top: "18%", right: "12%", delay: 0.4 },
  { Icon: Sparkles, top: "65%", left: "5%", delay: 0.8 },
  { Icon: Database, top: "70%", right: "8%", delay: 1.2 },
  { Icon: Cpu, top: "38%", left: "2%", delay: 1.6 },
  { Icon: GitBranch, top: "45%", right: "3%", delay: 2 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-mesh pt-28 pb-16"
    >
      {/* Floating tech icons */}
      {floatIcons.map(({ Icon, delay, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={pos as React.CSSProperties}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -16, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay },
            scale: { duration: 0.8, delay },
            y: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <div className="glass rounded-2xl p-3 shadow-glow">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for internships & collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Dibyansu <span className="text-gradient">Gouda</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 text-muted-foreground font-medium">
              Computer Science Student & Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Computer Science Engineering Student at{" "}
            <span className="text-foreground font-semibold">NIST University</span>. Passionate
            about software development, cloud technologies, AI, and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-br from-primary/30 via-accent-2/30 to-accent-3/30 rounded-full" />
            <img
              src={heroImg}
              alt="Developer workspace illustration"
              width={1024}
              height={1024}
              className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
