import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { INDUSTRIES } from "@/lib/solutions";

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
    <section className="border-b border-border"><div className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-24"><Reveal><div className="inline-flex bg-accent px-3 py-2"><div className="eyebrow">Industries</div></div><h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">Built for operational complexity.</h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Where knowledge, decisions and execution must move as one intelligent system.</p></Reveal></div></section>
    <section className="bg-surface"><div className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-24"><div className="space-y-16">{INDUSTRIES.map((item,i)=><Reveal key={item.n} delay={i*.05}><article id={item.slug} className="grid scroll-mt-24 overflow-hidden border border-background/70 bg-background lg:grid-cols-12"><div className="p-7 sm:p-10 lg:col-span-5 lg:p-12"><span className="inline-flex bg-accent px-2 py-1 font-mono text-[10px]">{item.n}</span><h2 className="mt-7 text-3xl font-semibold sm:text-4xl">{item.name}</h2><p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{item.body}</p><div className="mt-10 border-t border-border pt-5 font-mono text-[10px] uppercase text-foreground">Custom architecture · governed deployment</div></div><div className="border-t border-border p-3 sm:p-5 lg:col-span-7 lg:border-l lg:border-t-0"><img src={item.image} alt={`Agentic operating architecture for ${item.name}`} width={1536} height={1024} loading={i === 0 ? "eager" : "lazy"} className="aspect-[3/2] w-full object-cover" /></div></article></Reveal>)}</div></div></section>
    <ClosingCTA />
  </>;
}