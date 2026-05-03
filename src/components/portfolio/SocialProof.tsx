import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Costa",
    role: "Personal Trainer · RJ",
    text: "Em uma semana já tinha alunos novos chegando pelo WhatsApp. O site ficou exatamente como eu imaginava — moderno e profissional.",
  },
  {
    name: "Equipe Barbearia Dom",
    role: "Barbearia · Rio de Janeiro",
    text: "O agendamento pelo WhatsApp mudou nossa rotina. O site é rápido, bonito e os clientes elogiam toda hora.",
  },
  {
    name: "Marcos S.",
    role: "Empreendedor",
    text: "Atendimento direto, entrega rápida e o resultado superou. Recomendo de olhos fechados pra qualquer negócio que quer vender mais.",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Prova social</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Quem já confiou está <span className="text-gradient">colhendo resultado</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Profissionais e negócios reais usando os sites pra atrair mais clientes todo dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm leading-relaxed text-foreground/90 mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
          {[
            { n: "10+", l: "Projetos entregues" },
            { n: "100%", l: "Mobile first" },
            { n: "3 dias", l: "Entrega média" },
            { n: "5★", l: "Atendimento" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl lg:text-4xl font-bold text-gradient">{s.n}</div>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
