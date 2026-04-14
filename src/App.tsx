/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, lazy, Suspense } from 'react';

const ThreeScene = lazy(() => import('./components/effects/ThreeScene'));
const Hero = lazy(() => import('./components/sections/Hero'));
const LiveShow = lazy(() => import('./components/sections/LiveShow'));
const MerchSection = lazy(() => import('./components/sections/MerchSection'));
const CharacterExplorer = lazy(() => import('./components/sections/CharacterExplorer'));
const DevilFruitEncyclopedia = lazy(() => import('./components/sections/DevilFruitEncyclopedia'));
const LogPose = lazy(() => import('./components/layout/LogPose'));
const Navbar = lazy(() => import('./components/layout/Navbar'));
const Footer = lazy(() => import('./components/layout/Footer'));
const HakiEffect = lazy(() => import('./components/effects/HakiEffect'));
const WantedModal = lazy(() => import('./components/modals/WantedModal'));

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
    <Suspense fallback={<div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-mono uppercase tracking-[0.5em] animate-pulse">Loading Grand Line...</div>}>
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
    </Suspense>
  );
}

