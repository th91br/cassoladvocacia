export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  publishDate: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export const articlesData: ArticleItem[] = [
  {
    id: "passivo-trabalhista-empresas",
    slug: "passivo-trabalhista-rotinas-rh",
    title: "Passivo Trabalhista Oculto: Rotinas de RH que Exigem Atenção Redobrada nas Empresas",
    category: "Direito do Trabalho & Compliance",
    readingTime: "4 min de leitura",
    publishDate: "Outubro de 2026",
    excerpt: "Divergências no registro de jornada, concessão incorreta de intervalos e ausência de documentação técnica em adicionais de insalubridade figuram entre as maiores fontes de contingências financeiras.",
    content: [
      "Na rotina empresarial, pequenas falhas operacionais na gestão de pessoas tendem a se acumular silenciosamente ao longo dos anos, revelando-se apenas no momento em que a organização é notificada de uma reclamatória trabalhista ou fiscalização do Ministério Público do Trabalho.",
      "Entre os principais pontos de vulnerabilidade identificados pela prática jurídica em Caxias do Sul e na Serra Gaúcha, destaca-se o controle inadequado de jornadas de trabalho, especialmente em regimes de compensação ou banco de horas que não observem estritamente as formalidades legais e as convenções coletivas da categoria.",
      "Outro vetor crítico decorre da desatualização de laudos técnicos ambientais (como LTCAT e PGR). A simples distribuição de Equipamentos de Proteção Individual (EPI), desacompanhada da ficha formal de entrega com Certificado de Aprovação (CA) válido e comprovação de treinamento, muitas vezes não afasta a condenação ao pagamento de adicionais de insalubridade e seus reflexos.",
      "A assessoria preventiva contínua permite que o departamento de RH padronize procedimentos, revise termos de admissão e desligamento e mitigue contingências de forma proporcional e sustentável."
    ],
    keyTakeaways: [
      "Auditar periodicamente os espelhos de ponto e acordos individuais de compensação",
      "Formalizar com rigor o fornecimento, treinamento e fiscalização do uso de EPIs",
      "Validar com antecedência as hipóteses de demissão por justa causa para evitar reversão judicial"
    ]
  },
  {
    id: "contratos-modelos-prontos",
    slug: "riscos-modelos-prontos-contratos",
    title: "A Fragilidade de Modelos Prontos de Contratos em Relações Comerciais",
    category: "Consultoria Empresarial",
    readingTime: "3 min de leitura",
    publishDate: "Setembro de 2026",
    excerpt: "Instrumentos contratuais genéricos frequentemente contêm cláusulas nulas ou desatualizadas, gerando vulnerabilidade em momentos de ruptura comercial.",
    content: [
      "A celeridade do mercado frequentemente induz gestores a adotarem minutas contratuais encontradas livremente em plataformas digitais ou reaproveitadas de transações pretéritas. No entanto, o contrato é o mapa de riscos de qualquer negócio.",
      "Modelos genéricos costumam falhar gravemente na definição do escopo dos serviços, nas hipóteses de rescisão imotivada, no escalonamento de penalidades e na estipulação de cláusulas de confidencialidade e não concorrência executáveis perante o Judiciário.",
      "Além disso, alterações legislativas recentes — como a Lei de Liberdade Econômica e regulamentações do Código Civil — conferiram maior peso à autonomia privada, mas exigem redação técnica sem dubiedades para que as disposições pactuadas prevaleçam em caso de disputa.",
      "Contar com assessoria jurídica especializada na fase de negociação assegura que as cláusulas reflitam a real vontade econômica das partes e estabeleçam caminhos céleres para a composição de controvérsias."
    ],
    keyTakeaways: [
      "Cada relação contratual possui riscos singulares que exigem redação sob medida",
      "Cláusulas ambíguas tendem a ser interpretadas contra quem as redigiu em caso de litígio",
      "A estruturação clara de garantias e rescisão poupa custos operacionais expressivos"
    ]
  },
  {
    id: "consentimento-medico-prontuario",
    slug: "consentimento-esclarecido-defesa-medica",
    title: "O Termo de Consentimento Esclarecido e o Prontuário como Elementos de Segurança Médica",
    category: "Direito Médico e da Saúde",
    readingTime: "5 min de leitura",
    publishDate: "Agosto de 2026",
    excerpt: "Como a documentação técnica detalhada e o esclarecimento prévio ao paciente constituem a primeira linha de defesa contra acusações de má-prática médica.",
    content: [
      "A judicialização da saúde tem imposto aos médicos, clínicas e odontólogos a necessidade de aprimorar continuamente seus registros clínicos. Nos Tribunais, a responsabilidade do profissional de saúde quase sempre repousa sobre a demonstração do dever de informação e do emprego da melhor técnica disponível (obrigação de meio).",
      "Nesse contexto, os chamados 'termos de consentimento padrão' — formulários padronizados assinados na recepção sem diálogo clínico — são rotineiramente desconsiderados pela jurisprudência, sob o fundamento de que não comprovaram o efetivo esclarecimento do paciente sobre os riscos específicos do procedimento.",
      "O prontuário médico completo, legível e temporalmente fidedigno, aliado a um termo de consentimento livre e esclarecido (TCLE) personalizado, é o instrumento determinante para a defesa técnica tanto no Conselho Regional de Medicina (CRM) quanto nas ações de responsabilidade civil.",
      "A prevenção jurídica na área médica não visa burocratizar o atendimento, mas sim consolidar uma relação de confiança e transparência entre profissional e paciente."
    ],
    keyTakeaways: [
      "O consentimento deve ser informado, individualizado e registrado em linguagem acessível",
      "Prontuários incompletos transferem o ônus probatório desfavoravelmente ao profissional",
      "Em caso de intercorrência, a assistência imediata e o registro técnico devem ser priorizados"
    ]
  },
  {
    id: "inventario-cartorio-judicial",
    slug: "inventario-cartorio-prazos-requisitos",
    title: "Inventário em Cartório: Agilidade, Requisitos e Aspectos Tributários",
    category: "Família e Sucessões",
    readingTime: "4 min de leitura",
    publishDate: "Julho de 2026",
    excerpt: "A via extrajudicial possibilita a conclusão de partilhas patrimoniais em prazos substancialmente menores, desde que observadas as exigências da lei.",
    content: [
      "Após a perda de um ente querido, a transmissão dos bens aos herdeiros por meio de inventário costuma suscitar dúvidas e receios quanto a despesas e morosidade. Desde a Lei nº 11.441/2007, é possível realizar o inventário diretamente em Cartório de Notas por meio de escritura pública.",
      "Para que o procedimento extrajudicial seja viável, é fundamental que todos os herdeiros sejam maiores e plenamente capazes, que haja consenso unânime sobre a divisão do patrimônio e que todas as partes estejam assistidas por advogado.",
      "A escolha da via extrajudicial traz benefícios evidentes: o tempo de conclusão é sensivelmente menor do que o trâmite judicial, reduzindo desgastes emocionais e liberando a titularidade dos bens para venda ou administração com maior celeridade.",
      "Vale ressaltar que a abertura do inventário deve respeitar o prazo legal de 60 dias a contar do falecimento, sob pena de incidência de multa sobre o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) pela Fazenda Estadual."
    ],
    keyTakeaways: [
      "O inventário extrajudicial exige unanimidade entre os herdeiros e assistência jurídica",
      "Abertura em até 60 dias evita acréscimos moratórios no imposto de transmissão (ITCMD)",
      "A escritura pública extrajudicial possui a mesma eficácia jurídica do formal de partilha judicial"
    ]
  }
];
