import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NAVIGATION_LINKS } from '../constants';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-deepBlack/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center text-deepBlack font-serif font-bold text-xl">
            AZ
          </div>
          <div className="hidden md:block">
            <p className="text-ivory font-serif leading-none tracking-wide uppercase text-sm">Alexander</p>
            <p className="text-gold font-serif leading-none tracking-wide uppercase text-sm">Zhigiliy</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map(link => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-gold transition-colors uppercase tracking-widest cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant={isScrolled ? "primary" : "outline"} onClick={onOpenModal}>
            Купить билет
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ivory z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-deepBlack z-40 flex flex-col items-center justify-center transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-8 text-center">
          {NAVIGATION_LINKS.map(link => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-serif text-ivory hover:text-gold transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8">
            <Button onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}>
              Купить билет
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};