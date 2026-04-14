import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WantedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WantedModal({ isOpen, onClose }: WantedModalProps) {
  const handleJoin = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ffd700', '#000000']
    });
    setTimeout(onClose, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-md bg-[#f4e4bc] p-4 sm:p-8 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[8px] sm:border-[12px] border-[#d4c49c] overflow-y-auto max-h-[90vh]"
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')]" />
            
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-black/40 hover:text-black transition-colors z-20"
            >
              <X size={20} />
            </button>

            <div className="text-center space-y-4 sm:space-y-6 relative z-10">
              <h2 className="text-4xl sm:text-6xl font-black text-[#4a3a2a] uppercase tracking-tighter border-b-4 border-[#4a3a2a] pb-1 sm:pb-2">
                WANTED
              </h2>
              
              <div className="aspect-[3/4] bg-[#4a3a2a]/10 border-2 sm:border-4 border-[#4a3a2a] flex items-center justify-center overflow-hidden mx-auto max-w-[200px] sm:max-w-none">
                <img 
                  src="https://picsum.photos/seed/pirate/400/533" 
                  alt="New Recruit"
                  className="w-full h-full object-cover grayscale sepia"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1">
                <p className="text-[#4a3a2a] font-mono text-[10px] sm:text-xs uppercase font-bold">Dead or Alive</p>
                <h3 className="text-2xl sm:text-4xl font-black text-[#4a3a2a] uppercase tracking-tight">NEW RECRUIT</h3>
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-xl sm:text-3xl font-black text-[#4a3a2a]">
                  <span>฿</span>
                  <span>1,500,000,000-</span>
                </div>
              </div>

              <button
                onClick={handleJoin}
                className="w-full py-3 sm:py-4 bg-[#4a3a2a] text-[#f4e4bc] font-black uppercase tracking-widest hover:bg-red-800 transition-colors text-xs sm:text-base"
              >
                Confirm Bounty
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
