import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: any;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ isOpen, onClose, article }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-graphite border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fadeIn">
        
        {/* Header Image */}
        <div className="h-48 md:h-64 relative bg-deepBlack shrink-0">
           <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-50" />
           <div className="absolute inset-0 bg-gradient-to-t from-graphite to-transparent"></div>
           <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white/60 hover:text-white transition-colors hover:bg-black/80 z-10">
             <X size={24} />
           </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
           <div className="flex items-center gap-4 text-xs text-gold uppercase tracking-widest mb-4">
              <span>{article.tag}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <div className="flex items-center gap-1 text-white/40">
                 <Calendar size={12} />
                 {article.date}
              </div>
           </div>
           
           <h2 className="text-3xl md:text-4xl font-serif text-ivory mb-8 leading-tight">
             {article.title}
           </h2>

           <div className="prose prose-invert prose-gold max-w-none text-white/70 font-light leading-relaxed">
             {article.content}
           </div>
        </div>
      </div>
    </div>
  );
};