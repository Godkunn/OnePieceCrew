import { motion } from 'motion/react';
import { Zap, Flame, Wind, Droplets } from 'lucide-react';

const FRUITS = [
  {
    name: "Gomu Gomu no Mi",
    type: "Paramecia (Mythical Zoan)",
    user: "Monkey D. Luffy",
    description: "Grants the user a rubber-like body and the powers of the Sun God Nika.",
    icon: <Zap className="text-yellow-500" />,
    color: "from-purple-500/20 to-red-500/20"
  },
  {
    name: "Mera Mera no Mi",
    type: "Logia",
    user: "Sabo (formerly Ace)",
    description: "Allows the user to create, control, and transform into fire at will.",
    icon: <Flame className="text-orange-500" />,
    color: "from-orange-500/20 to-red-600/20"
  },
  {
    name: "Ope Ope no Mi",
    type: "Paramecia",
    user: "Trafalgar D. Water Law",
    description: "Allows the user to create a spherical space where they can manipulate anything.",
    icon: <Wind className="text-blue-400" />,
    color: "from-blue-500/20 to-cyan-400/20"
  },
  {
    name: "Uo Uo no Mi",
    type: "Mythical Zoan",
    user: "Kaido",
    description: "Allows the user to transform into a massive Azure Dragon.",
    icon: <Droplets className="text-blue-600" />,
    color: "from-blue-900/20 to-indigo-600/20"
  }
];

export default function DevilFruitEncyclopedia() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Fruit <span className="text-purple-500">Encyclopedia</span>
        </h2>
        <p className="text-white/40 font-mono mt-4 uppercase tracking-widest text-sm">
          Mystical fruits of the Grand Line
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FRUITS.map((fruit, index) => (
          <motion.div
            key={fruit.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${fruit.color} backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {fruit.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1 rounded-full">
                {fruit.type}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase mb-2 group-hover:text-purple-400 transition-colors">
              {fruit.name}
            </h3>
            <p className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4">
              User: {fruit.user}
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-mono">
              {fruit.description}
            </p>

            {/* Decorative Glow */}
            <div className="absolute -inset-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
