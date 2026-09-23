import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/lib/solutions";

export function SolutionShowcase() {
  const [active, setActive] = useState(0);
  const solution = SOLUTIONS[active];

  return (
    <div className="grid overflow-hidden border border-border bg-card lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex flex-col border-b border-border lg:border-b-0 lg:border-r">
        {SOLUTIONS.map((item, index) => (
          <Button
            key={item.slug}
            type="button"
            variant="ghost"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`h-auto min-h-20 justify-start rounded-none border-b border-border px-5 py-4 text-left last:border-b-0 sm:px-7 ${active === index ? "bg-accent text-accent-foreground hover:bg-accent" : "bg-card hover:bg-secondary"}`}
            aria-pressed={active === index}
          >
            <span className="w-9 shrink-0 font-mono text-[10px]">{item.n}</span>
            <span className="whitespace-normal text-[15px] font-semibold leading-snug">{item.name}</span>
          </Button>
        ))}
      </div>
      <div className="grid content-between bg-background">
        <div className="overflow-hidden border-b border-border p-3 sm:p-5">
          <img src={solution.image} alt={`${solution.name} visualized as an intelligent business system`} loading="lazy" width={1536} height={1024} className="aspect-[3/2] w-full object-cover" />
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-9">
          <div>
            <div className="eyebrow text-foreground">Selected system</div>
            <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">{solution.headline}</h3>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{solution.summary}</p>
          </div>
          <Button asChild variant="default" size="lg" className="rounded-none">
            <Link to="/solutions/$slug" params={{ slug: solution.slug }}>Explore <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}