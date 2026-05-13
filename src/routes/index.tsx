import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MorphingWords } from "@/components/site/MorphingWords";
import { PositioningCard } from "@/components/site/PositioningCard";
import { Stats } from "@/components/site/Stats";
import { WhyNetra } from "@/components/site/WhyNetra";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NETRA — Agentic Systems Architecture" },
      {
        name: "description",
        content:
          "NETRA designs intelligent operational infrastructures for modern businesses. Agentic systems that orchestrate compliance, operations, and revenue.",
      },
      { property: "og:title", content: "NETRA — Agentic Systems Architecture" },
      {
        property: "og:description",
        content: "The system that runs your business. Built by NETRA.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <MorphingWords />
      <PositioningCard />
      <Stats />
      <WhyNetra />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
