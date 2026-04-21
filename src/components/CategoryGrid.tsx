import { Languages, HelpCircle, Laptop, BarChart3, BrainCircuit, Rocket, Users, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CategoryCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${color} p-8 rounded-3xl flex flex-col justify-between h-64 cursor-pointer group border border-white/50 hover:border-gray-200/80 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 relative overflow-hidden`}
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/40 rounded-full blur-2xl group-hover:bg-brand-red/10 transition-colors duration-500" />
      
      <div className="space-y-4 relative z-10">
        <motion.div
          whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <Icon size={40} strokeWidth={1.5} className="text-gray-800 group-hover:text-brand-red transition-colors duration-300" />
        </motion.div>
        
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            {description}
          </p>
        </div>
      </div>
      
      <div className="flex justify-end relative z-10">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
          <ArrowRight size={20} className="transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const CategoryGrid = () => {
  const categories = [
    {
      icon: Briefcase,
      title: "Asesoría Fiscal",
      description: "Impuestos, declaraciones y planificación tributaria estratégica.",
      color: "bg-gradient-to-br from-blue-50/80 to-blue-100/30"
    },
    {
      icon: Users,
      title: "Gestión Laboral",
      description: "Contratos, nóminas y asesoramiento en RRHH.",
      color: "bg-gradient-to-br from-orange-50/80 to-orange-100/30"
    },
    {
      icon: Laptop,
      title: "Contabilidad Digital",
      description: "Libros oficiales y balances en tiempo real.",
      color: "bg-gradient-to-br from-gray-50/80 to-gray-100/30"
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Reporting financiero y KPIs para tu negocio.",
      color: "bg-gradient-to-br from-cyan-50/80 to-cyan-100/30"
    },
    {
      icon: BrainCircuit,
      title: "Inteligencia Artificial",
      description: "Automatización de procesos contables con IA.",
      color: "bg-gradient-to-br from-indigo-50/80 to-indigo-100/30"
    },
    {
      icon: Rocket,
      title: "Startup & Negocio",
      description: "Acompañamiento en el escalado de tu empresa.",
      color: "bg-gradient-to-br from-green-50/80 to-green-100/30"
    },
    {
      icon: HelpCircle,
      title: "Ayuda y Soporte",
      description: "Resolución de dudas técnicas 24/7.",
      color: "bg-gradient-to-br from-red-50/80 to-red-100/30"
    },
    {
      icon: Languages,
      title: "Internacional",
      description: "Asesoría para empresas que operan fuera de España.",
      color: "bg-gradient-to-br from-rose-50/80 to-rose-100/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-white/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tight leading-tight"
        >
          ¿Qué vas a encontrar en <span className="text-brand-red">Gestor</span><span className="italic tracking-tighter">IA</span>?
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div variants={itemVariants} key={index}>
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
