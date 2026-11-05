import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Scale, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight,
  Award
} from 'lucide-react';
import { officeData } from '../data/officeData';

interface LawyerProfileProps {
  onOpenContactModal: (context: string) => void;
}

export const LawyerProfile: React.FC<LawyerProfileProps> = ({ onOpenContactModal }) => {
  const credentials = [
    {
      icon: GraduationCap,
      label: "Formação Acadêmica",
      text: "Universidade de Caxias do Sul (UCS)",
      detail: "Bacharel em Direito pela mais tradicional instituição de ensino superior da Serra Gaúcha."
    },
    {
      icon: Scale,
      label: "Especialização Técnica",
      text: "Direito do Trabalho & Consultoria Preventiva",
      detail: "Foco estratégico na defesa empresarial, auditoria de passivos e condução de litígios complexos."
    },
    {
      icon: CheckCircle2,
      label: "Habilitação Profissional",
      text: officeData.leadAttorney.oabIndividual,
      detail: "Inscrição titular regular e atuação ética ininterrupta perante os Tribunais do país."
    },
    {
      icon: MapPin,
      label: "Presença nos Tribunais",
      text: "Caxias do Sul/RS, Maringá/PR & Instâncias Superiores",
      detail: "Atuação direta no TRT-4, TRT-9, TJRS, TJPR, TRF-4 e Tribunais Superiores em Brasília."
    }
  ];

  return (
    <section 
      id="advogado" 
      className="py-20 lg:py-28 bg-gradient-to-b from-[#FAF7F1] via-[#F5EFE4] to-[#EFE8DC] border-b border-[#DFD5C4] relative overflow-hidden"
      aria-label="Perfil do Advogado Titular Dr. Isaac Cassol Antunes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EFE7D8] border border-[#D8C9B0] text-[#0E1A32] text-xs font-bold tracking-[0.12em] uppercase font-sans mb-3.5">
            <Award className="w-3.5 h-3.5 text-[#B69246]" />
            <span>Sócio-Fundador &amp; Advogado Titular</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0A1324] font-normal tracking-tight leading-[1.18]">
            Quem ouve a sua demanda é quem constrói a tese e defende o seu direito.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#364050] font-sans leading-relaxed">
            Conheça a trajetória do Dr. Isaac Cassol Antunes e o compromisso pessoal por trás de cada parecer, contrato e sustentação oral da Cassol Advocacia.
          </p>
        </motion.div>

        {/* Editorial Dossier Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#FCFBF8] p-6 sm:p-10 lg:p-12 rounded-[2.5rem] border border-[#DFC99B]/90 shadow-elevation relative">
          
          {/* Subtle Golden Top Accent Line */}
          <div
            className="absolute top-0 inset-x-16 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"
            aria-hidden="true"
          />

          {/* Lawyer Photo with Architectural Double-Bezel Framing (Sweeps smoothly from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm p-3 rounded-[2rem] bg-[#EFE7D8] border border-[#D8C9B0] shadow-card hover:border-[#C5A059] transition-colors duration-300">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.65rem)] bg-[#0A1324] border border-[#C5A059]/30">
                <img 
                  src="/assets/dr_isaac_profile.jpg" 
                  alt="Dr. Isaac Cassol Antunes - Advogado Inscrito na OAB/RS 96.196" 
                  className="w-full h-auto object-cover object-top block"
                  width="800"
                  height="1067"
                  loading="eager"
                />
                
                {/* Warm Ivory & Gold Overlay Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-[#FCFBF8]/95 backdrop-blur-md border border-[#DFC99B] shadow-[0_8px_24px_rgba(10,19,36,0.28)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs sm:text-[13px] font-bold text-[#0A1324] block">
                        Dr. Isaac Cassol Antunes
                      </span>
                      <span className="text-[10.5px] text-[#525B6C] font-medium block">
                        Sócio-Fundador • Cassol Advocacia
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#0A1324] text-[#DEC082] text-[11px] font-mono font-semibold border border-[#C5A059]/40">
                      {officeData.leadAttorney.oabIndividual}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lawyer Bio & Verified Credentials (Sweeps smoothly from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#856520] uppercase tracking-wider mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B69246]" />
                <span>Caxias do Sul / RS &amp; Maringá / PR • Advocacia de Ofício</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#0A1324] tracking-tight leading-tight">
                Dr. Isaac Cassol Antunes
              </h3>
              <p className="text-xs sm:text-sm text-[#525B6C] font-mono mt-1">
                Inscrito na Ordem dos Advogados do Brasil sob o nº OAB/RS 96.196 • Sociedade OAB/RS 5.950
              </p>
            </div>

            <div className="space-y-3.5 text-sm sm:text-[15.5px] text-[#2C3442] leading-relaxed font-sans">
              <p>
                Graduado em Direito pela <strong>Universidade de Caxias do Sul (UCS)</strong> e pós-graduado na seara trabalhista e empresarial, o <strong>Dr. Isaac Cassol Antunes</strong> construiu sua reputação sobre um princípio raro no mercado jurídico atual: a <strong>responsabilidade pessoal intransferível</strong> sobre cada causa confiada ao escritório.
              </p>
              <p>
                Ao assessorar diretores de empresas, profissionais da medicina, famílias em momentos de sucessão patrimonial ou segurados em busca da melhor aposentadoria, sua postura combina o rigor analítico de quem antecipa cenários processuais com a escuta serena e humana de quem compreende o peso de cada decisão na vida do cliente.
              </p>
            </div>

            {/* Structured Credentials Grid with Golden Left Rule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {credentials.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.65, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-4 rounded-xl bg-[#F5EFE4]/80 border border-[#DFD5C4] border-l-[3px] border-l-[#C5A059] hover:bg-[#F5EFE4] transition-all"
                  >
                    <div className="flex items-center space-x-2 text-[#856520] mb-1.5">
                      <Icon className="w-4 h-4 stroke-[1.7] text-[#B69246]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A1324]">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] font-bold text-[#141821] leading-snug">
                      {item.text}
                    </p>
                    <p className="text-[11px] text-[#4A5363] mt-1 leading-normal">
                      {item.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct Consultation Link */}
            <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#DFD5C4]">
              <span className="text-xs text-[#3E4656] flex items-center space-x-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] flex-shrink-0" />
                <span>Reuniões presenciais (Caxias do Sul e Maringá) ou por videoconferência</span>
              </span>

              <button
                onClick={() => onOpenContactModal('Perfil do Dr. Isaac Cassol')}
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-[#0A1324] text-[#FAF6EE] hover:bg-[#16294C] text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-md"
              >
                <span>Agendar Reunião com o Dr. Isaac</span>
                <ArrowUpRight className="w-4 h-4 text-[#DEC082]" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
