import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHARACTERS, Character } from '../data/characters';
import { Search, Shield, Sword, Skull, Anchor, X, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const CATEGORIES = [
  { name: 'Straw Hats', icon: <Anchor size={16} /> },
  { name: 'Yonko', icon: <Star size={16} /> },
  { name: 'Marines', icon: <Shield size={16} /> },
  { name: 'Warlords', icon: <Sword size={16} /> },
  { name: 'Worst Gen', icon: <Skull size={16} /> },
] as const;

export default function CharacterExplorer() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]['name']>('Straw Hats');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter(char => {
      const matchesCategory = char.category === activeCategory;
      const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            char.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
          Character <span className="text-red-600">Database</span>
        </h2>
        <p className="text-white/40 font-mono uppercase tracking-widest text-sm mb-12">
          Explore the legends of the Grand Line
        </p>

        {/* Search & Tabs */}
        <div className="w-full space-y-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
            <input 
              type="text" 
              placeholder="Search characters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                  activeCategory === cat.name 
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]" 
                    : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/10"
                )}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCharacters.map((char) => (
            <motion.div
              key={char.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCharacter(char)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <img 
                src={char.image} 
                alt={char.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest mb-1">{char.role}</p>
                <h3 className="text-sm md:text-base font-black text-white uppercase leading-tight">{char.name}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCharacter(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedCharacter(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto relative">
                <img 
                  src={selectedCharacter.image} 
                  alt={selectedCharacter.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                  {selectedCharacter.role}
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
                  {selectedCharacter.name}
                </h2>
                <div className="text-2xl font-black text-red-600 mb-8 font-mono">
                  {selectedCharacter.bounty}
                </div>

                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 font-mono italic">
                  "{selectedCharacter.description}"
                </p>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Notable Abilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCharacter.abilities.map((ability) => (
                      <span 
                        key={ability}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
