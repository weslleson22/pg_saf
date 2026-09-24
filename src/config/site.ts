export interface Lawyer {
  id: string;
  name: string;
  role: string;
  oab: string;
  folder: string;
  photo1: string;
  photo2: string;
  specialty: string;
  description: string;
  credentials: string[];
  whatsappMessage: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  isMain?: boolean;
  badge?: string;
  description: string;
  items: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "SAF Advocacia e Consultoria",
  shortName: "SAF Advocacia e Consultoria",
  monogram: "SAF",
  tagline: "Excelência em Direito Imobiliário, Atuação Estratégica & Soluções Jurídicas Integradas",
  whatsappNumber: "5598999999999",
  phoneDisplay: "(98) 99999-9999",
  email: "contato@safadvocacia.com.br",
  address: "Av. Colares Moreira, Renascença II, Edifício Executive Lake Center, São Luís - MA",
  addressShort: "São Luís - MA | Atendimento Nacional",
  oabRegistration: "Sociedade de Advogados devidamente inscrita na OAB/MA",
  businessHours: "Segunda a Sexta: 08h às 18h | Plantão Criminal: 24 Horas / 7 Dias",
  defaultWhatsAppMessage: "Olá, gostaria de falar com um advogado da SAF Advocacia e Consultoria.",
  emergencyWhatsAppMessage: "Olá! Gostaria de falar com a equipe da SAF Advocacia e Consultoria sobre uma demanda urgente.",
};

