import { describe, expect, test } from "bun:test";
import { contactSchema, contactWhatsappUrl, WHATSAPP_NUMBER, WHATSAPP_URL } from "./contact";
import { projects } from "./projects";
import { services } from "./services";

describe("Portfolio rules", () => {
  test("real estate comes first and the barbershop occupies its previous visible position", () => {
    expect(projects.map((p) => p.title)).toEqual([
      "Corretor de Imóveis — Demonstração", "Cardápio Digital — Demonstração",
      "Escritório de Advocacia — Demonstração", "Clínica de Estética — Demonstração",
      "Personal Trainer — Demonstração", "Barbearia — Demonstração",
    ]);
  });
  test("only the six available demonstrations are exposed", () => {
    expect(projects).toHaveLength(6);
    expect(projects.every((p) => p.active && p.link.startsWith("https://") && (p.images?.length ?? 0) > 0)).toBe(true);
  });
  test("existing screenshots keep their positions", () => {
    expect(projects.map((p) => p.images)).toEqual([
      ["XUxLo6j", "YWxK9z7", "heG3UD3", "CwKW3fR", "kUvVHyp"],
      ["wAKw6Si", "KoveZzk"],
      ["4y9VFPX", "xMv4R23", "8vWM3Bd", "kAMSpyL", "O8vy7MQ"],
      ["Y1cuPMA", "9fZfb8C", "EBbeXye", "2w03aP0"],
      ["JR3fVL7", "uqeevYy", "REJYv9U", "BO2p2gC", "KGGZ4YN"],
      ["fm80upu", "Ptowj5z", "t0wtnu8", "hfW3lfA"],
    ].map((ids) => ids.map((id) => `https://i.imgur.com/${id}.png`)));
  });
  test("package prices are retained", () => {
    expect(services.map((s) => s.price)).toEqual(["R$ 397", "R$ 897", "R$ 1.497", "R$ 1.997"]);
  });
  test("each package has three to four inclusions", () => {
    for (const service of services) { expect(service.includes.length).toBeGreaterThanOrEqual(3); expect(service.includes.length).toBeLessThanOrEqual(4); }
  });
});

describe("WhatsApp form validation", () => {
  const valid = { name: "Maria Silva", whatsapp: "(21) 98765-4321", business: "Loja de roupas", message: "Quero um site & catálogo com roupas." };
  test("all contact URLs use Wallace's established number", () => {
    expect(WHATSAPP_NUMBER).toBe("5521976885245");
    expect(new URL(WHATSAPP_URL).pathname).toBe("/5521976885245");
    expect(new URL(contactWhatsappUrl(valid)).pathname).toBe("/5521976885245");
  });
  test("validated form data is encoded and recovered as one message", () => {
    const url = new URL(contactWhatsappUrl(valid));
    expect(url.searchParams.get("text")).toBe("Olá Wallace! Gostaria de conversar sobre um projeto.\n\nNome: Maria Silva\nWhatsApp: 21987654321\nTipo de negócio: Loja de roupas\nMensagem: Quero um site & catálogo com roupas.");
    expect([...url.searchParams.keys()]).toEqual(["text"]);
  });
  test("required values and phone format are enforced", () => {
    for (const key of ["name", "whatsapp", "business", "message"]) expect(contactSchema.safeParse({ ...valid, [key]: "" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, whatsapp: "123" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, whatsapp: "abc1234567890" }).success).toBe(false);
  });
  test("lengths and markup are rejected before opening WhatsApp", () => {
    expect(contactSchema.safeParse({ ...valid, name: "x".repeat(101) }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, business: "x".repeat(101) }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, message: "x".repeat(1001) }).success).toBe(false);
    expect(() => contactWhatsappUrl({ ...valid, message: "<script>alert(1)</script>" })).toThrow();
  });
});