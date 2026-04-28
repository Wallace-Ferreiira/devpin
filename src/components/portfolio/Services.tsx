import { Rocket, Globe, Package, Smartphone } from "lucide-react";

const services = [
  { icon: Rocket, title: "Landing Page", desc: "Página focada em vender seu produto ou serviço", price: "R$ 397" },
  { icon: Globe, title: "Site Completo", desc: "Presença digital profissional com múltiplas páginas", price: "R$ 897" },
  { icon: Package, title: "Sistema de Gestão", desc: "Controle de estoque, pedidos, rotas e mais", price: "R$ 1.497" },
  { icon: Smartphone, title: "App Web", desc: "Aplicativo que roda no celular sem precisar instalar", price: "R$ 1.997" },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-surface/40 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            O que eu <span className="text-gradient">faço</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Soluções completas, do design ao deploy. Você só foca no seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center mb-5 group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[3rem]">{s.desc}</p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">A partir de</span>
                    <div className="text-2xl font-bold text-gradient">{s.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
