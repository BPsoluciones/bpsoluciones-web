'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[#050711] relative overflow-hidden border-t border-slate-900">
      {/* Resplandor Magenta de fondo */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff007a]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bloque Nos / Por qué elegirnos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-bold text-[#ff007a] mb-4 uppercase tracking-widest">
              ¿Por qué BPsoluciones?
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              COMPROMISO, PRECISIÓN Y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff007a]">
                RESPALDO TÉCNICO
              </span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              En <strong className="text-white">BPsoluciones</strong> combinamos ingeniería, tecnología de vanguardia y atención personalizada para brindar soluciones integrales en seguridad electrónica, conectividad y automatización.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#090d1a] border border-slate-800">
                <span className="text-2xl font-black text-[#00d2ff] block mb-1">100%</span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Garantía en mano de obra</span>
              </div>
              <div className="p-4 rounded-xl bg-[#090d1a] border border-slate-800">
                <span className="text-2xl font-black text-[#ff007a] block mb-1">HD / 4K</span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Equipos de 1° línea</span>
              </div>
            </div>

            {/* Accesos directos a contacto */}
            <div className="space-y-3">
              <a
                href="https://wa.me/5493516175777?text=Hola%20BPsoluciones,%20quisiera%20consultar%20por%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 text-xs font-black text-[#050711] uppercase tracking-wider bg-[#ff007a] hover:bg-[#ff3395] rounded-xl transition-all shadow-lg shadow-[#ff007a]/30 flex items-center justify-center gap-2 text-center"
              >
                💬 HABLAR POR WHATSAPP (351 617-5777)
              </a>
              <a
                href="tel:3516175777"
                className="w-full py-4 px-6 text-xs font-black text-white uppercase tracking-wider bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-center"
              >
                📞 LLAMADA DIRECTA
              </a>
            </div>
          </div>

          {/* Formulario de Consulta Directa */}
          <div className="bg-[#090d1a] p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Envianos tu consulta</h3>
            <p className="text-xs text-slate-400 mb-6">
              Dejanos tus datos y te asesoramos para cotizar tu proyecto sin compromiso.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#00d2ff]/10 border border-[#00d2ff]/40 rounded-xl text-center">
                <span className="text-3xl mb-2 block">✅</span>
                <h4 className="text-lg font-bold text-white mb-1">¡Consulta enviada!</h4>
                <p className="text-xs text-slate-300">Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Juan Pérez"
                    className="w-full bg-[#050711] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 351 123 4567"
                    className="w-full bg-[#050711] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Mensaje o Servicio de Interés</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describí brevemente qué necesitas (Cámaras, Redes, Alarmas...)"
                    className="w-full bg-[#050711] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00d2ff] transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-black text-[#050711] bg-[#00d2ff] hover:bg-[#33dcfb] rounded-xl uppercase tracking-wider transition-all shadow-md shadow-[#00d2ff]/30"
                >
                  Enviar Consulta
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer final */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BPsoluciones. Todos los derechos reservados.</p>
          <p className="text-slate-400">Córdoba, Argentina • Soluciones Tecnológicas Integrales</p>
        </div>

      </div>
    </section>
  );
}