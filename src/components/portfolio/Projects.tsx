import { Lock, Sparkles } from "lucide-react";

export function Projects() {
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

        {/* Placeholders */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <div key={n} className="reveal aspect-[4/3] rounded-2xl bg-card border border-border border-dashed grid place-items-center text-center p-8 hover:border-primary/40 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 grid place-items-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold">Próximo projeto</h4>
                <p className="text-sm text-muted-foreground mt-2">O seu pode ser o próximo aqui.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
