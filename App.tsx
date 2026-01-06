import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Bio } from './components/Bio';
import { Methodology } from './components/Methodology';
import { Program } from './components/Program';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { MediaHub } from './components/MediaHub';
import { SocialProof } from './components/SocialProof';
import { LeadMagnet } from './components/LeadMagnet';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState('standard');

  const handleOpenModal = (tariff = 'standard') => {
    setSelectedTariff(tariff);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-deepBlack font-sans text-ivory selection:bg-gold selection:text-deepBlack">
      <Header onOpenModal={() => handleOpenModal('standard')} />
      
      <main>
        <Hero onOpenModal={() => handleOpenModal('standard')} />
        <SocialProof />
        <Problems />
        <Bio />
        <MediaHub />
        <Methodology />
        <Program />
        <Pricing onSelectTariff={handleOpenModal} />
        <FAQ />
        <LeadMagnet />
      </main>

      <Footer />

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedTariff={selectedTariff}
      />
    </div>
  );
};

export default App;