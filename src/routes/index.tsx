import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { PainPoints } from "@/components/portfolio/PainPoints";
import { HowItWorks } from "@/components/portfolio/HowItWorks";
import { SocialProof } from "@/components/portfolio/SocialProof";
import { Contact, FloatingWhatsApp } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Axion Tech — Transformo ideias em sistemas que vendem" },
      { name: "description", content: "Axion Tech — Sistemas que transformam negócios. Landing pages, sites completos e sistemas personalizados para o seu negócio." },
      { property: "og:title", content: "Axion Tech — Transformo ideias em sistemas que vendem" },
      { property: "og:description", content: "Axion Tech — Sistemas que transformam negócios. Landing pages, sites completos e sistemas personalizados para o seu negócio." },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <PainPoints />
        <SocialProof />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
