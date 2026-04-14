import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const MERCH = [
  {
    id: 1,
    name: "Luffy's Straw Hat",
    price: "$49.99",
    rating: 5,
    image: "https://picsum.photos/seed/strawhat/400/400",
    tag: "Replica"
  },
  {
    id: 2,
    name: "Thousand Sunny Model",
    price: "$129.99",
    rating: 4.8,
    image: "https://picsum.photos/seed/ship/400/400",
    tag: "Collector"
  },
  {
    id: 3,
    name: "Zoro's Katana Set",
    price: "$299.99",
    rating: 4.9,
    image: "https://picsum.photos/seed/sword/400/400",
    tag: "Premium"
  },
  {
    id: 4,
    name: "Devil Fruit Replica",
    price: "$39.99",
    rating: 4.5,
    image: "https://picsum.photos/seed/fruit/400/400",
    tag: "Prop"
  }
];

function MerchCard({ item }: { item: typeof MERCH[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[450px] w-full rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative h-64 w-full mb-6 rounded-xl overflow-hidden shadow-2xl"
      >
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-yellow-500 uppercase">
          {item.tag}
        </div>
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black text-white uppercase leading-tight">{item.name}</h3>
          <span className="text-yellow-500 font-mono font-bold">{item.price}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(item.rating) ? "text-yellow-500 fill-yellow-500" : "text-white/20"} 
            />
          ))}
          <span className="text-[10px] text-white/40 ml-2">({item.rating})</span>
        </div>

        <button className="w-full py-3 bg-white text-black font-black uppercase text-xs rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors">
          <ShoppingBag size={14} />
          ADD TO TREASURE
        </button>
      </div>
    </motion.div>
  );
}

export default function MerchSection() {
  return (
    <section className="py-12 md:py-24 px-4 max-w-[2000px] mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Pirate <span className="text-yellow-500">Loot</span>
        </h2>
        <div className="w-16 md:w-24 h-1 bg-red-600 mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 perspective-1000">
        {MERCH.map((item) => (
          <MerchCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase font-mono text-sm tracking-widest">
          View All Merchandise <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
