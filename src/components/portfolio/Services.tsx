import { Rocket, Globe, Package, Smartphone, Check } from "lucide-react";
import { services } from "@/lib/services";

const icons = [Rocket, Globe, Package, Smartphone];

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-surface/40 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Soluções que <span className="text-gradient">geram resultado</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Da criação à publicação: cada projeto pensado para atrair clientes, vender mais e fortalecer sua marca.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i] ?? Globe;
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
                    <h4 className="mt-5 mb-3 text-sm font-semibold">O que está incluso</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {s.includes.map((item) => <li key={item} className="flex items-start gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5 text-primary" /><span>{item}</span></li>)}
                    </ul>
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
