import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  navItems: { name: string; id: string }[];
  onScrollTo: (id: string) => void;
  onJoinCrew: () => void;
}

export default function Navbar({ navItems, onScrollTo, onJoinCrew }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    onScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
              onClick={() => handleScroll(item.id)}
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
            onClick={onJoinCrew}
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
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleScroll(item.id)}
              className="text-4xl font-black text-white uppercase tracking-tighter hover:text-red-600 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onJoinCrew();
              setIsMobileMenuOpen(false);
            }}
            className="mt-8 px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest rounded-full"
          >
            Join the Crew
          </button>
        </motion.div>
      )}
    </>
  );
}
