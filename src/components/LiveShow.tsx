import { motion } from 'motion/react';
import { Play, Calendar, Clock, Trophy } from 'lucide-react';

const SHOWS = [
  {
    id: 1,
    title: "Egghead Island Arc",
    status: "Active",
    episode: "1115+",
    image: "https://picsum.photos/seed/onepiece1/800/600",
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Wano Country Finale",
    status: "Completed",
    episode: "1088",
    image: "https://picsum.photos/seed/onepiece2/800/600",
    color: "bg-red-600"
  }
];

export default function LiveShow() {
  return (
    <section className="py-12 md:py-24 px-4 max-w-[2000px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Live <span className="text-red-600">Broadcast</span>
          </h2>
          <p className="text-white/60 font-mono mt-2 uppercase tracking-widest text-[10px] md:text-sm">
            Streaming now on the Grand Line
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Calendar size={14} className="text-yellow-500" />
            <span className="text-white text-[10px] md:text-xs font-bold uppercase">Sundays 9:30 AM JST</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {SHOWS.map((show, index) => (
          <motion.div
            key={show.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src={show.image} 
              alt={show.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute top-6 left-6 flex gap-2">
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${show.color}`}>
                {show.status}
              </span>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 text-yellow-500 mb-2">
                <Clock size={14} />
                <span className="text-xs font-mono uppercase tracking-widest">Episode {show.episode}</span>
              </div>
              <h3 className="text-3xl font-black text-white uppercase mb-4">{show.title}</h3>
              <button className="flex items-center gap-2 text-white font-bold text-sm group/btn">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-red-600 transition-colors">
                  <Play size={16} fill="white" />
                </span>
                WATCH NOW
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
