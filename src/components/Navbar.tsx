import { useState, useEffect } from 'react';
import { Search, User, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center justify-between px-8 py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50' : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-2xl font-bold tracking-tight text-brand-red group-hover:text-red-700 transition-colors">Gestor</span>
          <span className="text-2xl font-black tracking-tighter text-gray-900 italic group-hover:text-gray-700 transition-colors">IA</span>
          <span className="text-2xl font-light text-gray-300">|</span>
          <span className="text-xl font-medium text-gray-600">Servicios Pro</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">
            Servicios <ChevronDown size={16} />
          </div>
          <div className="text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">Blog</div>
          <div className="text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">Quiénes somos</div>
          <div className="text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">Ayuda</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-brand-red hover:bg-red-50 rounded-full transition-colors border border-transparent hover:border-red-100">
          <Search size={20} />
        </button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-brand-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
        >
          <User size={18} />
          Acceder
        </motion.button>

        <div className="flex items-center gap-1 text-gray-700 font-bold ml-2 cursor-pointer border-l pl-4 border-gray-200 hover:text-brand-red transition-colors">
          ES <ChevronDown size={16} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
