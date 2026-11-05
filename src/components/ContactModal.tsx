import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';
import { officeData } from '../data/officeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialContext = 'Atendimento Geral'
}) => {
  const [selectedUnit, setSelectedUnit] = useState<'caxias' | 'maringa'>('caxias');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const caxiasUnit = officeData.units[0];
  const maringaUnit = officeData.units[1];
  const activeUnit = selectedUnit === 'caxias' ? caxiasUnit : maringaUnit;

  const handleWhatsApp = (targetUnitId: 'caxias' | 'maringa') => {
    const unit = targetUnitId === 'caxias' ? caxiasUnit : maringaUnit;
    const text = encodeURIComponent(
      `Olá, Dr. Isaac Cassol. Gostaria de atendimento com a Cassol Advocacia (${unit.name}). Assunto/Origem: ${initialContext}.`
    );
    window.open(`https://wa.me/${unit.whatsappRaw}?text=${text}`, '_blank');
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor, informe seu nome e telefone.');
      return;
    }
    setIsSent(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-paper-border overflow-hidden z-10 animate-fade-in flex flex-col my-auto">
        
        {/* Modal Top Bar */}
        <div className="bg-navy-950 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar janela de contato"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 text-slate-300 text-[10px] font-mono uppercase tracking-widest mb-1">
            <Building2 className="w-3.5 h-3.5 text-cassol-light" />
            <span>Cassol Advocacia • Atendimento RS &amp; PR</span>
          </div>
          <h2 id="contact-modal-title" className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Falar com o Escritório
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            Origem: <strong className="text-white font-medium">{initialContext}</strong>
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 space-y-6">
          
          {/* Unit Selector Tabs */}
          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-subtle mb-2">
              Escolha a Unidade para Atendimento:
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-paper-card rounded-xl border border-paper-border">
              <button
                type="button"
                onClick={() => setSelectedUnit('caxias')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedUnit === 'caxias'
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'text-graphite-muted hover:text-navy-950'
                }`}
              >
                Caxias do Sul / RS
              </button>
              <button
                type="button"
                onClick={() => setSelectedUnit('maringa')}
                className={`py-2 px-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedUnit === 'maringa'
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'text-graphite-muted hover:text-navy-950'
                }`}
              >
                Maringá / PR (Nova)
              </button>
            </div>
          </div>

          {/* Unit WhatsApp Action Button */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-900 block">
                WhatsApp Unidade {activeUnit.city}
              </span>
              <span className="text-[11px] text-emerald-700 block mt-0.5">
                {activeUnit.whatsappFormatted}
              </span>
            </div>
            <button
              onClick={() => handleWhatsApp(selectedUnit)}
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-colors flex items-center space-x-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Abrir Conversa</span>
            </button>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-paper-border"></div>
            <span className="flex-shrink mx-3 text-[11px] font-mono text-graphite-subtle uppercase">Ou solicite retorno</span>
            <div className="flex-grow border-t border-paper-border"></div>
          </div>

          {isSent ? (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 animate-fade-in">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-base font-semibold text-navy-950">Solicitação Registrada</h4>
              <p className="text-xs text-graphite-muted">
                O Dr. Isaac Cassol ou nossa equipe da unidade de {activeUnit.city} entrará em contato em horário comercial.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2 rounded-full bg-navy-950 text-white text-xs font-semibold"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-navy-950 mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome completo"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-paper-canvas border border-paper-border text-xs sm:text-sm text-graphite placeholder:text-slate-400 focus:bg-white focus:border-cassol-blue transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-navy-950 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(DDD) 9 9999-9999"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-paper-canvas border border-paper-border text-xs sm:text-sm text-graphite placeholder:text-slate-400 focus:bg-white focus:border-cassol-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-navy-950 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@exemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-paper-canvas border border-paper-border text-xs sm:text-sm text-graphite placeholder:text-slate-400 focus:bg-white focus:border-cassol-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-navy-950 mb-1">
                  Breve síntese da necessidade
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex.: Gostaria de agendar orientação sobre demandas trabalhistas..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-paper-canvas border border-paper-border text-xs sm:text-sm text-graphite placeholder:text-slate-400 focus:bg-white focus:border-cassol-blue transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-navy-950 hover:bg-cassol-blue text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Solicitar Retorno da Unidade {activeUnit.city}</span>
              </button>

              <p className="text-[10px] text-graphite-subtle text-center flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3 h-3 text-slate-400" />
                <span>Sigilo profissional OAB resguardado. Tratamento estrito conforme LGPD.</span>
              </p>
            </form>
          )}

          {/* Unit Address Preview */}
          <div className="pt-2 border-t border-paper-border text-[11px] text-graphite-subtle flex items-center justify-between">
            <span>{activeUnit.addressShort}</span>
            <span className="font-semibold text-navy-950">{activeUnit.postalCode}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
