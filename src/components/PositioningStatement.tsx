import React from 'react';
import { motion } from 'framer-motion';
import { Scale, BookOpen, ShieldCheck, Compass } from 'lucide-react';

export const PositioningStatement: React.FC = () => {
  const pillars = [
    {
      roman: "I",
      icon: BookOpen,
      title: "Diagnóstico Franco & Pesquisa Doutrinária",
      description: "Nenhuma petição nasce de modelos padronizados. Avaliamos a viabilidade real da demanda antes de qualquer medida, fundamentando cada tese na doutrina e nos Tribunais Superiores."
    },
    {
      roman: "II",
      icon: ShieldCheck,
      title: "Blindagem Preventiva de Caixa & Patrimônio",
      description: "Um único contrato mal redigido ou uma rotina trabalhista negligenciada pode comprometer anos de resultado. Antecipamos vulnerabilidades antes que se tornem passivos."
    },
    {
      roman: "III",
      icon: Scale,
      title: "Combatividade Técnica em Litígios Críticos",
      description: "Quando o processo judicial é inevitável, assumimos a linha de frente com instrução probatória rigorosa, presença ativa em audiências e sustentações orais estratégicas."
    },
    {
      roman: "IV",
      icon: Compass,
      title: "Acesso Direto ao Titular & Sigilo Absoluto",
      description: "Você não fala com robôs nem tem seu caso diluído em esteiras de produção. O advogado que ouve sua história é o mesmo que desenha a estratégia e assina cada ato."
    }
  ];

  return (
    <section
      className="py-20 lg:py-28 bg-[#0B1528] text-[#F5EFE4] border-b border-[#C5A059]/25 relative overflow-hidden"
      aria-label="Posicionamento e Compromissos Institucionais"
    >
      {/* Subtle Architectural Radial Gold Illumination */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 18% 15%, rgba(197, 160, 89, 0.16) 0%, transparent 70%), radial-gradient(ellipse 50% 45% at 85% 85%, rgba(36, 59, 128, 0.28) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top Golden Hairline Accent */}
      <div
        className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Manifesto Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pb-14 lg:pb-16 border-b border-white/10">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center space-x-2.5 text-[#D5B572] text-xs font-semibold tracking-[0.18em] uppercase font-sans">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span>Filosofia de Atuação • OAB/RS 5.950</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] text-[#FAF6EE] font-normal tracking-tight leading-[1.2]">
              No Direito de alto impacto, a diferença entre preservar ou perder patrimônio está na{' '}
              <span className="italic text-[#DEC082] font-medium">antecipação técnica</span> e na{' '}
              <span className="italic text-[#DEC082] font-medium">firmeza probatória</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#C5A059]/30 space-y-3"
          >
            <p className="text-sm sm:text-base text-[#D0D7E6] leading-relaxed font-sans">
              Empresas e famílias não procuram um advogado apenas para redigir petições — procuram segurança para tomar decisões difíceis. Nossa missão é substituir a incerteza jurídica por clareza estratégica, previsibilidade financeira e defesa intransigente.
            </p>
            <div className="pt-1 flex items-center space-x-3 text-xs text-[#C8A96B] font-medium tracking-wide">
              <span>Dr. Isaac Cassol Antunes</span>
              <span className="text-white/25">•</span>
              <span className="font-mono text-[11px] text-[#9AA6BD]">Caxias do Sul/RS &amp; Maringá/PR</span>
            </div>
          </motion.div>

        </div>

        {/* 4 Architectural Ledger Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 pt-12 lg:pt-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#111F3A]/80 backdrop-blur-sm border border-white/10 hover:border-[#C5A059]/60 transition-all duration-300 shadow-[0_14px_34px_-10px_rgba(5,10,20,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#17294B] border border-[#C5A059]/30 flex items-center justify-center text-[#DEC082] group-hover:bg-[#C5A059] group-hover:text-[#0A1324] transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <span className="font-serif text-lg italic text-[#C5A059]/70 group-hover:text-[#DEC082] transition-colors">
                      {pillar.roman}.
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-[19px] font-semibold text-[#FAF6EE] tracking-tight leading-snug group-hover:text-[#DEC082] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#BCC6DA] leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-[#C8A96B]">
                  <span>Compromisso Cassol</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
