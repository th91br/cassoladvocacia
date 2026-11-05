import React from 'react';
import { motion } from 'framer-motion';
import { workflowSteps } from '../data/workflowSteps';
import { Check, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

interface MethodologySectionProps {
  onOpenContactModal: (context: string) => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenContactModal }) => {
  return (
    <section 
      id="metodologia" 
      className="py-20 lg:py-28 bg-[#FAF7F1] border-b border-[#DFD5C4] relative overflow-hidden"
      aria-label="Metodologia de Atuação e Processo da Cassol Advocacia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EFE7D8] border border-[#D8C9B0] text-[#0E1A32] text-xs font-bold tracking-[0.12em] uppercase font-sans mb-3.5">
            <Compass className="w-3.5 h-3.5 text-[#B69246]" />
            <span>Método &amp; Previsibilidade Processual</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0A1324] font-normal tracking-tight leading-[1.18]">
            Como conduzimos a sua causa: clareza, estratégia probatória e lealdade em 4 etapas.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#364050] font-sans leading-relaxed">
            O maior desgaste de quem enfrenta uma questão jurídica é a falta de informação. Nosso método elimina o improviso desde a primeira consulta até o encerramento definitivo da demanda.
          </p>
        </motion.div>

        {/* 4 Steps Timeline / Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 relative">
          
          {/* Subtle Golden Connecting Line for Desktop */}
          <div
            className="hidden lg:block absolute top-12 left-12 right-12 h-[1.5px] bg-gradient-to-r from-[#C5A059]/20 via-[#C5A059]/70 to-[#C5A059]/20 z-0"
            aria-hidden="true"
          />

          {workflowSteps.map((step, index) => (
            <motion.div 
              key={step.step}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ 
                duration: 0.75, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative z-10 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FCFBF8] border border-[#DFD5C4] border-t-[3px] border-t-[#C5A059] hover:border-[#C5A059] transition-all duration-300 shadow-subtle hover:shadow-card group cursor-default"
            >
              <div>
                {/* Step Number Medallion */}
                <div className="w-12 h-12 rounded-full bg-[#0A1324] border-2 border-[#C5A059] flex items-center justify-center font-serif italic font-bold text-base text-[#DEC082] group-hover:bg-[#C5A059] group-hover:text-[#0A1324] transition-colors shadow-sm mb-6">
                  {step.step}
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#0A1324] tracking-tight group-hover:text-[#1E3668] transition-colors leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-[11px] font-bold text-[#856520] uppercase tracking-[0.08em] mt-1.5 mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#3E4656] leading-relaxed font-sans">
                  {step.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="mt-5 pt-4 border-t border-[#EAE2D3] space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#856520] block">
                    Entregas concretas desta etapa:
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="text-xs text-[#2C3442] flex items-start">
                      <Check className="w-3.5 h-3.5 text-[#B69246] mr-2 mt-0.5 flex-shrink-0 stroke-[2.2]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#EAE2D3] flex items-center justify-between text-[11px] text-[#687285] font-mono">
                <span>Etapa {step.step} de 04</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              </div>
            </motion.div>
          ))}

        </div>

        {/* Psychological Reassurance Banner in Deep Imperial Navy & Aged Gold */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-7 sm:p-10 rounded-[2rem] bg-gradient-to-r from-[#0A1324] via-[#0F1E38] to-[#15284A] text-[#FAF6EE] border border-[#C5A059]/35 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-elevation relative overflow-hidden"
        >
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center space-x-2 text-[#DEC082] text-xs font-bold uppercase tracking-[0.14em] mb-2.5 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Compromisso de Lealdade &amp; Previsibilidade Financeira</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-white tracking-tight leading-snug">
              Honorários claros em contrato e avaliação franca de riscos antes de qualquer passo.
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-[#C8D2E3] font-sans leading-relaxed">
              Na Cassol Advocacia, você conhece previamente os custos envolvidos, os cenários prováveis de tempo e a viabilidade probatória da sua causa, em estrita observância à ética da OAB — sem surpresas e sem promessas ilusórias.
            </p>
          </div>

          <button
            onClick={() => onOpenContactModal('Metodologia / Consulta Inicial')}
            className="relative z-10 inline-flex items-center space-x-3 px-7 py-4 rounded-full bg-[#FAF6EE] border border-[#C5A059] text-[#0A1324] hover:bg-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.06em] transition-all shadow-md whitespace-nowrap active:scale-95"
          >
            <span>Agendar Diagnóstico do Caso</span>
            <ArrowRight className="w-4 h-4 text-[#967530]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
