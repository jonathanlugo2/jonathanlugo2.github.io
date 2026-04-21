import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-surface-light px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
      <motion.div 
        className="flex-1 space-y-6 md:space-y-8 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider">Servicio activo 2026/2027</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900">
          Simplifica la gestión de tu <span className="text-brand-red relative inline-block">
            empresa
            <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-brand-red/20 -z-10 rounded-full"></span>
          </span> paso a paso
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
          Domina tu fiscalidad y contabilidad con nuestro panel experto. Gestiona tus impuestos con total confianza y transparencia.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-[0_8px_30px_rgb(227,6,19,0.3)] group"
          >
            Solicitar Asesoría
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 md:pt-8">
          <button className="p-2 border border-gray-300 rounded-full hover:bg-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 3 ? 'bg-brand-red w-6' : 'bg-gray-300'}`} />
            ))}
          </div>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 relative z-10 w-full max-w-2xl"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/40 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 relative"
        >
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100/50 pb-4">
              <span className="font-technical text-[10px] font-bold text-gray-400 uppercase tracking-widest">Financial_Report_Q2</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">BENEFICIO NETO</p>
                <p className="text-2xl md:text-3xl font-technical font-bold text-gray-900">€42,850.00</p>
                <p className="text-[10px] text-green-500 font-bold">+12.4% ↑</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">IMPUESTOS ESTIMADOS</p>
                <p className="text-2xl md:text-3xl font-technical font-bold text-gray-900">€8,920.45</p>
                <p className="text-[10px] text-brand-red font-bold uppercase">CALCULADO</p>
              </div>
            </div>

            <div className="h-32 md:h-48 w-full bg-gray-50/50 rounded-2xl flex items-end justify-between p-4 gap-1.5 md:gap-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent"></div>
              {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1.5, delay: 0.8 + (i * 0.1), type: "spring", bounce: 0.3 }}
                  key={i} 
                  className="w-full bg-brand-red rounded-t-sm md:rounded-t-lg relative z-10" 
                  style={{ opacity: 0.4 + (i * 0.08) }}
                />
              ))}
            </div>
            
            <div className="flex justify-between items-center text-[9px] md:text-[10px] font-technical text-gray-400 font-bold uppercase tracking-tighter">
              <span>JAN_26</span>
              <span className="hidden xs:inline">MAR_26</span>
              <span>JUN_26</span>
              <span className="hidden xs:inline">SEP_26</span>
              <span>DEC_26</span>
            </div>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[300px] md:max-w-[400px] max-h-[300px] md:max-h-[400px] bg-gradient-to-tr from-brand-red/20 to-blue-400/20 rounded-full blur-[60px] md:blur-[80px] -z-10" />
      </motion.div>
    </section>
  );
};

export default Hero;
