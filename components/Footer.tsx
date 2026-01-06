import React from 'react';
import { motion } from 'framer-motion';

const MotionFooter = motion.footer as any;

export const Footer: React.FC = () => {
  return (
    <MotionFooter 
      className="bg-graphite pt-16 pb-8 border-t border-white/5 text-white/40 text-sm font-light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6 text-ivory">
                <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center text-deepBlack font-serif font-bold">AZ</div>
                <span className="font-serif tracking-widest uppercase text-xs">Alexander Zhigiliy</span>
             </div>
             <p className="max-w-xs">
               Авторская технология построения стратегического окружения от вице-президента CLUB 500.
             </p>
          </div>

          <div>
            <h4 className="text-ivory uppercase tracking-widest text-xs mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#bio" className="hover:text-gold transition-colors">Об авторе</a></li>
              <li><a href="#technology" className="hover:text-gold transition-colors">Технология</a></li>
              <li><a href="#program" className="hover:text-gold transition-colors">Программа</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors">Тарифы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ivory uppercase tracking-widest text-xs mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li>IP Zhigiliy A.P.</li>
              <li>INN 782064027467</li>
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Александр Жигилий. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
};