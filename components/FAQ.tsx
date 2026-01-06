import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { FadeIn } from './FadeIn';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-deepBlack text-ivory">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif">Частые вопросы</h2>
        </FadeIn>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border border-white/10 bg-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-gold flex-shrink-0" />
                  ) : (
                    <Plus className="text-white/30 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-white/60 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};