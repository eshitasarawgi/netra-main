import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { METHOD } from "@/lib/solutions";
import methodImg from "@/assets/tech/netra-method.jpg";

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
      <div className="mx-auto grid max-w-[92rem] items-end gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <Reveal className="lg:col-span-7"><div className="eyebrow">The NETRA Method</div><h1 className="mt-7 text-4xl font-light leading-[1.03] sm:text-6xl lg:text-7xl">One architecture.<br/>One accountable team.</h1></Reveal>
        <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9"><p className="text-lg leading-relaxed text-foreground/70">From the first process map to the intelligence running in production.</p></Reveal>
      </div>
    </section>
    <section className="border-b border-border"><div className="mx-auto max-w-[92rem] px-6 py-12 lg:px-10 lg:py-16"><Reveal><img src={methodImg} alt="NETRA's four-stage agentic systems engineering method" width={1536} height={1024} loading="eager" className="aspect-[2/1] w-full object-cover" /></Reveal></div></section>
    <section><div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">{METHOD.map((m,i)=><Reveal key={m.n} delay={i*.05}><article className="h-full bg-background p-8 sm:p-12"><span className="font-mono text-xs text-muted-foreground">{m.n}</span><h2 className="mt-12 text-3xl font-medium">{m.title}</h2><p className="mt-4 text-lg font-medium">{m.promise}</p><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{m.body}</p></article></Reveal>)}</div></div></section>
    <ClosingCTA />
  </>;
}