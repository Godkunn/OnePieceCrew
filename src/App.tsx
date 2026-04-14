/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThreeScene from './components/effects/ThreeScene';
import Hero from './components/sections/Hero';
import LiveShow from './components/sections/LiveShow';
import MerchSection from './components/sections/MerchSection';
import CharacterExplorer from './components/sections/CharacterExplorer';
import DevilFruitEncyclopedia from './components/sections/DevilFruitEncyclopedia';
import LogPose from './components/layout/LogPose';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HakiEffect from './components/effects/HakiEffect';
import WantedModal from './components/modals/WantedModal';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isWantedModalOpen, setIsWantedModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Anime', id: 'anime' },
    { name: 'Legends', id: 'legends' },
    { name: 'Fruits', id: 'fruits' },
    { name: 'Merch', id: 'merch' }
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Interactive Effects */}
      <HakiEffect />
      <LogPose />
      <WantedModal 
        isOpen={isWantedModalOpen} 
        onClose={() => setIsWantedModalOpen(false)} 
      />

      {/* 3D Background */}
      <ThreeScene />

      {/* Navigation */}
      <Navbar 
        navItems={navItems} 
        onScrollTo={scrollToSection} 
        onJoinCrew={() => setIsWantedModalOpen(true)} 
      />

      {/* Content Sections */}
      <div className="max-w-[2560px] mx-auto">
        <Hero />
        
        <div id="anime" className="scroll-mt-20">
          <LiveShow />
        </div>

        <div id="legends" className="scroll-mt-20">
          <CharacterExplorer />
        </div>

        <div id="fruits" className="scroll-mt-20">
          <DevilFruitEncyclopedia />
        </div>

        <div id="merch" className="scroll-mt-20">
          <MerchSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

