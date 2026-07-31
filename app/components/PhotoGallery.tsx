'use client';

import React, { useState } from 'react';

// Lista de fotos apuntando a public/galeria/ con nombres del 1 al 12 .jpg
const photosList = [
  { id: 1, title: 'Instalación de Sistema CCTV HD', category: 'CCTV', src: '/galeria/1.jpg' },
  { id: 2, title: 'Montaje de Cámaras Exterior', category: 'CCTV', src: '/galeria/2.jpg' },
  { id: 3, title: 'Mantenimiento Preventivo de Equipos', category: 'Seguridad', src: '/galeria/3.jpg' },
  { id: 4, title: 'Tablero y Central de Alarma', category: 'Seguridad', src: '/galeria/4.jpg' },
  { id: 5, title: 'Integración de Sensores de Intrusión', category: 'Seguridad', src: '/galeria/5.jpg' },
  { id: 6, title: 'Cableado Estructurado y Redes', category: 'Networking', src: '/galeria/6.jpg' },
  { id: 7, title: 'Peinado y Organización de Rack', category: 'Networking', src: '/galeria/7.jpg' },
  { id: 8, title: 'Punto de Acceso y Conectividad', category: 'Networking', src: '/galeria/8.jpg' },
  { id: 9, title: 'Automatización y Domótica', category: 'Domótica', src: '/galeria/9.jpg' },
  { id: 10, title: 'Central de Monitoreo Activa', category: 'Monitoreo', src: '/galeria/10.jpg' },
  { id: 11, title: 'Control de Acceso Biométrico', category: 'Seguridad', src: '/galeria/11.jpg' },
  { id: 12, title: 'Proyecto Finalizado BPsoluciones', category: 'CCTV', src: '/galeria/12.jpg' },
];

const categories = ['Todas', 'CCTV', 'Monitoreo', 'Networking', 'Domótica', 'Seguridad'];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filtrar fotos según la categoría activa
  const filteredPhotos = activeCategory === 'Todas'
    ? photosList
    : photosList.filter((photo) => photo.category === activeCategory);

  return (
    <section id="galeria-fotos" className="py-24 bg-[#050711] relative border-t border-slate-900">
      {/* Background Neon Glow (Efecto de luz de fondo) */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#00d2ff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full border border-[#00d2ff]/40 bg-[#00d2ff]/10 text-[#00d2ff] text-xs font-black uppercase tracking-widest">
            Registro Fotográfico
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-4">
            GALERÍA DE <span className="text-[#ff007a]">INSTALACIONES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explora la prolijidad y precisión técnica en cada uno de nuestros trabajos entregados.
          </p>
        </div>

        {/* Filtros por Categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00d2ff] to-[#ff007a] text-white shadow-lg shadow-[#00d2ff]/20 scale-105'
                  : 'bg-[#090d1a] text-slate-400 hover:text-white border border-slate-800 hover:border-[#00d2ff]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo.src)} // Abrir visor al hacer clic
              className="group relative h-72 rounded-2xl overflow-hidden bg-[#090d1a] border border-slate-800 hover:border-[#00d2ff]/50 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {/* Imagen con fallback visual */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                // Si la imagen falla (por ejemplo, si no se renombró bien), muestra un placeholder
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'; // Reemplazo temporal si falla
                }}
              />

              {/* Overlay con Información al pasar el mouse */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00d2ff] mb-1">
                  {photo.category}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
                  {photo.title}
                </h3>
                <span className="text-xs text-[#ff007a] font-semibold mt-2 flex items-center gap-1">
                  Ver en pantalla completa 🔍
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Visor de Pantalla Completa (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)} // Cerrar al hacer clic fuera
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-[#00d2ff]/40 shadow-2xl">
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[85vh] object-contain"
            />
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-900/80 text-white font-bold w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-[#ff007a] transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}