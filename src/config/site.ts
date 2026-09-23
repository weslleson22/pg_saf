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
  name: "Santos, Araújo e Fonseca Advocacia",
  shortName: "SAF Advocacia",
  monogram: "SAF",
  tagline: "Excelência, Rigor Técnico e Defesa Intransigente",
  // O número do WhatsApp pode ser alterado aqui a qualquer momento:
  whatsappNumber: "5598999999999",
  phoneDisplay: "(98) 99999-9999",
  email: "contato@safadvocacia.com.br",
  address: "Av. Colares Moreira, Renascença II, Edifício Executive Lake Center, São Luís - MA",
  addressShort: "São Luís - MA | Atendimento Nacional",
  oabRegistration: "Sociedade de Advogados devidamente inscrita na OAB/MA",
  businessHours: "Segunda a Sexta: 08h às 18h | Plantão Criminal: 24 Horas / 7 Dias",
  defaultWhatsAppMessage: "Olá! Gostaria de solicitar um atendimento jurídico com a equipe da SAF Advocacia.",
  emergencyWhatsAppMessage: "URGENTE: Preciso de atendimento do Plantão Criminal 24h para assistência em flagrante / custódia.",
};

export const LAWYERS: Lawyer[] = [
  {
    id: "anderson-fonseca",
    name: "Dr. Anderson Fonseca",
    role: "Sócio-Fundador",
    oab: "OAB/MA",
    folder: "ANDERSON",
    photo1: "/foto/ANDERSON/foto1.jpg",
    photo2: "/foto/ANDERSON/foto2.jpg",
    specialty: "Direito Penal Econômico & Processual Penal",
    description: "Especialista em defesas penais complexas, crimes contra a ordem tributária e atuação em instâncias superiores.",
    credentials: [
      "Pós-graduado em Direito Penal Econômico e Processo Penal",
      "Vasta experiência em atuação preventiva penal e sustentações orais",
      "Foco em crimes financeiros, lavagem de capitais e inquéritos especiais"
    ],
    whatsappMessage: "Olá, Dr. Anderson! Gostaria de agendar uma consulta sobre Direito Penal Econômico e Defesa Criminal."
  },
  {
    id: "jose-araujo",
    name: "Dr. José Araújo",
    role: "Sócio-Fundador",
    oab: "OAB/MA",
    folder: "JOSE",
    photo1: "/foto/JOSE/foto1.jpg",
    photo2: "/foto/JOSE/foto2.jpg",
    specialty: "Direito Criminal Estratégico & Tribunal do Júri",
    description: "Atuação combativa na tribuna do Tribunal do Júri, acompanhamento de prisões em flagrante e medidas urgentes de liberdade.",
    credentials: [
      "Especialista em Ciências Criminais e Tribunal do Júri",
      "Experiência consolidada em defesas orais e audiências de custódia",
      "Atuação célere em plantão para habeas corpus e revogação de prisões"
    ],
    whatsappMessage: "Olá, Dr. José Araújo! Preciso de consultoria estratégica em matéria criminal / Tribunal do Júri."
  },
  {
    id: "livia-santos",
    name: "Dra. Lívia Santos",
    role: "Sócia-Fundadora",
    oab: "OAB/MA",
    folder: "LIVIA",
    photo1: "/foto/LIVIA/foto1.jpg",
    photo2: "/foto/LIVIA/foto2.jpg",
    specialty: "Direito Penal Empresarial & Compliance",
    description: "Gestão estratégica de riscos criminais corporativos, investigações defensivas internas e governança jurídica.",
    credentials: [
      "Especialista em Direito Corporativo e Compliance Penal",
      "Consultora para comitês de ética e gestão de passivos penais",
      "Defesa institucional de dirigentes, sócios e executivos"
    ],
    whatsappMessage: "Olá, Dra. Lívia! Gostaria de tratar de governança e defesa penal empresarial com seu escritório."
  },
  {
    id: "myceia-santos",
    name: "Dra. Myceia Santos",
    role: "Advogada Associada",
    oab: "OAB/MA",
    folder: "MYCEIA",
    photo1: "/foto/MYCEIA/foto1.jpg",
    photo2: "/foto/MYCEIA/foto2.jpg",
    specialty: "Direito Civil & Planejamento Sucessório",
    description: "Atendimento focado na proteção de patrimônio familiar, inventários judiciais e extrajudiciais e litígios cíveis complexos.",
    credentials: [
      "Especialista em Direito das Famílias e Sucessões",
      "Mediação estratégica e estruturação de holdings familiares",
      "Solução ágil e sigilosa para partilhas de bens de alto valor"
    ],
    whatsappMessage: "Olá, Dra. Myceia! Gostaria de agendar uma consulta sobre inventário / direito civil patrimonial."
  },
  {
    id: "tayane-araujo",
    name: "Dra. Tayane Araújo",
    role: "Advogada Associada",
    oab: "OAB/MA",
    folder: "TAYANE",
    photo1: "/foto/TAYANE/foto1.jpg",
    photo2: "/foto/TAYANE/foto2.jpg",
    specialty: "Direito Empresarial & Contratos Estratégicos",
    description: "Redação de contratos de alta complexidade, consultoria preventiva empresarial e resolução contenciosa de disputas societárias.",
    credentials: [
      "Especialista em Direito Societário e Negocial",
      "Blindagem jurídica contratual e negociações de acordos bilaterais",
      "Assessoria para estruturação de novos empreendimentos"
    ],
    whatsappMessage: "Olá, Dra. Tayane! Gostaria de consultoria jurídica sobre contratos e direito societário."
  },
  {
    id: "werverson-santos",
    name: "Dr. Werverson Santos",
    role: "Advogado Associado",
    oab: "OAB/MA",
    folder: "WERVERSON",
    photo1: "/foto/WERVERSON/foto1.jpg",
    photo2: "/foto/WERVERSON/foto2.jpg",
    specialty: "Contencioso Estratégico & Litígios Complexos",
    description: "Defesa combativa de interesses em causas cíveis e penais de alta complexidade com acompanhamento individualizado.",
    credentials: [
      "Especialista em Processo Civil e Prática Forense Avançada",
      "Elaboração de teses recursais para Tribunais de Justiça e Superiores",
      "Condução técnica de disputas jurídicas sensíveis e confidenciais"
    ],
    whatsappMessage: "Olá, Dr. Werverson! Gostaria de solicitar uma análise para um litígio judicial estratégico."
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "criminal",
    isMain: true,
    badge: "Especialidade Principal & Plantão 24h",
    title: "Direito Penal & Defesa Criminal Estratégica",
    subtitle: "Atuação técnica imediata, combativa e intransigente em situações de alto risco e urgência.",
    description: "Nossa banca oferece atendimento célere com foco na preservação irrestrita da liberdade, combate a excessos estatais e elaboração de teses defensivas sofisticadas perante todas as instâncias judiciais.",
    items: [
      "Plantão 24 Horas para Prisões em Flagrante e Delegacias",
      "Atuação Imediata em Audiências de Custódia",
      "Impetração Urgente de Habeas Corpus (TJ, TRF, STJ e STF)",
      "Acompanhamento em Inquéritos Policiais, PICs e Operações",
      "Atuação Combativa e Técnica no Tribunal do Júri",
      "Penal Econômico: Crimes Tributários, Financeiros e Lavagem",
      "Recursos em Instâncias Superiores e Sustentação Oral"
    ],
    ctaText: "Acionar Plantão Criminal 24h",
    whatsappMessage: "Olá! Preciso de orientação urgente com a banca de Direito Penal da SAF Advocacia."
  },
  {
    id: "civil",
    title: "Direito Civil & Contratual Estratégico",
    subtitle: "Segurança jurídica preventiva e resolução assertiva de litígios patrimoniais.",
    description: "Elaboração de contratos de alta complexidade, recuperação de ativos, responsabilidade civil e condução técnica de litígios imobiliários e indenizatórios.",
    items: [
      "Blindagem e Auditoria de Contratos Complexos",
      "Ações de Responsabilidade Civil e Reparação de Danos",
      "Contencioso Cível Imobiliário e Posse",
      "Execução de Títulos e Cobrança de Créditos Estruturados"
    ],
    ctaText: "Consultar Especialista Cível",
    whatsappMessage: "Olá! Gostaria de tirar dúvidas com o setor de Direito Civil e Contratos da SAF."
  },
  {
    id: "familia",
    title: "Família & Planejamento Sucessório",
    subtitle: "Discrição, empatia e solidez na proteção do patrimônio familiar.",
    description: "Condução sigilosa de divórcios, partilhas de bens, testamentos e inventários judiciais ou em cartório, priorizando a estabilidade patrimonial entre gerações.",
    items: [
      "Inventários Judiciais e Extrajudiciais de Alta Complexidade",
      "Planejamento Sucessório e Estruturação de Heranças",
      "Divórcios Consensuais e Litigiosos com Partilha Segura",
      "Pactos Antenupciais e Acordos de Convivência"
    ],
    ctaText: "Consultar Direito de Família",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta sobre inventário / partilha com a SAF Advocacia."
  },
  {
    id: "empresarial",
    title: "Direito Empresarial & Tributário",
    subtitle: "Sustentabilidade fiscal e blindagem de operações societárias.",
    description: "Consultoria preventiva para tomada de decisões, defesas em execuções fiscais, recuperação de tributos pagos indevidamente e estruturação societária.",
    items: [
      "Defesa Técnica em Autos de Infração e Execuções Fiscais",
      "Planejamento Tributário Lícito e Recuperação de Créditos",
      "Governança Corporativa e Reestruturação Societária",
      "Assessoria em Fusões, Aquisições e Contratos Comerciais"
    ],
    ctaText: "Consultar Setor Empresarial",
    whatsappMessage: "Olá! Gostaria de uma avaliação tributária/empresarial para minha organização."
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista Corporativo",
    subtitle: "Gestão estratégica de passivo e conformidade para empresas e executivos.",
    description: "Defesa patronal contenciosa de alto valor, auditoria preventiva de rotinas laborais e negociação de contratos executivos.",
    items: [
      "Defesa Patronal em Reclamatórias de Alto Risco",
      "Prevenção e Mitigação de Passivo Trabalhista",
      "Contratos de Alta Gestão e Não-Concorrência",
      "Atuação em Mediações com Sindicatos e Ministério Público"
    ],
    ctaText: "Consultar Trabalhista Patronal",
    whatsappMessage: "Olá! Gostaria de conversar sobre consultoria trabalhista estratégica para empresas."
  }
];

