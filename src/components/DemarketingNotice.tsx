import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, ShieldAlert, Scale } from 'lucide-react';

export const DemarketingNotice: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-24 bg-[#F3ECE1] border-b border-[#DFD5C4] relative overflow-hidden"
      aria-label="Critérios de atuação e compromisso ético"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EFE7D8] border border-[#D8C9B0] text-[#0E1A32] text-xs font-bold tracking-[0.12em] uppercase font-sans mb-3.5">
            <Scale className="w-3.5 h-3.5 text-[#B69246]" />
            <span>Critério de Aceitação &amp; Dedicação Exclusiva</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1324] font-normal tracking-tight leading-[1.18]">
            Por que limitamos o volume de processos para garantir excelência artesanal a cada cliente.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#364050] font-sans leading-relaxed">
            Para dedicar estudo minucioso e presença pessoal do Dr. Isaac Cassol em cada demanda, selecionamos com rigor os casos que assumimos. Essa transparência protege o seu patrimônio e assegura foco total às causas sob nossa guarda.
          </p>
        </motion.div>

        {/* 2-Column Editorial Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column A: Para Quem Nossa Estrutura Foi Desenhada (Sweeps from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-7 sm:p-9 rounded-[2rem] bg-[#FCFBF8] border border-[#DFC99B] border-l-[4px] border-l-[#C5A059] shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#0A1324] border border-[#C5A059]/50 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#DEC082] stroke-[2.2]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0A1324]">
                  Para Quem Somos o Escritório Ideal
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#3E4656] mb-6 leading-relaxed">
                Nossa estrutura entrega o máximo retorno técnico e estratégico para:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start text-xs sm:text-sm text-[#141821]">
                  <span className="w-5 h-5 rounded-full bg-[#F5EFE4] border border-[#C5A059] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#856520] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Empresários e Diretores</strong> que buscam blindar contratos comerciais, auditar rotinas de RH e estancar passivos trabalhistas com inteligência preventiva.
                  </span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-[#141821]">
                  <span className="w-5 h-5 rounded-full bg-[#F5EFE4] border border-[#C5A059] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#856520] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Médicos, Clínicas e Profissionais da Saúde</strong> que exigem defesa ética especializada, revisão de termos de consentimento e proteção da reputação.
                  </span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-[#141821]">
                  <span className="w-5 h-5 rounded-full bg-[#F5EFE4] border border-[#C5A059] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#856520] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Famílias e Sucessores</strong> que necessitam conduzir inventários, partilhas de bens ou planejamento sucessório com discrição, celeridade e harmonia.
                  </span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-[#141821]">
                  <span className="w-5 h-5 rounded-full bg-[#F5EFE4] border border-[#C5A059] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#856520] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Segurados e Contribuintes</strong> que desejam cálculo previdenciário rigoroso antes de protocolar aposentadorias de maior complexidade.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE2D3] text-xs font-semibold text-[#0A1324] flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] mr-2.5"></span>
              Condução pessoal pelo Dr. Isaac Cassol Antunes (OAB/RS 96.196)
            </div>
          </motion.div>

          {/* Column B: Demandas Que Declinamos (Sweeps from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-7 sm:p-9 rounded-[2rem] bg-[#EAE1D2]/85 border border-[#D5C7B2] flex flex-col justify-between shadow-subtle"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#DCD0BD] border border-[#C4B49B] flex items-center justify-center">
                  <Minus className="w-4 h-4 text-[#3E4656] stroke-[2.2]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0A1324]">
                  Práticas que Não Adotamos
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5363] mb-6 leading-relaxed">
                Em respeito à ética profissional e à qualidade técnica das causas que defendemos, declinamos:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start text-xs sm:text-sm text-[#3E4656]">
                  <span className="w-5 h-5 rounded-full bg-[#DFD3C0] border border-[#C4B49B] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Minus className="w-3 h-3 text-[#4A5363] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Advocacia de Massa ou Padronizada:</strong> Não operamos como fábrica de petições automáticas; cada caso exige tempo de estudo e estratégia própria.
                  </span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-[#3E4656]">
                  <span className="w-5 h-5 rounded-full bg-[#DFD3C0] border border-[#C4B49B] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Minus className="w-3 h-3 text-[#4A5363] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Promessas de Resultado Garantido:</strong> O Direito sério trabalha com tese sólida e prova robusta, jamais com promessas incompatíveis com o Código de Ética da OAB.
                  </span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-[#3E4656]">
                  <span className="w-5 h-5 rounded-full bg-[#DFD3C0] border border-[#C4B49B] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Minus className="w-3 h-3 text-[#4A5363] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Aventuras Judiciais Sem Lastro Probatório:</strong> Se a análise prévia demonstrar que a ação trará mais risco do que benefício ao cliente, orientamos francamente a não litigar.
                  </span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-[#3E4656]">
                  <span className="w-5 h-5 rounded-full bg-[#DFD3C0] border border-[#C4B49B] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Minus className="w-3 h-3 text-[#4A5363] stroke-[2.5]" />
                  </span>
                  <span>
                    <strong>Ramos Alheios à Nossa Especialidade:</strong> Em demandas de Direito Penal ou Eleitoral, indicamos colegas especialistas de nossa estrita confiança.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D5C7B2] text-xs text-[#4A5363] flex items-center">
              <ShieldAlert className="w-4 h-4 text-[#856520] mr-2 flex-shrink-0" />
              Alinhamento em estrita conformidade com o Provimento 205/2021 da OAB
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
