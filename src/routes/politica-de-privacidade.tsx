import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/portfolio/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({ meta: [
    { title: "Política de Privacidade — Axion Tech" },
    { name: "description", content: "Política de Privacidade da Axion Tech. Esta página está em revisão." },
    { property: "og:title", content: "Política de Privacidade — Axion Tech" },
    { property: "og:description", content: "Política de Privacidade da Axion Tech. Esta página está em revisão." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <div className="min-h-screen flex flex-col bg-background text-foreground">
    <main className="w-full max-w-3xl mx-auto px-6 py-16 flex-1">
      <Button asChild variant="outline"><Link to="/"><ArrowLeft />Voltar ao início</Link></Button>
      <p className="text-primary text-sm font-semibold mt-16">AXION TECH</p>
      <h1 className="text-4xl sm:text-5xl font-bold mt-4">Política de Privacidade</h1>
      <p className="text-muted-foreground mt-8">Esta página está em revisão.</p>
    </main>
    <Footer />
  </div>;
}