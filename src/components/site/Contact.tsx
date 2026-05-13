import { useState } from "react";
import { motion } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";

export function Contact() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const data = {
      fullName: String(fd.get("fullName") ?? "").trim(),
      business: String(fd.get("business") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      goals: String(fd.get("goals") ?? "").trim(),
      company_url: String(fd.get("company_url") ?? ""),
    };

    try {
      const res = await submit({ data });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setError(res.error ?? "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Please check your inputs and try again.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <div className="absolute inset-0 bg-radial" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            Contact
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.035em] text-gradient">
            Let’s architect your operating system.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-3xl glass-strong p-7 sm:p-10 noise"
            >
              {/* Honeypot */}
              <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="fullName" placeholder="Your name" />
                <Field label="Business" name="business" placeholder="Company / firm" />
                <Field label="Email Address" name="email" type="email" placeholder="you@company.com" />
                <Field label="Contact Number" name="phone" type="tel" placeholder="+91 ..." />
                <div className="sm:col-span-2">
                  <Field
                    label="Your Goals With NETRA"
                    name="goals"
                    textarea
                    placeholder="What outcomes are you trying to architect?"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Replies within 24 hours
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl glass px-7 py-4 text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "var(--gradient-glow)" }}
                  />
                  <span className="relative">
                    {status === "loading" ? "Sending…" : "Let’s Get Future-Proofed!"}
                  </span>
                  <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-transform duration-500 group-hover:translate-x-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5h8m0 0L5 1m4 4L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground"
                >
                  Transmission received. We’ll be in touch shortly.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Visual */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl glass-strong">
              {/* Operational network visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/20" />
              <div className="absolute inset-0">
                <NetworkVisual />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Operational Intelligence</div>
                <div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-foreground">
                  One unified infrastructure.
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Every workflow, instrumented.</div>
              </div>

              <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--glow)] animate-pulse-glow" />
                NETRA / OS
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "peer w-full rounded-xl border border-border bg-white/[0.02] px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white/[0.04] focus:shadow-[0_0_0_4px_oklch(0.86_0.13_215_/_0.10)]";
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea required name={name} placeholder={placeholder} rows={5} className={cls} />
      ) : (
        <input required name={name} type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

function NetworkVisual() {
  // SVG network of nodes — operational intelligence aesthetic
  const nodes = [
    { x: 18, y: 22 }, { x: 50, y: 14 }, { x: 82, y: 26 },
    { x: 30, y: 50 }, { x: 68, y: 48 }, { x: 50, y: 62 },
    { x: 16, y: 78 }, { x: 84, y: 76 }, { x: 50, y: 88 },
  ];
  const lines: [number, number][] = [
    [0,1],[1,2],[0,3],[1,3],[1,4],[2,4],[3,5],[4,5],[3,6],[5,6],[4,7],[5,7],[6,8],[7,8],[5,8]
  ];
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ln" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EE6FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="nd">
          <stop offset="0%" stopColor="#5EE6FF" />
          <stop offset="100%" stopColor="#5EE6FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#ln)"
          strokeWidth="0.18"
        >
          <animate attributeName="opacity" values="0.25;0.9;0.25" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" begin={`${i * 0.15}s`} />
        </line>
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="2.4" fill="url(#nd)" opacity="0.7">
            <animate attributeName="r" values="2.4;3.2;2.4" dur={`${2.5 + (i % 3)}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={n.x} cy={n.y} r="0.9" fill="#F5F7FA" />
        </g>
      ))}
    </svg>
  );
}
