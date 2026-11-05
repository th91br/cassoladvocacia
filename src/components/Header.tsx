import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { officeData } from '../data/officeData';
import { NavHeader } from './ui/nav-header';

interface HeaderProps {
  onOpenContactModal: (context?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    let lastY = window.scrollY;
    const sectionIds = ['inicio', 'sobre', 'areas', 'advogado', 'metodologia', 'conteudos', 'contato'];

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      // Scroll direction tracking with hysteresis
      if (currentY > lastY + 8 && currentY > 160) {
        setIsScrollingDown(true);
      } else if (currentY < lastY - 8 || currentY <= 60) {
        setIsScrollingDown(false);
      }
      lastY = currentY;

      // Top of page
      if (currentY < 120) {
        setActiveSection('#inicio');
        return;
      }

      // Bottom of document
      if (window.innerHeight + currentY >= document.documentElement.scrollHeight - 120) {
        setActiveSection('#contato');
        return;
      }

      // Accurate viewport bounding rect check
      const focusPoint = 180;
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= focusPoint && rect.bottom > focusPoint) {
          setActiveSection(`#${id}`);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Attach to Lenis with fallback for mounting order
    let activeLenis: any = (window as any).__lenis;
    const attachLenis = () => {
      const lenis = (window as any).__lenis;
      if (lenis && !activeLenis) {
        activeLenis = lenis;
        lenis.on('scroll', handleScroll);
      }
    };

    if (activeLenis) {
      activeLenis.on('scroll', handleScroll);
    }
    window.addEventListener('lenis-ready', attachLenis);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('lenis-ready', attachLenis);
      if (activeLenis) {
        activeLenis.off('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Escritório', href: '#sobre' },
    { label: 'Áreas de Atuação', shortLabel: 'Áreas', href: '#areas' },
    { label: 'Advogado', href: '#advogado' },
    { label: 'Metodologia', shortLabel: 'Método', href: '#metodologia' },
    { label: 'Conteúdos', shortLabel: 'Artigos', href: '#conteudos' },
    { label: 'Contato', href: '#contato' },
  ];

  const caxiasUnit = officeData.units[0];
  const maringaUnit = officeData.units[1];

  return (
    <>
      {/* Top Utility Bar with Both Units & Direct Lines - Auto-Collapses on Scroll */}
      <div 
        className={`bg-[#081020] text-[#C8D2E3] text-xs px-4 sm:px-8 border-[#C5A059]/25 font-sans tracking-wide hidden lg:block transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? 'max-h-0 opacity-0 overflow-hidden py-0 border-b-0 pointer-events-none' 
            : 'max-h-12 opacity-100 py-2 border-b'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-5">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-[#DEC082] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              <span>{officeData.oabSociety}</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[#C8D2E3]">
              Sede: <strong className="text-[#FAF6EE] font-semibold">Caxias do Sul/RS</strong> | Unidade: <strong className="text-[#FAF6EE] font-semibold">Maringá/PR</strong>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-[#C8D2E3]">
            {/* Caxias Phone */}
            <a 
              href={`tel:${caxiasUnit.landline}`} 
              className="hover:text-[#DEC082] transition-colors flex items-center space-x-1.5 text-[11px]"
              title="Telefone Fixo Caxias do Sul"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>Caxias: {caxiasUnit.landlineFormatted}</span>
            </a>
            
            <span className="text-white/15">|</span>

            {/* Caxias WhatsApp */}
            <a 
              href={`https://wa.me/${caxiasUnit.whatsappRaw}?text=${encodeURIComponent("Olá, gostaria de falar com a Cassol Advocacia (Unidade Caxias do Sul).")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DEC082] transition-colors flex items-center space-x-1.5 text-[11px]"
              title="WhatsApp Caxias do Sul"
            >
              <MessageSquare className="w-3 h-3 text-[#DEC082]" />
              <span>RS: {caxiasUnit.whatsappFormatted}</span>
            </a>

            <span className="text-white/15">|</span>

            {/* Maringá WhatsApp */}
            <a 
              href={`https://wa.me/${maringaUnit.whatsappRaw}?text=${encodeURIComponent("Olá, gostaria de falar com a Cassol Advocacia (Unidade Maringá).")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#DEC082] transition-colors flex items-center space-x-1.5 text-[11px]"
              title="WhatsApp Maringá / PR"
            >
              <MessageSquare className="w-3 h-3 text-[#DEC082]" />
              <span>PR: {maringaUnit.whatsappFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header - Apple-Style Liquid Glass & Adaptive Kinetic Height */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-xl backdrop-saturate-150 ${
          isScrolled 
            ? 'bg-[#F4EDE2]/60 shadow-[0_8px_32px_-8px_rgba(14,22,43,0.10)] border-b border-white/55' 
            : 'bg-[#F4EDE2]/40 shadow-[0_4px_24px_-6px_rgba(14,22,43,0.05)] border-b border-white/45'
        } ${isScrollingDown && isScrolled ? '-translate-y-1 sm:translate-y-0' : 'translate-y-0'}`}
        style={{
          backgroundImage: isScrolled
            ? 'linear-gradient(90deg, rgba(235, 225, 210, 0.45) 0%, rgba(246, 241, 232, 0.55) 15%, rgba(246, 241, 232, 0.55) 80%, rgba(226, 208, 175, 0.45) 100%)'
            : 'linear-gradient(90deg, rgba(182, 160, 132, 0.38) 0%, rgba(244, 237, 226, 0.48) 7%, rgba(247, 242, 233, 0.42) 62%, rgba(226, 205, 166, 0.44) 86%, rgba(196, 166, 112, 0.46) 95%, rgba(162, 134, 92, 0.38) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            
            {/* Logo Brand: Refined, Compact & Proportioned */}
            <a 
              href="#inicio" 
              className="group flex-shrink-0 flex items-center space-x-2 sm:space-x-2.5 text-left focus:outline-none"
              aria-label="Cassol Advocacia - Início"
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                <img 
                  src="/assets/emblem_cassol_blue.png" 
                  alt="Emblema Oficial Cassol Advocacia" 
                  className="h-7 sm:h-8 w-auto object-contain filter brightness-[0.78] contrast-[1.25] group-hover:scale-105 transition-transform duration-300"
                  width="48"
                  height="32"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-[13px] sm:text-sm xl:text-[15px] font-bold tracking-tight text-navy-950 group-hover:text-cassol-blue transition-colors leading-none">
                  CASSOL ADVOCACIA
                </span>
                <span className="text-[7.5px] sm:text-[8px] xl:text-[8.5px] font-sans font-semibold tracking-[0.14em] uppercase text-graphite-muted group-hover:text-cassol-blue/90 transition-colors leading-none mt-0.5 sm:mt-1">
                  <span className="lg:hidden xl:inline">Consultoria &amp; </span>Assessoria Jurídica
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Animated Pill Cursor */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-2 xl:mx-4 min-w-0">
              <NavHeader items={navLinks} activeHref={activeSection} />
            </div>

            {/* Desktop CTA Button - Compact, Sleek & Highly Professional */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <button
                onClick={() => onOpenContactModal('Header')}
                className="group h-8.5 xl:h-9 px-3 xl:px-4 rounded-full bg-navy-950 text-white text-[10.5px] xl:text-[11px] font-semibold tracking-wide uppercase hover:bg-cassol-blue active:scale-[0.98] transition-all duration-300 shadow-sm inline-flex items-center justify-center space-x-1.5"
                aria-label="Abrir formulário para falar com o escritório"
              >
                <span className="lg:hidden xl:inline">Falar com o Escritório</span>
                <span className="hidden lg:inline xl:hidden">Falar com Escritório</span>
                <span className="w-3.5 h-3.5 xl:w-4 xl:h-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-2.5 h-2.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex lg:hidden items-center space-x-2.5">
              <button
                onClick={() => onOpenContactModal('Header Mobile')}
                className="h-9 px-3.5 rounded-full bg-navy-950 text-white text-xs font-semibold tracking-wide"
                aria-label="Falar com o escritório"
              >
                Falar
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-graphite hover:text-navy-950 hover:bg-paper-card focus:outline-none"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-paper-canvas shadow-xl p-6 flex flex-col justify-between overflow-y-auto border-l border-paper-border z-10 animate-fade-in">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-paper-border">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/assets/emblem_cassol_blue.png" 
                    alt="Emblema Cassol" 
                    className="h-8 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-navy-950">
                      CASSOL ADVOCACIA
                    </span>
                    <span className="text-[10px] text-graphite-muted uppercase tracking-wider">
                      {officeData.oabSociety}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-graphite-muted hover:text-graphite"
                  aria-label="Fechar navegação"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-2.5" aria-label="Navegação Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-graphite hover:bg-paper-card hover:text-cassol-blue transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                ))}
              </nav>

              {/* Units Quick Select in Mobile Drawer */}
              <div className="mt-6 pt-5 border-t border-paper-border space-y-3">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-graphite-subtle block">
                  Nossas Unidades
                </span>
                
                <div className="p-3 rounded-xl bg-paper-card border border-paper-border text-xs space-y-1">
                  <span className="font-bold text-navy-950 block">{caxiasUnit.name}</span>
                  <p className="text-graphite-subtle text-[11px]">{caxiasUnit.addressShort}</p>
                  <p className="text-cassol-blue font-semibold pt-1">{caxiasUnit.whatsappFormatted}</p>
                </div>

                <div className="p-3 rounded-xl bg-paper-card border border-paper-border text-xs space-y-1">
                  <span className="font-bold text-navy-950 block">{maringaUnit.name}</span>
                  <p className="text-graphite-subtle text-[11px]">{maringaUnit.addressShort}</p>
                  <p className="text-cassol-blue font-semibold pt-1">{maringaUnit.whatsappFormatted}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-paper-border space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContactModal('Menu Mobile');
                }}
                className="w-full py-3 rounded-xl bg-navy-950 text-white text-sm font-semibold tracking-wide text-center shadow-sm flex items-center justify-center space-x-2"
              >
                <span>Falar com o Escritório</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
