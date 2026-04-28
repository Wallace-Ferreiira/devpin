import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, FloatingWhatsApp } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DevPin — Wallace · Desenvolvedor Web em Nova Iguaçu, RJ" },
      { name: "description", content: "Sites, landing pages e sistemas personalizados feitos sob medida. Do zero ao ar em tempo recorde." },
      { property: "og:title", content: "DevPin — Sistemas que fazem seu negócio crescer" },
      { property: "og:description", content: "Landing pages, sites completos e sistemas web profissionais." },
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
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
