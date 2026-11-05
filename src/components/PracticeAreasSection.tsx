import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  FileCheck, 
  ShieldAlert, 
  Users, 
  HeartHandshake, 
  Scale, 
  ArrowRight, 
  Building2, 
  UserCheck 
} from 'lucide-react';
import { practiceAreas, PracticeArea, correspondenceServices } from '../data/practiceAreas';
import { PracticeAreaDetailModal } from './PracticeAreaDetailModal';

interface PracticeAreasSectionProps {
  onOpenContactModal: (context: string) => void;
}

export const PracticeAreasSection: React.FC<PracticeAreasSectionProps> = ({ onOpenContactModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'empresas' | 'individuos'>('all');
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return Briefcase;
      case 'FileCheck': return FileCheck;
      case 'ShieldAlert': return ShieldAlert;
      case 'Users': return Users;
      case 'HeartHandshake': return HeartHandshake;
      case 'Scale': return Scale;
      default: return Scale;
    }
  };

  const filteredAreas = activeFilter === 'all' 
    ? practiceAreas 
    : practiceAreas.filter(a => a.category === activeFilter);

  return (
    <section 
      id="areas" 
      className="py-20 lg:py-28 bg-[#F3ECE1] border-b border-[#DFD5C4] relative overflow-hidden"
      aria-label="Áreas de Atuação Jurídica da Cassol Advocacia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EFE7D8] border border-[#D8C9B0] text-[#0E1A32] text-xs font-bold tracking-[0.12em] uppercase font-sans mb-3.5">
              <Scale className="w-3.5 h-3.5 text-[#B69246]" />
              <span>Especialidades &amp; Frentes de Defesa</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0A1324] font-normal tracking-tight leading-[1.18]">
              Soluções jurídicas desenhadas para proteger negócios, carreiras médicas e patrimônios familiares.
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-[#364050] font-sans leading-relaxed">
              Cada área conta com estudo técnico aprofundado e atuação direta do Dr. Isaac Cassol Antunes. Selecione uma especialidade abaixo para examinar como atuamos na prática.
            </p>
          </div>

          {/* Category Filter Pills in Warm Champagne & Imperial Navy */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#EFE7D8] p-1.5 rounded-full border border-[#D8C9B0] self-start md:self-auto shadow-subtle">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#0A1324] text-[#FAF6EE] shadow-sm'
                  : 'text-[#3E4656] hover:text-[#0A1324]'
              }`}
            >
              Todas ({practiceAreas.length})
            </button>
            <button
              onClick={() => setActiveFilter('empresas')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center space-x-1.5 ${
                activeFilter === 'empresas'
                  ? 'bg-[#0A1324] text-[#FAF6EE] shadow-sm'
                  : 'text-[#3E4656] hover:text-[#0A1324]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Empresas &amp; Clínicas</span>
            </button>
            <button
              onClick={() => setActiveFilter('individuos')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center space-x-1.5 ${
                activeFilter === 'individuos'
                  ? 'bg-[#0A1324] text-[#FAF6EE] shadow-sm'
                  : 'text-[#3E4656] hover:text-[#0A1324]'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Pessoas &amp; Famílias</span>
            </button>
          </div>
        </motion.div>

        {/* Practice Areas Grid - Warm Alabaster & Champagne-Gold Bezel Craft */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAreas.map((area, index) => {
            const Icon = getIcon(area.icon);
            return (
              <motion.div 
                key={area.id}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ 
                  duration: 0.75, 
                  delay: (index % 3) * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group p-2 rounded-[1.75rem] bg-[#EAE0CE]/80 border border-[#D8C9B0] hover:border-[#C5A059] shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedArea(area)}
              >
                {/* Inner Alabaster Surface */}
                <div className="p-6 sm:p-7 rounded-[calc(1.75rem-0.5rem)] bg-[#FCFBF8] border border-[#E8DFD1] flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Top Row: Icon + Golden Category Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#F5EFE4] border border-[#DFC99B] flex items-center justify-center text-[#0F2347] shadow-subtle group-hover:bg-[#0A1324] group-hover:border-[#0A1324] group-hover:text-[#DEC082] transition-colors duration-300">
                        <Icon className="w-5 h-5 stroke-[1.6]" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#F6F0E2] border border-[#DFC99B]/80 text-[#856520]">
                        {area.categoryLabel.split('&')[0]}
                      </span>
                    </div>

                    {/* Area Title */}
                    <h3 className="font-serif text-xl font-semibold text-[#0A1324] tracking-tight group-hover:text-[#1E3668] transition-colors leading-snug">
                      {area.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-sm text-[#3E4656] leading-relaxed font-sans">
                      {area.shortDescription}
                    </p>

                    {/* Key Scenarios Preview */}
                    <div className="mt-5 pt-4 border-t border-[#EAE2D3] space-y-2">
                      <span className="text-[10.5px] font-bold text-[#856520] tracking-[0.08em] uppercase block">
                        Situações em que atuamos:
                      </span>
                      {area.typicalScenarios.slice(0, 2).map((sc, i) => (
                        <div key={i} className="text-xs text-[#2C3442] flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 mr-2.5 flex-shrink-0"></span>
                          <span className="line-clamp-1">{sc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Trigger Area Modal */}
                  <div className="mt-6 pt-4 border-t border-[#EAE2D3]">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArea(area);
                      }}
                      className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0A1324] group-hover:text-[#1E3668] transition-colors py-1 focus:outline-none"
                    >
                      <span>Examinar atuação &amp; dúvidas</span>
                      <span className="w-6 h-6 rounded-full bg-[#F5EFE4] border border-[#DFC99B] flex items-center justify-center group-hover:bg-[#0A1324] group-hover:border-[#0A1324] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0A1324] group-hover:text-[#DEC082] group-hover:translate-x-0.5 transition-all" />
                      </span>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Correspondence Services Callout in Warm Alabaster & Brass */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FCFBF8] border border-[#DFC99B] border-l-[4px] border-l-[#C5A059] shadow-card flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.14em] text-[#856520] mb-2 font-sans">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
              <span>Parceria &amp; Apoio a Escritórios de Todo o País</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0A1324]">
              {correspondenceServices.title} em Caxias do Sul/RS e Maringá/PR
            </h3>
            <p className="mt-1.5 text-sm text-[#3E4656] font-sans leading-relaxed">
              {correspondenceServices.description} Representação qualificada em audiências presenciais e telepresenciais, despachos com magistrados e diligências urgentes na Serra Gaúcha e no Norte do Paraná.
            </p>
          </div>

          <button
            onClick={() => onOpenContactModal('Correspondência Jurídica')}
            className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-[#0A1324] text-[#FAF6EE] hover:bg-[#16294C] text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-sm active:scale-95"
          >
            <span>Solicitar Diligência ou Audiência</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DEC082]" />
          </button>
        </motion.div>

      </div>

      {/* Selected Practice Area Modal View */}
      <PracticeAreaDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenContactModal={onOpenContactModal}
      />
    </section>
  );
};