export const LAWYERS: Lawyer[] = [
  {
    id: "anderson-araujo",
    name: "Anderson Luiz Araújo Júnior",
    role: "Advogado / Sócio",
    oab: "OAB/MA nº 28.128",
    folder: "Anderson Fonseca",
    photo1: "/foto/Anderson Fonseca/foto1.jpg",
    photo2: "/foto/Anderson Fonseca/foto2.jpg",
    specialty: "Direito Penal, Processo Penal & Defesa Estratégica",
    description: "Advogado sócio com sólida atuação e especialização técnica em Direito Penal e Processo Penal, com foco em defesas técnicas de alta complexidade, consultoria preventiva e garantias fundamentais.",
    credentials: [
      "Pós-graduado em Direito Penal e Processo Penal",
      "Especialização em Lei de Drogas e Organização Criminosa",
      "Atuação combativa em inquéritos policiais, prisões em flagrante e audiências de custódia",
      "Defesa técnica perante a Justiça Estadual, Federal e Cortes Superiores (STJ e STF)"
    ],
    whatsappMessage: "Olá, Dr. Anderson Luiz Araújo Júnior! Gostaria de uma consultoria com a SAF Advocacia e Consultoria."
  },
  {
    id: "jose-araujo",
    name: "José Araújo",
    role: "Advogado / Sócio",
    oab: "OAB/MA",
    folder: "José Araújo",
    photo1: "/foto/José Araújo/foto1.jpg",
    photo2: "/foto/José Araújo/foto2.jpg",
    specialty: "Direito Criminal / Penal Estratégico & Tribunal do Júri",
    description: "Atuação combativa na defesa técnica criminal, Tribunal do Júri, acompanhamento de prisões em flagrante, inquéritos e medidas urgentes de liberdade.",
    credentials: [
      "Especialista em Ciências Criminais e Processo Penal",
      "Experiência consolidada em defesas orais, audiências de custódia e Tribunal do Júri",
      "Atuação estratégica em plantão 24h para habeas corpus e recursos perante Tribunais Superiores"
    ],
    whatsappMessage: "Olá, Dr. José Araújo! Gostaria de uma consultoria em Direito Criminal com a SAF Advocacia e Consultoria."
  },
  {
    id: "livia-dias",
    name: "Lívia Dias",
    role: "Advogada / Sócia",
    oab: "OAB/MA",
    folder: "Lívia Dias",
    photo1: "/foto/Lívia Dias/foto1.jpg",
    photo2: "/foto/Lívia Dias/foto2.jpg",
    specialty: "Direito Imobiliário, Condominial & Cível Estratégico",
    description: "Especialista em assessoria condominial, contratos imobiliários, contencioso cível, reintegração de posse e consultoria preventiva patrimonial.",
    credentials: [
      "Especialista em Direito Imobiliário e Gestão Jurídica Condominial",
      "Consultoria em contratos de locação, reintegração/manutenção de posse e disputas imobiliárias",
      "Auditoria jurídica preventiva (due diligence) e mediação estratégica de conflitos"
    ],
    whatsappMessage: "Olá, Dra. Lívia Dias! Gostaria de agendar uma consulta sobre Direito Imobiliário / Condominial com a SAF Advocacia e Consultoria."
  },
  {
    id: "tayane-araujo",
    name: "Tayane Araújo",
    role: "Advogada / Sócia",
    oab: "OAB/MA",
    folder: "Tayane Araújo",
    photo1: "/foto/Tayane Araújo/foto1.jpg",
    photo2: "/foto/Tayane Araújo/foto2.jpg",
    specialty: "Direito de Família, Sucessões & Planejamento Patrimonial",
    description: "Condução especializada de inventários de alta complexidade, partilha de bens, divórcios e planejamento sucessório patrimonial.",
    credentials: [
      "Especialista em Direito das Famílias e Sucessões",
      "Planejamento sucessório, testamentos e estruturação patrimonial familiar",
      "Resolução célere e sigilosa de inventários judiciais e extrajudiciais em cartório"
    ],
    whatsappMessage: "Olá, Dra. Tayane Araújo! Gostaria de uma consultoria sobre planejamento sucessório / inventário com a SAF Advocacia e Consultoria."
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "imobiliario",
    isMain: true,
    badge: "Destaque Principal & Carro-Chefe",
    title: "Direito Imobiliário & Negócios",
    subtitle: "Segurança jurídica e solidez patrimonial em operações e regularizações imobiliárias.",
    description: "Nossa banca é referência em Direito Imobiliário e negócios imobiliários, prestando assessoria consultiva, preventiva e contenciosa de alto rigor técnico para proprietários, investidores, condomínios e incorporadoras.",
    items: [
      "Regularização Fundiária e de Imóveis (Urbanos e Rurais)",
      "Contratos de Compra, Venda, Locação e Garantias",
      "Assessoria Especializada a Condomínios e Associações",
      "Loteamentos, Incorporações e Novos Empreendimentos",
      "Usucapião Judicial e Extrajudicial em Cartório",
      "Ações Possessórias: Reintegração, Manutenção e Imissão de Posse",
      "Segurança Jurídica e Arrematação em Leilões Imobiliários",
      "Auditoria Jurídica Imobiliária Preventiva (Due Diligence)"
    ],
    ctaText: "Falar com Especialista em Direito Imobiliário",
    whatsappMessage: "Olá! Gostaria de falar com um advogado da SAF Advocacia e Consultoria sobre Direito Imobiliário e Regularização de Imóveis."
  },
  {
    id: "criminal",
    title: "Direito Criminal / Penal Estratégico",
    subtitle: "Defesa técnica imediata, inquéritos e consultoria preventiva com plantão 24h.",
    description: "Atuação intransigente na preservação da liberdade e defesa técnica perante delegacias, audiências de custódia, Tribunal do Júri e Tribunais Superiores.",
    items: [
      "Plantão 24 Horas para Flagrantes e Audiências de Custódia",
      "Habeas Corpus de Urgência (TJ, TRF, STJ e STF)",
      "Acompanhamento em Inquéritos Policiais e Operações",
      "Atuação Combativa e Técnica no Tribunal do Júri",
      "Consultoria Preventiva e Defesa em Crimes Econômicos"
    ],
    ctaText: "Consultar Setor Criminal",
    whatsappMessage: "Olá! Gostaria de falar com a equipe da SAF Advocacia e Consultoria sobre Direito Criminal / Plantão Penal."
  },
  {
    id: "familia",
    title: "Direito de Família e Sucessões",
    subtitle: "Planejamento sucessório, inventários e partilhas com discrição e segurança.",
    description: "Condução humanizada e estratégica de inventários, partilhas de bens, testamentos e divórcios, resguardando a estabilidade patrimonial entre gerações.",
    items: [
      "Inventários Judiciais e Extrajudiciais de Alta Complexidade",
      "Planejamento Sucessório e Estruturação de Heranças",
      "Partilha Segura de Bens e Dissolução Patrimonial",
      "Divórcios Consensuais e Litigiosos",
      "Pactos Antenupciais e Acordos de Convivência"
    ],
    ctaText: "Consultar Família & Sucessões",
    whatsappMessage: "Olá! Gostaria de falar com a equipe da SAF Advocacia e Consultoria sobre Inventário / Direito de Família."
  },
  {
    id: "civil",
    title: "Direito Civil e Contratos",
    subtitle: "Segurança jurídica preventiva e resolução assertiva de litígios patrimoniais.",
    description: "Elaboração e auditoria de contratos complexos, recuperação estruturada de ativos, responsabilidade civil e condução contenciosa cível.",
    items: [
      "Auditoria e Elaboração de Contratos Complexos",
      "Ações de Responsabilidade Civil e Indenizações",
      "Cobrança de Créditos Estruturados e Execuções",
      "Resolução de Disputas Cíveis e Obrigacionais"
    ],
    ctaText: "Consultar Especialista Cível",
    whatsappMessage: "Olá! Gostaria de falar com a equipe da SAF Advocacia e Consultoria sobre Direito Civil e Contratos."
  },
  {
    id: "empresarial",
    title: "Consultoria Empresarial e Tributária",
    subtitle: "Sustentabilidade fiscal e blindagem de operações societárias.",
    description: "Consultoria preventiva para tomada de decisões, defesas em execuções fiscais, recuperação de créditos e estruturação societária.",
    items: [
      "Defesa Técnica em Execuções Fiscais e Autos de Infração",
      "Planejamento Tributário Lícito e Recuperação de Créditos",
      "Governança Corporativa e Reestruturação Societária",
      "Assessoria em Fusões, Aquisições e Contratos Comerciais"
    ],
    ctaText: "Consultar Setor Empresarial",
    whatsappMessage: "Olá! Gostaria de falar com a equipe da SAF Advocacia e Consultoria sobre Consultoria Empresarial e Tributária."
  }
];

