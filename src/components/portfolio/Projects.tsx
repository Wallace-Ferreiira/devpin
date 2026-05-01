import { Sparkles, ExternalLink, ImageIcon } from "lucide-react";

type Project = {
  emoji: string;
  niche: string;
  title: string;
  description: string;
  tags: [string, string, string];
  link: string;
  active: boolean;
  preview?: string;
};

const projects: Project[] = [
  {
    emoji: "💈",
    niche: "Barbearia",
    title: "Barbearia Dom — Rio de Janeiro",
    description: "Landing page premium com agendamento via WhatsApp e portfólio de cortes.",
    tags: ["Dark Theme", "WhatsApp", "Mobile Ready"],
    link: "https://dom-dom-rio.lovable.app",
    active: true,
    preview: "https://dom-dom-rio.lovable.app",
  },
  {
    emoji: "🍔",
    niche: "Hamburgueria",
    title: "Hamburgueria",
    description: "Cardápio digital com delivery pelo WhatsApp e seção de combos.",
    tags: ["Dark Theme", "Cardápio", "Delivery"],
    link: "#",
    active: false,
  },
  {
    emoji: "⚖️",
    niche: "Advocacia",
    title: "Escritório de Advocacia",
    description: "Landing page de alta conversão para captação de clientes via WhatsApp e Google Ads.",
    tags: ["Profissional", "Mobile First", "WhatsApp"],
    link: "#",
    active: false,
  },
  {
    emoji: "💅",
    niche: "Salão de Beleza",
    title: "Salão de Beleza",
    description: "Página com agendamento online, serviços e galeria de trabalhos.",
    tags: ["Feminino", "Agendamento", "Portfólio"],
    link: "#",
    active: false,
  },
  {
    emoji: "💪",
    niche: "Personal Trainer",
    title: "Personal Trainer",
    description: "Landing page focada em captação de alunos com planos e depoimentos.",
    tags: ["Fitness", "WhatsApp", "Conversão"],
    link: "#",
    active: false,
  },
  {
    emoji: "🐶",
    niche: "Pet Shop",
    title: "Pet Shop / Banho e Tosa",
    description: "Site com agendamento de banho e tosa e cardápio de serviços.",
    tags: ["Pet", "Agendamento", "Fofo"],
    link: "#",
    active: false,
  },
  {
    emoji: "🏠",
    niche: "Imóveis",
    title: "Corretor de Imóveis",
    description: "Página de captação de leads para venda e locação de imóveis.",
    tags: ["Imóveis", "Leads", "WhatsApp"],
    link: "#",
    active: false,
  },
  {
    emoji: "🔧",
    niche: "Mecânica",
    title: "Mecânica / Autopeças",
    description: "Landing page com serviços, localização e orçamento via WhatsApp.",
    tags: ["Automotivo", "WhatsApp", "Local"],
    link: "#",
    active: false,
  },
  {
    emoji: "📚",
    niche: "Educação",
    title: "Professor Particular",
    description: "Página de captação de alunos com áreas de ensino e depoimentos.",
    tags: ["Educação", "Online", "WhatsApp"],
    link: "#",
    active: false,
  },
  {
    emoji: "🧽",
    niche: "Limpeza",
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
              className="reveal group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#111111",
                border: "1px solid #2a2a2a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f59e0b";
                e.currentTarget.style.boxShadow = "0 0 40px -8px rgba(245, 158, 11, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* AO VIVO badge */}
              {p.active && (
                <span
                  className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    color: "#f59e0b",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                  }}
                >
                  AO VIVO 🟢
                </span>
              )}

              {/* Banner */}
              <div
                className="relative h-24 flex items-center justify-between px-5"
                style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #2a2a2a" }}
              >
                <span className="text-4xl" aria-hidden>{p.emoji}</span>
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#f59e0b" }}>
                  {p.niche}
                </span>
              </div>

              <div className="flex-1 flex flex-col p-6 space-y-4">
                <h3 className="text-xl font-bold leading-tight text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#a1a1aa" }}>
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#1f1f1f", color: "#f59e0b" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Screenshot placeholder / preview */}
                {p.active && p.preview ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-[16/10] rounded-lg overflow-hidden border"
                    style={{ borderColor: "#2a2a2a" }}
                  >
                    <iframe
                      src={p.preview}
                      title={p.title}
                      loading="lazy"
                      className="w-full h-full pointer-events-none"
                      style={{ border: 0, transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%" }}
                    />
                  </a>
                ) : (
                  <div
                    className="aspect-[16/10] rounded-lg grid place-items-center text-center px-4"
                    style={{ backgroundColor: "#0a0a0a", border: "1px dashed #2a2a2a" }}
                  >
                    <div className="flex flex-col items-center gap-2" style={{ color: "#71717a" }}>
                      <ImageIcon className="w-6 h-6" />
                      <span className="text-xs font-medium">Clique para ver prints</span>
                    </div>
                  </div>
                )}

                {p.active ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#f59e0b", color: "#0a0a0a" }}
                  >
                    Ver projeto
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold cursor-not-allowed"
                    style={{ backgroundColor: "#1a1a1a", color: "#71717a", border: "1px solid #2a2a2a" }}
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
