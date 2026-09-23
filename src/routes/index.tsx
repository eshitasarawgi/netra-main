import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { SolutionShowcase } from "@/components/site/SolutionShowcase";
import { IndustryShowcase } from "@/components/site/IndustryShowcase";
import { METHOD } from "@/lib/solutions";
import coreImg from "@/assets/tech/netra-core-premium.jpg";
import methodImg from "@/assets/tech/netra-method-premium.jpg";

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
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid min-h-[calc(100svh-65px)] max-w-[92rem] items-center gap-12 px-6 py-14 lg:grid-cols-12 lg:px-10 lg:py-18">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex bg-accent px-3 py-2"><span className="eyebrow">AI-native systems · built around your enterprise</span></div>
            <h1 className="mt-9 text-[3.25rem] font-semibold leading-[0.96] text-foreground sm:text-6xl lg:text-[5.5rem]">
              Intelligence,<br /><span className="text-muted-foreground">architected.</span>
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
            <div className="relative overflow-hidden border border-border bg-card p-3 sm:p-5">
              <img src={coreImg} alt="A network of governed AI agents coordinating enterprise operations" loading="eager" decoding="async" fetchPriority="high" width={1536} height={1024} className="aspect-[3/2] w-full object-cover" />
              <div className="absolute inset-x-7 bottom-7 flex items-center justify-between border border-border bg-background/95 px-4 py-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">Agent orchestration layer</span>
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground"><i className="h-2 w-2 bg-signal" />Active</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Method */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal><div className="inline-flex bg-accent px-3 py-2"><div className="eyebrow">The NETRA Method</div></div><h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] text-foreground sm:text-5xl">Map. Architect. Deploy. Govern.</h2></Reveal>
            <Reveal delay={0.08}><div className="border border-background/70 bg-background p-3"><img src={methodImg} alt="Four-stage AI systems engineering process" loading="lazy" decoding="async" width={1536} height={1024} className="aspect-[3/2] w-full object-cover" /></div></Reveal>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-background/60 bg-background/60 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.06}>
                <div className="h-full bg-surface p-6 sm:p-8">
                   <div className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] text-foreground">{m.n}</div>
                   <h3 className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
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
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">What We Solve</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.08] text-foreground sm:text-5xl">Six systems. One operating advantage.</h2>
          </Reveal>

          <Reveal><div className="mt-12"><SolutionShowcase /></div></Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">Who We Build For</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.08] text-foreground sm:text-5xl">Built where operational intelligence compounds.</h2>
          </Reveal>

          <Reveal><div className="mt-12"><IndustryShowcase compact /></div></Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background py-8">
        <div className="mx-auto flex max-w-[92rem] flex-wrap items-center gap-x-10 gap-y-4 px-6 lg:px-10">
          <span className="eyebrow bg-accent px-3 py-2">Technology ecosystem</span>
          {["OpenAI", "Anthropic", "Google Cloud", "Microsoft Azure", "AWS", "PostgreSQL", "Cloudflare"].map((name) => <span key={name} className="font-display text-sm font-semibold text-muted-foreground">{name}</span>)}
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
