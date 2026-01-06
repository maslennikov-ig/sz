import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

const CAREER_STEPS = [
  { year: "2011", title: "Старт бизнеса", desc: "Основание торговой компании. Первые шаги в реальном секторе." },
  { year: "2018", title: "Club 500", desc: "Вступление в клуб. Формирование круга сильных." },
  { year: "2021", title: "Вице-президент", desc: "Назначение на должность VP по нетворкингу." },
  { year: "2025", title: "Стратегия", desc: "Запуск авторской методологии построения связей." }
];

export const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-24 bg-deepBlack relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-gold/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden bg-graphite rounded-sm shadow-2xl border border-white/5">
                <motion.img 
                  src="/alexander.jpg" 
                  alt="Александр Жигилий" 
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
                />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
              </div>
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

        {/* Timeline Section */}
        <FadeIn delay={0.2}>
          <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl font-serif text-ivory mb-12">Путь предпринимателя</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Horizontal Line (Desktop) */}
              <div className="hidden md:block absolute top-[15px] left-0 w-full h-[1px] bg-white/10"></div>
              
              {CAREER_STEPS.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Dot */}
                  <div className="w-8 h-8 bg-deepBlack border border-gold rounded-full flex items-center justify-center absolute -top-[4px] md:-top-[15px] left-0 md:left-0 z-10 transition-colors group-hover:bg-gold">
                    <div className="w-2 h-2 bg-gold rounded-full group-hover:bg-deepBlack"></div>
                  </div>
                  
                  <div className="pl-12 md:pl-0 md:pt-12">
                    <div className="text-gold font-serif text-3xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{step.year}</div>
                    <h4 className="text-ivory font-medium mb-2">{step.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};