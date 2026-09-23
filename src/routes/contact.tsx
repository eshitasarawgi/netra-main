import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Conversation — NETRA" },
      { name: "description", content: "Tell NETRA how your business operates today. Begin a discovery conversation about custom agentic enterprise architecture." },
      { property: "og:title", content: "Start a Conversation — NETRA" },
      { property: "og:description", content: "Every NETRA engagement begins with understanding the business, not pitching software." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <div className="eyebrow">Start a Conversation</div>
           <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">What should your business do next?</h1>
           <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-muted-foreground">Show us the friction. We’ll find the system behind it.</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-border pt-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7"><ContactForm /></Reveal>
          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <div className="eyebrow">What Happens Next</div>
            <ol className="mt-6 border-t border-border">
              {[
                ["01", "We read the operating context you share."],
                ["02", "We schedule a focused discovery conversation."],
                ["03", "We define where accurate process mapping should begin."],
              ].map(([n, text]) => <li key={n} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-5"><span className="font-display text-[10px] tracking-[0.18em] text-accent">{n}</span><span className="text-[15px] leading-relaxed text-foreground">{text}</span></li>)}
            </ol>
            <div className="mt-10 border-t border-border pt-7"><div className="inline-flex bg-accent px-3 py-2"><div className="eyebrow">NETRA · India</div></div><p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">Your message routes directly to the founder’s office.</p></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}