type Project = {
  niche: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  active: boolean;
  preview?: string;
  images?: string[];
};

const allProjects: Project[] = [
  {
    niche: "Barbearia",
    title: "Barbearia — Demonstração",
    description: "Página premium com agendamento via WhatsApp e portfólio de cortes.",
    tags: ["WhatsApp", "Responsivo"],
    link: "https://dom-dom-rio.lovable.app",
    active: true,
    preview: "https://dom-dom-rio.lovable.app",
    images: [
      "https://i.imgur.com/fm80upu.png",
      "https://i.imgur.com/Ptowj5z.png",
      "https://i.imgur.com/t0wtnu8.png",
      "https://i.imgur.com/hfW3lfA.png",
    ],
  },
  {
    niche: "Cardápio Digital",
    title: "Cardápio Digital — Demonstração",
    description: "Cardápio digital com delivery pelo WhatsApp e seção de combos.",
    tags: ["Cardápio", "Delivery"],
    link: "https://stack-digital-menu.lovable.app/",
    active: true,
    images: ["https://i.imgur.com/wAKw6Si.png", "https://i.imgur.com/KoveZzk.png"],
  },
  {
    niche: "Advocacia",
    title: "Escritório de Advocacia — Demonstração",
    description: "Página de alta conversão para captação de clientes via WhatsApp e Google Ads.",
    tags: ["Profissional", "Pensado para celular", "WhatsApp"],
    link: "https://strategic-law-canvas.lovable.app/",
    active: true,
    images: [
      "https://i.imgur.com/4y9VFPX.png",
      "https://i.imgur.com/xMv4R23.png",
      "https://i.imgur.com/8vWM3Bd.png",
      "https://i.imgur.com/kAMSpyL.png",
      "https://i.imgur.com/O8vy7MQ.png",
    ],
  },
  {
    niche: "Clínica de Estética",
    title: "Clínica de Estética — Demonstração",
    description: "Página premium para clínica estética com procedimentos, depoimentos em carrossel, seção antes e depois e agendamento direto pelo WhatsApp.",
    tags: ["Premium", "Feminino", "WhatsApp", "Responsivo"],
    link: "https://prestige-skin-reveal.lovable.app/",
    active: true,
    images: [
      "https://i.imgur.com/Y1cuPMA.png",
      "https://i.imgur.com/9fZfb8C.png",
      "https://i.imgur.com/EBbeXye.png",
      "https://i.imgur.com/2w03aP0.png",
    ],
  },
  {
    niche: "Personal Trainer",
    title: "Personal Trainer — Demonstração",
    description: "Página focada em captação de alunos com planos e depoimentos.",
    tags: ["Treinamento", "WhatsApp", "Conversão"],
    link: "https://rafael-costa-rio-energetic-launch.lovable.app",
    active: true,
    images: [
      "https://i.imgur.com/JR3fVL7.png",
      "https://i.imgur.com/uqeevYy.png",
      "https://i.imgur.com/REJYv9U.png",
      "https://i.imgur.com/BO2p2gC.png",
      "https://i.imgur.com/KGGZ4YN.png",
    ],
  },
  {
    niche: "Pet Shop",
    title: "Pet Shop / Banho e Tosa",
    description: "Site com agendamento de banho e tosa e cardápio de serviços.",
    tags: ["Pet", "Agendamento", "Fofo"],
    link: "#",
    active: false,
    images: [],
  },
  {
    niche: "Imóveis",
    title: "Corretor de Imóveis — Demonstração",
    description: "Página de captação de leads para venda e locação de imóveis.",
    tags: ["Imóveis", "Contatos", "WhatsApp"],
    link: "https://mendes-prime-landing.lovable.app/",
    active: true,
    images: [
      "https://i.imgur.com/XUxLo6j.png",
      "https://i.imgur.com/YWxK9z7.png",
      "https://i.imgur.com/heG3UD3.png",
      "https://i.imgur.com/CwKW3fR.png",
      "https://i.imgur.com/kUvVHyp.png",
    ],
  },
  {
    niche: "Mecânica",
    title: "Mecânica / Autopeças",
    description: "Página com serviços, localização e orçamento via WhatsApp.",
    tags: ["Automotivo", "WhatsApp", "Local"],
    link: "#",
    active: false,
    images: [],
  },
  {
    niche: "Educação",
    title: "Professor Particular",
    description: "Página de captação de alunos com áreas de ensino e depoimentos.",
    tags: ["Educação", "Online", "WhatsApp"],
    link: "#",
    active: false,
    images: [],
  },
  {
    niche: "Limpeza",
    title: "Limpeza Residencial",
    description: "Página com pacotes de serviços e agendamento fácil.",
    tags: ["Serviços", "Confiança", "WhatsApp"],
    link: "#",
    active: false,
    images: [],
  },
];

export const projects = [allProjects[6], ...allProjects.slice(1, 5), allProjects[0]].filter((project): project is Project => project !== undefined);
