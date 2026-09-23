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
         { property: "og:type", content: "website" },
         { name: "twitter:card", content: "summary" },
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
          <div className="mx-auto grid max-w-[92rem] gap-10 px-6 py-14 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-20">
            <Reveal className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Link to="/solutions" className="hover:text-foreground">Solutions</Link>
                <span>/</span>
                <span className="text-accent">{solution.name}</span>
              </div>
               <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.03] text-foreground sm:text-6xl">
                {solution.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-muted-foreground">{solution.summary}</p>
            </Reveal>
            <Reveal className="lg:col-span-6"><div className="border border-border bg-card p-3 sm:p-5"><img src={solution.image} alt={`${solution.name} AI system visualization`} loading="eager" decoding="async" width={1536} height={1024} className="aspect-[3/2] w-full object-cover" /></div></Reveal>
          </div>
        </header>

        <div className="border-t border-border">
          <div className="mx-auto max-w-[92rem] px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <div className="inline-flex bg-accent px-3 py-2"><div className="eyebrow">The Architecture</div></div>
                <p className="mt-6 max-w-sm text-xl font-medium leading-relaxed text-foreground">
                  NETRA owns the full arc: operational mapping, system architecture, product design, implementation, deployment and governance.
                </p>
              </Reveal>
              <div className="lg:col-span-8">
                {[
                  ["01", "The Problem", solution.problem],
                  ["02", "The Impact", solution.impact],
                  ["03", "How NETRA Engineers It", solution.engineering],
                ].map(([n, title, body], i) => (
                  <Reveal key={title} delay={i * 0.05}>
                    <section className="border-t border-foreground py-8">
                       <span className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] text-foreground">{n}</span>
                       <h2 className="mt-5 text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
                       <p className="mt-4 max-w-3xl text-[16px] leading-[1.8] text-muted-foreground">{body}</p>
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