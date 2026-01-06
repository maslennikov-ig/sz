import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';
import { FadeIn } from './FadeIn';

export const Methodology: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-graphite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4">Технология мероприятия</h2>
            <p className="text-white/50 max-w-md">Модерируемый процесс создания деловых связей, исключающий случайности.</p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="hidden md:block">
            <div className="w-32 h-[1px] bg-white/10 mb-2"></div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.15}
              className="relative group h-full"
            >
              <div className="h-full bg-deepBlack p-8 border-t border-white/10 hover:border-gold transition-colors duration-500">
                <div className="mb-6 text-gold opacity-50 group-hover:opacity-100 transition-opacity">
                   <step.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-ivory mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">{step.description}</p>
              </div>
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};