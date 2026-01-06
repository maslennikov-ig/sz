import React from 'react';
import { motion } from 'framer-motion';
import { METHODOLOGY_STEPS } from '../constants';

const MotionSection = motion.section as any;
const MotionDiv = motion.div as any;

export const Methodology: React.FC = () => {
  return (
    <MotionSection 
      id="technology" 
      className="py-24 bg-graphite"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <MotionDiv 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4">Технология мероприятия</h2>
            <p className="text-white/50 max-w-md">Модерируемый процесс создания деловых связей, исключающий случайности.</p>
          </MotionDiv>
          <MotionDiv 
            className="hidden md:block w-32 h-[1px] bg-white/10 mb-2"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: 128, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step, index) => (
            <MotionDiv 
              key={index} 
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="h-full bg-deepBlack p-8 border-t border-white/10 hover:border-gold transition-colors duration-500">
                <div className="mb-6 text-gold opacity-50 group-hover:opacity-100 transition-opacity">
                   <step.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-ivory mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">{step.description}</p>
              </div>
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};