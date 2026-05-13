import { motion } from "framer-motion";

const CARDS = [
  {
    n: "01",
    title: "AI-Empowered Design",
    desc: "Intelligent systems that adapt to your business — not templates.",
  },
  {
    n: "02",
    title: "Vertical-Specific Intelligence",
    desc: "Industry workflows, pre-trained and production-ready.",
  },
  {
    n: "03",
    title: "Launch in Weeks, Not Months",
    desc: "From discovery to deployed system in 3–4 weeks.",
  },
];

export function WhyNetra() {
  return (
    <section id="why" className="relative bg-background py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              Why NETRA
            </div>
            <h2 className="max-w-2xl text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.035em] text-gradient">
              Engineered for the firms that intend to lead.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl glass p-7 sm:p-8 transition-all duration-700 hover:-translate-y-1 hover:border-glow"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "var(--gradient-glow)" }} />
              <div className="relative">
                <div className="mb-8 aspect-[4/3] w-full rounded-xl border border-border bg-gradient-to-br from-surface to-background overflow-hidden relative">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,var(--glow),transparent_60%)]" />
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_80%_80%,var(--glow-secondary),transparent_60%)]" />
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                    {Array.from({ length: 36 }).map((_, k) => (
                      <div key={k} className="border border-white/[0.03]" />
                    ))}
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
                    NETRA / {c.n}
                  </div>
                </div>
                <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-primary/80">{c.n}</div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
