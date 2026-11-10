# Axion Tech — Site de portfólio

Site da Axion Tech (Wallace, Nova Iguaçu – RJ). Apresenta os serviços de criação de sites, mostra demonstrações de sites para diferentes nichos e permite falar com o responsável pelo WhatsApp, inclusive por um formulário que monta a mensagem antes de abrir a conversa.

O projeto foi criado originalmente com o [Lovable](https://lovable.dev).

## Tecnologias

- React 19 + TypeScript
- TanStack Start e TanStack Router (páginas e rotas)
- Vite (desenvolvimento e build)
- Tailwind CSS e componentes no estilo shadcn/ui
- Zod (validação do formulário)
- Publicação preparada para Cloudflare Workers (`wrangler.jsonc`)

## Estrutura

```
src/
├── routes/                 páginas (/ e /politica-de-privacidade)
├── components/portfolio/   seções do site (cabeçalho, hero, serviços, portfólio, contato, rodapé)
├── components/ui/          componentes visuais genéricos
├── hooks/                  funções reutilizáveis
├── lib/
│   ├── contact.ts          número de WhatsApp e validação/montagem das mensagens
│   ├── projects.ts         demonstrações exibidas no portfólio
│   ├── services.ts         pacotes e preços
│   └── portfolio.test.js   testes das regras acima
├── assets/                 imagens
└── styles.css              cores, fontes e animações
```

## Como rodar

Requisitos: Node.js com npm.

```sh
npm install
npm run dev
```

## Scripts

| Comando | Função |
|---|---|
| `npm run dev` | Roda o site em modo de desenvolvimento |
| `npm run build` | Gera a versão final |
| `npm run preview` | Visualiza a versão gerada |
| `npm test` | Roda os testes (`bun test`; requer o Bun instalado) |
| `npm run lint` | Verifica o código com ESLint |
| `npm run format` | Formata o código com Prettier |

## Alterar o número de WhatsApp

O número fica em um único lugar: a constante `WHATSAPP_NUMBER` em `src/lib/contact.ts`. Todos os botões e o formulário usam essa constante. Os testes em `src/lib/portfolio.test.js` também esperam esse número; atualize os dois juntos.

## Pendências de conteúdo

- Prazos de entrega dos pacotes ainda não foram definidos.
- A página de Política de Privacidade está marcada como "em revisão".

## Publicação

O repositório não contém um fluxo de publicação documentado. O arquivo `wrangler.jsonc` indica a Cloudflare Workers como destino.
