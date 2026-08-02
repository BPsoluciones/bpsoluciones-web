import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocDashboard from './components/SocDashboard'; // <--- Nuevo Panel SOC
import Monitoreo from './components/Monitoring';
import Services from './components/Services';
import AiConfigurator from './components/AiConfigurator'; // <--- Nuevo Simulador IA
import Projects from './components/Projects';
import PhotoGallery from './components/PhotoGallery';
import Faq from './components/Faq';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-cyan-400 selection:text-black relative">
      <Navbar />
      <div id="inicio" className="pt-20"></div>
      <Hero />
      <SocDashboard /> {/* Panel interactivo en tiempo real */}
      <Monitoreo />
      <Services />
      <AiConfigurator /> {/* Asistente interactivo de arquitectura */}
      <Projects />
      <PhotoGallery />
      <Faq />
      <Contact />
      <FloatingActions />
    </main>
  );
}