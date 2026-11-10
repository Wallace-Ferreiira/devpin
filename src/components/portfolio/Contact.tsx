import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, contactWhatsappUrl, WHATSAPP_URL } from "@/lib/contact";

export { WHATSAPP_URL } from "@/lib/contact";

const fields = [
  { key: "name", label: "Nome", max: 100, autocomplete: "name", type: "text" },
  { key: "whatsapp", label: "WhatsApp com DDD", max: 25, autocomplete: "tel", type: "tel" },
  { key: "business", label: "Tipo de negócio", max: 100, autocomplete: "organization", type: "text" },
] as const;

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const form = new FormData(event.currentTarget);
    const input = { name: form.get("name"), whatsapp: form.get("whatsapp"), business: form.get("business"), message: form.get("message") };
    const result = contactSchema.safeParse(input);
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) nextErrors[String(issue.path[0])] ??= issue.message;
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    const destination = contactWhatsappUrl(input);
    window.open(destination, "_blank", "noopener,noreferrer");
    setStatus("Sua mensagem está pronta no WhatsApp. Confirme o envio por lá.");
  }

  return (
    <section id="contato" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-radial)" }} />
      <div className="container mx-auto px-6 text-center max-w-2xl relative reveal">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contato</span>
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mt-3">Bora fazer seu negócio <span className="text-gradient">vender mais?</span></h2>
        <p className="text-lg text-muted-foreground mt-5">Me conta sua ideia e receba um orçamento personalizado. Sem compromisso.</p>
        <Button asChild className="mt-10 h-auto px-8 py-5 rounded-full font-bold text-lg whitespace-normal shadow-glow">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-6 h-6" />Solicitar orçamento agora</a>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">Resposta rápida · Atendimento direto comigo</p>

        <form onSubmit={submit} noValidate className="mt-10 text-left space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            {fields.map((field) => (
              <div key={field.key} className={field.key === "business" ? "sm:col-span-2" : ""}>
                <label htmlFor={`contact-${field.key}`} className="block mb-2 text-sm font-medium">{field.label}</label>
                <Input id={`contact-${field.key}`} name={field.key} type={field.type} autoComplete={field.autocomplete} maxLength={field.max} required aria-invalid={Boolean(errors[field.key])} aria-describedby={errors[field.key] ? `error-${field.key}` : undefined} className="h-11" />
                {errors[field.key] && <p id={`error-${field.key}`} role="alert" className="text-sm text-primary mt-2">{errors[field.key]}</p>}
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="contact-message" className="block mb-2 text-sm font-medium">Mensagem</label>
            <Textarea id="contact-message" name="message" maxLength={1000} required rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "error-message" : undefined} />
            {errors.message && <p id="error-message" role="alert" className="text-sm text-primary mt-2">{errors.message}</p>}
          </div>
          <p className="text-xs text-muted-foreground">Ao continuar, seus dados serão encaminhados ao WhatsApp para atendimento. <Link to="/politica-de-privacidade" className="text-primary underline">Política de Privacidade</Link></p>
          <Button type="submit" className="w-full h-auto py-4 font-semibold"><Send />Enviar pelo WhatsApp</Button>
          <p role="status" className="text-sm text-muted-foreground">{status}</p>
        </form>
        <div className="mt-8">
          <a href="mailto:wallacestar77@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors break-all"><Mail className="w-4 h-4 shrink-0" />wallacestar77@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export function FloatingWhatsApp() {
  return (
    <Button asChild size="icon" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-glow hover:scale-110 transition-transform">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"><MessageCircle className="w-7 h-7" /></a>
    </Button>
  );
}