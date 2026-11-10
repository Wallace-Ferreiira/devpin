export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 reveal flex justify-center">
          <div
            className="relative w-[280px] h-[280px] lg:w-80 lg:h-80 rounded-full overflow-hidden"
            style={{
              border: "2px solid #f59e0b",
              borderRadius: "50%",
              boxShadow:
                "0 0 20px #f59e0b, 0 0 40px #f59e0b80, 0 0 80px #f59e0b40",
            }}
          >
            {/* REPLACE src with your photo URL */}
            <img
              id="profile-photo"
              src="https://i.imgur.com/gC3RmpE.png"
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
            Especialista em sites que <span className="text-gradient">trazem clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou Wallace, desenvolvedor focado em desempenho e conversão, baseado em Nova Iguaçu, RJ. Crio sistemas digitais que combinam design de qualidade, velocidade e estratégia — para o seu negócio crescer enquanto você foca no que faz de melhor.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed">
            Cada projeto é tratado como se fosse meu. Atendimento direto, sem intermediários, sem enrolação — da conversa inicial à entrega.
          </p>


        </div>
      </div>
    </section>
  );
}
