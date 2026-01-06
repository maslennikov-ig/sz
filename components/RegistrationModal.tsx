import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './Button';
import { RegistrationFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTariff: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, selectedTariff }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    niche: '',
    social: '',
    phone: '',
    tariff: selectedTariff
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<RegistrationFormData>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData(prev => ({ ...prev, tariff: selectedTariff }));
    } else {
      document.body.style.overflow = 'unset';
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedTariff]);

  const validate = () => {
    const newErrors: Partial<RegistrationFormData> = {};
    if (!formData.firstName) newErrors.firstName = "Обязательное поле";
    if (!formData.lastName) newErrors.lastName = "Обязательное поле";
    if (!formData.phone) newErrors.phone = "Обязательное поле";
    if (!formData.social) newErrors.social = "Обязательное поле";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Here you would typically send data to Google Sheets/Backend
      console.log('Form Data:', formData);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-graphite border border-white/10 p-8 shadow-2xl overflow-hidden animate-fadeIn">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-serif text-ivory">Оплата прошла успешно!</h3>
            <p className="text-white/60">
              Билет отправлен на вашу почту.<br/>
              Менеджер свяжется с вами в течение 15 минут.
            </p>
            <Button onClick={onClose} className="mt-6">Закрыть</Button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-serif text-ivory mb-2">Регистрация</h3>
            <p className="text-white/40 text-sm mb-6">Заполните данные для бронирования места</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-white/40">Имя</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-deepBlack border border-white/10 px-4 py-3 text-ivory focus:border-gold/50 focus:outline-none transition-colors"
                  />
                  {errors.firstName && <span className="text-red-400 text-xs">{errors.firstName}</span>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-white/40">Фамилия</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-deepBlack border border-white/10 px-4 py-3 text-ivory focus:border-gold/50 focus:outline-none transition-colors"
                  />
                  {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-white/40">Ниша / Бизнес</label>
                <input 
                  type="text" 
                  value={formData.niche}
                  onChange={e => setFormData({...formData, niche: e.target.value})}
                  className="w-full bg-deepBlack border border-white/10 px-4 py-3 text-ivory focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="Например: Недвижимость, IT"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-white/40">Instagram / Telegram</label>
                <input 
                  type="text" 
                  value={formData.social}
                  onChange={e => setFormData({...formData, social: e.target.value})}
                  className="w-full bg-deepBlack border border-white/10 px-4 py-3 text-ivory focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="@username"
                />
                {errors.social && <span className="text-red-400 text-xs">{errors.social}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-white/40">Телефон</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-deepBlack border border-white/10 px-4 py-3 text-ivory focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="+7 (999) 000-00-00"
                />
                {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
              </div>

              <div className="pt-4">
                <Button fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Обработка...' : `Оплатить ${formData.tariff === 'vip' ? '50 000 ₽' : '15 000 ₽'}`}
                </Button>
                <p className="text-center text-white/20 text-xs mt-3">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};