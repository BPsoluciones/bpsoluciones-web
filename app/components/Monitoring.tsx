'use client';

import React, { useState, useRef } from 'react';

export default function Monitoring() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="monitoreo" className="py-24 bg-[#050711] relative overflow-hidden border-t border-slate-900">
      {/* Glow Cyber Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00d2ff]/10 to-[#ff007a]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Superior */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full border border-[#00d2ff]/40 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-black uppercase tracking-widest">
            Servicio Destacado
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4">
            <span className="text-[#00d2ff]">MONITOREAMOS</span> <br />
            <span className="text-white">NOSOTROS</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#ff007a] mt-3">
            Tu casa o negocio, siempre protegido.
          </p>
        </div>

        {/* REPRODUCTOR DE VIDEO DE DEMOSTRACIÓN */}
        <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-[#00d2ff]/40 bg-[#090d1a] shadow-2xl shadow-[#00d2ff]/10 group">
          
          {/* Header del marco de monitoreo */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-black tracking-widest text-slate-300 uppercase">
                EN VIVO • SISTEMA DE MONITOREO BP
              </span>
            </div>
            
            {/* Botón para Activar / Desactivar Audio */}
            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#00d2ff]/10 border border-[#00d2ff]/40 text-[#00d2ff] text-[11px] font-bold uppercase tracking-wider hover:bg-[#00d2ff]/20 transition-all"
            >
              {isMuted ? (
                <>
                  <span>🔇</span> Activar Audio
                </>
              ) : (
                <>
                  <span>🔊</span> Silenciar
                </>
              )}
            </button>
          </div>

          {/* El Video */}
          <div className="relative aspect-video w-full bg-black">
            <video
              ref={videoRef}
              src="/videos/demo.mp4"
              autoPlay
              loop
              muted={isMuted}
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3 Pilares del Monitoreo con Iconos SVG */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-8 rounded-2xl bg-[#090d1a] border border-[#ff007a]/40 text-center hover:border-[#ff007a] transition-all duration-300 shadow-lg shadow-[#ff007a]/5">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#ff007a]/10 border border-[#ff007a] flex items-center justify-center text-[#ff007a]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">VIGILANCIA 24/7</h3>
            <p className="text-xs sm:text-sm text-slate-400">Supervisión ininterrumpida de tus cámaras y sensores los 365 días del año.</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#090d1a] border border-[#00d2ff]/40 text-center hover:border-[#00d2ff] transition-all duration-300 shadow-lg shadow-[#00d2ff]/5">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#00d2ff]/10 border border-[#00d2ff] flex items-center justify-center text-[#00d2ff]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">ALERTAS EN TIEMPO REAL</h3>
            <p className="text-xs sm:text-sm text-slate-400">Notificación e intervención inmediata ante eventos de intrusión o pánico.</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#090d1a] border border-[#ff007a]/40 text-center hover:border-[#ff007a] transition-all duration-300 shadow-lg shadow-[#ff007a]/5">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#ff007a]/10 border border-[#ff007a] flex items-center justify-center text-[#ff007a]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">DESDE DONDE ESTÉS</h3>
            <p className="text-xs sm:text-sm text-slate-400">Acceso total a la transmisión e historial directamente desde tu celular.</p>
          </div>

        </div>

        {/* Call to Action Directo */}
        <div className="text-center">
          <a
            href="https://wa.me/5493516175777?text=Hola%20BPsoluciones,%20quiero%20consultar%20por%20el%20Servicio%20de%20Monitoreo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00d2ff] via-[#ff007a] to-[#ff007a] text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:opacity-90 transition-all hover:scale-105"
          >
            <span>Cotizar Monitoreo Ahora</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}