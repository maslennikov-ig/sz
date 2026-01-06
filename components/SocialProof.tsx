import React from 'react';
import { FadeIn } from './FadeIn';

const LOGOS = [
  { name: "CLUB 500", text: "CLUB 500" },
  { name: "BC Partner", text: "Business Community" },
  { name: "Invest Group", text: "Global Invest" },
  { name: "Strategy Inc", text: "Strategy Inc." },
  { name: "Media Holding", text: "Prime Media" },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-deepBlack">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/20 text-xs uppercase tracking-widest mb-8">
          Партнеры и клиенты
        </p>
        <FadeIn delay={0.2} className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
          {LOGOS.map((logo, i) => (
            <div 
              key={i} 
              className="group cursor-default transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-105"
            >
              {/* Placeholder for Logo - Text representation for now */}
              <span className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">
                {logo.text}
              </span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};