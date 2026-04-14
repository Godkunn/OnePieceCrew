import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function HakiEffect() {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 1000);
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{
              left: click.x - 20,
              top: click.y - 20,
              position: 'absolute',
            }}
            className="w-10 h-10"
          >
            {/* Haki Lightning Bolts */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: window.innerWidth < 768 ? 20 : 40 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: window.innerWidth < 768 ? '1px' : '2px',
                  backgroundColor: i % 2 === 0 ? '#ff0000' : '#000000',
                  boxShadow: i % 2 === 0 ? '0 0 10px #ff0000' : 'none',
                  transform: `rotate(${i * 45}deg) translateY(${window.innerWidth < 768 ? -10 : -20}px)`,
                  transformOrigin: 'bottom center',
                }}
              />
            ))}
            <div className="absolute inset-0 rounded-full border-2 border-red-600 blur-sm" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
