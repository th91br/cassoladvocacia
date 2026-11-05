import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { officeData } from '../data/officeData';

interface HeroProps {
  onOpenContactModal: (context?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#F3ECE1] border-b border-[#DFD5C5]"
      aria-label="Apresentação institucional Cassol Advocacia"
    >
      {/* =====================================================================
          DESKTOP FULL-BLEED ARCHITECTURAL SCENE (lg and up)
          Split into two synchronized motion layers so the left architectural
          wall/plant stays anchored on the left while Dr. Isaac & his golden
          halo glide in cinematically from the right on load and scroll
          ===================================================================== */}
      <div
        className="hidden lg:block absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Layer 1: Left Architectural Wall, Sunbeams & Marble Planter */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 [mask-image:linear-gradient(to_right,black_0%,black_42%,transparent_58%)]"
        >
          <img
            src="/assets/hero_cassol_bg_clean.png"
            alt=""
            className="w-full h-full object-cover object-center"
            width="1916"
            height="821"
            loading="eager"
          />
        </motion.div>

        {/* Layer 2: Dr. Isaac Cassol + Golden Laurel Halo + Themis Scene (Cinematic Entrance from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 70, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.05, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 origin-right [mask-image:linear-gradient(to_right,transparent_36%,black_52%,black_100%)]"
        >
          <img
            src="/assets/hero_cassol_bg_clean.png"
            alt="Dr. Isaac Cassol Antunes no escritório Cassol Advocacia"
            className="w-full h-full object-cover object-center"
            width="1916"
            height="821"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Subtle readability veil only on narrow laptops (1024px-1279px) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F4EDE2]/85 via-[#F4EDE2]/45 to-transparent xl:hidden"
          aria-hidden="true"
        />
      </div>

      {/* =====================================================================
          MOBILE & TABLET HERO SCENE (< lg) — DR. ISAAC FIRST AT THE TOP
          Enters cinematically on load and on bidirectional scroll
          ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 45, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden relative w-full z-10 overflow-hidden bg-[#F3ECE1]"
      >
        <div className="relative w-full">
          <img
            src="/assets/hero_cassol_mobile_portrait.png"
            alt="Dr. Isaac Cassol Antunes - Advogado Titular da Cassol Advocacia"
            className="w-full h-[340px] sm:h-[460px] md:h-[520px] object-cover object-[42%_top] sm:object-[46%_top] block [mask-image:linear-gradient(to_bottom,black_78%,transparent_98%)]"
            width="960"
            height="821"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </motion.div>

      {/* =====================================================================
          INTERACTIVE CONTENT CONTAINER (Real HTML/React, Optically Centered)
          Positioned at 9.2% left margin on desktop to sit cleanly between the
          left marble planter (0-7%) and the right golden halo (56-100%)
          ===================================================================== */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-5 sm:px-8 lg:pl-[8.8%] xl:pl-[9.4%] lg:pr-10 -mt-2 sm:-mt-3 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center pt-1 pb-12 sm:pt-2 sm:pb-16 lg:py-12 xl:py-14 2xl:py-16">
          
          {/* Left Column: Real Interactive Typography, Cards & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 xl:space-y-5.5 max-w-[660px] xl:max-w-[700px]"
          >
            {/* 1. OAB/RS Institutional Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 sm:space-x-2.5 w-max max-w-full px-3.5 sm:px-4 py-1.5 rounded-full bg-[#DCE3F0]/90 backdrop-blur-sm border border-[#C6D2E6] shadow-[0_2px_10px_rgba(15,35,71,0.05)]"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#12284C] flex-shrink-0" />
              <span className="text-[9.5px] sm:text-[11.5px] font-bold tracking-[0.04em] sm:tracking-[0.05em] uppercase text-[#0D1B36] font-sans whitespace-nowrap">
                {officeData.oabSociety} • CAXIAS DO SUL/RS &amp; MARINGÁ/PR
              </span>
            </motion.div>

            {/* 2. Main Editorial Headline & Lead Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 sm:space-y-3.5"
            >
              <h1 className="font-serif text-[28px] sm:text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-bold tracking-[-0.015em] text-[#0A1324] leading-[1.2] sm:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2]">
                Rigor técnico na prevenção de passivos e firmeza na condução de litígios complexos.
              </h1>
              <p className="font-sans text-sm sm:text-[15px] xl:text-[16px] text-[#222A38] leading-[1.6] max-w-[620px] font-normal">
                A Cassol Advocacia combina doutrina sólida, transparência estratégica e proximidade humana para orientar decisões críticas de empresas e famílias na Serra Gaúcha, no Paraná e em todo o país.
              </p>
            </motion.div>

            {/* 3. Value Proposition Cards with Golden-Champagne Accent Border */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-0.5"
            >
              <div className="flex items-start space-x-3 p-3.5 sm:p-4 rounded-xl bg-[#FAF8F3]/95 backdrop-blur-sm border border-[#DFC99B]/85 border-l-[3px] border-l-[#C5A059] shadow-[0_8px_22px_-6px_rgba(14,22,43,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(197,160,89,0.2)] transition-all duration-300">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#172D56] mt-0.5 flex-shrink-0 stroke-[1.8]" />
                <div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0A1324] block leading-snug">
                    Atuação Preventiva &amp; Contratual
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-[#374151] block leading-snug mt-0.5">
                    Blindagem jurídica e redução de riscos trabalhistas.
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 sm:p-4 rounded-xl bg-[#FAF8F3]/95 backdrop-blur-sm border border-[#DFC99B]/85 border-l-[3px] border-l-[#C5A059] shadow-[0_8px_22px_-6px_rgba(14,22,43,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(197,160,89,0.2)] transition-all duration-300">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#172D56] mt-0.5 flex-shrink-0 stroke-[1.8]" />
                <div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0A1324] block leading-snug">
                    Defesa em Tribunais &amp; Sustentações
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-[#374151] block leading-snug mt-0.5">
                    Acompanhamento processual minucioso até as instâncias superiores.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 4. Interactive Primary & Secondary Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <button
                onClick={() => onOpenContactModal('Hero')}
                className="group inline-flex items-center justify-center space-x-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#0B162C] text-white text-xs sm:text-[13px] font-bold tracking-[0.06em] uppercase hover:bg-[#15294F] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_24px_-4px_rgba(11,22,44,0.42),0_4px_12px_rgba(197,160,89,0.22)] text-center"
              >
                <span>Agendar Atendimento</span>
                <span className="w-6 h-6 rounded-full bg-white/12 border border-white/15 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>

              <a
                href="#areas"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#FAF6EE]/95 border-[1.5px] border-[#C6A769] text-[#0A1324] text-xs sm:text-[13px] font-bold tracking-[0.05em] uppercase hover:bg-white hover:border-[#B38F48] active:scale-[0.98] transition-all duration-300 shadow-[0_6px_18px_-4px_rgba(197,160,89,0.2)] text-center"
              >
                Conhecer Áreas de Atuação
              </a>
            </motion.div>

            {/* 5. Ethical Compliance Footnote with Golden Shield */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-[11px] sm:text-xs text-[#2C3545] flex items-center space-x-2 pt-0.5"
            >
              <Shield className="w-3.5 h-3.5 text-[#B69246] flex-shrink-0 stroke-[2]" />
              <span>
                Atendimento em estrita conformidade com o Provimento 205/2021 da OAB. Sigilo absoluto.
              </span>
            </motion.p>
          </motion.div>

          {/* Right Column Spacer on Desktop (Visual Stage is rendered in full-bleed background) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
