'use client';

import React from 'react';

interface ServiceCategory {
  title: string;
  icon: string;
  borderColor: string;
  glowColor: string;
  items: string[];
}

const servicesData: ServiceCategory[] = [
  {
    title: 'SEGURIDAD ELECTRÓNICA',
    icon: '🛡️',
    borderColor: 'border-[#00d2ff]',
    glowColor: 'shadow-[#00d2ff]/10',
    items: ['Alarmas Inteligentes', 'Sensórica Avanzada', 'Control de Acceso', 'Detección de Incendios'],
  },
  {
    title: 'VIDEOVIGILANCIA',
    icon: '📹',
    borderColor: 'border-[#ff007a]',
    glowColor: 'shadow-[#ff007a]/10',
    items: ['Cámaras IP / HD / 4K', 'Sistemas DVR / NVR', 'Monitoreo Remoto App', 'Almacenamiento en la Nube'],
  },
  {
    title: 'REDES Y CONECTIVIDAD',
    icon: '📡',
    borderColor: 'border-[#00d2ff]',
    glowColor: 'shadow-[#00d2ff]/10',
    items: ['Cableado Estructurado', 'Redes WiFi de Alta Cobertura', 'Switches / Routers Enterprise', 'Enlaces de Fibra Óptica'],
  },
  {
    title: 'DOMÓTICA Y AUTOMATIZACIÓN',
    icon: '🏠',
    borderColor: 'border-[#ff007a]',
    glowColor: 'shadow-[#ff007a]/10',
    items: ['Automatización de Portones y Luces', 'Control Inteligente por Voz/App', 'Escenarios Personalizados', 'Ahorro Energético'],
  },
  {
    title: 'SERVICIOS TÉCNICOS INTEGRALES',
    icon: '🛠️',
    borderColor: 'border-[#00d2ff]',
    glowColor: 'shadow-[#00d2ff]/10',
    items: ['Instalaciones Profesionales', 'Mantenimiento Preventivo y Correctivo', 'Soporte Técnico Especializado', 'Asesoramiento en Obra'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#050711] text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#00d2ff] mb-4 uppercase tracking-widest">
            ¿Qué Hacemos?
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            NUESTROS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff007a]">SERVICIOS</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
            Brindamos soluciones integrales en tecnología y seguridad para tu hogar, comercio o empresa.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`bg-[#090d1a] border-2 ${service.borderColor} ${service.glowColor} rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl p-3 bg-slate-900 border border-slate-800 rounded-xl">{service.icon}</span>
                  <h3 className="text-base font-black uppercase text-white tracking-wider leading-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-[#00d2ff] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Slogan Inferior */}
        <div className="mt-16 text-center border-t border-slate-900 pt-8">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase">
            SOLUCIONES INTELIGENTES, <span className="text-[#ff007a]">RESULTADOS REALES.</span>
          </p>
        </div>

      </div>
    </section>
  );
}