import React, { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const CITIES = [
  { name: "Москва", top: "28%", left: "56%", stats: "HQ", align: "bottom" },
  { name: "Дубай", top: "42%", left: "61%", stats: "Hub", align: "right" },
  { name: "Лондон", top: "26%", left: "49%", stats: "Hub", align: "left" },
  { name: "Нью-Йорк", top: "32%", left: "29%", stats: "Partner", align: "bottom" },
  { name: "Бали", top: "60%", left: "78%", stats: "Community", align: "top" },
];

const CONNECTIONS = [
  { from: CITIES[0], to: CITIES[1] },
  { from: CITIES[0], to: CITIES[2] },
  { from: CITIES[1], to: CITIES[4] },
  { from: CITIES[2], to: CITIES[3] },
];

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
  
    React.useEffect(() => {
      if (isInView) {
        animate(count, value, { duration: 2, ease: "easeOut" });
      }
    }, [isInView, count, value]);
  
    return (
      <span ref={ref}>
        <motion.span>{rounded}</motion.span>{suffix}
      </span>
    );
};

export const NetworkingMap: React.FC = () => {
  return (
    <section className="py-24 bg-deepBlack relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-serif text-ivory">География связей</h2>
                <p className="text-white/50 mt-4 max-w-md">
                    Резиденты и партнеры в 20+ странах мира. Доступ к международному ресурсу и закрытым встречам.
                </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex gap-8 md:gap-12">
                <div>
                    <div className="text-3xl font-serif text-gold">
                        <AnimatedNumber value={20} suffix="+" />
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Стран</div>
                </div>
                <div>
                    <div className="text-3xl font-serif text-gold">
                        <AnimatedNumber value={500} suffix="+" />
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Партнеров</div>
                </div>
            </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative w-full aspect-[1.8/1] md:aspect-[2/1] bg-[#15191E] rounded-2xl border border-white/5 overflow-hidden shadow-2xl group">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10" style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
          }}></div>
          
          {/* World Map SVG */}
          <div className="absolute inset-0 p-4 md:p-8 opacity-40">
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-white/10 stroke-white/5 stroke-1">
               <path d="M150,80 L280,70 L320,180 L250,220 L180,180 Z" />
               <path d="M280,230 L350,230 L320,400 L270,350 Z" />
               <path d="M450,80 L550,70 L530,150 L460,140 Z" />
               <path d="M460,160 L560,160 L580,300 L500,350 L450,250 Z" />
               <path d="M560,70 L800,80 L850,200 T750,250 T650,220 T570,160 Z" />
               <path d="M780,300 L880,300 L860,400 L780,380 Z" />
            </svg>
          </div>

          {/* Arcs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#C5A059" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
            {CONNECTIONS.map((conn, i) => {
                const x1 = parseFloat(conn.from.left) * 10;
                const y1 = parseFloat(conn.from.top) * 5;
                const x2 = parseFloat(conn.to.left) * 10;
                const y2 = parseFloat(conn.to.top) * 5;
                const midX = (x1 + x2) / 2;
                const midY = Math.min(y1, y2) - 50;
                
                return (
                    <motion.path
                        key={i}
                        d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
                        fill="none"
                        stroke="url(#arcGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
                    />
                );
            })}
          </svg>

          {/* Cities */}
          {CITIES.map((city, i) => {
            const getAlignClasses = (align: string) => {
                switch(align) {
                    case 'top': return 'bottom-10 left-1/2 -translate-x-1/2 mb-2';
                    case 'bottom': return 'top-10 left-1/2 -translate-x-1/2 mt-2';
                    case 'left': return 'top-1/2 right-10 -translate-y-1/2 mr-2';
                    case 'right': return 'top-1/2 left-10 -translate-y-1/2 ml-2';
                    default: return 'bottom-10 left-1/2 -translate-x-1/2';
                }
            };

            return (
                <div 
                  key={i} 
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20" 
                  style={{ top: city.top, left: city.left }}
                >
                  <div className="relative flex items-center justify-center w-4 h-4 md:w-8 md:h-8">
                    <div className="absolute w-full h-full bg-gold/20 rounded-full animate-ping"></div>
                    <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 bg-gold rounded-full shadow-[0_0_10px_#C5A059]"></div>
                  </div>
                  
                  <div className={`absolute ${getAlignClasses(city.align || 'top')} bg-deepBlack/90 border border-gold/20 backdrop-blur-md p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none min-w-[120px]`}>
                    <div className="text-gold text-xs font-bold uppercase tracking-wider mb-1">{city.name}</div>
                    <div className="text-white/60 text-[10px]">Статус: <span className="text-white">{city.stats}</span></div>
                  </div>
                </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
};