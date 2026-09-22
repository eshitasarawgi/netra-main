import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function ClosingCTA() {
  return (
    <section className="border-t border-border bg-mineral text-foreground">
      <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="eyebrow text-foreground/60">The next operating advantage</div>
            <h2 className="mt-6 max-w-4xl text-4xl font-light leading-[1.04] sm:text-5xl lg:text-7xl">What should your business be able to do next?</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="border border-foreground bg-foreground px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:border-signal hover:bg-signal hover:text-foreground"
              >
                Book a Discovery Session
              </Link>
              <Link
                to="/solutions"
                className="border border-foreground/30 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-foreground"
              >
                Explore Solutions
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
