import React from 'react';
import { Mic, Briefcase, Users } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

const SERVICES = [
  {
    icon: Mic,
    title: "Спикер",
    desc: "Выступления на форумах и закрытых встречах. Темы: Нетворкинг, Стратегия, Личный бренд.",
    cta: "Скачать райдер"
  },
  {
    icon: Briefcase,
    title: "Стратегия",
    desc: "Личная работа с собственниками. Построение дорожной карты развития бизнеса на 1-3 года.",
    cta: "Подать заявку"
  },
  {
    icon: Users,
    title: "Корпорациям",
    desc: "Тренинги для топ-менеджмента. Обучение команд эффективной коммуникации и продажам.",
    cta: "Обсудить задачу"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-graphite">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-ivory">Форматы работы</h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Моя экспертиза доступна не только в формате открытых мероприятий. Выберите подходящий сценарий взаимодействия.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="h-full bg-deepBlack border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 flex flex-col group">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-serif text-ivory mb-4">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>
                <Button variant="outline" className="w-full text-sm">
                  {service.cta}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};