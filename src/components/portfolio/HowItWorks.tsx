import { MessageCircle, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Conversa estratégica",
    desc: "Entendo seu negócio, público e objetivo. Você fala, eu transformo em estratégia.",
  },
  {
    icon: PenTool,
    title: "Design sob medida",
    desc: "Crio um layout premium, focado em conversão e na identidade da sua marca.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    desc: "Código limpo, rápido e responsivo. Tudo otimizado para Google e celular.",
  },
  {
    icon: Rocket,
    title: "Entrega no ar",
    desc: "Em poucos dias seu projeto está rodando, vendendo e gerando autoridade.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-surface/40 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como funciona</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Da conversa ao site no ar em <span className="text-gradient">poucos dias</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Um processo simples, direto e sem complicação. Você acompanha tudo de perto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center mb-5">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
