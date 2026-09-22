import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { SOLUTIONS } from "@/lib/solutions";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = SOLUTIONS.find((item) => item.slug === params.slug);
    if (!solution) throw notFound();
    return solution;
  },
  head: ({ loaderData }) => {
    const solution = loaderData;
    if (!solution) return { meta: [{ title: "Solution Not Found — NETRA" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${solution.name} — NETRA` },
        { name: "description", content: solution.summary },
        { property: "og:title", content: `${solution.name} — NETRA` },
        { property: "og:description", content: solution.summary },
      ],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const solution = Route.useLoaderData();
  return (
    <>
      <article>
        <header className="border-b border-border">
          <div className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-24">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Link to="/solutions" className="hover:text-foreground">Solutions</Link>
                <span>/</span>
                <span className="text-accent">{solution.name}</span>
              </div>
              <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.03] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
                {solution.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-muted-foreground">{solution.summary}</p>
            </Reveal>
          </div>
        </header>

        <div className="mx-auto max-w-[92rem] px-6 py-12 lg:px-10 lg:py-16">
          <Reveal>
            <img
              src={solution.image}
               alt={`${solution.name} AI system visualization`}
              loading="eager"
              decoding="async"
              width={1408}
              height={912}
               className="h-[300px] w-full border border-border object-cover sm:h-[480px] lg:h-[600px]"
            />
          </Reveal>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-3">
                <div className="eyebrow">The Architecture</div>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  NETRA owns the full arc: operational mapping, system architecture, product design, implementation, deployment and governance.
                </p>
              </Reveal>
              <div className="lg:col-span-9">
                {[
                  ["01", "The Problem", solution.problem],
                  ["02", "The Impact", solution.impact],
                  ["03", "How NETRA Engineers It", solution.engineering],
                ].map(([n, title, body], i) => (
                  <Reveal key={title} delay={i * 0.05}>
                    <section className="grid grid-cols-1 gap-4 border-t border-foreground py-8 sm:grid-cols-12 sm:gap-8">
                      <span className="font-display text-[11px] font-medium tracking-[0.2em] text-accent sm:col-span-1">{n}</span>
                      <h2 className="text-2xl font-bold tracking-[-0.02em] text-foreground sm:col-span-4 sm:text-3xl">{title}</h2>
                      <p className="text-[16px] leading-[1.8] text-muted-foreground sm:col-span-7">{body}</p>
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
      <ClosingCTA />
    </>
  );
}