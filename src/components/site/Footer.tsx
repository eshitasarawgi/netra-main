export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div>
              <div className="font-black tracking-[0.18em] text-foreground">NETRA</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Agentic Systems Architecture</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition-colors">Home</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why NETRA</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            {[
              { s: "LI", href: "https://www.linkedin.com/" },
              { s: "IG", href: "https://www.instagram.com/" },
            ].map(({ s, href }) => (
              <a
                key={s}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full glass flex items-center justify-center text-[11px] font-medium text-muted-foreground hover:text-foreground hover:border-glow transition-all"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70">
          <div>© {new Date().getFullYear()} NETRA — All rights reserved.</div>
          <div>Built for the operators of the future.</div>
        </div>
      </div>
    </footer>
  );
}