export const TRUST_BADGES = [
  {
    title: "Equipe Multidisciplinar",
    description: "Advogados especialistas com atuação integrada em Direito Criminal, Cível, Família, Empresarial e Trabalhista."
  },
  {
    title: "Plantão de Urgência 24h",
    description: "Pronta resposta ininterrupta para prisões em flagrante, custódia e medidas cautelares emergenciais."
  },
  {
    title: "Tribunais Superiores & Nacional",
    description: "Sustentações orais e recursos técnicos com atuação perante TJs, TRFs, STJ e Supremo Tribunal Federal."
  },
  {
    title: "Sigilo & Estratégia Sob Medida",
    description: "Confidencialidade irrestrita e advocacia artesanal, sem soluções pré-moldadas ou genéricas."
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "O que fazer imediatamente em caso de prisão em flagrante ou abordagem policial?",
    answer: "O primeiro passo é manter a calma e exercer o direito constitucional de permanecer em silêncio até a chegada de um advogado criminalista de sua confiança. Não forneça senhas de celulares sem mandado judicial e exija que a autoridade policial entre em contato imediato com a defesa técnica. Nosso plantão 24h atende diligências com rapidez para assegurar que nenhum direito seja violado na delegacia."
  },
  {
    question: "Qual a relevância da Audiência de Custódia e como o escritório atua?",
    answer: "A Audiência de Custódia ocorre em até 24 horas após a prisão e é o momento processual definitivo para demonstrar a ilegalidade da prisão ou pleitear a liberdade provisória (com ou sem medidas cautelares). Nossa banca prepara teses documentadas com comprovação de residência, ocupação lícita e primariedade para evitar a conversão em prisão preventiva."
  },
  {
    question: "Como é resguardado o sigilo profissional da minha consulta?",
    answer: "A confidencialidade é a espinha dorsal da advocacia criminal. Todo contato, mensagem, documento e relato trocado entre cliente e advogado é rigorosamente protegido pelo sigilo profissional (Art. 7º, II do Estatuto da OAB) e pelas regras de segredo de justiça, assegurando discrição inviolável desde o primeiro contato."
  },
  {
    question: "O escritório atua fora do estado e perante os Tribunais Superiores?",
    answer: "Sim. A SAF Advocacia conta com estrutura tecnológica e operacional para atuar em todo o território nacional, com destaque para a impetração de Habeas Corpus e sustentações orais perante os Tribunais Regionais Federais (TRFs), Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF) em Brasília."
  },
  {
    question: "Como funciona a contratação e o plantão criminal?",
    answer: "Em casos de urgência (flagrantes, mandados de prisão, buscas), o atendimento é imediato através do nosso canal de plantão telefônico/WhatsApp. Os honorários são ajustados de acordo com a complexidade técnica e a tabela orientativa da OAB, com total transparência e contrato formal."
  }
];

export function getWhatsAppUrl(customText?: string): string {
  const number = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
  const message = customText || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
