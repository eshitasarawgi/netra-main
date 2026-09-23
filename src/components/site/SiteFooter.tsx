import { Link } from "@tanstack/react-router";
import { SOLUTIONS } from "@/lib/solutions";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-[15px] font-bold tracking-[0.28em] text-foreground">NETRA</div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Custom agentic enterprise architecture. We map how your business operates, architect the
              system it needs, and build, deploy and govern it end to end.
            </p>
            <p className="mt-6 text-[13px] text-muted-foreground">Jaipur, Rajasthan · India</p>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow">Solutions</div>
            <div className="mt-5 flex flex-col gap-3">
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.slug}
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  className="link-underline w-fit text-[14px] text-foreground/80 hover:text-foreground"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow">Firm</div>
            <div className="mt-5 flex flex-col gap-3">
              <Link to="/about" className="link-underline w-fit text-[14px] text-foreground/80 hover:text-foreground">
                About
              </Link>
              <Link to="/contact" className="link-underline w-fit text-[14px] text-foreground/80 hover:text-foreground">
                Contact
              </Link>
              <Link to="/approach" className="link-underline w-fit text-[14px] text-foreground/80 hover:text-foreground">Approach</Link>
              <Link to="/industries" className="link-underline w-fit text-[14px] text-foreground/80 hover:text-foreground">Industries</Link>
            </div>

            <div className="mt-8 eyebrow">Elsewhere</div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline w-fit text-[14px] text-foreground/80 hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline w-fit text-[14px] text-foreground/80 hover:text-foreground"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NETRA. All rights reserved.</span>
          <span className="uppercase tracking-[0.2em]">Mapped · Architected · Deployed · Governed</span>
        </div>
      </div>
    </footer>
  );
}
