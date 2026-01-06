import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const MotionSection = motion.section as any;
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <MotionSection 
      className="py-24 bg-deepBlack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <MotionH2 
          className="text-3xl font-serif text-ivory text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          FAQ
        </MotionH2>

        <div className="space-y-2">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <MotionDiv 
                key={index} 
                className="border-b border-white/10"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                }}
              >
                <button 
                  className="w-full py-6 flex items-center justify-between text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-medium transition-colors ${isOpen ? 'text-gold' : 'text-ivory group-hover:text-gold/80'}`}>
                    {faq.question}
                  </span>
                  <span className={`transition-colors ${isOpen ? 'text-gold' : 'text-white/30'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-white/60 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};