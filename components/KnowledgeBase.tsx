import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ArticleModal } from './ArticleModal';
import { ARTICLES_CONTENT } from '../articlesContent';

// Enhance content with image paths
const ARTICLES = ARTICLES_CONTENT.map((article, i) => ({
  ...article,
  image: i === 0 ? "/images/articles/strategy.svg" : 
         i === 1 ? "/images/articles/investment.svg" : 
         "/images/articles/networking.svg"
}));

export const KnowledgeBase: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  return (
    <section className="py-24 bg-deepBlack border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-ivory">База знаний</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="https://t.me/AZ_networking" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-gold hover:text-white transition-colors text-sm uppercase tracking-wider">
              Все материалы <ArrowUpRight size={16} />
            </a>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ARTICLES.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <button 
                onClick={() => setSelectedArticle(article)}
                className="block group text-left w-full"
              >
                <div className="aspect-video bg-[#15191E] rounded-lg mb-6 overflow-hidden relative border border-white/5 group-hover:border-gold/30 transition-colors">
                   <img src={article.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/50 to-transparent"></div>
                   <div className="absolute top-4 left-4 bg-deepBlack/90 backdrop-blur px-3 py-1 text-xs text-gold uppercase tracking-wider rounded border border-white/10 shadow-lg">
                      {article.tag}
                   </div>
                </div>
                <h3 className="text-xl text-ivory font-serif group-hover:text-gold transition-colors mb-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-white/40 text-sm">{article.date}</p>
              </button>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="https://t.me/AZ_networking" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
              Все материалы <ArrowUpRight size={16} />
            </a>
        </div>
      </div>

      <ArticleModal 
        isOpen={!!selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
        article={selectedArticle} 
      />
    </section>
  );
};