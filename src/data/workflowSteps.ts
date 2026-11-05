export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Diagnóstico Prévio & Triagem Técnica",
    subtitle: "Compreensão aprofundada dos fatos e análise de viabilidade",
    description: "Cada demanda é inicialmente submetida a uma análise documental criteriosa. Avaliamos a viabilidade fática e jurídica da questão, identificando riscos de sucumbência e informando com franqueza se a medida pretendida possui fundamento seguro.",
    deliverables: [
      "Exame minucioso da documentação comprobatória",
      "Triagem honesta sobre a pertinência da atuação judicial ou extrajudicial",
      "Apresentação transparente dos cenários possíveis e respectivos prazos"
    ]
  },
  {
    step: "02",
    title: "Definição da Estratégia Jurídica",
    subtitle: "Planejamento tático individualizado para a demanda",
    description: "Não aplicamos soluções padronizadas. Estruturamos a linha de atuação técnica — seja na prevenção, na negociação com a parte contrária ou na propositura/defesa processual — com base na doutrina mais consistente e na jurisprudência dos Tribunais.",
    deliverables: [
      "Construção de teses jurídicas sólidas e individualizadas",
      "Priorização da via consensual e extrajudicial sempre que viável",
      "Definição clara das etapas procedimentais e do plano de ação"
    ]
  },
  {
    step: "03",
    title: "Atuação Diligente & Execução",
    subtitle: "Rigor processual, redação técnica e presença combativa",
    description: "Conduzimos cada ato processual com pontualidade e esmero: redação de peças substanciais, despacho pessoal com julgadores, sustentação oral e instrução em audiências de instrução, sempre resguardando a discrição e a imagem do cliente.",
    deliverables: [
      "Elaboração de peças técnicas fundamentadas, sem prolixidade",
      "Participação diligente em audiências presenciais e virtuais",
      "Acompanhamento contínuo dos prazos e intimações judiciais"
    ]
  },
  {
    step: "04",
    title: "Acompanhamento Transparente",
    subtitle: "Informação clara e canal direto com o advogado",
    description: "O cliente não fica no escuro a respeito do andamento de sua causa. Fornecemos relatórios periódicos em linguagem acessível e mantemos canais diretos de comunicação para esclarecimento de dúvidas durante todo o ciclo processual.",
    deliverables: [
      "Atualizações pontuais a cada movimentação relevante",
      "Canal direto de contato sem intermediários impessoais",
      "Explicação sóbria e compreensível das decisões judiciais"
    ]
  }
];
