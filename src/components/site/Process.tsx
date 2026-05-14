import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "AUDIT", desc: "We Map Your Operations In One Consulting Session." },
  { n: "02", title: "ARCHITECT", desc: "We Design The System Blueprint To Be Implemented." },
  { n: "03", title: "DEPLOY", desc: "We Build And Integrate The Live Infrastructure, With Your Existing Operations." },
  { n: "04", title: "OPTIMISE", desc: "24x7 Monitoring And Scaling With You." },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-28 sm:py-40">
      {/* Cinematic radial */}
      <div className="absolute inset-0 bg-radial" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[600px] rounded-full bg-secondary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            Our Process
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.035em] text-gradient">
            Your Path To Autonomous Success.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-7 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="absolute -top-1/2 left-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                   style={{ background: "radial-gradient(circle at 50% 0%, var(--glow) 0%, transparent 70%)", filter: "blur(40px)", opacity: 0.15 }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-primary/80">{s.n}</span>
                  <span className="h-8 w-8 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-500">
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5h8m0 0L5 1m4 4L5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-10 text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/30 via-secondary/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