export const TRUST_BADGES = [
  {
    title: "Autoridade em Direito Imobiliário",
    description: "Expertise em regularização fundiária, usucapião, contratos complexos e segurança jurídica para investimentos imobiliários."
  },
  {
    title: "Banca Multidisciplinar Integrada",
    description: "Atuação integrada e especializada em Direito Imobiliário, Criminal, Família e Sucessões, Cível e Empresarial."
  },
  {
    title: "Plantão Penal Permanente 24h",
    description: "Pronta resposta ininterrupta para flagrantes, custódia e urgências criminais em delegacias e tribunais."
  },
  {
    title: "Tribunais Superiores & Nacional",
    description: "Estrutura para condução de processos e sustentações perante Tribunais de Justiça e Cortes Superiores em Brasília."
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Como funciona a regularização de um imóvel sem escritura ou com pendências na matrícula?",
    answer: "A regularização imobiliária depende da análise detalhada da cadeia dominial e da situação física e registral do imóvel. Pode ser realizada via via administrativa em cartório (como a adjudicação compulsória ou usucapião extrajudicial), procedimentos de REURB (regularização fundiária urbana/rural) ou via judicial. Nossa equipe analisa os documentos para indicar o caminho mais célere e com menor impacto tributário."
  },
  {
    question: "Quais são as vantagens da Usucapião Extrajudicial em Cartório?",
    answer: "A Usucapião Extrajudicial, processada diretamente no Cartório de Registro de Imóveis competente, oferece muito mais celeridade do que a via judicial tradicional. Com os documentos, planta, memorial descritivo e anuência dos confrontantes devidamente instruídos pela advocacia, é possível obter a propriedade definitiva e a matrícula do imóvel em tempo consideravelmente reduzido."
  },
  {
    question: "Por que contar com assessoria jurídica na compra, venda ou leilão de imóveis?",
    answer: "A auditoria jurídica imobiliária (due diligence) previne riscos graves como fraudes contra credores, penhoras ocultas, passivos tributários e vícios estruturais que podem anular a compra ou gerar prejuízos irreparáveis. Em leilões imobiliários, nossa banca examina previamente o edital, a viabilidade de desocupação e a higidez do processo judicial para garantir arrematações lucrativas e 100% seguras."
  },
  {
    question: "O que fazer imediatamente em caso de prisão em flagrante ou abordagem policial?",
    answer: "O primeiro passo é manter a calma e exercer o direito constitucional de permanecer em silêncio até a chegada de um advogado criminalista. Não forneça senhas de celulares sem mandado judicial e exija o contato com a defesa técnica. Nosso plantão criminal atende diligências com prontidão para assegurar a preservação de direitos e atuar na audiência de custódia."
  },
  {
    question: "Como o escritório conduz inventários e partilhas com bens imóveis?",
    answer: "Bens imóveis frequentemente apresentam desafios em inventários devido a pendências documentais, avaliações divergentes ou partilhas entre herdeiros. Nossa atuação integra o Direito de Família e Sucessões com o Direito Imobiliário, permitindo regularizar matrículas pendentes, planejar a partilha de forma justa e, quando todos concordam, lavrar o inventário em cartório com rapidez e menor custo tributário."
  }
];

export function getWhatsAppUrl(customText?: string): string {
  const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
  const message = customText || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}