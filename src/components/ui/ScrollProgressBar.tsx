import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring physics for silky smooth response to both down and up scrolling
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-transparent pointer-events-none"
      role="progressbar"
      aria-label="Progresso da página"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-gradient-to-r from-cassol-blue via-brass-light to-cassol-light shadow-[0_1px_6px_rgba(36,59,128,0.35)]"
      />
    </div>
  );
};

export default ScrollProgressBar;
