import { useState, useEffect } from 'react';
import { Search, User, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className={`flex items-center justify-between px-4 md:px-12 lg:px-24 py-4 sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50' : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-red group-hover:text-red-700 transition-colors">Gestor</span>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900 italic group-hover:text-gray-700 transition-colors">IA</span>
          <span className="hidden md:block text-2xl font-light text-gray-300">|</span>
          <span className="hidden lg:block text-lg md:text-xl font-medium text-gray-600">Servicios Pro</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">
            Servicios <ChevronDown size={16} />
          </div>
          <div className="text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">Blog</div>
          <div className="text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">Quiénes somos</div>
          <div className="text-gray-700 hover:text-brand-red cursor-pointer transition-colors font-medium">Ayuda</div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden sm:block p-2 text-brand-red hover:bg-red-50 rounded-full transition-colors border border-transparent hover:border-red-100">
          <Search size={20} />
        </button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-brand-red text-white px-4 md:px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
        >
          <User size={18} />
          <span className="hidden sm:block">Acceder</span>
        </motion.button>

        <div className="hidden md:flex items-center gap-1 text-gray-700 font-bold ml-2 cursor-pointer border-l pl-4 border-gray-200 hover:text-brand-red transition-colors">
          ES <ChevronDown size={16} />
        </div>

        <button 
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 lg:hidden overflow-hidden shadow-xl z-40"
          >
            <div className="flex flex-col p-6 gap-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-50 text-gray-700 font-bold">
                Servicios <ChevronDown size={18} />
              </div>
              <div className="py-2 border-b border-gray-50 text-gray-700 font-bold">Blog</div>
              <div className="py-2 border-b border-gray-50 text-gray-700 font-bold">Quiénes somos</div>
              <div className="py-2 border-b border-gray-50 text-gray-700 font-bold">Ayuda</div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-gray-700 font-bold">
                  Idioma: <span className="text-brand-red">ES</span>
                </div>
                <button className="p-2 text-brand-red border border-red-100 rounded-full sm:hidden">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
