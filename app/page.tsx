import MeshBackground from "@/components/MeshBackground";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-gray-100 overflow-hidden flex flex-col justify-between">
      {/* Fondo dinámico con luces neón difuminadas */}
      <MeshBackground />

      {/* Contenido principal */}
      <div className="relative z-10 flex-grow">
        {/* Sección Hero / Presentación */}
        <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 neon-glow">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Portal Operativo Activo en bpsoluciones.com.ar
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Soluciones Tecnológicas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Próxima Generación</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Transformamos la gestión de tu negocio con portales dinámicos, infraestructura cloud de alto rendimiento y un diseño vanguardista.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#servicios"
              className="px-8 py-3.5 rounded-xl bg-cyan-500 text-gray-950 font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
            >
              Explorar Servicios
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gray-900/80 text-gray-200 border border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all backdrop-blur-md"
            >
              Contacto Directo
            </a>
          </div>
        </section>

        {/* Sección de Servicios Interactivos */}
        <div id="servicios">
          <ServicesSection />
        </div>
      </div>

      {/* Pie de página sutil */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-gray-900 bg-gray-950/40 backdrop-blur-md text-xs text-gray-500">
        <p>© {new Date().getFullYear()} BPsoluciones. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}