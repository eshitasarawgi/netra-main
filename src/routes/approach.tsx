import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { METHOD } from "@/lib/solutions";
import methodImg from "@/assets/tech/netra-method-premium.jpg";

export const Route = createFileRoute("/approach")({
  head: () => ({ meta: [
    { title: "The NETRA Method — Map, Architect, Deploy, Govern" },
    { name: "description", content: "NETRA maps the operation, architects the agentic system, deploys it, and governs performance end to end." },
    { property: "og:title", content: "The NETRA Method" },
    { property: "og:description", content: "One accountable path from operational reality to governed agentic systems." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ApproachPage,
});

function ApproachPage() {
  return <>
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-[92rem] items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
        <Reveal className="lg:col-span-5"><div className="inline-flex bg-accent px-3 py-2"><div className="eyebrow">The NETRA Method</div></div><h1 className="mt-7 text-4xl font-semibold leading-[1.03] sm:text-6xl">One architecture.<br/>One accountable team.</h1><p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">From the first process map to the intelligence running in production.</p></Reveal>
        <Reveal delay={0.08} className="lg:col-span-7"><div className="border border-background/70 bg-background p-3 sm:p-5"><img src={methodImg} alt="NETRA's four-stage agentic systems engineering method" width={1536} height={1024} loading="eager" className="aspect-[3/2] w-full object-cover" /></div></Reveal>
      </div>
    </section>
    <section><div className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-24"><div className="border-t border-border">{METHOD.map((m,i)=><Reveal key={m.n} delay={i*.05}><article className="grid gap-5 border-b border-border py-9 lg:grid-cols-12 lg:items-start"><span className="inline-flex w-fit bg-accent px-2 py-1 font-mono text-[10px] lg:col-span-1">{m.n}</span><h2 className="text-3xl font-semibold lg:col-span-3">{m.title}</h2><p className="text-lg font-medium lg:col-span-3">{m.promise}</p><p className="max-w-xl leading-relaxed text-muted-foreground lg:col-span-5">{m.body}</p></article></Reveal>)}</div></div></section>
    <ClosingCTA />
  </>;
}