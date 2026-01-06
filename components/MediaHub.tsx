import React from 'react';
import { Send, Play } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

export const MediaHub: React.FC = () => {
  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--background-image-noise)] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              Live Ecosystem
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory leading-tight">
              Следите за мыслями <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">в реальном времени</span>
            </h2>
            <p className="text-white/60 text-lg font-light max-w-md">
              Эксклюзивные инсайты, разборы бизнес-кейсов и закулисье Club 500 в моем Telegram-канале.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4">
            <a href="https://t.me/AZ_networking" target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-3 px-8">
                <Send size={18} />
                <span>Читать в Telegram</span>
                </Button>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-gold/50 rounded-sm text-ivory transition-all bg-white/5 hover:bg-white/10">
              <Play size={18} className="text-gold group-hover:scale-110 transition-transform" />
              <span>Смотреть YouTube</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.4} className="pt-8 border-t border-white/10 flex gap-12">
            <div>
              <div className="text-2xl font-serif text-gold">25k+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Подписчиков</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-gold">100+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Эфиров</div>
            </div>
          </FadeIn>
        </div>

        {/* Right: Visual Mockup */}
        <FadeIn direction="left" delay={0.3} className="relative flex justify-center lg:justify-end">
            {/* Abstract Device Frame */}
            <div className="relative w-[300px] h-[600px] bg-deepBlack border-4 border-white/10 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
                {/* Screen Header */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent z-20 p-6 flex justify-between items-start">
                    <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto"></div>
                </div>
                
                {/* Content Area (Mock Chat) */}
                <div className="absolute inset-0 bg-[#15191E] flex flex-col justify-end p-4 space-y-4">
                    {/* Message 1 */}
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 backdrop-blur-sm transform translate-x-[-10px]">
                        <p className="text-xs text-gold/80 mb-1">AZ_networking</p>
                        <p className="text-sm text-ivory/80 leading-relaxed">
                            Стратегия — это не план на бумаге. Это умение принимать решения в условиях неопределенности. Сегодня разобрали кейс на 100 млн...
                        </p>
                    </div>
                    {/* Message 2 */}
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 backdrop-blur-sm">
                        <div className="h-32 bg-white/10 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden group">
                             <div className="absolute inset-0 bg-gold/20 mix-blend-overlay"></div>
                             <Play className="text-ivory opacity-50" />
                        </div>
                        <p className="text-sm text-ivory/80">
                            Новый выпуск: «5 Капиталов предпринимателя». Ссылка ниже 👇
                        </p>
                    </div>
                    
                    {/* Button */}
                    <div className="bg-gold text-deepBlack text-center py-3 rounded-xl font-bold text-sm mt-2">
                        Подписаться
                    </div>
                </div>
            </div>

            {/* Decorative Elements behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -z-10"></div>
        </FadeIn>
      </div>
    </section>
  );
};