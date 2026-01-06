import React from 'react';
import { PAIN_POINTS } from '../constants';
import { FadeIn } from './FadeIn';

export const Problems: React.FC = () => {
  return (
    <section className="py-24 bg-graphite relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-serif text-ivory mb-4">
              Почему традиционный нетворкинг не работает?
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point, index) => (
            <FadeIn 
              key={point.id} 
              delay={index * 0.1}
              className="h-full"
            >
              <div className="h-full bg-deepBlack p-8 border border-white/5 hover:border-gold/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                  <point.icon strokeWidth={1.5} />
                </div>
                <p className="text-lg font-light leading-relaxed text-white/80">
                  {point.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};