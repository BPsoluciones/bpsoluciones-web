import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import MeshBackground from "./components/MeshBackground";
import FloatingActions from "./components/FloatingActions";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-gray-100 overflow-hidden flex flex-col justify-between">
      <MeshBackground />
      <Navbar />

      <div className="relative z-10 flex-grow">
        <Hero />
        
        <div id="servicios">
          <Services />
        </div>

        <div id="contacto">
          <Contact />
        </div>
      </div>

      <FloatingActions />

      <footer className="relative z-10 py-8 px-6 text-center border-t border-gray-900 bg-gray-950/40 backdrop-blur-md text-xs text-gray-500">
        <p>© {new Date().getFullYear()} BPsoluciones. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}