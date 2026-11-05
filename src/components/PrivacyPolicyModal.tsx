import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { officeData } from '../data/officeData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-paper-border overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-fade-in">
        
        {/* Header */}
        <div className="bg-navy-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar Política de Privacidade"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>LGPD • Lei nº 13.709/2018</span>
          </div>

          <h2 id="privacy-title" className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Política de Privacidade &amp; Proteção de Dados
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            {officeData.corporateName} • {officeData.oabSociety}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-graphite-muted leading-relaxed font-sans">
          
          <div>
            <h3 className="font-serif text-base font-semibold text-navy-950 mb-2">
              1. Compromisso Institucional com a Privacidade
            </h3>
            <p>
              A <strong>{officeData.corporateName}</strong> preza pela proteção e pela confidencialidade dos dados pessoais de seus clientes, constituídos e visitantes deste sítio eletrônico. Esta política descreve de forma transparente como os dados são coletados, utilizados e resguardados, em estreita observância à Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e ao sigilo profissional intrínseco à advocacia (Estatuto da OAB — Lei nº 8.906/1994).
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-navy-950 mb-2">
              2. Dados Coletados e Finalidade do Tratamento
            </h3>
            <p>
              Coletamos exclusivamente as informações mínimas e estritamente necessárias fornecidas de forma voluntária pelo usuário por meio de nossos formulários de contato ou via WhatsApp, tais como: nome, telefone, endereço eletrônico e descrição sumária da demanda.
            </p>
            <p className="mt-2">
              <strong>Finalidade:</strong> Esses dados são utilizados unicamente para viabilizar a comunicação institucional, o agendamento de consultas jurídicas e a prestação de serviços advocatícios solicitados. Não comercializamos, compartilhamos nem transferimos seus dados para terceiros para fins publicitários ou mercadológicos.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-navy-950 mb-2">
              3. Sigilo Profissional e Segurança da Informação
            </h3>
            <p>
              Todas as comunicações dirigidas à Cassol Advocacia são resguardadas pelo sigilo profissional da advocacia, assegurado por lei federal. Adotamos medidas técnicas e administrativas aptas a proteger seus dados contra acessos não autorizados, incidentes de segurança ou qualquer forma de tratamento ilícito.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-navy-950 mb-2">
              4. Uso de Cookies e Rastreadores
            </h3>
            <p>
              Este sítio prioriza a privacidade do visitante e <strong>não utiliza cookies invasivos de rastreamento comportamental de terceiros</strong>. Empregamos apenas recursos técnicos essenciais para a navegação segura, responsividade e desempenho da página.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-navy-950 mb-2">
              5. Direitos do Titular dos Dados
            </h3>
            <p>
              Nos termos do artigo 18 da LGPD, o titular poderá, a qualquer momento e mediante requisição formal, solicitar a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a eliminação de dados pessoais não mais necessários para o cumprimento de obrigações legais.
            </p>
            <p className="mt-2">
              As solicitações podem ser encaminhadas diretamente ao e-mail oficial: <a href={`mailto:${officeData.email}`} className="text-cassol-blue font-semibold hover:underline">{officeData.email}</a>.
            </p>
          </div>

          <div className="pt-4 border-t border-paper-border text-xs text-graphite-subtle">
            <p>Atualizado em Outubro de 2026. Cassol Advocacia — Sede em Caxias do Sul/RS.</p>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-4 bg-paper-canvas border-t border-paper-border flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-navy-900 text-white text-xs font-semibold hover:bg-cassol-blue transition-colors"
          >
            Compreendido e Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
