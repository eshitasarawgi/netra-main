import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/lib/solutions";

const NAV = [
  { to: "/solutions", label: "Solutions" },
  { to: "/approach", label: "Approach" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-[15px] font-bold tracking-[0.28em] text-foreground">
            NETRA
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Agentic Architecture
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <Link
              to="/solutions"
              className="link-underline text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Solutions
            </Link>
            {solutionsOpen && (
              <div className="absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-4">
                <div className="border border-border bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.slug}
                      to="/solutions/$slug"
                      params={{ slug: s.slug }}
                      className="flex items-baseline gap-4 border-b border-border px-5 py-3.5 last:border-b-0 hover:bg-surface"
                    >
                      <span className="font-display text-[10px] tracking-[0.2em] text-accent">{s.n}</span>
                      <span className="text-[13px] font-medium text-foreground">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/approach"
            className="link-underline text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Approach
          </Link>
          <Link
            to="/industries"
            className="link-underline text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Industries
          </Link>
          <Link
            to="/about"
            className="link-underline text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            to="/contact"
             className="border border-foreground bg-foreground px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-background transition-colors hover:border-mineral hover:bg-mineral hover:text-foreground"
          >
            Start a Conversation
          </Link>
        </nav>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-none md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-4 bg-foreground transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-foreground transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </Button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="fixed inset-0 top-[65px] z-40 overflow-y-auto border-t border-border bg-background md:hidden">
          <div className="px-6 py-8">
            <div className="eyebrow">Solutions</div>
            <div className="mt-4 border-t border-border">
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.slug}
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-border py-4"
                >
                  <span className="font-display text-[10px] tracking-[0.2em] text-accent">{s.n}</span>
                  <span className="text-[15px] font-medium text-foreground">{s.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-10 eyebrow">Firm</div>
            <div className="mt-4 border-t border-border">
              {NAV.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-xl font-semibold text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 block bg-foreground px-6 py-4 text-center text-[12px] font-medium uppercase tracking-[0.16em] text-background"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
