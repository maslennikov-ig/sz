import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const MotionSection = motion.section as any;
const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;
const MotionSpan = motion.span as any;
const MotionH2 = motion.h2 as any;
const MotionUl = motion.ul as any;

export const Bio: React.FC = () => {
  return (
    <MotionSection 
      id="bio" 
      className="py-24 bg-deepBlack relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-gold/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <MotionDiv 
          className="relative"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <div className="aspect-[4/5] relative overflow-hidden bg-graphite rounded-sm shadow-2xl border border-white/5">
            <MotionImg 
              src={IMAGES.bio} 
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
        </MotionDiv>

        <MotionDiv 
          className="space-y-8"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
          }}
        >
          <div>
            <MotionSpan 
              className="text-gold tracking-widest uppercase text-sm font-semibold block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              О спикере
            </MotionSpan>
            <MotionH2 
              className="text-4xl md:text-5xl font-serif text-ivory mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Александр Жигилий
            </MotionH2>
          </div>

          <MotionDiv 
            className="space-y-4 font-light text-white/70 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>
              Предприниматель с 2011 года. Эксперт по формированию социального капитала, который превращает связи в активы.
            </p>
            <p>
              Как <strong className="text-ivory font-normal">Вице-президент CLUB 500</strong> по нетворкингу, я выстраиваю архитектуру общения для лидеров рынка. Моя методология позволяет находить партнеров и инвесторов не случайно, а системно.
            </p>
          </MotionDiv>

          <MotionUl 
            className="space-y-4 pt-4 border-t border-white/10"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
            }}
          >
            {[
              "Вице-президент по нетворкингу бизнес-клуба CLUB 500",
              "Организатор закрытых встреч для топ-менеджмента",
              "Автор методики «Стратегическое окружение»"
            ].map((item, i) => (
              <MotionDiv 
                key={i} 
                className="flex items-center gap-4"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                <span className="text-ivory">{item}</span>
              </MotionDiv>
            ))}
          </MotionUl>

          <MotionDiv 
            className="bg-white/5 p-6 border-l-2 border-gold mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Quote className="text-gold/50 mb-2" size={24} />
            <p className="text-xl font-serif italic text-white/90">
              «Связи — это актив, который нужно не искать, а строить».
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};