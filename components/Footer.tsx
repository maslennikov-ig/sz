import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LegalModal } from './LegalModal';
import { PRIVACY_POLICY, OFFER_AGREEMENT } from '../legalText';

// Using direct motion component to avoid 'as any' if possible, or keeping it if environment requires.
const MotionFooter = motion.footer as any;

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'offer' | null>(null);

  return (
    <MotionFooter 
      className="bg-graphite pt-16 pb-8 border-t border-white/5 text-white/40 text-sm font-light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          
          {/* Logo & Description - Full width on mobile (col-span-2), half on desktop */}
          <div className="col-span-2 md:col-span-2">
             <div className="flex items-center gap-2 mb-6 text-ivory">
                <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center text-deepBlack font-serif font-bold">AZ</div>
                <span className="font-serif tracking-widest uppercase text-xs">Alexander Zhigiliy</span>
             </div>
             <p className="max-w-xs leading-relaxed">
               Авторская технология построения стратегического окружения от вице-президента CLUB 500.
             </p>
          </div>

          {/* Navigation - 1 column on mobile */}
          <div>
            <h4 className="text-ivory uppercase tracking-widest text-xs mb-4 font-semibold">Навигация</h4>
            <ul className="space-y-3">
              <li><a href="#bio" className="hover:text-gold transition-colors">Об авторе</a></li>
              <li><a href="#technology" className="hover:text-gold transition-colors">Технология</a></li>
              <li><a href="#program" className="hover:text-gold transition-colors">Программа</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Тарифы</a></li>
            </ul>
          </div>

          {/* Contacts - 1 column on mobile */}
          <div>
            <h4 className="text-ivory uppercase tracking-widest text-xs mb-4 font-semibold">Контакты</h4>
            <ul className="space-y-3">
              <li>IP Zhigiliy A.P.</li>
              <li>INN 782064027467</li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Александр Жигилий. Все права защищены.</p>
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition-colors text-left"
            >
              Политика конфиденциальности
            </button>
            <button 
              onClick={() => setActiveModal('offer')}
              className="hover:text-white transition-colors text-left"
            >
              Оферта
            </button>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)}
        title="Политика конфиденциальности"
        content={PRIVACY_POLICY}
      />

      <LegalModal 
        isOpen={activeModal === 'offer'} 
        onClose={() => setActiveModal(null)}
        title="Публичная оферта"
        content={OFFER_AGREEMENT}
      />
    </MotionFooter>
  );
};