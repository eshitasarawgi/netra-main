import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#why", label: "Why NETRA" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="flex items-center gap-2 group"
          >
            <span className="font-black tracking-[0.18em] text-sm text-foreground">NETRA</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="relative px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[12px] font-medium text-foreground hover:border-glow transition-all"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--glow)]" />
            Get In Touch
          </a>
        </div>
      </div>
    </motion.header>
  );
}
