import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { PRICING_TIERS } from '../constants';

interface PricingProps {
  onSelectTariff: (tariff: string) => void;
}

const MotionSection = motion.section as any;
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;

export const Pricing: React.FC<PricingProps> = ({ onSelectTariff }) => {
  return (
    <MotionSection 
      id="pricing" 
      className="py-24 bg-graphite"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <MotionH2 
          className="text-3xl md:text-5xl font-serif text-ivory text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          Тарифы участия
        </MotionH2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <MotionDiv 
              key={tier.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }
              }}
              className={`relative p-8 md:p-12 transition-all duration-300 ${
                tier.isVip 
                  ? 'bg-deepBlack border border-gold/30 shadow-[0_0_50px_rgba(197,160,89,0.1)]' 
                  : 'bg-white/5 border border-white/5'
              }`}
            >
              {tier.isVip && (
                <div className="absolute top-0 right-0 bg-gold text-deepBlack text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Рекомендуемый
                </div>
              )}

              <h3 className={`text-2xl font-serif mb-2 ${tier.isVip ? 'text-gold' : 'text-ivory'}`}>
                {tier.name}
              </h3>
              <div className="text-4xl font-light text-ivory mb-8">{tier.price}</div>

              <ul className="space-y-4 mb-10 min-h-[180px]">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-light text-white/80">
                    <Check size={16} className={`mt-1 ${tier.isVip ? 'text-gold' : 'text-white/30'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                fullWidth 
                variant={tier.isVip ? 'primary' : 'outline'}
                onClick={() => onSelectTariff(tier.id)}
              >
                Выбрать тариф
              </Button>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};