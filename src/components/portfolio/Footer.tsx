export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <span className="relative grid place-items-center w-8 h-8">
            <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full" fill="none" stroke="#f59e0b" strokeWidth="2">
              <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" />
            </svg>
            <span className="relative font-bold text-[#f59e0b] text-xs">A</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-bold text-foreground text-base tracking-wide">AXION</span>
            <span className="text-[#f59e0b] text-[9px] font-semibold tracking-[0.3em] mt-0.5">TECH</span>
          </span>
        </div>
        <p>© {new Date().getFullYear()} Wallace · Nova Iguaçu, RJ</p>
      </div>
    </footer>
  );
}
