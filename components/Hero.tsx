import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from './Button';
import { IMAGES } from '../constants';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Image - Static & Full Cover */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear scale-105"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        >
           {/* Overlay Gradients for readability */}
           <div className="absolute inset-0 bg-deepBlack/60"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-deepBlack via-deepBlack/80 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent"></div>
        </div>
      </div>
      
      {/* Texture Noise Overlay */}
      <div className="absolute inset-0 bg-noise z-10 pointer-events-none opacity-20 mix-blend-soft-light"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="inline-block border-l-2 border-gold pl-4">
            <p className="text-gold/80 text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              Авторская технология вице-президента CLUB 500
            </p>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory leading-tight drop-shadow-2xl">
            Стратегический <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">нетворкинг</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 font-light font-sans max-w-lg drop-shadow-lg">
            Создай окружение равных. <br/>
            <span className="text-white/50 text-base block mt-2">Связи — это актив, который нужно не искать, а строить.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <Button onClick={onOpenModal} className="text-lg px-10 py-4 shadow-gold/10">
              Забронировать место
            </Button>
            <div className="text-sm font-sans text-white/60 tracking-wide border-l border-white/20 pl-4">
              <span className="block text-ivory font-medium">25 Октября | 17:00</span>
              <span className="block">Four Seasons Hotel, Moscow</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};