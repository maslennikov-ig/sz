import React from 'react';
import { Play } from 'lucide-react';
import { FadeIn } from './FadeIn';

const TESTIMONIALS = [
  { name: "Михаил Гребенюк", role: "Основатель Resulting", text: "Александр — мастер стратегии. После одной встречи я пересмотрел подход к партнерствам." },
  { name: "Дмитрий Портнягин", role: "Club 500", text: "Человек-система. Если вы хотите построить нетворкинг как актив, вам к нему." },
  { name: "Оскар Хартманн", role: "Инвестор", text: "Уникальное видение социального капитала. Рекомендую." }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-graphite border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-ivory">Отзывы резидентов</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div className="bg-deepBlack p-8 border border-white/5 rounded-2xl h-full flex flex-col hover:border-gold/20 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/10"></div>
                  <div>
                    <h4 className="text-ivory font-medium">{t.name}</h4>
                    <p className="text-gold text-xs uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                
                {/* Voice Message Mockup */}
                <div className="bg-white/5 p-3 rounded-full flex items-center gap-3 mb-6 w-max pr-6 border border-white/5 hover:border-gold/30 transition-colors cursor-pointer group">
                    <button className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-deepBlack shrink-0 group-hover:scale-105 transition-transform">
                        <Play size={14} fill="currentColor" />
                    </button>
                    <div className="flex gap-0.5 h-4 items-center">
                        {[...Array(20)].map((_, j) => (
                            <div key={j} className="w-0.5 bg-white/30 rounded-full" style={{ height: Math.random() * 12 + 4 + 'px' }}></div>
                        ))}
                    </div>
                    <span className="text-xs text-white/40 ml-2">0:45</span>
                </div>

                <p className="text-white/60 text-sm italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};