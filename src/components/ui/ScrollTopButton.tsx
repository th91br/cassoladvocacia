import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setIsVisible(scrollY > 450);
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.round((scrollY / docHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 right-6 z-30"
        >
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao início da página"
            title="Voltar ao início"
            className="group flex items-center space-x-2 h-10 px-3 rounded-full bg-navy-950/90 hover:bg-navy-900 text-white shadow-card border border-white/15 backdrop-blur-md transition-all duration-300 active:scale-95 hover:shadow-elevation focus:outline-none focus:ring-2 focus:ring-cassol-blue"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-white transition-transform group-hover:-translate-y-0.5" />
            </div>
            <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors">
              {scrollProgress}%
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTopButton;
