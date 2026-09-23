import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/solutions";

export function IndustryShowcase({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const industry = INDUSTRIES[active];

  return (
    <div className="grid overflow-hidden border border-border bg-card lg:grid-cols-[0.72fr_1.28fr]">
      <div className="order-2 flex flex-col lg:order-1 lg:border-r">
        {INDUSTRIES.map((item, index) => (
          <Button
            key={item.slug}
            type="button"
            variant="ghost"
            onClick={() => setActive(index)}
            className={`h-auto min-h-24 justify-start rounded-none border-t border-border px-5 py-5 text-left lg:first:border-t-0 ${active === index ? "bg-accent text-accent-foreground hover:bg-accent" : "bg-card hover:bg-secondary"}`}
            aria-pressed={active === index}
          >
            <span className="w-10 shrink-0 font-mono text-[10px]">{item.n}</span>
            <span className="whitespace-normal text-base font-semibold">{item.name}</span>
          </Button>
        ))}
      </div>
      <div className="order-1 bg-background lg:order-2">
        <div className="overflow-hidden border-b border-border p-3 sm:p-5">
          <img src={industry.image} alt={`Agentic operating architecture for ${industry.name}`} loading="lazy" width={1536} height={1024} className="aspect-[3/2] w-full object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-semibold sm:text-3xl">{industry.name}</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{industry.body}</p>
          {compact && (
            <Button asChild variant="link" className="mt-5 h-auto justify-start p-0 text-foreground">
              <Link to="/industries" hash={industry.slug}>View industry approach <ArrowRight aria-hidden="true" /></Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}