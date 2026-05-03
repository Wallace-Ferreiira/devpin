import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-xl">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-primary text-primary-foreground">
            D
          </span>
          <span>DevPin</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-glow hover:scale-105 transition-transform"
        >
          Contratar
        </a>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mt-3 mx-6 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground">
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-center">
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
