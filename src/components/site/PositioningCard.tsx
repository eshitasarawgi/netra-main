import { motion } from "framer-motion";

export function PositioningCard() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 noise"
        >
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" />

          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              Our Positioning
            </div>
            <p className="text-2xl sm:text-4xl md:text-5xl font-medium leading-[1.15] tracking-[-0.025em] text-foreground">
              NETRA Is{" "}
              <span className="text-gradient-glow font-semibold">
                Rajasthan’s First End-To-End Agentic Software Solutions Provider.
              </span>{" "}
              <span className="text-muted-foreground">
                We’re Building The Future Of Business Operations.
                <br />
                One Intelligent Infrastructure At A Time.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
