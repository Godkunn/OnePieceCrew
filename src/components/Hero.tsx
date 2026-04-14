import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Anchor, Ship, Compass } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 left-10 text-yellow-500/20 pointer-events-none"
      >
        <Anchor size={300} strokeWidth={0.5} />
      </motion.div>
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 text-blue-500/20 pointer-events-none"
      >
        <Ship size={400} strokeWidth={0.5} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center w-full max-w-4xl mx-auto"
      >
        <span className="text-yellow-500 font-mono tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-sm mb-4 block">
          The Great Pirate Era
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black text-white uppercase leading-[0.9] tracking-tighter mb-6">
          Grand <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
            Line
          </span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-8 md:mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('anime')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-bold rounded-full flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] transition-all cursor-pointer text-sm md:text-base"
          >
            <Ship size={20} />
            SET SAIL
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('merch')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer text-sm md:text-base"
          >
            EXPLORE MERCH
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Scroll to Navigate</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-yellow-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
