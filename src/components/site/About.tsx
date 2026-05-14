import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-40">
      {/* Ambient lighting */}
      <div className="absolute inset-0 bg-radial" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            About Us
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.035em] text-orange-100">
            Designed For The Firms Defining Tomorrow.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-strong">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                {Array.from({ length: 144 }).map((_, k) => (
                  <div key={k} className="border border-white/[0.025]" />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Founder</div>
                    <div className="mt-2 text-xl font-semibold tracking-[-0.02em] text-foreground">NETRA</div>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I’m less interested in the AI hype — and more interested in building systems that genuinely improve how businesses operate.
            </p>
            <p>
              That idea became the foundation for <span className="text-foreground">NETRA</span>, where I architect custom systems that help businesses function with greater intelligence, speed, and scalability.
            </p>
            <p>
              My approach for every system I’ve designed so far is simple: solutions provided by NETRA should simplify execution, not complicate it.
            </p>
            <p>
              The priorities I work by include understanding operational bottlenecks, identifying high-leverage workflows, and architecting intelligent infrastructures designed for measurable impact.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="!mt-12 text-2xl sm:text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.035em] text-gradient-glow"
            >
              The firms that move first will define the industry. Let’s build yours.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
