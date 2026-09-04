import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const POINTS = [
  "We understand your business first and architect the system second.",
  "No software is proposed until the operational picture is clear.",
  "You leave with a structured perspective, not a sales deck.",
];

export function ClosingCTA() {
  return (
    <section className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-[92rem] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
              Let's Connect
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Let's understand how your business actually runs.
            </h2>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-background/70">
              Every engagement starts with a conversation, not a pitch. Tell us how you operate today and
              we will show you the architecture your business could run on tomorrow.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="border border-background bg-background px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                Book a Discovery Session
              </Link>
              <Link
                to="/solutions"
                className="border border-background/40 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-background transition-colors hover:border-background"
              >
                Explore Solutions
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
              Why a Conversation First
            </div>
            <ul className="mt-6 border-t border-background/20">
              {POINTS.map((p) => (
                <li
                  key={p}
                  className="border-b border-background/20 py-5 text-[15px] leading-relaxed text-background/80"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
