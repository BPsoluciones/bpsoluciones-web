'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: '¿En qué zonas de Córdoba prestan servicio?',
    answer: 'Brindamos cobertura integral en Córdoba Capital y zonas aledañas (Villa Carlos Paz, La Calera, Mendiolaza, Unquillo, Alta Gracia, entre otras). Consultanos por tu localidad.',
  },
  {
    question: '¿Qué garantía tienen las instalaciones y equipos?',
    answer: 'Ofrecemos 100% de garantía en mano de obra. Todos los equipos que instalamos (cámaras HD/4K, alarmas, interfonos y redes) cuentan con garantía oficial de fábrica.',
  },
  {
    question: '¿Puedo ver las cámaras de seguridad en mi celular?',
    answer: '¡Sí, totalmente! Configuramos la aplicación móvil en tu teléfono (Android o iOS) para que puedas monitorear tus cámaras en vivo desde cualquier parte del mundo, las 24 horas.',
  },
  {
    question: '¿Las alarmas y cámaras siguen funcionando si se corta la luz?',
    answer: 'Sí. Diseñamos sistemas con baterías de respaldo y fuentes UPS para garantizar que el sistema de seguridad y transmisión continúe activo durante cortes de energía.',
  },
  {
    question: '¿Realizan presupuestos o visitas técnicas sin cargo?',
    answer: 'Asesoramos y cotizamos tu proyecto de forma personalizada. Dependiendo de la envergadura de la obra y la distancia, coordinamos la visita técnica para evaluar la propiedad.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#050711] text-white relative overflow-hidden border-t border-slate-900">
      {/* Resplandor Cyan de fondo */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00d2ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-[#00d2ff] mb-4 uppercase tracking-widest">
            Dudas Comunes
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff007a]">Frecuentes</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto">
            Resolvemos tus principales dudas sobre instalaciones, garantías y cobertura de nuestros servicios.
          </p>
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden text-white ${
                  isOpen
                    ? 'bg-[#090d1a] border-[#00d2ff]/40 shadow-lg shadow-[#00d2ff]/5'
                    : 'bg-[#090d1a] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none bg-[#090d1a]"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? 'text-[#00d2ff]' : 'text-slate-200'
                  }`}>
                    {item.question}
                  </span>
                  <span className={`flex items-center justify-center w-8 h-8 rounded-full border transition-transform duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-[#00d2ff]/10 border-[#00d2ff] text-[#00d2ff] rotate-180'
                      : 'bg-slate-900 border-slate-700 text-slate-400'
                  }`}>
                    ↓
                  </span>
                </button>

                {/* Contenido desplegable */}
                {isOpen && (
                  <div className="px-6 pb-6 bg-[#090d1a]">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-3 border-t border-slate-800/60 font-light">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}