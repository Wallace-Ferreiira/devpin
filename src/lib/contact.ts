import { z } from "zod";

export const WHATSAPP_NUMBER = "5521976885245";

const singleLine = (max: number) => z.string().trim().min(1, "Preencha este campo.").max(max, `Use no máximo ${max} caracteres.`).regex(/^[^<>\u0000-\u001f\u007f]+$/, "Não use marcações ou caracteres de controle.");

export const contactSchema = z.object({
  name: singleLine(100),
  whatsapp: z.string().trim().max(25, "Use no máximo 25 caracteres.").regex(/^\+?[\d ()-]+$/, "Informe um WhatsApp válido com DDD.").transform((value) => value.replace(/\D/g, "")).pipe(z.string().min(10, "Inclua o DDD e o número.").max(15, "Confira o número informado.")),
  business: singleLine(100),
  message: z.string().trim().min(1, "Conte um pouco sobre seu projeto.").max(1000, "Use no máximo 1000 caracteres.").regex(/^[^<>\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]+$/, "Não use marcações ou caracteres de controle."),
});

const messageSchema = z.string().trim().min(1).max(1600);
export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageSchema.parse(message))}`;
}

export const WHATSAPP_URL = whatsappUrl("Olá Wallace! Vim pelo seu portfólio e quero saber mais sobre seus serviços.");

export function contactWhatsappUrl(input: unknown) {
  const data = contactSchema.parse(input);
  return whatsappUrl(`Olá Wallace! Gostaria de conversar sobre um projeto.\n\nNome: ${data.name}\nWhatsApp: ${data.whatsapp}\nTipo de negócio: ${data.business}\nMensagem: ${data.message}`);
}