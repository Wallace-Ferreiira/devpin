import { Sparkles, ExternalLink, ImageIcon } from "lucide-react";

type Project = {
  emoji: string;
  niche: string;
  bannerFrom: string;
  bannerTo: string;
  title: string;
  description: string;
  tags: [string, string, string];
  link: string;
  active: boolean;
};

const projects: Project[] = [
  {
    emoji: "💈",
    niche: "Barbearia",
    bannerFrom: "#f59e0b",
    bannerTo: "#b45309",
    title: "Barbearia Dom — Rio de Janeiro",
    description: "Landing page premium com agendamento via WhatsApp e portfólio de cortes.",
    tags: ["Dark Theme", "WhatsApp", "Mobile Ready"],
    link: "https://dom-dom-rio.lovable.app",
    active: true,
  },
  {
    emoji: "🍔",
    niche: "Hamburgueria",
    bannerFrom: "#ef4444",
    bannerTo: "#7f1d1d",
    title: "Hamburgueria",
    description: "Cardápio digital com delivery pelo WhatsApp e seção de combos.",
    tags: ["Dark Theme", "Cardápio", "Delivery"],
    link: "#",
    active: false,
  },
  {
    emoji: "⚖️",
    niche: "Advocacia",
    bannerFrom: "#1e3a8a",
    bannerTo: "#0f172a",
    title: "Escritório de Advocacia",
    description: "Landing page de alta conversão para captação de clientes via WhatsApp e Google Ads.",
    tags: ["Profissional", "Mobile First", "WhatsApp"],
    link: "#",
    active: false,
  },
  {
    emoji: "💅",
    niche: "Salão de Beleza",
    bannerFrom: "#ec4899",
    bannerTo: "#831843",
    title: "Salão de Beleza",
    description: "Página com agendamento online, serviços e galeria de trabalhos.",
    tags: ["Feminino", "Agendamento", "Portfólio"],
    link: "#",
    active: false,
  },
  {
    emoji: "💪",
    niche: "Personal Trainer",
    bannerFrom: "#22c55e",
    bannerTo: "#14532d",
    title: "Personal Trainer",
    description: "Landing page focada em captação de alunos com planos e depoimentos.",
    tags: ["Fitness", "WhatsApp", "Conversão"],
    link: "#",
    active: false,
  },
  {
    emoji: "🐶",
    niche: "Pet Shop",
    bannerFrom: "#06b6d4",
    bannerTo: "#155e75",
    title: "Pet Shop / Banho e Tosa",
    description: "Site com agendamento de banho e tosa e cardápio de serviços.",
    tags: ["Pet", "Agendamento", "Fofo"],
    link: "#",
    active: false,
  },
  {
    emoji: "🏠",
    niche: "Imóveis",
    bannerFrom: "#0ea5e9",
    bannerTo: "#0c4a6e",
    title: "Corretor de Imóveis",
    description: "Página de captação de leads para venda e locação de imóveis.",
    tags: ["Imóveis", "Leads", "WhatsApp"],
    link: "#",
    active: false,
  },
  {
    emoji: "🔧",
    niche: "Mecânica",
    bannerFrom: "#64748b",
    bannerTo: "#1e293b",
    title: "Mecânica / Autopeças",
    description: "Landing page com serviços, localização e orçamento via WhatsApp.",
    tags: ["Automotivo", "WhatsApp", "Local"],
    link: "#",
    active: false,
  },
  {
    emoji: "📚",
    niche: "Educação",
    bannerFrom: "#8b5cf6",
    bannerTo: "#4c1d95",
    title: "Professor Particular",
    description: "Página de captação de alunos com áreas de ensino e depoimentos.",
    tags: ["Educação", "Online", "WhatsApp"],
    link: "#",
    active: false,
  },
  {
    emoji: "🧽",
    niche: "Limpeza",
    bannerFrom: "#14b8a6",
    bannerTo: "#134e4a",
    title: "Limpeza Residencial",
    description: "Landing page com pacotes de serviços e agendamento fácil.",
    tags: ["Serviços", "Confiança", "WhatsApp"],
    link: "#",
    active: false,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfólio</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Projetos — <span className="text-gradient">Cada nicho, uma solução.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Clique em qualquer projeto para ver ao vivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group relative rounded-2xl bg-card border border-border overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_0_40px_-8px_var(--primary)]"
            >
              {/* Banner */}
              <div
                className="relative h-24 flex items-center justify-between px-5"
                style={{ background: `linear-gradient(135deg, ${p.bannerFrom}, ${p.bannerTo})` }}
              >
                <span className="text-4xl drop-shadow-md" aria-hidden>{p.emoji}</span>
                <span className="text-sm font-bold text-white/95 uppercase tracking-wider">
                  {p.niche}
                </span>
              </div>

              <div className="flex-1 flex flex-col p-6 space-y-4">
                <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-surface border border-border text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Screenshot placeholder */}
                <div className="aspect-[16/10] rounded-lg bg-surface border border-dashed border-border grid place-items-center text-center px-4">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <ImageIcon className="w-6 h-6" />
                    <span className="text-xs font-medium">Clique para ver prints</span>
                  </div>
                </div>

                {p.active ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Ver projeto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-surface text-muted-foreground font-semibold border border-border cursor-not-allowed opacity-70"
                  >
                    <Sparkles className="w-4 h-4" />
                    Em breve
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
