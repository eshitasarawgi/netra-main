import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 60, suffix: "+", label: "Workflows Automated" },
  { value: 10000, suffix: "+", label: "Hours Saved", format: (n: number) => `${Math.round(n / 1000)}K` },
  { value: 20, suffix: "+", label: "Firms Transformed" },
];

function Counter({ to, suffix, format }: { to: number; suffix: string; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => (format ? format(v) : Math.round(v).toString()));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-3xl glass">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-background/40 p-10 sm:p-12 text-center sm:text-left"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.04em] text-gradient-glow">
                <Counter to={s.value} suffix={s.suffix} format={s.format} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
