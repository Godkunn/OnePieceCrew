import { motion } from 'motion/react';
import { Ship, Anchor, Sword, Map } from 'lucide-react';

const CHARACTERS = [
  {
    name: "Monkey D. Luffy",
    role: "Captain",
    bounty: "฿ 3,000,000,000",
    image: "https://picsum.photos/seed/luffy/600/800",
    color: "from-red-600 to-yellow-500"
  },
  {
    name: "Roronoa Zoro",
    role: "Swordsman",
    bounty: "฿ 1,111,000,000",
    image: "https://picsum.photos/seed/zoro/600/800",
    color: "from-green-600 to-emerald-900"
  },
  {
    name: "Vinsmoke Sanji",
    role: "Cook",
    bounty: "฿ 1,032,000,000",
    image: "https://picsum.photos/seed/sanji/600/800",
    color: "from-yellow-400 to-orange-600"
  }
];

export default function CharacterSection() {
  return (
    <section className="py-12 md:py-24 px-4 max-w-[2000px] mx-auto">
      <div className="flex items-center gap-4 mb-12 md:mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter text-center">
          The <span className="text-red-600">Straw Hat</span> Crew
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {CHARACTERS.map((char, index) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={char.image} 
                alt={char.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${char.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
                <span className="text-xs font-mono text-yellow-500 uppercase tracking-[0.3em] mb-2">{char.role}</span>
                <h3 className="text-3xl font-black text-white uppercase mb-1">{char.name}</h3>
                <p className="text-white/60 font-mono text-sm">{char.bounty}</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:bg-red-600 transition-colors">
              <Sword size={20} className="text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
