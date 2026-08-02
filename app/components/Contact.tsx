'use client';
import { useState } from 'react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !mensaje) {
      alert('Por favor completa al menos tu nombre y el mensaje.');
      return;
    }

    // Estructuramos el mensaje para WhatsApp
    const textoWhatsApp = `Hola, mi nombre es *${nombre}* (Tel: ${telefono || 'No especificado'}). Consulta desde la web:\n\n"${mensaje}"`;
    const urlWhatsApp = `https://wa.me/5493516175777?text=${encodeURIComponent(textoWhatsApp)}`;

    // Mostramos estado de éxito visual
    setEnviado(true);

    // Abrimos WhatsApp en una nueva pestaña después de un breve instante
    setTimeout(() => {
      window.open(urlWhatsApp, '_blank');
    }, 600);
  };

  return (
    <section id="contacto" className="py-16 bg-black relative border-t border-cyan-500/20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-neutral-950/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          <div className="text-center mb-6">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/40">
              Canal Directo
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-3">
              Envianos tu <span className="text-cyan-400">Consulta</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Dejanos tus datos y te asesoramos al instante por WhatsApp para cotizar tu proyecto.
            </p>
          </div>

          {enviado ? (
            <div className="bg-cyan-950/40 border border-cyan-500/50 rounded-xl p-8 text-center space-y-4 animate-fade-in">
              <div className="inline-flex p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-white">¡Redirigiendo a WhatsApp!</h3>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Se abrió WhatsApp con tu mensaje listo para enviar a BP Soluciones.
              </p>
              <button
                onClick={() => {
                  setEnviado(false);
                  setNombre('');
                  setTelefono('');
                  setMensaje('');
                }}
                className="mt-2 text-xs font-mono text-cyan-400 underline hover:text-cyan-300 transition-colors"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase mb-1.5">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: Juan Pérez"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase mb-1.5">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ej: 351 123 4567"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase mb-1.5">
                  Mensaje o Servicio de Interés
                </label>
                <textarea
                  rows={4}
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Describí brevemente qué necesitas (Cámaras, Redes, Alarmas...)"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-extrabold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Consulta por WhatsApp</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}