import React from 'react';
import { motion } from 'framer-motion';
import { PAIN_POINTS } from '../constants';

const MotionSection = motion.section as any;
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;

export const Problems: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <MotionSection 
      className="py-24 bg-graphite relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <MotionH2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-ivory mb-4">
            Почему традиционный нетворкинг не работает?
          </MotionH2>
          <MotionDiv variants={itemVariants} className="w-24 h-0.5 bg-gold mx-auto"></MotionDiv>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point) => (
            <MotionDiv 
              key={point.id} 
              variants={itemVariants}
              className="bg-deepBlack p-8 border border-white/5 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                <point.icon strokeWidth={1.5} />
              </div>
              <p className="text-lg font-light leading-relaxed text-white/80">
                {point.text}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};