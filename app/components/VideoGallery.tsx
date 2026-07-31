'use client';

import React from 'react';

// Lista de tus 7 videos (puedes cambiar los títulos y descripciones según el contenido)
const videosList = [
  {
    id: 1,
    title: 'Instalación de Cámaras de Seguridad HD',
    category: 'CCTV / Video Vigilancia',
    src: '/videos/video-1.mp4',
  },
  {
    id: 2,
    title: 'Sistema de Alarma Monitoreada en Vivo',
    category: 'Monitoreo 24/7',
    src: '/videos/video-2.mp4',
  },
  {
    id: 3,
    title: 'Automatización y Domótica Residencial',
    category: 'Domótica',
    src: '/videos/video-3.mp4',
  },
  {
    id: 4,
    title: 'Control de Acceso Biométrico para Empresas',
    category: 'Seguridad Electrónica',
    src: '/videos/video-4.mp4',
  },
  {
    id: 5,
    title: 'Cableado Estructurado y Redes de Alta Velocidad',
    category: 'Networking',
    src: '/videos/video-5.mp4',
  },
  {
    id: 6,
    title: 'Prueba de Respuesta ante Evento de Intrusión',
    category: 'Monitoreo 24/7',
    src: '/videos/video-6.mp4',
  },
  {
    id: 7,
    title: 'Mantenimiento Preventivo de Equipos',
    category: 'Servicio Técnico',
    src: '/videos/video-7.mp4',
  },
];

export default function VideoGallery() {
  return (
    <section id="galeria-videos" className="py-24 bg-[#050711] relative border-t border-slate-900">
      {/* Glow Cyber Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#ff007a]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full border border-[#ff007a]/40 bg-[#ff007a]/10 text-[#ff007a] text-xs font-black uppercase tracking-widest">
            Demostraciones en Real
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-4">
            NUESTROS TRABAJOS <span className="text-[#00d2ff]">EN ACCIÓN</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Conocé la calidad de nuestras instalaciones y el funcionamiento de nuestros sistemas de seguridad.
          </p>
        </div>

        {/* Grilla de Videos (Grid 3 columnas en escritorio, 1 en celular) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosList.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden bg-[#090d1a] border border-slate-800 hover:border-[#00d2ff]/50 transition-all duration-300 shadow-xl hover:shadow-[#00d2ff]/10 group flex flex-col"
            >
              {/* Contenedor del reproductor */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Información del video */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#00d2ff] bg-[#00d2ff]/10 px-2.5 py-1 rounded-md border border-[#00d2ff]/20">
                    {video.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-3 group-hover:text-[#00d2ff] transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}