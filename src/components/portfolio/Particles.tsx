export function Particles() {
  const particles = Array.from({ length: 25 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 15;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-10px`,
              animation: `particle ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
