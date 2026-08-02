'use client';
import { useState, useEffect } from 'react';
import { Shield, LogOut, CheckCircle2, Activity, Camera, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PortalPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('Cliente');
  const [activeTab, setActiveTab] = useState<'overview' | 'devices' | 'tickets'>('overview');
  const [ticketIssue, setTicketIssue] = useState('');
  const [ticketSent, setTicketSent] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('bp_user');
    if (savedUser) {
      setUserName(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('bp_user');
    router.push('/'); // Vuelve al inicio
  };

  const handleSendTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketIssue.trim()) return;
    setTicketSent(true);
    setTimeout(() => {
      setTicketSent(false);
      setTicketIssue('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      {/* Header Superior del Panel */}
      <header className="border-b border-neutral-800 bg-neutral-900 px-8 py-5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-wide text-cyan-400">BP Soluciones — Panel de Cliente</h1>
            <p className="text-xs text-neutral-400">Sesión activa: <span className="text-white font-semibold">{userName}</span></p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" /> Córdoba Protegida 24/7
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all text-xs font-bold"
          >
            <LogOut className="w-4 h-4" /> Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido Principal con Solapas */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-8 space-y-6">
        
        {/* Menú de Solapas */}
        <div className="flex gap-3 border-b border-neutral-800 pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeTab === 'overview' ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}
          >
            📊 Resumen General
          </button>
          <button
            onClick={() => setActiveTab('devices')}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeTab === 'devices' ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}
          >
            📷 Mis Equipos
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeTab === 'tickets' ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'}`}
          >
            🛠️ Soporte Técnico
          </button>
        </div>

        {/* VISTA 1: RESUMEN */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <span className="text-xs text-neutral-400 font-semibold block">ESTADO DEL SISTEMA</span>
                <div className="flex items-center gap-2.5 mt-2">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <span className="text-xl font-extrabold text-cyan-400">100% Protegido</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2">Perímetros monitoreados en tiempo real.</p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <span className="text-xs text-neutral-400 font-semibold block">CENTRAL CÓRDOBA</span>
                <div className="flex items-center gap-2.5 mt-2">
                  <Activity className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-xl font-extrabold text-fuchsia-400">24/7 Activo</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2">Enlace operativo permanente.</p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs text-neutral-400 font-semibold block">ASISTENCIA DIRECTA</span>
                  <span className="text-sm font-bold text-white mt-1 block">¿Requieres ayuda urgente?</span>
                </div>
                <a
                  href="https://wa.me/5493510000000?text=Hola,%20soy%20cliente%20registrado%20y%20necesito%20asistencia%20técnica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-extrabold text-center text-xs tracking-wide hover:opacity-95 transition-opacity block"
                >
                  Abrir WhatsApp Técnico
                </a>
              </div>
            </div>

            <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider">Últimos Eventos en tu Domicilio</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-neutral-200 font-medium">Sistema Armado Automáticamente</span>
                  </div>
                  <span className="text-xs text-neutral-400">Hace 2 horas</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                    <span className="text-neutral-200 font-medium">Verificación de Red y Conectividad OK</span>
                  </div>
                  <span className="text-xs text-neutral-400">Hoy, 08:00 HS</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VISTA 2: EQUIPOS */}
        {activeTab === 'devices' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">Dispositivos y Sensores Instalados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-5 bg-neutral-900 rounded-2xl border border-neutral-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Cámara IP Exterior 4K</h4>
                    <p className="text-xs text-neutral-400">Grabación en nube activa</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Online</span>
              </div>

              <div className="flex items-center justify-between p-5 bg-neutral-900 rounded-2xl border border-neutral-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Central Alarma Inalámbrica</h4>
                    <p className="text-xs text-neutral-400">Sensores perimetrales y magnéticos</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Armado</span>
              </div>
            </div>
          </div>
        )}

        {/* VISTA 3: SOPORTE */}
        {activeTab === 'tickets' && (
          <div className="max-w-2xl bg-neutral-900 border border-neutral-800 p-8 rounded-2xl space-y-5">
            <div>
              <h3 className="text-base font-bold text-cyan-400 uppercase tracking-wider">Centro de Soporte Técnico</h3>
              <p className="text-xs text-neutral-400 mt-1">Escríbenos tu consulta o reporte técnico y nuestro equipo se comunicará contigo de inmediato.</p>
            </div>

            <form onSubmit={handleSendTicket} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">Detalle del inconveniente o consulta</label>
                <textarea
                  rows={5}
                  required
                  value={ticketIssue}
                  onChange={(e) => setTicketIssue(e.target.value)}
                  placeholder="Describe qué sucede con el sistema o equipos..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cyan-500 text-black font-extrabold text-xs tracking-wider hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Enviar Reporte Técnico
              </button>
            </form>

            {ticketSent && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center text-xs text-emerald-400 font-semibold">
                ¡Reporte enviado con éxito! Ticket #4082 registrado correctamente.
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}