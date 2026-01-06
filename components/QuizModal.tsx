import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './Button';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<any>({});
  const [contacts, setContacts] = useState({ firstName: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleNext = (key: string, value: string) => {
    setData({ ...data, [key]: value });
    setStep(s => s + 1);
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contacts.firstName || !contacts.phone) return; // Simple validation

    setIsSubmitting(true);
    
    const finalData = { 
        ...data, 
        firstName: contacts.firstName, 
        phone: contacts.phone,
        "form-name": "registration" 
    };

    try {
        await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(finalData)
        });
        setStep(4);
    } catch (error) {
        console.error("Submission failed:", error);
        alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-graphite border border-white/10 p-8 relative overflow-hidden shadow-2xl">
        {/* Progress */}
        <div className="absolute top-0 left-0 h-1 bg-white/10 w-full">
          <div 
            className="h-full bg-gold transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="mt-6">
          {step === 1 && (
            <div className="animate-fadeIn">
              <span className="text-gold text-xs uppercase tracking-widest mb-2 block">Шаг 1 из 3</span>
              <h3 className="text-2xl font-serif text-ivory mb-6">Ваш текущий оборот бизнеса?</h3>
              <div className="space-y-3">
                {['До 100 млн руб./год', '100 - 500 млн руб./год', 'Более 500 млн руб./год'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => handleNext('revenue', opt)}
                    className="w-full text-left p-4 border border-white/10 hover:border-gold/50 hover:bg-white/5 text-white transition-all duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fadeIn">
              <span className="text-gold text-xs uppercase tracking-widest mb-2 block">Шаг 2 из 3</span>
              <h3 className="text-2xl font-serif text-ivory mb-6">Ваша главная цель на ивенте?</h3>
              <div className="space-y-3">
                {['Найти бизнес-партнера', 'Привлечь инвестиции', 'Найти ментора / окружение', 'Просто интересно'].map(opt => (
                  <button 
                    key={opt}
                    onClick={() => handleNext('goal', opt)}
                    className="w-full text-left p-4 border border-white/10 hover:border-gold/50 hover:bg-white/5 text-white transition-all duration-300"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fadeIn">
              <span className="text-gold text-xs uppercase tracking-widest mb-2 block">Финал</span>
              <h3 className="text-2xl font-serif text-ivory mb-6">Оставьте контакты для связи</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Имя" 
                    value={contacts.firstName}
                    onChange={(e) => setContacts({...contacts, firstName: e.target.value})}
                    className="w-full bg-deepBlack border border-white/10 p-4 text-white focus:border-gold/50 outline-none transition-colors" 
                    required
                />
                <input 
                    type="tel" 
                    placeholder="Телефон" 
                    value={contacts.phone}
                    onChange={(e) => setContacts({...contacts, phone: e.target.value})}
                    className="w-full bg-deepBlack border border-white/10 p-4 text-white focus:border-gold/50 outline-none transition-colors" 
                    required
                />
                <Button fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Завершить регистрацию'}
                </Button>
                <p className="text-center text-white/20 text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          )}
          
          {step === 4 && (
             <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                    <Check size={32} />
                </div>
                <h3 className="text-2xl font-serif text-ivory mb-2">Заявка принята!</h3>
                <p className="text-white/50">Мы свяжемся с вами с персональным предложением.</p>
                <Button className="mt-8" onClick={onClose}>Закрыть</Button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};