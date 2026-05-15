import { motion } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-lines";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      {/* Shader layer */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>

      {/* Vignette + tint to ground the shader in palette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,8,22,0.85)_85%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/70 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--glow)] animate-pulse-glow" />
          Agentic Operating Systems
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease, delay: 0.05 }}
          className="mt-4 sm:mt-6 sm:text-xl md:text-2xl tracking-[-0.01em] text-foreground/90 text-lg font-mono text-stone-50 shadow-md font-semibold"
          style={{ fontSize: "clamp(4.5rem, 18vw, 14rem)" }}
        >
          NETRA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="mt-3 max-w-xl text-muted-foreground/80 text-xl font-bold text-orange-100 sm:text-xl font-sans"
        >
          Agentic Systems Architecture
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="mt-3 max-w-xl sm:text-base text-muted-foreground/80 text-xl font-bold font-sans text-orange-100"
        >
          Intelligent Infrastructure For Modern Businesses
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
          className="mt-10 sm:mt-12"
        >
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-3 rounded-2xl glass-strong px-7 py-4 text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-glow"
          >
            <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gradient-glow)" }} />
            <span className="relative">Get In Touch</span>
            <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-transform duration-500 group-hover:translate-x-0.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5h8m0 0L5 1m4 4L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 1.1 }}
          className="mt-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70"
        >
          <span>Scroll</span>
          <span className="relative h-8 w-px overflow-hidden bg-border">
            <span className="absolute inset-x-0 top-0 h-3 bg-primary animate-[float-slow_2.4s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
