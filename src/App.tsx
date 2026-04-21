import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceGrid from './components/ServiceGrid'
import CategoryGrid from './components/CategoryGrid'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-brand-red">
      <Navbar />
      <main>
        <Hero />
        <ServiceGrid />
        <CategoryGrid />
      </main>
      
      <footer className="bg-gray-50 py-12 px-8 md:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 transition-all cursor-pointer">
            <span className="text-xl font-bold tracking-tight text-brand-red">Gestor</span>
            <span className="text-xl font-black tracking-tighter text-gray-900 italic">IA</span>
            <span className="text-xl font-light text-gray-400">|</span>
            <span className="text-lg font-medium text-gray-600">Servicios Pro</span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-red transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-red transition-colors">Cookies</a>
            <a href="#" className="hover:text-brand-red transition-colors">Legal</a>
            <a href="#" className="hover:text-brand-red transition-colors">Contacto</a>
          </div>
          
          <p className="text-xs font-technical text-gray-400 font-bold uppercase tracking-tighter">
            © 2026 GestorIA - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
