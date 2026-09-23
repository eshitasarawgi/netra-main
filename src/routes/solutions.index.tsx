import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { SOLUTIONS } from "@/lib/solutions";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Enterprise Solutions — NETRA" },
      { name: "description", content: "Six categories of custom agentic enterprise systems, engineered around how your business actually operates." },
      { property: "og:title", content: "Enterprise Solutions — NETRA" },
      { property: "og:description", content: "From workflow automation to decision support: custom enterprise architecture built end to end." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="eyebrow">Solutions</div>
            <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
              What problems can NETRA solve?
            </h1>
            <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-muted-foreground">
               Six ways to turn operational friction into governed, intelligent systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-24">
          <div className="border-t border-background/70">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                   className="group grid border-b border-background/70 py-8 lg:grid-cols-12 lg:items-center lg:gap-10"
                >
                  <div className="mb-5 lg:col-span-1 lg:mb-0"><span className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] text-foreground">{s.n}</span></div>
                  <div className="overflow-hidden border border-border bg-background p-3 lg:col-span-5">
                    <img src={s.image} alt={`${s.name} AI system visualization`} loading={i < 2 ? "eager" : "lazy"} decoding="async" width={1536} height={1024} className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]" />
                  </div>
                  <div className="pt-6 lg:col-span-6 lg:pt-0">
                    <h2 className="text-2xl font-semibold text-foreground sm:text-4xl">{s.name}</h2>
                    <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase text-foreground">
                      Explore <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}