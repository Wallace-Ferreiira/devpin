import { useState } from "react";
import { Lock, Sparkles, ExternalLink, X } from "lucide-react";

const barbeariaShots = [
  "https://i.imgur.com/6zWuGWv.png",
  "https://i.imgur.com/mD6aY9L.png",
  "https://i.imgur.com/DKI8dNj.png",
  "https://i.imgur.com/H39YP3t.png",
];

export function Projects() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="projetos" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfólio</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Projetos reais, <span className="text-gradient">resultados reais</span>
          </h2>
        </div>

        {/* Featured - Locked / Coming Soon */}
        <div className="reveal grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 p-6 lg:p-10 rounded-3xl bg-card border border-border hover:border-primary/40 transition-colors">
          <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3] bg-surface grid place-items-center">
            <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
            <div className="relative text-center p-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 grid place-items-center mx-auto mb-4 ring-1 ring-primary/30">
                <Lock className="w-9 h-9 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Conteúdo em sigilo</p>
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-semibold inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary" /> Em breve
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-3xl lg:text-4xl font-bold">Projeto em desenvolvimento 🔒</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Em breve — sistema completo sendo finalizado.
            </p>
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-muted-foreground font-semibold border border-border cursor-not-allowed opacity-70"
            >
              <Lock className="w-4 h-4" />
              Lançamento em breve
            </button>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal rounded-2xl bg-card border border-border p-6 lg:p-8 hover:border-primary/40 transition-colors flex flex-col">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Sparkles className="w-3 h-3" /> Ao vivo
              </div>
              <h4 className="text-2xl font-bold">Barbearia Dom — Rio de Janeiro</h4>
              <p className="text-muted-foreground leading-relaxed">
                Landing page premium com identidade visual exclusiva, cardápio de serviços com preços, portfólio de trabalhos e agendamento direto pelo WhatsApp.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Landing Page", "Dark Theme", "WhatsApp", "Mobile Ready"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              {/* Preview gallery */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {barbeariaShots.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightbox(src)}
                    className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary/60 transition-all hover:scale-[1.03] bg-surface"
                    aria-label={`Abrir screenshot ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Barbearia Dom — preview ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:opacity-90 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>
            <a
              href="https://dom-dom-rio.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Ver projeto ao vivo
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="reveal aspect-[4/3] md:aspect-auto rounded-2xl bg-card border border-border border-dashed grid place-items-center text-center p-8 hover:border-primary/40 transition-colors">
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 grid place-items-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">Próximo projeto</h4>
              <p className="text-sm text-muted-foreground mt-2">O seu pode ser o próximo aqui.</p>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-surface/80 border border-border grid place-items-center hover:bg-surface transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Preview ampliado"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
