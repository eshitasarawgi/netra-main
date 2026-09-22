import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { INDUSTRIES } from "@/lib/solutions";
import coreImg from "@/assets/tech/netra-core.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [
    { title: "Industries — NETRA Agentic Systems" },
    { name: "description", content: "Custom agentic systems for family businesses, exporters, financial services, manufacturing, and industrial operations." },
    { property: "og:title", content: "Industries — NETRA" },
    { property: "og:description", content: "AI-native operating systems for businesses where operational intelligence compounds." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return <>
    <section className="border-b border-border"><div className="mx-auto grid max-w-[92rem] items-center gap-14 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28"><Reveal className="lg:col-span-6"><div className="eyebrow">Industries</div><h1 className="mt-7 text-4xl font-light leading-[1.03] sm:text-6xl lg:text-7xl">Built for operational complexity.</h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Where knowledge, decisions and execution must move as one system.</p></Reveal><Reveal delay={.08} className="lg:col-span-6"><img src={coreImg} alt="Connected AI agents coordinating enterprise operations" width={1536} height={1024} loading="eager" className="aspect-[4/3] w-full border border-border object-cover" /></Reveal></div></section>
    <section className="bg-surface"><div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-px overflow-hidden border border-background/60 bg-background/60 md:grid-cols-2">{INDUSTRIES.map((item,i)=><Reveal key={item.n} delay={i*.05}><article className="h-full bg-surface p-8 sm:p-12"><span className="font-mono text-xs text-foreground/55">{item.n}</span><h2 className="mt-12 text-3xl font-medium">{item.name}</h2><p className="mt-5 max-w-xl leading-relaxed text-foreground/70">{item.body}</p></article></Reveal>)}</div></div></section>
    <ClosingCTA />
  </>;
}