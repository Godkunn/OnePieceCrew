/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import LiveShow from './components/LiveShow';
import MerchSection from './components/MerchSection';
import CharacterExplorer from './components/CharacterExplorer';
import DevilFruitEncyclopedia from './components/DevilFruitEncyclopedia';
import LogPose from './components/LogPose';
import HakiEffect from './components/HakiEffect';
import WantedModal from './components/WantedModal';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Twitter, Instagram, Mail, Menu, X } from 'lucide-react';
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6 md:py-8 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-xl md:text-2xl font-black text-white tracking-tighter">ONE<span className="text-red-600">PIECE</span></span>
        </motion.div>
        
        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex gap-8 pointer-events-auto bg-black/20 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10"
        >
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </motion.div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsWantedModalOpen(true)}
            className="hidden sm:block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer"
          >
            Join the Crew
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-red-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setIsWantedModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="mt-8 px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest rounded-full"
            >
              Join the Crew
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
      <footer className="py-24 px-4 border-t border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-black text-white uppercase mb-6">Grand Line <br />Explorer</h2>
            <p className="text-white/40 max-w-md font-mono text-sm leading-relaxed">
              The ultimate destination for every pirate seeking the One Piece. 
              Stay updated with the latest episodes, exclusive merchandise, and 
              the legend of the Pirate King.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About the Series', 'Character Profiles', 'World Map', 'Community'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-yellow-500 transition-colors text-sm uppercase font-mono">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Github, Twitter, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2024 Eiichiro Oda / Shueisha, Toei Animation. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono text-white/20 uppercase tracking-widest hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-white/20 uppercase tracking-widest hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

