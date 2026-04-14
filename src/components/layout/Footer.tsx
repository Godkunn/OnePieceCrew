import { Github, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 px-4 border-t border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black text-white uppercase mb-6">Grand Line <br />Explorer</h2>
          <p className="text-white/40 max-w-md font-mono text-sm leading-relaxed">
            The ultimate destination for every pirate seeking the One Piece. 
            Stay updated with the latest episodes, exclusive merchandise, and 
            the legend of the Pirate King.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['About the Series', 'Character Profiles', 'World Map', 'Community'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-yellow-500 transition-colors text-sm uppercase font-mono">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6">Connect</h4>
          <div className="flex gap-4">
            {[Github, Twitter, Instagram, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
          © 2024 Eiichiro Oda / Shueisha, Toei Animation. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-mono text-white/20 uppercase tracking-widest hover:text-white">Privacy Policy</a>
          <a href="#" className="text-[10px] font-mono text-white/20 uppercase tracking-widest hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
