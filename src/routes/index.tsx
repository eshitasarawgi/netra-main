import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { SOLUTIONS, METHOD, INDUSTRIES } from "@/lib/solutions";
import coreImg from "@/assets/tech/netra-core.jpg";
import methodImg from "@/assets/tech/netra-method.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NETRA — Custom Agentic Enterprise Architecture" },
      {
        name: "description",
        content:
          "NETRA maps how your business operates, architects the system it needs, and builds, deploys and governs it end to end. Custom agentic enterprise architecture.",
      },
      { property: "og:title", content: "NETRA — Custom Agentic Enterprise Architecture" },
      {
        property: "og:description",
        content:
          "One firm from process mapping to deployment. Agentic systems engineered around how your business actually runs.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid min-h-[calc(100svh-65px)] max-w-[92rem] items-center gap-14 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
          <Reveal className="lg:col-span-5">
            <div className="border-l-2 border-mineral pl-5"><span className="eyebrow">AI-native systems · built around your enterprise</span></div>
            <h1 className="mt-10 text-[3.25rem] font-light leading-[0.96] text-foreground sm:text-6xl lg:text-[5.5rem]">
              Intelligence,<br /><span className="text-mineral">architected.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Custom agentic systems that see the operation, make decisions, and move work forward.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/solutions" className="bg-foreground px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:bg-mineral hover:text-foreground">Explore Systems</Link>
              <Link to="/contact" className="border border-border px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-foreground">Start a Conversation</Link>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[6px] border border-border bg-card shadow-[0_32px_80px_-44px_color-mix(in_oklab,var(--color-mineral)_70%,transparent)]">
              <img src={coreImg} alt="A network of governed AI agents coordinating enterprise operations" loading="eager" decoding="async" fetchPriority="high" width={1536} height={1024} className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between border border-background/70 bg-background/85 px-4 py-3 backdrop-blur-sm">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">Agent orchestration layer</span>
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground"><i className="h-2 w-2 bg-signal" />Active</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Method */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">The NETRA Method</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.08] text-foreground sm:text-5xl">From operational complexity to controlled intelligence.</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <img
              src={methodImg}
              alt="Four-stage AI systems engineering process from raw operations to governed output"
              loading="lazy"
              decoding="async"
              className="mt-14 aspect-[3/1] w-full border border-background/50 object-cover"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-background/60 bg-background/60 lg:grid-cols-4">
            {METHOD.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.06}>
                <div className="h-full bg-surface p-6 sm:p-8">
                  <div className="font-mono text-[10px] tracking-[0.12em] text-foreground/55">{m.n}</div>
                  <h3 className="mt-8 text-xl font-medium text-foreground sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{m.promise}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">What We Solve</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.08] text-foreground sm:text-5xl">Six systems. One operating advantage.</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="group flex min-h-60 h-full flex-col justify-between border-b border-border bg-background p-8 transition-colors hover:bg-mineral sm:border-r"
                >
                  <div>
                    <div className="font-display text-[11px] font-medium tracking-[0.2em] text-accent">{s.n}</div>
                    <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.02em] text-foreground">
                      {s.name}
                    </h3>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-foreground">
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">Who We Build For</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.08] text-foreground sm:text-5xl">Built where operational intelligence compounds.</h2>
          </Reveal>

          <div className="mt-14 border-t border-border">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.n} delay={i * 0.04}>
                <div className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:items-baseline">
                  <div className="font-display text-[11px] font-medium tracking-[0.2em] text-accent md:col-span-1">
                    {ind.n}
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-foreground md:col-span-5 sm:text-3xl">
                    {ind.name}
                  </h3>
                   <span className="text-right text-2xl text-mineral md:col-span-6">→</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
