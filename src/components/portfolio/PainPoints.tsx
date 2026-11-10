import { AlertTriangle, TrendingDown, Clock, Smartphone } from "lucide-react";

const pains = [
  {
    icon: TrendingDown,
    title: "Seu site não vende",
    desc: "Visitas até existem, mas ninguém entra em contato — e o investimento não volta.",
  },
  {
    icon: Smartphone,
    title: "Quebra no celular",
    desc: "Seus clientes também acessam pelo celular. Se trava ou desalinha, eles fecham.",
  },
  {
    icon: Clock,
    title: "Demora pra carregar",
    desc: "Cada segundo a mais derruba conversão. Cliente sem paciência vai pro concorrente.",
  },
  {
    icon: AlertTriangle,
    title: "Aparência amadora",
    desc: "Site mal feito passa desconfiança. Você perde venda antes mesmo de falar com o cliente.",
  },
];

export function PainPoints() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Por que você está perdendo clientes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Sinais de que seu site está <span className="text-gradient">travando suas vendas</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Se você se identifica com algum desses pontos, é hora de mudar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="reveal group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center mb-5"
                  style={{ background: "rgba(245, 158, 11, 0.1)" }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
