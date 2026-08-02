export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
      {/* Contenido de texto principal */}
      <div className="flex-1 text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6 neon-glow">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Portal Operativo Activo en bpsoluciones.com.ar
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          SEGURIDAD, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TECNOLOGÍA</span> Y CONECTIVIDAD
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Soluciones inteligentes para hogares, comercios y empresas con un estándar tecnológico de próxima generación.
        </p>

        {/* Lista de características */}
        <ul className="space-y-3 mb-10 text-gray-300 text-sm md:text-base">
          <li className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">✓</span>
            Instalaciones profesionales
          </li>
          <li className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">✓</span>
            Equipos de primeras marcas
          </li>
          <li className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">✓</span>
            Atención personalizada y garantía
          </li>
        </ul>

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="px-8 py-3.5 rounded-xl bg-cyan-500 text-gray-950 font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
          >
            Contáctanos
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-gray-900/80 text-gray-200 border border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all backdrop-blur-md"
          >
            Llámanos
          </a>
        </div>
      </div>

      {/* Tarjeta Visual Interactiva Derecha */}
      <div className="w-full lg:w-[450px]">
        <div className="relative p-6 rounded-2xl bg-gray-900/60 backdrop-blur-xl neon-border group">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="h-64 rounded-xl bg-gradient-to-br from-cyan-950/40 to-blue-950/20 border border-cyan-500/20 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400 neon-glow">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Cámaras & Seguridad CCTV</h3>
            <p className="text-gray-400 text-xs">Instalación y monitoreo en alta definición.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
