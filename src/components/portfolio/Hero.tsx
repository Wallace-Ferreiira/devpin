import { ArrowRight, MessageCircle, Sparkles, Zap, Smartphone, Shield } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import cardLanding from "@/assets/card-landing.jpg";
import cardSystem from "@/assets/card-system.jpg";
import cardMobile from "@/assets/card-mobile.jpg";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <Particles />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* LEFT */}
        <div className="space-y-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm"
            style={{ animation: "fade-up 0.6s ease-out" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Disponível para projetos</span>
          </div>

          <h1
            className="font-bold tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            style={{ animation: "fade-up 0.8s ease-out 0.1s both" }}
          >
            Transformo <span className="text-gradient">ideias</span> em{" "}
            <span className="text-gradient">sistemas</span> que vendem.
          </h1>

          <p
            className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
            style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}
          >
            Soluções digitais modernas para quem quer sair na frente.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Ver meus projetos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border hover:bg-surface text-foreground font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar comigo
            </a>
          </div>

          <div
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground pt-2"
            style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}
          >
            <span className="inline-flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Entrega rápida</span>
            <span className="inline-flex items-center gap-2"><Smartphone className="w-4 h-4 text-primary" /> Mobile perfeito</span>
            <span className="inline-flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Profissional</span>
          </div>
        </div>

        {/* RIGHT - Mockup composition */}
        <div className="relative h-[520px] lg:h-[640px] flex items-center justify-center">
          {/* Main image */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-card"
            style={{
              animation: "fade-up 1s ease-out 0.3s both, pulse-glow 3s ease-in-out 1.3s infinite",
              width: "min(320px, 70%)",
            }}
          >
            <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/40 pointer-events-none" />
            <img
              src={heroMain}
              alt="Aplicativo de gestão de rotas - mockup principal"
              width={1024}
              height={1280}
              className="w-full h-auto block"
            />
          </div>

          {/* Floating Card 1 - top right */}
          <div
            className="absolute top-4 right-0 lg:right-4 w-36 lg:w-44 glass rounded-2xl p-2 shadow-card"
            style={{ animation: "fade-up 0.8s ease-out 0.8s both, float 6s ease-in-out 1.6s infinite" }}
          >
            <img src={cardLanding} alt="Mockup landing page" loading="lazy" width={512} height={768} className="rounded-xl w-full h-auto" />
            <p className="text-xs text-center mt-2 mb-1 font-medium">Landing Page</p>
          </div>

          {/* Floating Card 2 - bottom left */}
          <div
            className="absolute bottom-6 left-0 lg:left-2 w-44 lg:w-56 glass rounded-2xl p-2 shadow-card"
            style={{ animation: "fade-up 0.8s ease-out 1.1s both, float 7s ease-in-out 2s infinite" }}
          >
            <img src={cardSystem} alt="Mockup sistema web" loading="lazy" width={768} height={512} className="rounded-xl w-full h-auto" />
            <p className="text-xs text-center mt-2 mb-1 font-medium">Sistema Web</p>
          </div>

          {/* Floating Card 3 - right middle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 right-2 lg:-right-4 w-32 lg:w-40 glass rounded-2xl p-2 shadow-card hidden sm:block"
            style={{ animation: "fade-up 0.8s ease-out 1.4s both, float 8s ease-in-out 2.4s infinite" }}
          >
            <img src={cardMobile} alt="Mockup app mobile" loading="lazy" width={512} height={768} className="rounded-xl w-full h-auto" />
            <p className="text-xs text-center mt-2 mb-1 font-medium">App Mobile</p>
          </div>
        </div>
      </div>
    </section>
  );
}
