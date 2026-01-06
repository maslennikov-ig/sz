import { PricingTier, TimelineItem, FaqItem } from './types';
import { Layers, Users, RefreshCw, MessageCircle } from 'lucide-react';

export const NAVIGATION_LINKS = [
  { label: 'О личности', href: '#bio' },
  { label: 'Технология', href: '#technology' },
  { label: 'Программа', href: '#program' },
  { label: 'Тарифы', href: '#pricing' },
];

export const PAIN_POINTS = [
  {
    id: 1,
    text: "Много контактов в телефоне, но не к кому обратиться по стратегии?",
    icon: Users
  },
  {
    id: 2,
    text: "Нетворкинг превращается в бесполезный обмен визитками?",
    icon: Layers
  },
  {
    id: 3,
    text: "Нужен выход на партнеров уровня Club 500, но нет точки входа?",
    icon: RefreshCw
  }
];

export const METHODOLOGY_STEPS = [
  {
    title: "Умная рассадка",
    description: "Рассадка участников по оборотам бизнеса и интересам для максимальной релевантности.",
    icon: Users
  },
  {
    title: "Управляемый диалог",
    description: "Модерируемые вопросы для глубины обсуждения. Говорим про цели и стратегии, а не про погоду.",
    icon: MessageCircle
  },
  {
    title: "Ротация",
    description: "Смена столов по таймеру. Динамика, позволяющая охватить максимум полезных контактов.",
    icon: RefreshCw
  },
  {
    title: "Интеграция",
    description: "Добавление в закрытый чат участников для продолжения коммуникации после ивента.",
    icon: Layers
  }
];

export const TIMELINE: TimelineItem[] = [
  { time: "17:00", title: "Сбор гостей", description: "Welcome drink, легкий джаз, знакомство." },
  { time: "18:00", title: "Контентная часть", description: "Спич Александра Жигилия: «Стратегия 2025»." },
  { time: "19:00", title: "Практика: Нетворкинг", description: "3 раунда управляемых знакомств." },
  { time: "21:00", title: "Афтерпати", description: "Неформальное общение и ужин (для VIP)." }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '15 000 ₽',
    features: [
      'Участие в мероприятии',
      'Доступ в общий чат участников',
      'Welcome drink',
      'Фотоотчет'
    ],
    isVip: false
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '50 000 ₽',
    features: [
      'Всё, что в тарифе Standard',
      'Места в первом ряду / VIP-стол',
      'Закрытый ужин с Александром',
      'Личный разбор запроса',
      'Отдельный VIP чат'
    ],
    isVip: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Какой дресс-код?",
    answer: "Cocktail или Smart Casual. Мы просим воздержаться от спортивной одежды. Элегантность приветствуется."
  },
  {
    question: "Можно ли вернуть билет?",
    answer: "Возврат возможен не позднее чем за 72 часа до начала мероприятия. Комиссия платежной системы не возвращается."
  },
  {
    question: "Есть ли парковка?",
    answer: "Да, на территории площадки действует охраняемый паркинг. Для VIP-гостей место бронируется автоматически."
  },
  {
    question: "Как попасть в закрытый чат?",
    answer: "Ссылка на чат придет вам на почту и в Telegram в день мероприятия после регистрации."
  }
];

// Updated images with specific URLs requested
export const IMAGES = {
  // A high-quality abstract dark luxury background for the Hero section
  hero: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", 
  // The specific RBC photo for Alexander
  bio: "https://pics.rbc.ru/v2_companies_s3/resized/550xH/media/experts_profile_photos/cf9212c5-2834-41cb-a874-ff833b6808a2.jpg",   
  backgroundTexture: "https://www.transparenttextures.com/patterns/cubes.png"
};