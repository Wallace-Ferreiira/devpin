import { useEffect, useRef, useState } from "react";
import { ExternalLink, ImageIcon, ChevronLeft, ChevronRight, BriefcaseBusiness } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { projects } from "@/lib/projects";
import { WHATSAPP_URL } from "@/lib/contact";
import { Button } from "@/components/ui/button";

function HoverCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hovering && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 2000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovering, images.length]);

  const hasImages = images.length > 0;

  const prev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        aria-label={`Abrir capturas de ${title}`}
        data-images={JSON.stringify(images)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setIndex(0);
        }}
        onClick={() => {
          if (hasImages) {
            setLightboxIndex(index);
            setLightboxOpen(true);
          }
        }}
        className={`relative block w-full h-auto p-0 aspect-[16/10] rounded-lg overflow-hidden ${hasImages ? "cursor-zoom-in" : ""}`}
        style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)" }}
      >
        {hasImages ? (
          <>
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${title} - ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out"
                style={{ opacity: i === index ? 1 : 0, transitionDuration: "600ms" }}
              />
            ))}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className="rounded-full transition-all"
                    style={{
                      backgroundColor: i === index ? "var(--primary)" : "var(--indicator-muted)",
                      height: "6px",
                      width: i === index ? "16px" : "6px",
                    }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div
            className="absolute inset-0 grid place-items-center"
            style={{
              background:
                "linear-gradient(110deg, #0a0a0a 30%, #1a1a1a 50%, #0a0a0a 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2.5s ease-in-out infinite",
            }}
          >
            <div className="flex flex-col items-center gap-2" style={{ color: "#52525b" }}>
              <ImageIcon className="w-6 h-6" />
              <span className="text-xs font-medium">Em breve</span>
            </div>
          </div>
        )}
      </Button>

      {hasImages && (
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent aria-describedby={undefined} className="max-w-5xl p-0 bg-background border-border overflow-hidden">
            <DialogTitle className="sr-only">{title}</DialogTitle>
            <div className="relative aspect-[16/10] w-full bg-background">
              <img
                src={images[lightboxIndex]}
                alt={`${title} - ${lightboxIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
              />
              {images.length > 1 && (
                <>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-background/60 hover:bg-background/80 text-foreground transition"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={next}
                    aria-label="Próximo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-background/60 hover:bg-background/80 text-foreground transition"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <Button
                        key={i}
                        type="button"
                    variant="ghost"
                        onClick={() => setLightboxIndex(i)}
                        aria-label={`Ir para imagem ${i + 1}`}
                        className="rounded-full transition-all p-0 min-w-0"
                        style={{
                          backgroundColor: i === lightboxIndex ? "var(--primary)" : "var(--indicator-muted)",
                          height: "8px",
                          width: i === lightboxIndex ? "24px" : "8px",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-32 relative">
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfólio</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Demonstrações para negócios que <span className="text-gradient">querem vender mais</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Veja exemplos prontos criados para diferentes nichos. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              data-images={JSON.stringify(p.images ?? [])}
              className="reveal group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--project-card)",
                border: "1px solid var(--project-border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.boxShadow = "var(--shadow-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--project-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {p.active && (
                <span
                  className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    backgroundColor: "var(--badge-background)",
                    color: "var(--project-accent)",
                    border: "1px solid var(--badge-border)",
                  }}
                >
                  DEMONSTRAÇÃO
                </span>
              )}

              <div
                className="relative h-24 flex items-center justify-between px-5"
                style={{ backgroundColor: "var(--project-banner)", borderBottom: "1px solid var(--project-border)" }}
              >
                <BriefcaseBusiness className="w-9 h-9 text-primary" aria-hidden />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--project-accent)" }}>
                  {p.niche}
                </span>
              </div>

              <div className="flex-1 flex flex-col p-6 space-y-4">
                <h3 className="text-xl font-bold leading-tight text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted-foreground)" }}>
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "var(--muted)", color: "var(--primary)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <HoverCarousel images={p.images ?? []} title={p.title} />

                <Button asChild className="h-auto rounded-full px-5 py-2.5 font-semibold">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    Ver demonstração <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <Button asChild className="h-auto whitespace-normal px-8 py-4 rounded-full font-bold text-base hover:scale-105 hover:shadow-glow">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-glow"
            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            Quero algo assim para meu negócio
            <ExternalLink className="w-4 h-4" />
          </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">
            Resposta rápida pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
