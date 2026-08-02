'use client';
import { useState } from 'react';
import { Cpu, Shield, Home as HomeIcon, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AiConfigurator() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('');
  const [mainGoal, setMainGoal] = useState('');

  const handleReset = () => {
    setStep(1);
    setPropertyType('');
    setMainGoal('');
  };

  return (
    <section className="py-16 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-neutral-900/60 border border-cyan-500/30 rounded-2xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl neon-card-glow">
          <div className="text-center mb-8">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/40">
              Consultor IA de Ingeniería
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Diseñá tu <span className="text-cyan-400">Arquitectura de Seguridad</span>
            </h3>
            <p className="text-neutral-400 text-sm mt-1">Obtené una recomendación técnica instantánea para tu proyecto.</p>
          </div>

          {step === 1 && (
            <div>
              <label className="block text-sm font-mono text-cyan-300 mb-4 uppercase text-center">
                1. Seleccioná el tipo de infraestructura:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Hogar / Residencia', 'Comercio / Local', 'Industria / Fábrica'].map((item) => (
                  <button
                    key={item}
                    onClick={() => { setPropertyType(item); setStep(2); }}
                    className="p-4 rounded-xl border border-neutral-700 bg-neutral-950 hover:border-cyan-400 hover:bg-cyan-950/30 text-white font-medium transition-all text-center flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <HomeIcon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-mono text-fuchsia-300 mb-4 uppercase text-center">
                2. ¿Cuál es tu prioridad principal para {propertyType}?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  'Monitoreo y Cámaras HD', 
                  'Seguridad Perimetral / Cercos', 
                  'Automatización y Domótica'
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => { setMainGoal(goal); setStep(3); }}
                    className="p-4 rounded-xl border border-neutral-700 bg-neutral-950 hover:border-fuchsia-400 hover:bg-fuchsia-950/30 text-white font-medium transition-all text-center flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <Shield className="w-6 h-6 text-fuchsia-400 group-hover:scale-110 transition-transform" />
                    <span>{goal}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="text-xl font-bold text-white">Configuración Generada con Éxito</h4>
              <div className="bg-black/60 border border-cyan-500/30 rounded-xl p-4 max-w-lg mx-auto text-left font-mono text-xs text-neutral-300 space-y-2">
                <p><span className="text-cyan-400">Infraestructura:</span> {propertyType}</p>
                <p><span className="text-fuchsia-400">Prioridad Principal:</span> {mainGoal}</p>
                <p className="text-neutral-400 pt-2 border-t border-neutral-800">
                  Estado: Compatible con núcleos de integración avanzada BP Soluciones.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <a
                  href={`https://wa.me/5493516175777?text=${encodeURIComponent(`Hola, acabo de usar el configurador de IA en su web. Mi infraestructura es: ${propertyType} y mi prioridad es: ${mainGoal}. Me gustaría recibir asesoramiento.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Enviar Especificación por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-xl border border-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Reiniciar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}