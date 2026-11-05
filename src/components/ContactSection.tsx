import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Building2,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { officeData } from '../data/officeData';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [selectedUnitTab, setSelectedUnitTab] = useState<'caxias' | 'maringa'>('caxias');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredUnit: 'Caxias do Sul / RS (Sede)',
    subject: initialSubject || 'Direito do Trabalho & Compliance Trabalhista',
    message: '',
    privacyAccepted: false,
    honeypot: '', // anti-spam bot trap
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const caxiasUnit = officeData.units[0];
  const maringaUnit = officeData.units[1];
  const activeUnit = selectedUnitTab === 'caxias' ? caxiasUnit : maringaUnit;

  const subjects = [
    'Direito do Trabalho & Compliance Trabalhista',
    'Consultoria & Contratos Empresariais',
    'Direito Médico e da Saúde',
    'Família e Sucessões (Inventário / Partilha)',
    'Direito Previdenciário (Aposentadorias / Benefícios)',
    'Responsabilidade Civil & Litígios Cíveis',
    'Correspondência Jurídica em Caxias do Sul ou Maringá',
    'Outros Assuntos Institucionais'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Bot detected via honeypot');
      return;
    }

    if (!formData.name || !formData.phone || !formData.email || !formData.message || !formData.privacyAccepted) {
      alert('Por favor, preencha todos os campos obrigatórios e aceite a política de privacidade.');
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 700);
  };

  const handleWhatsAppUnit = (unitId: 'caxias' | 'maringa') => {
    const targetUnit = unitId === 'caxias' ? caxiasUnit : maringaUnit;
    const text = encodeURIComponent(
      `Olá, Dr. Isaac Cassol. Gostaria de atendimento com a Cassol Advocacia (${targetUnit.name}). Assunto: ${formData.subject || 'Consulta Jurídica'}.`
    );
    window.open(`https://wa.me/${targetUnit.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="contato" 
      className="py-20 lg:py-28 bg-[#F3ECE1] border-b border-[#DFD5C4] relative overflow-hidden"
      aria-label="Canais de Contato e Localização das Unidades da Cassol Advocacia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EFE7D8] border border-[#D8C9B0] text-[#0E1A32] text-xs font-bold tracking-[0.12em] uppercase font-sans mb-3.5">
            <Building2 className="w-3.5 h-3.5 text-[#B69246]" />
            <span>Atendimento Presencial &amp; Nacional • RS &amp; PR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0A1324] font-normal tracking-tight leading-[1.18]">
            Converse com a Cassol Advocacia em Caxias do Sul, Maringá ou por videoconferência.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#364050] font-sans leading-relaxed">
            Ambientes reservados e preparados para receber empresários, profissionais liberais e famílias com total privacidade na Serra Gaúcha e no Norte do Paraná.
          </p>
        </motion.div>

        {/* 2-Column Layout: Dual Units Presentation + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Units Cards & Map (Sweeps smoothly from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Unit Toggle Tabs in Warm Champagne & Imperial Navy */}
            <div className="flex rounded-2xl bg-[#EFE7D8] p-1.5 border border-[#D8C9B0] shadow-subtle">
              <button
                type="button"
                onClick={() => setSelectedUnitTab('caxias')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center justify-center space-x-1.5 ${
                  selectedUnitTab === 'caxias'
                    ? 'bg-[#0A1324] text-[#FAF6EE] shadow-sm'
                    : 'text-[#3E4656] hover:text-[#0A1324]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Caxias do Sul / RS (Sede)</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedUnitTab('maringa')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center justify-center space-x-1.5 ${
                  selectedUnitTab === 'maringa'
                    ? 'bg-[#0A1324] text-[#FAF6EE] shadow-sm'
                    : 'text-[#3E4656] hover:text-[#0A1324]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Maringá / PR (Unidade)</span>
              </button>
            </div>

            {/* Active Unit Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FCFBF8] border border-[#DFC99B] border-l-[4px] border-l-[#C5A059] shadow-card space-y-5 animate-fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE2D3]">
                <div>
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#856520] block">
                    {activeUnit.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0A1324] mt-0.5">
                    {activeUnit.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F5EFE4] border border-[#DFC99B] text-[#0A1324] text-xs font-mono font-bold">
                  {activeUnit.state}
                </span>
              </div>

              {/* Address */}
              <div className="space-y-1.5 text-xs sm:text-sm text-[#141821]">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#856520] block">
                  Endereço para Atendimento Presencial
                </span>
                <p className="font-bold text-[#0A1324] leading-snug">
                  {activeUnit.fullAddress}
                </p>
                <p className="text-xs text-[#4A5363] pt-0.5">
                  {activeUnit.landmark}
                </p>
                <a
                  href={activeUnit.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1E3668] hover:text-[#0A1324] pt-1 transition-colors"
                >
                  <span>Traçar rota no Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#B69246]" />
                </a>
              </div>

              {/* Communications */}
              <div className="pt-3.5 border-t border-[#EAE2D3] space-y-3">
                {activeUnit.landlineFormatted && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#4A5363] flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-[#B69246]" />
                      <span>Telefone Fixo:</span>
                    </span>
                    <a href={`tel:${activeUnit.landline}`} className="font-bold text-[#0A1324] hover:text-[#1E3668]">
                      {activeUnit.landlineFormatted}
                    </a>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#4A5363] flex items-center space-x-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#B69246]" />
                    <span>WhatsApp da Unidade:</span>
                  </span>
                  <a 
                    href={`https://wa.me/${activeUnit.whatsappRaw}?text=${encodeURIComponent(`Olá, gostaria de atendimento na unidade de ${activeUnit.city}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0A1324] hover:text-[#856520] transition-colors"
                  >
                    {activeUnit.whatsappFormatted}
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#4A5363] flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-[#B69246]" />
                    <span>E-mail Institucional:</span>
                  </span>
                  <a href={`mailto:${officeData.email}`} className="font-bold text-[#0A1324] hover:text-[#1E3668]">
                    {officeData.email}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button in Imperial Navy & Gold */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleWhatsAppUnit(selectedUnitTab)}
                  className="w-full py-3.5 px-5 rounded-full bg-[#0A1324] hover:bg-[#16294C] text-[#FAF6EE] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2.5 shadow-sm active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 text-[#DEC082]" />
                  <span>Falar pelo WhatsApp ({activeUnit.city})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DEC082]" />
                </button>
              </div>
            </div>

            {/* Embedded Map of Active Unit */}
            <div className="rounded-2xl overflow-hidden border border-[#D8C9B0] shadow-subtle h-48 sm:h-52 w-full relative bg-[#EFE7D8]">
              <iframe 
                src={activeUnit.googleMapsEmbedUrl} 
                title={`Localização da Cassol Advocacia em ${activeUnit.city}`} 
                className="w-full h-full border-0" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>

          {/* Right Column: Clean LGPD Compliant Contact Form (Sweeps smoothly from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-[2.5rem] bg-[#FCFBF8] border border-[#DFC99B] shadow-elevation relative">
              
              <div className="mb-8 pb-5 border-b border-[#EAE2D3]">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#856520] block mb-1">
                  Canal Direto &amp; Confidencial
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A1324] tracking-tight">
                  Solicitar Avaliação ou Agendar Reunião
                </h3>
                <p className="mt-1.5 text-sm text-[#3E4656] font-sans leading-relaxed">
                  Descreva brevemente sua necessidade. Sua mensagem será recebida sob sigilo profissional diretamente pela equipe do Dr. Isaac Cassol Antunes.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#F5EFE4] border border-[#C5A059] text-[#0A1324] space-y-4 animate-fade-in text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0A1324] text-[#DEC082] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold">
                    Solicitação Recebida com Sucesso
                  </h4>
                  <p className="text-sm text-[#2C3442] max-w-md mx-auto leading-relaxed">
                    Agradecemos a confiança, <strong>{formData.name}</strong>. Nossa equipe da <strong>{formData.preferredUnit}</strong> entrará em contato com brevidade.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="px-6 py-2.5 rounded-full bg-[#0A1324] hover:bg-[#16294C] text-[#FAF6EE] text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_contact_bot">Bot check</label>
                    <input 
                      type="text" 
                      id="hp_contact_bot"
                      value={formData.honeypot} 
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} 
                      tabIndex={-1} 
                      autoComplete="off" 
                    />
                  </div>

                  {/* Preferred Unit Selector */}
                  <div>
                    <label htmlFor="contact_preferred_unit" className="block text-xs font-bold text-[#0A1324] tracking-wider uppercase mb-1.5">
                      Modalidade / Unidade de Preferência *
                    </label>
                    <select
                      id="contact_preferred_unit"
                      value={formData.preferredUnit}
                      onChange={(e) => setFormData({ ...formData, preferredUnit: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4]/75 border border-[#D8C9B0] text-sm text-[#141821] focus:bg-white focus:border-[#B69246] transition-colors font-medium"
                    >
                      <option value="Caxias do Sul / RS (Sede)">Caxias do Sul / RS (Sede — Av. Júlio de Castilhos)</option>
                      <option value="Maringá / PR (Unidade)">Maringá / PR (Unidade — Avenida Paraná)</option>
                      <option value="Atendimento Online / Nacional">Videoconferência / Atendimento Nacional</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="contact_fullname" className="block text-xs font-bold text-[#0A1324] tracking-wider uppercase mb-1.5">
                      Nome Completo ou Empresa *
                    </label>
                    <input
                      type="text"
                      id="contact_fullname"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex.: Carlos Eduardo Silva"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4]/75 border border-[#D8C9B0] text-sm text-[#141821] placeholder:text-[#7A8394] focus:bg-white focus:border-[#B69246] transition-colors"
                    />
                  </div>

                  {/* Phone + Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact_user_phone" className="block text-xs font-bold text-[#0A1324] tracking-wider uppercase mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="contact_user_phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(DDD) 9 9999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4]/75 border border-[#D8C9B0] text-sm text-[#141821] placeholder:text-[#7A8394] focus:bg-white focus:border-[#B69246] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact_user_email" className="block text-xs font-bold text-[#0A1324] tracking-wider uppercase mb-1.5">
                        E-mail Corporativo ou Pessoal *
                      </label>
                      <input
                        type="email"
                        id="contact_user_email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@empresa.com.br"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4]/75 border border-[#D8C9B0] text-sm text-[#141821] placeholder:text-[#7A8394] focus:bg-white focus:border-[#B69246] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Selector */}
                  <div>
                    <label htmlFor="contact_main_subject" className="block text-xs font-bold text-[#0A1324] tracking-wider uppercase mb-1.5">
                      Natureza da Demanda *
                    </label>
                    <select
                      id="contact_main_subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4]/75 border border-[#D8C9B0] text-sm text-[#141821] focus:bg-white focus:border-[#B69246] transition-colors"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact_main_msg" className="block text-xs font-bold text-[#0A1324] tracking-wider uppercase mb-1.5">
                      Síntese do Caso ou Necessidade *
                    </label>
                    <textarea
                      id="contact_main_msg"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Relate brevemente o contexto para prepararmos a análise prévia..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4]/75 border border-[#D8C9B0] text-sm text-[#141821] placeholder:text-[#7A8394] focus:bg-white focus:border-[#B69246] transition-colors resize-y"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start space-x-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className="mt-1 rounded text-[#0A1324] focus:ring-[#B69246] border-[#C5A059] w-4 h-4"
                      />
                      <span className="text-xs text-[#3E4656] leading-snug">
                        Autorizo o tratamento das informações acima exclusivamente para retorno institucional da Cassol Advocacia, sob proteção da LGPD (Lei nº 13.709/2018) e do sigilo deontológico da OAB.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-full bg-[#0A1324] text-[#FAF6EE] text-xs sm:text-[13px] font-bold tracking-[0.06em] uppercase hover:bg-[#16294C] active:scale-[0.98] transition-all shadow-[0_10px_24px_-4px_rgba(11,22,44,0.4),0_4px_12px_rgba(197,160,89,0.2)] disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-[#DEC082]" />
                      <span>{formStatus === 'submitting' ? 'Enviando com Sigilo...' : 'Solicitar Atendimento do Escritório'}</span>
                    </button>
                  </div>

                  {/* Security disclaimer */}
                  <p className="text-[11px] text-[#525B6C] text-center flex items-center justify-center space-x-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B69246]" />
                    <span>Comunicação protegida pelo sigilo profissional (Provimento 205/2021 da OAB).</span>
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
