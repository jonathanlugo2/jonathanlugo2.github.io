import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ category, title, description, tag, date, imageSrc }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 border border-gray-100 flex flex-col h-full group cursor-pointer"
    >
      <div className="h-48 relative overflow-hidden bg-gray-50">
        <motion.img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-sm">
          {category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors leading-snug">
          {title}
        </h3>
        
        <div className="inline-block self-start px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500">
          {tag}
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Abierto hasta {date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceGrid = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      category: "Plan Autónomo",
      title: "Gestión Integral para Freelancers 2026",
      description: "Asesoramiento fiscal, laboral y contable ilimitado. Incluye presentación de trimestrales.",
      tag: "Fiscal & Contable",
      date: "28 MAY 26",
      imageSrc: "/service_freelance.png"
    },
    {
      category: "Sociedades",
      title: "Constitución de SL Express",
      description: "Creamos tu empresa en 72 horas con todo incluido. Notaría, registro y alta en Hacienda.",
      tag: "Mercantil",
      date: "07 JUN 26",
      imageSrc: "/service_company.png"
    },
    {
      category: "Laboral",
      title: "Nóminas y Contratación 360º",
      description: "Gestión de altas, bajas y seguros sociales. Optimización de costes salariales.",
      tag: "Recursos Humanos",
      date: "31 DIC 26",
      imageSrc: "/service_hr.png"
    },
    {
      category: "Subvenciones",
      title: "Captación de Fondos Europeos",
      description: "Identificamos y tramitamos las ayudas públicas que mejor encajan con tu negocio.",
      tag: "Financiación",
      date: "15 JUL 26",
      imageSrc: "/service_funds.png"
    }
  ];

  return (
    <section className="px-8 py-20 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-900">Descubre nuestros servicios destacados</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Más de 10 años acompañando a empresas y emprendedores a alcanzar sus metas con seguridad jurídica y financiera.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-gray-100 p-1 rounded-2xl">
            <button className="px-8 py-2 bg-white rounded-xl shadow-sm font-bold text-brand-red transition-all">Destacados</button>
            <button className="px-8 py-2 text-gray-500 font-bold hover:text-gray-700 transition-all">Novedades</button>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div variants={itemVariants} key={index} className="h-full">
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center gap-4 pt-8">
          <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <ChevronLeft size={20} className="text-gray-400" />
          </button>
          <div className="flex gap-2 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 1 ? 'bg-brand-red w-4' : 'bg-gray-200'}`} />
            ))}
          </div>
          <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
