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
import { QuizModal } from './components/QuizModal'; // Changed from RegistrationModal
import { MediaHub } from './components/MediaHub';
import { SocialProof } from './components/SocialProof';
import { LeadMagnet } from './components/LeadMagnet';
import { Services } from './components/Services';
import { NetworkingMap } from './components/NetworkingMap';
import { Testimonials } from './components/Testimonials';
import { KnowledgeBase } from './components/KnowledgeBase';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // We keep selectedTariff logic if needed for QuizModal pre-fill, though QuizModal is more generic now
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
        <Services />
        <NetworkingMap />
        <MediaHub />
        <Methodology />
        <Program />
        <Testimonials />
        <Pricing onSelectTariff={handleOpenModal} />
        <KnowledgeBase />
        <FAQ />
        <LeadMagnet />
      </main>

      <Footer />

      {/* Replaced RegistrationModal with QuizModal */}
      <QuizModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;