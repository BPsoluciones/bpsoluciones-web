'use client';
import { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, Server, Cpu, Wifi } from 'lucide-react';

export default function SocDashboard() {
  const [latency, setLatency] = useState(12);
  const [voltage, setVoltage] = useState(220);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (16 - 10 + 1)) + 10);
      setVoltage(Math.random() > 0.5 ? 220 : 221);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-black relative border-y border-cyan-500/20 overflow-hidden">
      {/* Fondo con brillo ambiental */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/10 via-black to-fuchsia-950/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse" /> Centro de Operaciones en Vivo (SOC)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Monitoreo de Infraestructura <span className="text-cyan-400">Activo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Métrica 1 */}
          <div className="bg-neutral-950/80 border border-cyan-500/30 rounded-xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-cyan-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-400 uppercase">Estado Perimetral</span>
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-xl font-bold text-white font-mono">BLINDADO</div>
            <div className="mt-2 text-xs text-cyan-400/80 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> Sensores activos (100%)
            </div>
          </div>

          {/* Métrica 2 */}
          <div className="bg-neutral-950/80 border border-fuchsia-500/30 rounded-xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-fuchsia-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-400 uppercase">Voltaje de Red</span>
              <Zap className="w-5 h-5 text-fuchsia-400" />
            </div>
            <div className="text-xl font-bold text-white font-mono">{voltage} V STABLE</div>
            <div className="mt-2 text-xs text-fuchsia-400/80">Protección de picos activa</div>
          </div>

          {/* Métrica 3 */}
          <div className="bg-neutral-950/80 border border-cyan-500/30 rounded-xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-cyan-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-400 uppercase">Latencia de Cámaras</span>
              <Wifi className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-xl font-bold text-white font-mono">{latency} ms</div>
            <div className="mt-2 text-xs text-cyan-400/80">Transmisión HD encriptada</div>
          </div>

          {/* Métrica 4 */}
          <div className="bg-neutral-950/80 border border-fuchsia-500/30 rounded-xl p-5 backdrop-blur-md relative overflow-hidden group hover:border-fuchsia-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-400 uppercase">Servidores IA</span>
              <Cpu className="w-5 h-5 text-fuchsia-400" />
            </div>
            <div className="text-xl font-bold text-white font-mono">ONLINE</div>
            <div className="mt-2 text-xs text-fuchsia-400/80">Respuesta automatizada</div>
          </div>
        </div>
      </div>
    </section>
  );
}