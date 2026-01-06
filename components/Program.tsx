import React from 'react';
import { TIMELINE } from '../constants';
import { TimelineItem } from '../types';
import { FadeIn } from './FadeIn';

const TimelineRow: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  return (
    <FadeIn 
      delay={index * 0.1}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Time - Desktop */}
      <div className="hidden md:block w-1/2 px-12 text-right">
        {index % 2 === 0 ? (
          <div className="text-gold font-serif text-2xl">{item.time}</div>
        ) : (
          <div>
            <h3 className="text-xl font-medium mb-1">{item.title}</h3>
            <p className="text-white/50 font-light text-sm">{item.description}</p>
          </div>
        )}
      </div>

      {/* Dot */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-[15px] h-[15px] rounded-full bg-deepBlack border border-gold z-10">
        <div className="absolute inset-0 m-1 rounded-full bg-gold/50"></div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 pl-16 md:px-12 text-left">
        {index % 2 === 0 ? (
          <div>
            <h3 className="text-xl font-medium mb-1">{item.title}</h3>
            <p className="text-white/50 font-light text-sm">{item.description}</p>
          </div>
        ) : (
          <div className="hidden md:block text-gold font-serif text-2xl">{item.time}</div>
        )}
        {/* Mobile Time */}
        <div className="md:hidden text-gold font-serif text-lg mb-1">{item.time}</div>
        <div className="md:hidden">
          <h3 className="text-lg font-medium mb-1">{item.title}</h3>
          <p className="text-white/50 font-light text-sm">{item.description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export const Program: React.FC = () => {
  return (
    <section id="program" className="py-24 bg-deepBlack text-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-gold tracking-widest text-xs uppercase">Таймлайн</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-2">Программа вечера</h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <TimelineRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};