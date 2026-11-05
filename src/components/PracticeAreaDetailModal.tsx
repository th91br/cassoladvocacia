import React, { useEffect } from 'react';
import { X, CheckCircle2, HelpCircle, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PracticeArea } from '../data/practiceAreas';
import { officeData } from '../data/officeData';

interface PracticeAreaDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onOpenContactModal: (context: string) => void;
}

export const PracticeAreaDetailModal: React.FC<PracticeAreaDetailModalProps> = ({
  area,
  onClose,
  onOpenContactModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (area) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [area, onClose]);

  if (!area) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá, Dr. Isaac / Cassol Advocacia. Gostaria de orientações sobre a área de ${area.title}.`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-paper-canvas rounded-2xl sm:rounded-3xl shadow-2xl border border-paper-border/80 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-fade-in">
        
        {/* Modal Header */}
        <div className="bg-navy-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar detalhes da área"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold tracking-wider-tag uppercase font-sans mb-3">
            {area.categoryLabel}
          </span>
          <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white pr-8">
            {area.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            {area.headline}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Context Overview */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy-950 mb-3">
              Contexto e Atuação do Escritório
            </h3>
            <p className="text-sm sm:text-base text-graphite-muted leading-relaxed font-sans">
              {area.context}
            </p>
          </div>

          {/* Scenarios Handled */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-paper-border">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-navy-950 mb-4 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-cassol-blue flex-shrink-0" />
              <span>Situações e Demandas Atendidas</span>
            </h3>
            <ul className="space-y-3">
              {area.typicalScenarios.map((scenario, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-graphite-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-cassol-blue mt-1.5 mr-3 flex-shrink-0"></span>
                  <span>{scenario}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How Cassol Works in this Area */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy-950 mb-4">
              Como Conduzimos os Casos Nesta Área
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {area.approach.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-paper-card border border-paper-border/80 text-xs sm:text-sm text-graphite">
                  <span className="text-cassol-blue font-mono font-bold block mb-1">Passo 0{idx + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* FAQs for this Area */}
          {area.faqs.length > 0 && (
            <div className="space-y-4 pt-2">
              <h3 className="font-serif text-lg font-semibold text-navy-950 flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-cassol-blue flex-shrink-0" />
                <span>Perguntas Frequentes sobre esta Área</span>
              </h3>
              <div className="space-y-3">
                {area.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-paper-border text-xs sm:text-sm">
                    <p className="font-semibold text-navy-950 mb-1.5">
                      {faq.question}
                    </p>
                    <p className="text-graphite-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Direct Actions */}
          <div className="p-6 rounded-2xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif text-base font-semibold text-white">
                Deseja orientação sobre esta área?
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Converse com o Dr. Isaac Cassol com sigilo e fundamentação jurídica.
              </p>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${officeData.units[0].whatsappRaw}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#C5A059] hover:bg-[#DEC082] text-[#0A1324] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenContactModal(`Área: ${area.title}`);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#FAF6EE] text-[#0A1324] hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Formulário</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-[11px] text-graphite-subtle text-center flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>As orientações fornecidas respeitam rigorosamente o Provimento 205/2021 da OAB.</span>
          </p>

        </div>

      </div>
    </div>
  );
};
