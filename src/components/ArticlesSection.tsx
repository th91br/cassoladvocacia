import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { articlesData, ArticleItem } from '../data/articlesData';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section 
      id="conteudos" 
      className="py-20 lg:py-28 bg-[#FAF7F1] border-b border-[#DFD5C4] relative overflow-hidden"
      aria-label="Artigos e Conteúdos Informativos Jurídicos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EFE7D8] border border-[#D8C9B0] text-[#0E1A32] text-xs font-bold tracking-[0.12em] uppercase font-sans mb-3.5">
              <BookOpen className="w-3.5 h-3.5 text-[#B69246]" />
              <span>Cadernos de Doutrina &amp; Orientação Prática</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0A1324] font-normal tracking-tight leading-[1.18]">
              Publicações e análises técnicas para decisões empresariais e familiares seguras.
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-[#364050] font-sans leading-relaxed">
              Estudos redigidos com caráter informativo e preventivo sobre jurisprudência trabalhista, contratos, responsabilidade médica e planejamento sucessório.
            </p>
          </div>

          <div className="px-3.5 py-2 rounded-full bg-[#EFE7D8] border border-[#D8C9B0] text-xs text-[#0A1324] font-semibold self-start md:self-auto flex items-center space-x-2 font-mono">
            <BookOpen className="w-3.5 h-3.5 text-[#B69246]" />
            <span>Caráter Informativo • Provimento 205/2021 OAB</span>
          </div>
        </motion.div>

        {/* Articles Grid with Warm Alabaster & Gold Accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {articlesData.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ 
                duration: 0.75, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-[#FCFBF8] border border-[#DFD5C4] border-t-[3px] border-t-[#C5A059] hover:border-[#C5A059] transition-all duration-300 shadow-subtle hover:shadow-card cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-[#687285] mb-4">
                  <span className="font-bold text-[#856520] uppercase tracking-wider">
                    {article.category.split('&')[0]}
                  </span>
                  <span className="flex items-center space-x-1 font-mono">
                    <Clock className="w-3 h-3 text-[#B69246]" />
                    <span>{article.readingTime}</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#0A1324] tracking-tight group-hover:text-[#1E3668] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#3E4656] leading-relaxed line-clamp-3 font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE2D3] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0A1324] group-hover:text-[#1E3668]">
                <span>Ler análise completa</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B69246] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal View */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#0A1324]/75 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedArticle(null)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl bg-[#FAF7F1] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#DFC99B] overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-fade-in">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-[#0A1324] text-[#FAF6EE] relative border-b border-[#C5A059]/30">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[#C8D2E3] mb-3">
                <span className="px-3 py-0.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#DEC082] uppercase font-bold tracking-wider">
                  {selectedArticle.category}
                </span>
                <span className="flex items-center space-x-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{selectedArticle.publishDate}</span>
                </span>
                <span className="flex items-center space-x-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{selectedArticle.readingTime}</span>
                </span>
              </div>

              <h2 id="article-modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight pr-6">
                {selectedArticle.title}
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Lead Excerpt */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FCFBF8] border border-[#DFD5C4] border-l-4 border-l-[#C5A059] text-sm sm:text-base text-[#2C3442] italic leading-relaxed">
                {selectedArticle.excerpt}
              </div>

              {/* Main Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#141821] leading-relaxed font-sans">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FCFBF8] border border-[#DFC99B] space-y-3">
                <h4 className="font-serif text-base font-semibold text-[#0A1324]">
                  Recomendações Preventivas &amp; Pontos de Atenção:
                </h4>
                <ul className="space-y-2.5">
                  {selectedArticle.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-[#2C3442]">
                      <CheckCircle2 className="w-4 h-4 text-[#B69246] mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author & Disclaimer Signature */}
              <div className="pt-6 border-t border-[#DFD5C4] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#4A5363] gap-3">
                <div>
                  <span className="font-bold text-[#0A1324] block">Dr. Isaac Cassol Antunes (OAB/RS 96.196)</span>
                  <span>Cassol Advocacia (OAB/RS 5.950) — Caxias do Sul/RS &amp; Maringá/PR</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-full bg-[#0A1324] text-[#FAF6EE] text-xs font-bold uppercase tracking-wider hover:bg-[#16294C] transition-colors"
                >
                  Concluir Leitura
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
