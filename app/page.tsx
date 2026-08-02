import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import MeshBackground from "@/components/MeshBackground";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-gray-100 overflow-hidden flex flex-col justify-between">
      {/* Fondo dinámico con luces neón difuminadas */}
      <MeshBackground />

      {/* Barra de navegación superior */}
      <Navbar />

      {/* Contenido Principal / Sección Hero */}
      <div className="relative z-10 flex-grow">
        <Hero />
        
        {/* Sección de Servicios */}
        <div id="servicios">
          <Services />
        </div>

        {/* Sección de Contacto */}
        <div id="contacto">
          <Contact />
        </div>
      </div>

      {/* Botones flotantes (WhatsApp / Acciones rápidas) */}
      <FloatingActions />

      {/* Pie de página */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-gray-900 bg-gray-950/40 backdrop-blur-md text-xs text-gray-500">
        <p>© {new Date().getFullYear()} BPsoluciones. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}