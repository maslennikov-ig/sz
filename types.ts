export interface PricingTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  isVip?: boolean;
}

export interface TimelineItem {
  time: string;
  title: string;
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  niche: string;
  social: string;
  phone: string;
  tariff: string;
}
