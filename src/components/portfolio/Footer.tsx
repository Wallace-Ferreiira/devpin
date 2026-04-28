export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-primary text-primary-foreground font-bold text-xs">D</span>
          <span className="font-semibold text-foreground">DevPin</span>
        </div>
        <p>© {new Date().getFullYear()} Wallace · Nova Iguaçu, RJ</p>
      </div>
    </footer>
  );
}
