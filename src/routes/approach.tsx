import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { METHOD } from "@/lib/solutions";
import methodImg from "@/assets/tech/netra-method-premium.jpg";
import mapImg from "@/assets/tech/method-map.jpg";
import architectImg from "@/assets/tech/method-architect.jpg";
import deployImg from "@/assets/tech/method-deploy.jpg";
import governImg from "@/assets/tech/method-govern.jpg";

const METHOD_IMAGES = [mapImg, architectImg, deployImg, governImg];

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
    <section className="bg-background"><div className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-24"><div className="space-y-5">{METHOD.map((m,i)=><Reveal key={m.n} delay={i*.04}><article className={`grid overflow-hidden border border-border ${i % 2 === 1 ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"}`}><div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${i % 2 === 1 ? "lg:order-2" : ""}`}><span className="inline-flex w-fit bg-accent px-2 py-1 font-mono text-[10px]">{m.n}</span><h2 className="mt-6 text-4xl font-semibold sm:text-5xl">{m.title}</h2><p className="mt-4 text-xl font-medium leading-snug">{m.promise}</p><p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">{m.body}</p></div><div className={`bg-card p-3 sm:p-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}><img src={METHOD_IMAGES[i]} alt={`${m.title}: ${m.promise}`} width={1536} height={1024} loading="lazy" className="aspect-[3/2] h-full w-full object-cover" /></div></article></Reveal>)}</div></div></section>
    <ClosingCTA />
  </>;
}