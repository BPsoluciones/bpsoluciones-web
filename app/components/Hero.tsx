import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-[#0a0d14] flex items-center justify-center pt-20 overflow-hidden">
      {/* Luz de fondo efecto Neón */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#ff007a]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight mb-4">
            SEGURIDAD, TECNOLOGÍA <br />
            Y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff007a]">CONECTIVIDAD</span>
          </h1>

          <p className="text-lg text-slate-300 mb-6 font-light">
            Soluciones inteligentes para hogares, comercios y empresas.
          </p>

          {/* Lista de viñetas con tilde cían */}
          <div className="space-y-3 mb-8">
            {['Instalaciones profesionales', 'Equipos de primeras marcas', 'Atención personalizada', 'Garantía en todos nuestros trabajos'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00d2ff]/20 text-[#00d2ff] text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5493516175777?text=Hola%20BPsoluciones,%20quisiera%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-bold text-white bg-[#ff007a] rounded-xl hover:bg-fuchsia-600 transition-all shadow-lg shadow-[#ff007a]/30 flex items-center gap-2"
            >
              💬 SOLICITAR PRESUPUESTO
            </a>
            <a
              href="tel:3516175777"
              className="px-6 py-3.5 text-sm font-bold text-slate-200 bg-slate-900/90 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              📞 LLÁMANOS
            </a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Presentación / Cámara Neón */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md p-2 rounded-3xl bg-gradient-to-b from-[#00d2ff]/30 to-[#ff007a]/30 p-[1px]">
            <div className="bg-[#121824] p-6 rounded-[23px] text-center border border-slate-800 shadow-2xl">
              <div className="w-full h-64 bg-slate-900 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center border border-slate-800">
                <span className="text-6xl">📹</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Cámaras & Seguridad CCTV</h3>
              <p className="text-xs text-slate-400">Instalación y monitoreo en alta definición.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
