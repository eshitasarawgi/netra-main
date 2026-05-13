import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = [
  "Compliance Management",
  "Document Intelligence",
  "Client Onboarding",
  "Task Orchestration",
  "Meeting Minutes",
  "Revenue Tracking",
  "Audit Trails",
  "Partner Portals",
  "Invoice Generation",
  "Obligation Management",
  "File Synchronization",
  "Real-Time Alerts",
];

export function MorphingWords() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-32 sm:py-40">
      <div className="absolute inset-0 bg-radial opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-gradient"
        >
          You Name It, We Automate It
        </motion.h2>

        <div className="mt-12 sm:mt-16 flex items-center justify-center min-h-[3.5rem] sm:min-h-[5rem]">
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[i]}
              initial={{ opacity: 0, y: 18, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(14px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-2xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-gradient-glow"
            >
              {WORDS[i]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mx-auto mt-16 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
        >
          NETRA builds intelligent end-to-end systems that orchestrate your entire operations
          — from compliance to client invoicing.
          <br className="hidden sm:block" />
          <span className="text-foreground/80">One unified infrastructure. Infinite applications.</span>
        </motion.p>
      </div>
    </section>
  );
}
