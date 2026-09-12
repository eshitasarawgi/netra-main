import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import founderImg from "@/assets/founder-v3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NETRA — Agentic Systems Architecture" },
      { name: "description", content: "NETRA is an agentic systems architecture firm founded by Eshita Sarawgi, building custom enterprise operating systems end to end." },
      { property: "og:title", content: "About NETRA — Agentic Systems Architecture" },
      { property: "og:description", content: "A boutique architecture firm built around one principle: understand the business before engineering its system." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="eyebrow">About NETRA</div>
            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
              We design the operating architecture behind the business.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-4"><div className="eyebrow">Our Operating Philosophy</div></Reveal>
            <div className="space-y-9 lg:col-span-8">
              <Reveal><p className="text-2xl font-medium leading-[1.45] tracking-[-0.015em] text-foreground sm:text-3xl">A powerful system cannot be designed from a feature list. It has to begin with an exact understanding of how the enterprise moves — where decisions happen, where work slows, where risk enters and where knowledge lives.</p></Reveal>
              <Reveal delay={0.05}><p className="text-[17px] leading-[1.8] text-muted-foreground">That is why NETRA combines business process architecture with product design and implementation. We do not leave the hardest part — translating the operating reality into a working system — to another vendor. The same thinking carries from the first map to the deployed product.</p></Reveal>
              <Reveal delay={0.1}><p className="text-[17px] leading-[1.8] text-muted-foreground">The result is not another tool layered over the business. It is infrastructure shaped around the business itself: intelligent where intelligence creates leverage, controlled where control matters, and owned long after it goes live.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="overflow-hidden border border-border bg-background">
                <img src={founderImg} alt="Eshita Sarawgi, founder of NETRA" loading="eager" decoding="async" width={870} height={1920} className="aspect-[4/5] w-full object-cover object-[50%_35%] scale-[0.94] origin-top saturate-[0.88] contrast-[1.04]" />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
              <div className="eyebrow">Founder</div>
              <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">Eshita Sarawgi</h2>
              <p className="mt-3 font-display text-[13px] font-medium uppercase tracking-[0.16em] text-accent">Founder & Systems Architect</p>
              <div className="mt-8 space-y-6 text-[16px] leading-[1.8] text-muted-foreground">
                <p>Eshita founded NETRA to close a gap she saw repeatedly: businesses buying software before anyone had taken the time to understand how they truly operated.</p>
                <p>Her work sits at the intersection of business process architecture, product design and agentic systems implementation. She maps the enterprise in detail, turns that map into a deliberate system architecture, and leads the build through deployment.</p>
                <p>Her conviction is simple: technology should not force a business into someone else's template. The system should be shaped around the intelligence, controls and ambitions of the business it serves.</p>
              </div>
              <Link to="/contact" className="mt-10 inline-block border border-foreground bg-foreground px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-background transition-colors hover:border-accent hover:bg-accent">Start a Conversation</Link>
            </Reveal>
          </div>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}