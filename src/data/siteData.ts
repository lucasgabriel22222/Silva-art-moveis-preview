import heroKitchen from '../assets/images/hero_silvana_kitchen_1791831044184.jpg';
import closetImg from '../assets/images/closet_dormitorio_1791831055711.jpg';
import salaPanelImg from '../assets/images/sala_painel_tv_1791831065064.jpg';
import cozinhaImg from '../assets/images/cozinha_planejada_1791831076019.jpg';
import homeOfficeImg from '../assets/images/home_office_sob_medida_1791831085502.jpg';
import banheiroImg from '../assets/images/banheiro_gabinete_1791831105510.jpg';

export type AmbientCategory = 'cozinhas' | 'dormitorios' | 'salas' | 'escritorios' | 'banheiros' | 'projetos' | string;

export interface AmbientItem {
  id: string;
  category: AmbientCategory;
  categoryLabel: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  image: string;
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  location: string;
  text: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const siteData = {
  company: {
    name: 'Silvana Art Móveis Planejados',
    shortName: 'Silvana Art Móveis',
    tagline: 'Móveis planejados sob medida, cozinhas, dormitórios e ambientes personalizados em Cuiabá',
    segment: 'Marcenaria de Alto Padrão & Móveis Planejados Sob Medida',
    phoneFormatted: '+55 65 99259-5365',
    phoneRaw: '5565992595365',
    address: {
      street: 'Rua Paineira Branca, Quadra 06, Nº 05',
      neighborhood: 'Coxipó da Ponte (Lot. Belita Costa Marques)',
      city: 'Cuiabá',
      state: 'MT',
      country: 'Brasil',
      full: 'Rua Paineira Branca, Quadra 06, Nº 05 - Coxipó da Ponte, Cuiabá - MT, Brasil',
      googleMapsUrl: 'https://maps.google.com/?q=Rua+Paineira+Branca,+Quadra+06,+N+05+-+Coxip%C3%B3+da+Ponte,+Cuiab%C3%A1+-+MT',
      embedMapUrl: 'https://www.google.com/maps?q=Rua+Paineira+Branca,+Quadra+06,+N+05,+Coxip%C3%B3+da+Ponte,+Cuiab%C3%A1+-+MT&output=embed'
    },
    hours: [
      { days: 'Segunda a Sexta-feira', time: '08:00 às 18:00' },
      { days: 'Sábado', time: '08:00 às 12:00' },
      { days: 'Domingo', time: 'Fechado' }
    ],
    googleRating: {
      score: '5.0',
      totalReviews: 2,
      maxScore: '5.0'
    },
    social: {
      instagram: 'https://instagram.com/silvanaartmoveis',
      instagramHandle: '@silvanaartmoveis'
    },
    defaultWhatsappLink: 'https://wa.me/5565992595365?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20m%C3%B3veis%20planejados%20na%20Silvana%20Art%20M%C3%B3veis.'
  },

  images: {
    heroKitchen,
    closetImg,
    salaPanelImg,
    cozinhaImg,
    homeOfficeImg,
    banheiroImg
  },

  stats: [
    {
      value: '5.0 / 5.0',
      label: 'Nota Máxima no Google',
      description: 'Satisfação comprovada com marcenaria de alto nível'
    },
    {
      value: '100% Sob Medida',
      label: 'Projetos Exclusivos',
      description: 'Otimização inteligente para cada metro quadrado'
    },
    {
      value: 'Marcenaria Fina',
      label: 'Ferragens & Acabamento',
      description: 'MDF de qualidade e durabilidade comprovada'
    },
    {
      value: 'Coxipó da Ponte',
      label: 'Cuiabá e Região',
      description: 'Atendimento consultivo e instalação completa'
    }
  ],

  ambients: [
    {
      id: 'cozinha-gourmet',
      category: 'cozinhas',
      categoryLabel: 'Cozinhas',
      title: 'Cozinhas Planejadas e Ilhas Gourmet',
      tag: 'Alto Padrão',
      description: 'Ambientes funcionais com aproveitamento milimétrico de armários, gavetões com amortecimento, torres quentes e integração com bancadas de refeição.',
      features: ['Torres quentes e despenseiros inteligentes', 'Gavetas com corrediças telescópicas e amortecimento', 'Divisores internos sob medida para talheres e utensílios'],
      image: cozinhaImg,
      whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para Cozinha Planejada / Ilha Gourmet na Silvana Art Móveis.'
    },
    {
      id: 'dormitorio-closet',
      category: 'dormitorios',
      categoryLabel: 'Dormitórios & Closets',
      title: 'Dormitórios e Closets Planejados',
      tag: 'Sob Medida',
      description: 'Armários com portas de correr ou perfil de alumínio, cabideiros iluminados, nichos para calçados, joias e divisão ergonômica para casal ou solteiro.',
      features: ['Iluminação interna em perfis de LED', 'Portas espelhadas ou vidro reflecta', 'Gaveteiros com colmeias organizadoras'],
      image: closetImg,
      whatsappMessage: 'Olá! Gostaria de um orçamento para Dormitório / Closet Planejado com a Silvana Art Móveis.'
    },
    {
      id: 'sala-painel',
      category: 'salas',
      categoryLabel: 'Salas & Painéis',
      title: 'Painéis para TV, Home Theater e Salas',
      tag: 'Tendência',
      description: 'Painéis ripados sob medida, racks suspensos com passagem oculta de fios, nichos com LED embutido e composição com diferentes texturas de madeira e laca.',
      features: ['Painéis com acabamento ripado de precisão', 'Passagem técnica oculta de cabeamento e tomadas', 'Bancadas e gavetões suspensos de alta sustentação'],
      image: salaPanelImg,
      whatsappMessage: 'Olá! Gostaria de um orçamento para Painel de TV / Home Theater planejado na Silvana Art Móveis.'
    },
    {
      id: 'home-office',
      category: 'escritorios',
      categoryLabel: 'Escritórios',
      title: 'Home Office e Ambientes Corporativos',
      tag: 'Ergonômico',
      description: 'Bancadas de trabalho espaçosas, estantes com prateleiras reforçadas, armários para arquivos e gestão completa de tomadas para alta produtividade.',
      features: ['Ergonomia ajustada à altura do cliente', 'Estantes modulares para livros e decorações', 'Soluções integradas de passagem de cabos'],
      image: homeOfficeImg,
      whatsappMessage: 'Olá! Gostaria de cotar móveis sob medida para Home Office ou Escritório Comercial na Silvana Art Móveis.'
    },
    {
      id: 'banheiro-gabinete',
      category: 'banheiros',
      categoryLabel: 'Banheiros',
      title: 'Banheiros, Lavatórios e Gabinetes',
      tag: 'Resistente à Umidade',
      description: 'Gabinetes suspensos com marcenaria tratada para áreas úmidas, armários espelheiros com abertura oculta e gavetas com recorte para sifão.',
      features: ['MDF resistente à umidade e vedação protetora', 'Armários espelheiros superiores com prateleiras', 'Gavetas inferiores com gaveteiro inteligente'],
      image: banheiroImg,
      whatsappMessage: 'Olá! Gostaria de um orçamento para Gabinete e Armários de Banheiro na Silvana Art Móveis.'
    },
    {
      id: 'projeto-3d-completo',
      category: 'projetos',
      categoryLabel: 'Projetos 3D',
      title: 'Projeto 3D e Ambientes Integrados',
      tag: 'Visualização Real',
      description: 'Planejamento visual completo antes da fabricação para que você visualize cada detalhe de cores, puxadores, divisões e circulação antes de produzir.',
      features: ['Estudo do espaço e planta baixa', 'Escolha guiada de padrões de MDF e ferragens', 'Instalação própria com equipe técnica especializada'],
      image: heroKitchen,
      whatsappMessage: 'Olá! Gostaria de entender como funciona o Projeto 3D e solicitar consultoria para meu imóvel na Silvana Art Móveis.'
    }
  ],

  differentials: [
    {
      icon: 'ShieldCheck',
      title: 'Avaliação Máxima 5.0 no Google',
      description: 'Compromisso com o cliente demonstrado em avaliações reais. Pontualidade, clareza e fidelidade ao projeto acordado.'
    },
    {
      icon: 'Home',
      title: '100% Sob Medida para o Seu Espaço',
      description: 'Aproveitamento total de cada centímetro, cantos e pés-direitos sem módulos prontos restritivos. Cada peça é fabricada para o seu ambiente.'
    },
    {
      icon: 'Layers',
      title: 'Materiais Nobres e Ferragens de Alta Linha',
      description: 'Trabalhamos com chapas de MDF de alto padrão, corrediças reforçadas e sistemas de amortecimento que evitam batidas e aumentam a durabilidade.'
    },
    {
      icon: 'Clock',
      title: 'Compromisso com Prazo de Entrega',
      description: 'Cronograma transparente do corte à montagem. Respeito ao seu tempo e montagem organizada e limpa no local.'
    },
    {
      icon: 'MapPin',
      title: 'Atendimento Próximo em Cuiabá',
      description: 'Sediada no Coxipó da Ponte, facilitando a visita técnica, medição e suporte presencial em toda a Grande Cuiabá.'
    },
    {
      icon: 'MessageCircle',
      title: 'Atendimento Ágil pelo WhatsApp',
      description: 'Sem burocracia ou esperas longas. Tire dúvidas, envie a planta ou medidas e receba orientação de quem entende de marcenaria.'
    }
  ],

  reviews: [
    {
      id: 'rev-1',
      name: 'Rafael Martins',
      rating: 5,
      location: 'Cuiabá - MT',
      text: 'Excelente trabalho! Os móveis planejados da minha cozinha ficaram perfeitos, encaixe impecável e acabamento de primeira. Recomendo muito.',
      date: 'Avaliação Verificada no Google'
    },
    {
      id: 'rev-2',
      name: 'Juliana Costa',
      rating: 5,
      location: 'Coxipó da Ponte, Cuiabá - MT',
      text: 'Profissionais muito competentes, pontuais na entrega e atenciosos do projeto à montagem final no Coxipó da Ponte.',
      date: 'Avaliação Verificada no Google'
    }
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'Vocês atendem em toda Cuiabá e região?',
      answer: 'Sim! Realizamos medição técnica, desenvolvimento do projeto e instalação de móveis planejados em todos os bairros de Cuiabá, Várzea Grande e cidades próximas.'
    },
    {
      id: 'faq-2',
      question: 'Como funciona a criação do projeto 3D?',
      answer: 'Conversamos sobre suas necessidades pelo WhatsApp, coletamos as medidas ou a planta do imóvel e elaboramos a modelagem 3D personalizada para visualização dos ambientes antes do corte.'
    },
    {
      id: 'faq-3',
      question: 'Qual o prazo médio de entrega e instalação?',
      answer: 'O prazo varia conforme o volume de ambientes e a complexidade técnica. Estabelecemos prazos formais em contrato com cronograma transparente de fabricação e montagem.'
    },
    {
      id: 'faq-4',
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Disponibilizamos condições facilitadas com opções de parcelamento, entrada programada e pagamento à vista via Pix com condições exclusivas. Consulte detalhes diretamente no WhatsApp.'
    },
    {
      id: 'faq-5',
      question: 'Como faço para solicitar um orçamento?',
      answer: 'É muito simples: basta clicar em qualquer botão do WhatsApp no site, informar quais ambientes deseja planejar ou enviar sua planta/medidas para conversarmos diretamente.'
    }
  ]
};

export const createWhatsappUrl = (customMessage?: string) => {
  const base = `https://wa.me/${siteData.company.phoneRaw}`;
  const message = customMessage || 'Olá! Vim pelo site e gostaria de solicitar um orçamento de móveis planejados na Silvana Art Móveis.';
  return `${base}?text=${encodeURIComponent(message)}`;
};
