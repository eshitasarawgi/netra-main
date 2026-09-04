import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { SOLUTIONS, METHOD, INDUSTRIES } from "@/lib/solutions";
import methodImg from "@/assets/architecture/method.jpg";

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
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[92rem] px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-32">
          <Reveal>
            <div className="eyebrow">Agentic Enterprise Architecture</div>
            <h1 className="mt-8 max-w-5xl text-[2.75rem] font-bold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[5.25rem]">
              Custom agentic enterprise architecture.
              <span className="block text-muted-foreground">Built end to end.</span>
            </h1>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 border-t border-border pt-12 lg:grid-cols-12">
            <Reveal delay={0.05} className="lg:col-span-7">
              <ul className="max-w-2xl">
                {[
                  ["We map", "how your business actually operates — not how the manual says it does."],
                  ["We architect", "the system it needs to become, with every decision tied to an outcome."],
                  ["We deploy and govern", "it ourselves, and stay accountable long after go-live."],
                ].map(([lead, rest]) => (
                  <li key={lead} className="border-b border-border py-5 text-[17px] leading-relaxed sm:text-xl">
                    <span className="font-display font-semibold text-foreground">{lead} </span>
                    <span className="text-muted-foreground">{rest}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/solutions"
                  className="border border-foreground bg-foreground px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-background transition-colors hover:border-accent hover:bg-accent"
                >
                  Explore Solutions
                </Link>
                <Link
                  to="/contact"
                  className="border border-border px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:border-foreground"
                >
                  Start a Conversation
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-5">
              <div className="border border-border bg-surface p-8">
                <div className="eyebrow">The Difference</div>
                <p className="mt-5 text-[17px] leading-relaxed text-foreground">
                  Most firms hand you a strategy deck or a piece of software. NETRA does the whole
                  arc — accurate business process mapping, system architecture, product design,
                  implementation, deployment and ongoing governance — under one accountable roof.
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  That end-to-end ownership is why the systems we build change how a business runs,
                  instead of adding one more tool to it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">The NETRA Method</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              From operational complexity to architected clarity.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              We do not begin with technology. We begin with the enterprise — how it operates, where it
              must go, what architecture gets it there, and who remains accountable afterwards.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <img
              src={methodImg}
              alt="Architectural structure representing NETRA's system architecture method"
              loading="lazy"
              decoding="async"
              className="mt-14 h-[240px] w-full border border-border object-cover sm:h-[340px]"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
            {METHOD.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.06}>
                <div className="border-t border-foreground pt-6">
                  <div className="font-display text-[11px] font-medium tracking-[0.2em] text-accent">{m.n}</div>
                  <h3 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[17px] font-medium text-foreground">{m.promise}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{m.body}</p>
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
            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Six engineering categories. One operating architecture.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col justify-between border-b border-border bg-background p-8 transition-colors hover:bg-card sm:border-r"
                >
                  <div>
                    <div className="font-display text-[11px] font-medium tracking-[0.2em] text-accent">{s.n}</div>
                    <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.02em] text-foreground">
                      {s.name}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.summary}</p>
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
      <section id="industries" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">Who We Build For</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Businesses where operations are the real product.
            </h2>
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
                  <p className="text-[16px] leading-relaxed text-muted-foreground md:col-span-6">{ind.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why end to end */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="eyebrow">Why End-To-End Matters</div>
            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              The architecture and the build cannot be separated.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "One firm, mapping to deployment",
                b: "The team that maps your processes is the team that architects, builds and ships the system. Nothing is lost in translation between consultant and vendor.",
              },
              {
                n: "02",
                t: "Designed around your reality",
                b: "Systems are shaped by how your business actually operates — its exceptions, its people, its controls — rather than by a template written for someone else.",
              },
              {
                n: "03",
                t: "Accountable after go-live",
                b: "Deployment is the midpoint, not the finish. We measure the outcomes we promised and keep the architecture current as the business changes.",
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="border-t border-foreground pt-6">
                  <div className="font-display text-[11px] font-medium tracking-[0.2em] text-accent">{p.n}</div>
                  <h3 className="mt-4 text-xl font-bold tracking-[-0.02em] text-foreground">{p.t}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.b}</p>
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
