import { useEffect, useRef, useState } from "react";
import avatar from "@/assets/avatar.jpg";

function Counter({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            setVal(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-4xl lg:text-5xl font-bold text-gradient">
        {val}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 reveal flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            {/* REPLACE src with your photo URL */}
            <img
              id="profile-photo"
              src="https://imgur.com/kVYlGyY"
              alt="Wallace Ferreira"
              loading="lazy"
              width={768}
              height={768}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6 reveal">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre mim</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Quem está por trás dos <span className="text-gradient">projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou Wallace, desenvolvedor de sistemas web baseado em Nova Iguaçu, RJ. Transformo ideias em produtos digitais funcionais — não entrego só código, entrego soluções que resolvem problemas reais.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            <Counter to={1} suffix="+" label="App lançado" />
            <Counter to={100} suffix="%" label="Mobile-ready" />
            <Counter to={3} suffix=" dias" label="Entrega média" />
          </div>
        </div>
      </div>
    </section>
  );
}
