export interface OfficeUnit {
  id: string;
  name: string;
  tag: string;
  city: string;
  state: string;
  addressShort: string;
  fullAddress: string;
  postalCode: string;
  landline?: string;
  landlineFormatted?: string;
  whatsapp: string;
  whatsappFormatted: string;
  whatsappRaw: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
  landmark: string;
}

export interface OfficeInfo {
  name: string;
  signature: string;
  corporateName: string;
  oabSociety: string;
  cnpj: string;
  foundationYear: string;
  leadAttorney: {
    name: string;
    honorific: string;
    oabIndividual: string;
    graduation: string;
    postGraduation: string;
    institutionalRole: string;
    previousRole: string;
    summary: string;
  };
  units: OfficeUnit[];
  email: string;
  schedule: string;
  complianceNotice: string;
}

export const officeData: OfficeInfo = {
  name: "Cassol Advocacia",
  signature: "Consultoria & Assessoria Jurídica",
  corporateName: "Cassol Sociedade Individual de Advocacia",
  oabSociety: "OAB/RS 5.950",
  cnpj: "61.144.840/0001-12",
  foundationYear: "Desde 2016",
  leadAttorney: {
    name: "Isaac Cassol Antunes",
    honorific: "Dr.",
    oabIndividual: "OAB/RS 96.196",
    graduation: "Bacharel em Direito pela Universidade de Caxias do Sul (UCS) — 2012",
    postGraduation: "Especialista em Direito e Processo do Trabalho (2013–2014)",
    institutionalRole: "Conselheiro Titular da OAB Subseção Caxias do Sul (Triênio 2025/2027)",
    previousRole: "Membro da Comissão de Direito do Consumidor da OAB Caxias do Sul",
    summary: "Atuação jurídica contínua e dedicada há mais de uma década, pautada no rigor técnico, na ética profissional e no atendimento direto e personalizado a pessoas e organizações na Serra Gaúcha, no Paraná e em todo o Brasil."
  },
  units: [
    {
      id: "caxias",
      name: "Unidade Caxias do Sul / RS",
      tag: "Sede Serra Gaúcha",
      city: "Caxias do Sul",
      state: "RS",
      addressShort: "Av. Júlio de Castilhos, 1511, Sala 72 — Centro",
      fullAddress: "Av. Júlio de Castilhos, 1511, Sala 72 — Centro, Caxias do Sul/RS, CEP 95010-005",
      postalCode: "95010-005",
      landline: "5430213700",
      landlineFormatted: "(54) 3021-3700",
      whatsapp: "54981529560",
      whatsappFormatted: "(54) 9 8152-9560",
      whatsappRaw: "5554981529560",
      landmark: "Região central de fácil acesso, com estrutura adequada para atendimento presencial reservado.",
      googleMapsDirectionsUrl: "https://maps.google.com/?q=Av.+Júlio+de+Castilhos,+1511,+Sala+72,+Centro,+Caxias+do+Sul+-+RS",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.9482701726757!2d-51.18182962384074!3d-29.167812975376378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea2d1c68e1f0b%3A0x6b6c0e86bdf3b84!2sAv.%20J%C3%BAlio%20de%20Castilhos%2C%201511%20-%20Centro%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095010-005!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    },
    {
      id: "maringa",
      name: "Unidade Maringá / PR",
      tag: "Nova Unidade",
      city: "Maringá",
      state: "PR",
      addressShort: "Avenida Paraná, 518, Sala 41 — Zona 01",
      fullAddress: "Avenida Paraná, 518, Sala 41 — Centro / Zona 01, Maringá/PR, CEP 87013-070",
      postalCode: "87013-070",
      whatsapp: "44991829560",
      whatsappFormatted: "(44) 99182-9560",
      whatsappRaw: "5544991829560",
      landmark: "Localização estratégica na Avenida Paraná, expandindo o atendimento da Cassol Advocacia no Estado do Paraná.",
      googleMapsDirectionsUrl: "https://maps.google.com/?q=Avenida+Paraná,+518,+Sala+41,+Maringá+-+PR,+87013-070",
      googleMapsEmbedUrl: "https://maps.google.com/maps?q=Avenida+Paran%C3%A1,+518,+Maring%C3%A1+-+PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ],
  email: "cassoladvocacia@cassoladvocacia.com.br",
  schedule: "Segunda a sexta-feira, das 08h30 às 18h00 (Atendimento presencial com agendamento prévio)",
  complianceNotice: "Este site tem caráter estritamente informativo e institucional, em rigorosa conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e o Código de Ética e Disciplina da Advocacia. Não constitui consulta jurídica vinculante nem garantia ou promessa de resultados processuais."
};
