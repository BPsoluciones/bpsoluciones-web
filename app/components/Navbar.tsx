'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050711]/90 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo BP Soluciones */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black italic tracking-tighter text-[#00d2ff]">B</span>
              <span className="text-3xl font-black italic tracking-tighter text-[#ff007a] -ml-2">P</span>
              {/* Micro Íconos del Logo */}
              <div className="hidden sm:flex items-center gap-1.5 ml-1 text-slate-400 text-xs">
                <span>💡</span>
                <span>🖥️</span>
                <span>💻</span>
                <span>📡</span>
              </div>
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-200 uppercase -mt-1">
              Soluciones
            </span>
          </div>
        </a>

        {/* Menú de Navegación */}
        <nav className="hidden md:flex space-x-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
          <a href="#inicio" className="hover:text-[#00d2ff] transition-colors">Inicio</a>
          <a href="#monitoreo" className="hover:text-[#00d2ff] transition-colors">Monitoreo</a>
          <a href="#servicios" className="hover:text-[#00d2ff] transition-colors">Servicios</a>
          <a href="#proyectos" className="hover:text-[#00d2ff] transition-colors">Proyectos</a>
          <a href="#faq" className="hover:text-[#00d2ff] transition-colors">Preguntas</a>
          <a href="#contacto" className="hover:text-[#00d2ff] transition-colors">Contacto</a>
        </nav>

        {/* Botón Presupuesto */}
        <a
          href="https://wa.me/5493516175777?text=Hola%20BPsoluciones,%20quisiera%20solicitar%20un%20presupuesto"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-black text-white uppercase tracking-wider bg-gradient-to-r from-[#00d2ff] to-[#ff007a] rounded-xl transition-all shadow-lg shadow-[#ff007a]/20 hover:scale-105"
        >
          Presupuesto
        </a>
      </div>
    </header>
  );
}