import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-24 bg-deepBlack relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-gold/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden bg-graphite rounded-sm shadow-2xl border border-white/5">
              <motion.img 
                src="/alexander.jpg" 
                alt="Александр Жигилий" 
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
              />
              {/* Elegant Inner Border */}
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 -z-10 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gold/5 -z-10 blur-3xl"></div>
          </div>
        </FadeIn>

        <div className="space-y-8">
          <div>
            <FadeIn delay={0.2}>
              <span className="text-gold tracking-widest uppercase text-sm font-semibold block">
                О спикере
              </span>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-serif text-ivory mt-4 mb-6">
                Александр Жигилий
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="space-y-4 font-light text-white/70 leading-relaxed">
            <p>
              Предприниматель с 2011 года. Эксперт по формированию социального капитала, который превращает связи в активы.
            </p>
            <p>
              Как <strong className="text-ivory font-normal">Вице-президент CLUB 500</strong> по нетворкингу, я выстраиваю архитектуру общения для лидеров рынка. Моя методология позволяет находить партнеров и инвесторов не случайно, а системно.
            </p>
          </FadeIn>

          <div className="space-y-4 pt-4 border-t border-white/10">
            {[
              "Вице-президент по нетворкингу бизнес-клуба CLUB 500",
              "Организатор закрытых встреч для топ-менеджмента",
              "Автор методики «Стратегическое окружение»"
            ].map((item, i) => (
              <FadeIn key={i} delay={0.5 + (i * 0.1)} direction="left">
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  <span className="text-ivory">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.8}>
            <div className="bg-white/5 p-6 border-l-2 border-gold mt-8">
              <Quote className="text-gold/50 mb-2" size={24} />
              <p className="text-xl font-serif italic text-white/90">
                «Связи — это актив, который нужно не искать, а строить».
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};