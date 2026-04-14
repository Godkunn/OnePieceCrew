import { motion, useScroll, useSpring } from 'motion/react';
import { Compass } from 'lucide-react';

export default function LogPose() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      <div className="text-white/20 uppercase font-mono text-[10px] tracking-[0.3em] vertical-rl rotate-180">
        Log Pose
      </div>
      
      <div className="relative w-1 h-48 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute inset-0 bg-gradient-to-b from-yellow-500 via-red-600 to-purple-600"
        />
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="text-yellow-500"
      >
        <Compass size={24} strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}
