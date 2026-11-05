import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, MessageSquare, ArrowUpRight, Building2 } from 'lucide-react';
import { officeData } from '../data/officeData';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenContactModal: (context: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenContactModal }) => {
  const currentYear = new Date().getFullYear();
  const caxiasUnit = officeData.units[0];
  const maringaUnit = officeData.units[1];

  return (
    <footer className="bg-[#081020] text-[#C8D2E3] font-sans border-t border-[#C5A059]/30 relative z-10 overflow-hidden" aria-label="Rodapé institucional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Corporate Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Crisp High-Definition Brand Lockup */}
            <div className="flex items-center space-x-3.5">
              <div className="flex-shrink-0">
                <img 
                  src="/assets/emblem_cassol_white.png" 
                  alt="Emblema Oficial Cassol Advocacia" 
                  className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-sm"
                  width="85"
                  height="50"
                />
              </div>
              <span className="w-[1.5px] h-10 bg-gradient-to-b from-[#C5A059]/20 via-[#C5A059] to-[#C5A059]/20" aria-hidden="true" />
              <div className="flex flex-col justify-center">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#FAF6EE] leading-none">
                  CASSOL ADVOCACIA
                </span>
                <span className="text-[9.5px] sm:text-[10.5px] font-sans font-semibold tracking-[0.17em] uppercase text-[#DEC082] leading-none mt-1.5">
                  Consultoria &amp; Assessoria Jurídica
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BCC6DA] leading-relaxed font-sans">
              Sociedade de advogados inscrita na OAB/RS sob nº 5.950. Advocacia de ofício, preventiva e contenciosa, orientada pelo rigor doutrinário, transparência e lealdade ao cliente.
            </p>

            <div className="space-y-1 text-xs text-[#9AA6BD] pt-1 font-mono">
              <p>Razão Social: {officeData.corporateName}</p>
              <p>CNPJ: {officeData.cnpj}</p>
              <p>Advogado Titular: Dr. Isaac Cassol Antunes ({officeData.leadAttorney.oabIndividual})</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenContactModal('Rodapé')}
                className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 hover:bg-[#C5A059] text-[#FAF6EE] hover:text-[#0A1324] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Agendar Atendimento</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Practice Areas Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-[#DEC082] tracking-wider uppercase">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8D2E3]">
              <li>
                <a href="#areas" className="hover:text-[#DEC082] transition-colors">Direito do Trabalho &amp; Compliance</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#DEC082] transition-colors">Consultoria &amp; Contratos Empresariais</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#DEC082] transition-colors">Direito Médico e Defesa da Saúde</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#DEC082] transition-colors">Família e Planejamento Sucessório</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#DEC082] transition-colors">Direito Previdenciário (INSS)</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#DEC082] transition-colors">Responsabilidade Civil &amp; Contencioso</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#DEC082] transition-colors">Diligências e Correspondência Forense</a>
              </li>
            </ul>
          </div>

          {/* Units: Caxias do Sul & Maringá (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h4 className="font-serif text-sm font-semibold text-[#DEC082] tracking-wider uppercase flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span>Unidades no Rio Grande do Sul e Paraná</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Unit 1: Caxias do Sul / RS */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FAF6EE] block">{caxiasUnit.name}</span>
                  <span className="text-[10px] uppercase font-mono text-[#DEC082] font-semibold">{caxiasUnit.tag}</span>
                </div>
                <p className="text-[11px] text-[#BCC6DA] flex items-start space-x-1.5 leading-snug">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span>{caxiasUnit.fullAddress}</span>
                </p>
                <div className="pt-1 space-y-1 text-[11px] text-[#C8D2E3]">
                  <p className="flex items-center space-x-1.5">
                    <Phone className="w-3 h-3 text-[#C5A059] flex-shrink-0" />
                    <a href={`tel:${caxiasUnit.landline}`} className="hover:text-white">
                      {caxiasUnit.landlineFormatted}
                    </a>
                  </p>
                  <p className="flex items-center space-x-1.5">
                    <MessageSquare className="w-3 h-3 text-[#DEC082] flex-shrink-0" />
                    <a 
                      href={`https://wa.me/${caxiasUnit.whatsappRaw}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white font-semibold text-[#DEC082]"
                    >
                      {caxiasUnit.whatsappFormatted}
                    </a>
                  </p>
                </div>
              </div>

              {/* Unit 2: Maringá / PR */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-[#C5A059]/25 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FAF6EE] block">{maringaUnit.name}</span>
                  <span className="text-[10px] uppercase font-mono text-[#DEC082] font-semibold">{maringaUnit.tag}</span>
                </div>
                <p className="text-[11px] text-[#BCC6DA] flex items-start space-x-1.5 leading-snug">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span>{maringaUnit.fullAddress}</span>
                </p>
                <div className="pt-1 space-y-1 text-[11px] text-[#C8D2E3]">
                  <p className="flex items-center space-x-1.5">
                    <MessageSquare className="w-3 h-3 text-[#DEC082] flex-shrink-0" />
                    <a 
                      href={`https://wa.me/${maringaUnit.whatsappRaw}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white font-semibold text-[#DEC082]"
                    >
                      {maringaUnit.whatsappFormatted}
                    </a>
                  </p>
                  <p className="flex items-center space-x-1.5">
                    <Mail className="w-3 h-3 text-[#C5A059] flex-shrink-0" />
                    <a href={`mailto:${officeData.email}`} className="hover:text-white break-all text-[10px]">
                      {officeData.email}
                    </a>
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Ethical Disclaimer Notice (Provimento 205/2021) */}
        <div className="py-8 text-[11px] text-[#9AA6BD] leading-relaxed border-b border-white/10 space-y-2">
          <p className="flex items-start space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Conformidade Ética &amp; Deontológica (OAB):</strong> Este portal possui caráter estritamente institucional e informativo, observando integralmente o Provimento nº 205/2021 do Conselho Federal da OAB e o Código de Ética e Disciplina. Nenhuma informação aqui publicada configura promessa de resultado ou captação mercantil.
            </span>
          </p>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9AA6BD] gap-4">
          <div>
            © {currentYear} Cassol Advocacia — {officeData.corporateName}. Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-[#DEC082] underline transition-colors"
            >
              Política de Privacidade (LGPD)
            </button>
            <a 
              href="#inicio" 
              className="hover:text-[#DEC082] transition-colors font-semibold"
            >
              Voltar ao Topo ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
