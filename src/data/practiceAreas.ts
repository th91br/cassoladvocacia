export interface FAQItem {
  question: string;
  answer: string;
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  category: 'empresas' | 'individuos';
  categoryLabel: string;
  shortDescription: string;
  headline: string;
  context: string;
  typicalScenarios: string[];
  approach: string[];
  faqs: FAQItem[];
  icon: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "trabalhista-empresarial",
    slug: "direito-do-trabalho-e-compliance",
    title: "Direito do Trabalho & Compliance Trabalhista",
    category: "empresas",
    categoryLabel: "Direito Corporativo & Empresarial",
    shortDescription: "Assessoria estratégica ao RH, gestão de passivo trabalhista, defesa em inquéritos do MPT, autuações fiscais e reclamatórias judiciais.",
    headline: "Prevenção de contingências e defesa técnica estruturada nas relações de trabalho corporativas.",
    context: "O ambiente de trabalho moderno exige das empresas rigor procedimental e conformidade constante. A Cassol Advocacia atua tanto na blindagem preventiva das rotinas de gestão de pessoas quanto no patrocínio combativo de defesas em reclamatórias trabalhistas e procedimentos instaurados pelo Ministério Público do Trabalho (MPT) e Superintendência Regional do Trabalho (SRTE).",
    typicalScenarios: [
      "Auditoria preventiva de rotinas trabalhistas e políticas internas de RH",
      "Defesa em Ações Civis Públicas e Inquéritos Civis conduzidos pelo MPT",
      "Contestação e impugnação de Autos de Infração lavrados pela fiscalização da SRTE",
      "Defesa técnica em reclamatórias trabalhistas individuais e coletivas em todas as instâncias",
      "Estruturação de acordos extrajudiciais homologados e negociações coletivas sindicais",
      "Orientação preventiva sobre afastamentos de saúde, adicionais de insalubridade/periculosidade e estabilidades"
    ],
    approach: [
      "Mapeamento preliminar de vulnerabilidades nas rotinas da empresa",
      "Construção de teses defensivas individualizadas e instrução probatória minuciosa",
      "Alinhamento direto com a diretoria e coordenação de Recursos Humanos",
      "Acompanhamento presencial em audiências e sustentações orais nos Tribunais Regionais e TST"
    ],
    faqs: [
      {
        question: "Como funciona a consultoria preventiva para o setor de RH?",
        answer: "Realizamos o diagnóstico das rotinas de admissão, controle de jornada, pagamento de adicionais, segurança do trabalho e desligamento, emitindo pareceres objetivos para eliminar divergências antes que se tornem passivos judiciais."
      },
      {
        question: "A Cassol Advocacia atua em fiscalizações do Ministério Público do Trabalho?",
        answer: "Sim. Assessoramos a empresa desde a notificação inicial, na coleta e organização de documentos, na elaboração de defesas formais e na negociação equilibrada de Termos de Ajustamento de Conduta (TAC), quando cabível."
      }
    ],
    icon: "Briefcase"
  },
  {
    id: "consultoria-contratos",
    slug: "consultoria-e-contratos-empresariais",
    title: "Consultoria & Contratos Empresariais",
    category: "empresas",
    categoryLabel: "Direito Corporativo & Empresarial",
    shortDescription: "Elaboração, revisão minuciosa e negociação de contratos comerciais, proteção patrimonial e acordos estratégicos entre sócios e parceiros.",
    headline: "Segurança jurídica em transações comerciais e relações interempresariais.",
    context: "Um contrato mal redigido é a semente de litígios demorados e prejuízos operacionais. A atuação da Cassol Advocacia foca em desenhar instrumentos contratuais personalizados, equilibrando a proteção contra riscos futuros com a agilidade comercial exigida pelos negócios na Serra Gaúcha.",
    typicalScenarios: [
      "Elaboração e revisão de contratos de fornecimento, prestação de serviços e distribuição comercial",
      "Instrumentos de confidencialidade (NDA), memorandos de entendimento (MoU) e acordos societários",
      "Assessoria em negociações extrajudiciais complexas e prevenção de litígios societários",
      "Cláusulas protetivas de responsabilidade civil, rescisão e garantias contratuais",
      "Gestão jurídica do ciclo de vida dos contratos e resolução amigável de controvérsias comerciais"
    ],
    approach: [
      "Compreensão profunda da operação e do modelo econômico do cliente",
      "Redação em linguagem técnica clara, precisa e sem ambiguidades",
      "Valoração criteriosa de riscos, penalidades e mecanismos de solução de impasses",
      "Foco na preservação da viabilidade comercial dos negócios com máxima blindagem jurídica"
    ],
    faqs: [
      {
        question: "Por que não utilizar modelos padrão de contratos encontrados na internet?",
        answer: "Modelos genéricos ignoram particularidades fiscais, operacionais e de risco específicas da sua atividade, frequentemente contendo cláusulas nulas ou desatualizadas perante os Tribunais, gerando falsa sensação de segurança."
      },
      {
        question: "O escritório realiza mediações e acordos contratuais fora do Judiciário?",
        answer: "Sim. A negociação extrajudicial técnica é sempre priorizada para economizar tempo, custos processuais e preservar relações comerciais duradouras."
      }
    ],
    icon: "FileCheck"
  },
  {
    id: "direito-medico-saude",
    slug: "direito-medico-e-da-saude",
    title: "Direito Médico e da Saúde",
    category: "individuos",
    categoryLabel: "Responsabilidade Técnica & Saúde",
    shortDescription: "Assessoria preventiva e defesas técnicas para médicos, clínicas, odontólogos e hospitais, além de litígios ético-profissionais em conselhos.",
    headline: "Respaldo jurídico especializado para o exercício da medicina e gestão de serviços de saúde.",
    context: "A medicina moderna opera sob elevada pressão de judicialização. O escritório oferece orientação preventiva completa na elaboração de Termos de Consentimento Livre e Esclarecido (TCLE), prontuários e defesas sólidas em sindicâncias e processos ético-disciplinares junto ao CRM/CRO e ações indenizatórias na esfera cível.",
    typicalScenarios: [
      "Defesa de profissionais de saúde em processos de erro médico e responsabilidade civil",
      "Patrocínio em sindicâncias e Processos Ético-Profissionais (PEP) perante o Conselho Regional de Medicina (CRM)",
      "Elaboração e revisão técnica de Termos de Consentimento Informado e auditoria de prontuários",
      "Assessoria para clínicas médicas, odontológicas e instituições de diagnóstico",
      "Orientação sobre publicidade médica e conformidade com as resoluções do Conselho Federal de Medicina (CFM)"
    ],
    approach: [
      "Análise minuciosa de prontuários, literatura médica e protocolos clínicos oficiais",
      "Defesa pautada na obrigação de meio e na demonstração da correção técnica do ato médico",
      "Atuação discreta para salvaguardar a reputação e a integridade profissional do facultativo",
      "Prevenção documental contínua com a equipe e corpo clínico da instituição"
    ],
    faqs: [
      {
        question: "O termo de consentimento genérico protege o médico judicialmente?",
        answer: "Não. Os Tribunais exigem que o consentimento seja específico, esclarecido e detalhado quanto aos riscos concretos do procedimento. Modelos de assinatura genérica têm sido recorrentemente desconsiderados em juízo."
      },
      {
        question: "Qual a importância da assessoria jurídica antes de responder a uma sindicância no CRM?",
        answer: "A fase de manifestação preliminar ou sindicância define se haverá ou não abertura de processo ético formal. Uma resposta técnica, acompanhada dos documentos pertinentes, é decisiva para o arquivamento precoce."
      }
    ],
    icon: "ShieldAlert"
  },
  {
    id: "familia-sucessoes",
    slug: "familia-e-sucessoes",
    title: "Família e Sucessões",
    category: "individuos",
    categoryLabel: "Direito de Família & Patrimônio",
    shortDescription: "Planejamento sucessório seguro, inventários judiciais e extrajudiciais em cartório, partilhas de bens e consultoria patrimonial familiar.",
    headline: "Proteção patrimonial, equilíbrio familiar e condução serena de momentos decisivos.",
    context: "Questões sucessórias e familiares demandam alta sensibilidade humana aliada à precisão técnica. A Cassol Advocacia conduz inventários com celeridade e busca a transmissão ordenada de patrimônio, evitando litígios desgastantes entre herdeiros.",
    typicalScenarios: [
      "Inventários judiciais e inventários extrajudiciais em cartório de notas",
      "Planejamento sucessório, doações com reserva de usufruto e testamentos",
      "Partilha amigável de patrimônio e regularização de titularidade imobiliária",
      "Consultoria patrimonial na escolha e alteração de regime de bens no matrimônio",
      "Ações de reconhecimento e dissolução de união estável com repercussão patrimonial"
    ],
    approach: [
      "Tratamento com absoluta discrição, empatia e confidencialidade",
      "Priorização da via extrajudicial quando preenchidos os requisitos legais, reduzindo prazos e custas",
      "Estruturação patrimonial preventiva para mitigar atritos e despesas tributárias desnecessárias",
      "Condução transparente de cada etapa perante cartórios e órgãos fazendários"
    ],
    faqs: [
      {
        question: "Quando é possível realizar o inventário diretamente em cartório?",
        answer: "O inventário extrajudicial é cabível quando todos os herdeiros forem maiores, capazes, estiverem em mútuo acordo sobre a partilha e assistidos por advogado. É muito mais célere que o procedimento judicial."
      },
      {
        question: "Como o planejamento sucessório pode ajudar a proteger o patrimônio da família?",
        answer: "Ele organiza a divisão dos bens em vida de forma legal, diminui o impacto de impostos futuros (como o ITCMD) e estabelece regras claras, prevenindo desentendimentos e litígios demorados entre herdeiros."
      }
    ],
    icon: "Users"
  },
  {
    id: "direito-previdenciario",
    slug: "direito-previdenciario",
    title: "Direito Previdenciário",
    category: "individuos",
    categoryLabel: "Seguridade Social & Benefícios",
    shortDescription: "Aposentadorias especiais, benefícios por incapacidade temporária (auxílio-doença) ou permanente (invalidez) e revisões perante o INSS.",
    headline: "Garantia do benefício correto e suporte técnico na relação com a Previdência Social.",
    context: "A legislação previdenciária sofreu profundas alterações que tornaram o cálculo e a comprovação de requisitos técnicos cada vez mais complexos. Assessoramos segurados em Caxias do Sul e região na busca do melhor benefício legalmente devido.",
    typicalScenarios: [
      "Concessão e restabelecimento de benefícios por incapacidade temporária e acidentária",
      "Aposentadoria por incapacidade permanente (invalidez) e pedido de majoração de 25%",
      "Aposentadoria especial por exposição a agentes insalubres e periculosos (indústria e metalurgia)",
      "Planejamento previdenciário e análise minuciosa de tempo de contribuição no CNIS",
      "Ações judiciais contra indeferimentos administrativos indevidos do INSS"
    ],
    approach: [
      "Análise documental detalhada de laudos médicos, PPP (Perfil Profissiográfico Previdenciário) e LTCAT",
      "Cálculo atuarial preliminar para identificar o momento ideal e a regra de transição mais vantajosa",
      "Atuação firme tanto no requerimento administrativo quanto no ajuizamento de ação perante a Justiça Federal",
      "Acompanhamento rigoroso em perícias médicas judiciais"
    ],
    faqs: [
      {
        question: "Quem tem direito ao adicional de 25% na aposentadoria por invalidez?",
        answer: "O aposentado por incapacidade permanente que necessite de assistência permanente de outra pessoa para seus atos diários, conforme estabelecido no artigo 45 da Lei nº 8.213/91."
      },
      {
        question: "O que fazer quando o INSS indefere o benefício mesmo com laudos de incapacidade?",
        answer: "É possível ingressar com ação perante a Justiça Federal, onde será realizada uma nova perícia técnica por médico perito judicial neutro, nomeado pelo juiz."
      }
    ],
    icon: "HeartHandshake"
  },
  {
    id: "responsabilidade-civil-consumidor",
    slug: "responsabilidade-civil-e-consumidor",
    title: "Responsabilidade Civil & Consumidor",
    category: "individuos",
    categoryLabel: "Contencioso Cível Especializado",
    shortDescription: "Ações reparatórias por danos morais e materiais, litígios com instituições financeiras e defesa equilibrada em relações de consumo.",
    headline: "Reparação justa de danos patrimoniais e defesa técnica em conflitos cíveis.",
    context: "O direito das obrigações e da responsabilidade civil resguarda o patrimônio e a dignidade das partes lesadas por descumprimentos contratuais, abusividades bancárias ou acidentes. O escritório atua com embasamento doutrinário sólido e jurisprudência atualizada dos Tribunais Superiores.",
    typicalScenarios: [
      "Ações indenizatórias por prejuízos materiais, lucros cessantes e danos morais graves",
      "Processos administrativos e judiciais contra instituições financeiras por cobranças indevidas ou fraudes",
      "Resolução de conflitos contratuais em negócios imobiliários e prestação de serviços",
      "Acompanhamento de processos derivados de autos de infração de consumo para empresas",
      "Execução de títulos e recuperação de créditos inadimplidos com garantias reais"
    ],
    approach: [
      "Avaliação de viabilidade jurídica antes do ajuizamento, prevenindo riscos de sucumbência",
      "Comprovação documental robusta do nexo causal e da extensão concreta do dano",
      "Postura ética sem promessas irrealistas de valores indenizatórios",
      "Atuação estratégica em acordos que viabilizem a satisfação do crédito de forma eficiente"
    ],
    faqs: [
      {
        question: "Como é mensurado o valor de uma indenização por dano moral?",
        answer: "O arbitramento segue critérios de razoabilidade e proporcionalidade estipulados pelos Tribunais, considerando a gravidade da conduta, a capacidade econômica das partes e o caráter pedagógico, sem ensejar enriquecimento sem causa."
      },
      {
        question: "Como o escritório analisa casos de litígios bancários e contratos de financiamento?",
        answer: "Avaliamos os contratos à luz da jurisprudência do Superior Tribunal de Justiça (STJ), analisando tarifas indevidas, juros abusivos e a ocorrência de eventuais fraudes operacionais com documentação técnica."
      }
    ],
    icon: "Scale"
  }
];

export const correspondenceServices = {
  title: "Correspondência Jurídica & Apoio Forense",
  subtitle: "Suporte logístico e processual na Comarca de Caxias do Sul e Serra Gaúcha",
  description: "A Cassol Advocacia disponibiliza estrutura e pontualidade para escritórios de advocacia e departamentos jurídicos de todo o Brasil que necessitam de representação local diligente.",
  items: [
    "Realização de audiências conciliatórias e de instrução (presenciais e virtuais)",
    "Despachos com magistrados, assessores e secretarias de vara",
    "Cópias de autos físicos, protocolos e obtenção de certidões judiciais",
    "Acompanhamento de diligências periciais e oficiais de justiça na região",
    "Envio tempestivo de relatórios e documentação digitalizada em alta definição"
  ]
};
