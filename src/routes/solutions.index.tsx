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
              Outcome-led, never product-led. Six engineering categories that turn operational complexity into a clear, governed business architecture.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="group block border border-border bg-background"
                >
                  <img
                    src={s.image}
                    alt={`${s.name} architectural concept`}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    width={1408}
                    height={912}
                    className="aspect-[16/9] w-full border-b border-border object-cover saturate-[0.75] transition-[filter] duration-500 group-hover:saturate-100"
                  />
                  <div className="p-7 sm:p-9">
                    <div className="font-display text-[11px] font-medium tracking-[0.2em] text-accent">{s.n}</div>
                    <h2 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">{s.name}</h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-foreground">
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