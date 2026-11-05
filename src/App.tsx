import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PositioningStatement } from './components/PositioningStatement';
import { PracticeAreasSection } from './components/PracticeAreasSection';
import { AboutSection } from './components/AboutSection';
import { LawyerProfile } from './components/LawyerProfile';
import { MethodologySection } from './components/MethodologySection';
import { DemarketingNotice } from './components/DemarketingNotice';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { SmoothScroll } from './providers/SmoothScroll';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { ScrollTopButton } from './components/ui/ScrollTopButton';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactContext, setContactContext] = useState<string>('Atendimento Geral');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleOpenContactModal = (context: string = 'Atendimento Geral') => {
    setContactContext(context);
    setIsContactModalOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-paper-canvas text-graphite antialiased selection:bg-cassol-blue selection:text-white relative">
        
        {/* Kinetic Scroll Progress Micro-Indicator */}
        <ScrollProgressBar />

        {/* Header */}
        <Header onOpenContactModal={handleOpenContactModal} />

        {/* Main Content Journey */}
        <main id="main-content" className="flex-1">
          
          {/* 1. Hero Section: Authority + Real Photography + Clarity */}
          <Hero onOpenContactModal={handleOpenContactModal} />

          {/* 2. Positioning Statement: Core Value & Institutional Principles */}
          <PositioningStatement />

          {/* 3. About the Office: History, Philosophy, Local Roots */}
          <AboutSection />

          {/* 4. Practice Areas: Confirmed Legal Practices + Detail Drawer */}
          <PracticeAreasSection onOpenContactModal={handleOpenContactModal} />

          {/* 5. Lawyer Profile: Verified Credentials of Dr. Isaac Cassol Antunes */}
          <LawyerProfile onOpenContactModal={handleOpenContactModal} />

          {/* 6. Methodology: How We Work (4 Stages, Anxiety Reduction) */}
          <MethodologySection onOpenContactModal={handleOpenContactModal} />

          {/* 7. Demarketing & Qualification: For Whom We Work vs Out of Scope */}
          <DemarketingNotice />

          {/* 8. Editorial Content & Knowledge: SEO & Thought Leadership */}
          <ArticlesSection />

          {/* 9. Contact & Local Office: Address, Map, Secure Form */}
          <ContactSection initialSubject={contactContext} />

        </main>

        {/* Footer */}
        <Footer 
          onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
          onOpenContactModal={handleOpenContactModal}
        />

        {/* Back to Top Smart Pill Button */}
        <ScrollTopButton />

        {/* Floating Discreet WhatsApp Circular Button in Imperial Navy & Aged Gold */}
        <aside 
          className="fixed bottom-6 right-6 z-30" 
          aria-label="Atalho de atendimento rápido"
        >
          <button
            onClick={() => handleOpenContactModal('Botão Flutuante de Atendimento')}
            className="group w-14 h-14 rounded-full bg-[#0A1324] text-[#FAF6EE] shadow-[0_12px_28px_rgba(10,19,36,0.4)] hover:bg-[#16294C] active:scale-95 transition-all duration-300 flex items-center justify-center border border-[#C5A059]/60 hover:border-[#DEC082] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2"
            aria-label="Iniciar atendimento com o escritório"
            title="Falar com a Cassol Advocacia"
          >
            <div className="relative flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-[#DEC082] group-hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DEC082] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C5A059] border-2 border-[#0A1324]"></span>
              </span>
            </div>
          </button>
        </aside>

        {/* Interactive Contact & Consultation Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          initialContext={contactContext}
        />

        {/* Privacy Policy Modal (LGPD Compliant) */}
        <PrivacyPolicyModal
          isOpen={isPrivacyModalOpen}
          onClose={() => setIsPrivacyModalOpen(false)}
        />

      </div>
    </SmoothScroll>
  );
}

export default App;
