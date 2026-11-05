import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Shield } from 'lucide-react';
import { officeData } from '../data/officeData';

export const AboutSection: React.FC = () => {
  const differentials = [
    {
      title: "Trato Direto com quem Decide",
      description: "Você trata diretamente com o Dr. Isaac Cassol do diagnóstico inicial à sustentação no Tribunal."
    },
    {
      title: "Linguagem Executiva & Clara",
      description: "Traduzimos cenários jurídicos complexos em recomendações práticas para a sua tomada de decisão."
    },
    {
      title: "Ética & Discrição Absoluta",
      description: "Condução reservada de demandas empresariais, médicas e familiares sob estrito sigilo deontológico."
    },
    {
      title: "Presença Física no RS e no PR",
      description: "Salas preparadas para reuniões confidenciais em Caxias do Sul/RS e em Maringá/PR, além de conexão digital."
    }
  ];

  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#F5EFE4] via-[#FAF7F1] to-[#F5EFE4] border-b border-[#DFD5C4] relative overflow-hidden"
      aria-label="Sobre o escritório Cassol Advocacia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Institutional Dossier Card & Signed Quote (Sweeps from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            
            {/* Double-Bezel Warm Champagne & Imperial Navy Identity Card */}
            <div className="p-2.5 rounded-[2rem] bg-[#EFE7D8] border border-[#D8C9B0] shadow-card">
              <div className="p-7 sm:p-9 rounded-[1.5rem] bg-gradient-to-br from-[#0A1324] via-[#0F1E38] to-[#16294C] text-[#FAF6EE] relative overflow-hidden border border-[#C5A059]/30">
                
                {/* Subtle Golden Corner Glow */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#C5A059]/15 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-6">
                  {/* Top Row: Official White Emblem + OAB Seal */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-12 p-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-[#C5A059]/35 flex items-center justify-center">
                      <img
                        src="/assets/emblem_cassol_white.png"
                        alt="Emblema Oficial Cassol Advocacia"
                        className="w-full h-full object-contain filter drop-shadow-sm"
                        width="64"
                        height="38"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#DEC082] text-[11px] font-mono font-semibold tracking-wider uppercase">
                      {officeData.oabSociety}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#C8A96B] font-sans font-semibold block">
                      Sociedade de Advogados Registrada
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-white tracking-tight mt-1">
                      {officeData.corporateName}
                    </h3>
                    <p className="text-xs text-[#B8C3D9] mt-1 font-mono">
                      CNPJ {officeData.cnpj} • Regularidade OAB/RS &amp; OAB/PR
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/12 grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <span className="text-[#C8A96B] text-[10px] uppercase tracking-wider font-semibold block">
                        Sede Rio Grande do Sul
                      </span>
                      <span className="font-semibold text-white text-sm mt-0.5 block">
                        Caxias do Sul / RS
                      </span>
                      <span className="text-[11px] text-[#9AA6BD] block mt-0.5">
                        Serra Gaúcha
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-[#C5A059]/25">
                      <span className="text-[#DEC082] text-[10px] uppercase tracking-wider font-semibold block">
                        Unidade Paraná
                      </span>
                      <span className="font-semibold text-white text-sm mt-0.5 block">
                        Maringá / PR
                      </span>
                      <span className="text-[11px] text-[#9AA6BD] block mt-0.5">
                        Norte Paranaense
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#C5A059]/12 border border-[#C5A059]/30 text-xs text-[#F3ECE1] flex items-center space-x-2.5">
                    <Award className="w-4 h-4 text-[#DEC082] flex-shrink-0" />
                    <span>Tradição de rigor técnico, proximidade humana e atuação artesanal desde 2016</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Humanized Editorial Pull-Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-[#FCFBF8] border border-[#DFD5C4] border-l-[3px] border-l-[#C5A059] shadow-subtle space-y-3"
            >
              <p className="font-serif text-sm sm:text-[15px] text-[#141821] italic leading-relaxed">
                “Quem procura um escritório de advocacia em um momento decisivo não precisa de promessas fáceis nem de textos indecifráveis; precisa de alguém que estude cada página do seu caso como se fosse único e defenda seu patrimônio com lealdade e firmeza.”
              </p>
              <footer className="flex items-center justify-between pt-2 border-t border-[#EFE8DC] text-xs">
                <span className="font-bold text-[#0A1324] tracking-wide">
                  Dr. Isaac Cassol Antunes
                </span>
                <span className="text-[#967530] font-mono text-[11px] font-semibold">
                  Advogado Titular • OAB/RS 96.196
                </span>
              </footer>
            </motion.blockquote>

          </motion.div>

          {/* Right Column: The Story & Humanized Value Proposition (Sweeps from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#D8C9B0] text-[#0E1A32] text-xs font-bold tracking-[0.12em] uppercase font-sans">
              <Shield className="w-3.5 h-3.5 text-[#B69246]" />
              <span>A História &amp; A Vocação da Cassol Advocacia</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0A1324] font-normal tracking-tight leading-[1.18]">
              Advocacia de ofício: onde a profundidade acadêmica encontra a realidade de quem produz, empreende e constrói família.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2C3442] font-sans leading-relaxed">
              <p>
                Fundada em <strong>Caxias do Sul (RS)</strong> — no coração de um dos polos industriais e empresariais mais exigentes do Brasil — e expandida com unidade própria em <strong>Maringá (PR)</strong>, a <strong>Cassol Advocacia</strong> foi construída sob a liderança do <strong>Dr. Isaac Cassol Antunes</strong> com uma premissa inegociável: rejeitar a advocacia de massa para exercer uma defesa técnica verdadeiramente artesanal.
              </p>
              <p>
                Sabemos que por trás de cada processo trabalhista, contrato empresarial, defesa médica, inventário familiar ou planejamento previdenciário existe o esforço de uma vida inteira. Por isso, nosso trabalho começa muito antes do Fórum: mergulhamos na rotina da sua empresa ou na documentação da sua família para estancar riscos na origem, blindar operações e negociar com posição de força.
              </p>
              <p>
                E quando o conflito exige a via judicial, atuamos com preparo exaustivo dos autos, acompanhamento pessoal em audiências e presença ativa até os Tribunais Regionais e Superiores — mantendo você informado de cada passo com transparência e lealdade.
              </p>
            </div>

            {/* 2x2 Differential Cards aligned with Hero Golden-Champagne Aesthetic */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.18 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-4 sm:p-4.5 rounded-xl bg-[#FCFBF8] border border-[#DFD5C4] border-l-[3px] border-l-[#C5A059] flex items-start space-x-3 shadow-subtle hover:shadow-card transition-all duration-300"
                >
                  <CheckCircle2 className="w-[18px] h-[18px] text-[#1E3668] mt-0.5 flex-shrink-0 stroke-[1.8]" />
                  <div>
                    <h4 className="font-bold text-[#0A1324] text-xs sm:text-[13.5px] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#4A5363] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
