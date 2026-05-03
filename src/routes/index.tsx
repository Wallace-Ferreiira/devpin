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
      { title: "DevPin — Transformo ideias em sistemas que vendem" },
      { name: "description", content: "Landing pages, sites completos e sistemas personalizados para o seu negócio. Solicite um orçamento pelo WhatsApp!" },
      { property: "og:title", content: "DevPin — Transformo ideias em sistemas que vendem" },
      { property: "og:description", content: "Landing pages, sites completos e sistemas personalizados para o seu negócio. Solicite um orçamento pelo WhatsApp!" },
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
        <PainPoints />
        <Services />
        <HowItWorks />
        <Projects />
        <SocialProof />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
