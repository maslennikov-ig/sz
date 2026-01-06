import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const LeadMagnet: React.FC = () => {
  const handleOpen = () => {
    window.open('/checklist.html', '_blank');
  };

  return (
    <section className="py-24 bg-deepBlack">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="relative bg-gradient-to-r from-graphite to-deepBlack border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden group hover:border-gold/30 transition-colors duration-500">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Icon / Visual */}
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                <BookOpen size={40} className="text-gold" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                  Бесплатно
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-ivory mb-2">
                  Гайд: «Путь в Club 500»
                </h3>
                <p className="text-white/60 font-light">
                  Подробный разбор критериев, этапов отбора и советы по вступлению в крупнейшее сообщество предпринимателей.
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0 text-center">
                <Button onClick={handleOpen} className="flex items-center gap-2 pl-6 pr-8">
                  <ExternalLink size={18} />
                  <span>Открыть гайд</span>
                </Button>
                <p className="text-white/20 text-[10px] mt-2 italic uppercase tracking-widest">Digital Format</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};