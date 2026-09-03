'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { Shield, LogOut, Video, Bell, DollarSign, Calendar, MapPin, Phone, User, Activity } from 'lucide-react';

const supabase = createClient(
  'https://vfkczehayprgpeacscll.supabase.co',
  'sb_publishable_yaMi1lRMfoomSgZ-SK45fQ_lrSbdTxz'
);

interface ClienteData {
  nombre?: string;
  apellido?: string;
  email: string;
  telefono?: string;
  direccion?: string;
  cant_camaras?: number;
  cant_sensores?: number;
  estado_servicio?: string;
  costo_factura?: number;
  proximo_vencimiento?: string;
}

export default function PortalPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [cliente, setCliente] = useState<ClienteData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }

      const { data, error } = await supabase
        .from('clientes')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (!error && data) {
        setCliente(data);
      }
      setLoading(false);
    };

    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-cyan-400">
          <Activity className="w-6 h-6 animate-spin" />
          <span className="text-sm font-semibold">Cargando tu portal...</span>
        </div>
      </div>
    );
  }

  // Comprobación flexible del estado del servicio para manejar mayúsculas/minúsculas de la BD
  const estadoServicio = cliente?.estado_servicio || 'Activo';
  const esActivo = estadoServicio.toLowerCase() === 'activo';

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      
      {/* Navbar Superior */}
      <header className="sticky top-0 z-40 w-full bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/40 text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-white tracking-wider text-base block leading-tight">BP</span>
              <span className="font-extrabold text-cyan-400 tracking-[0.2em] text-[10px] block">PORTAL CLIENTES</span>
            </div>
          </Link>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-all text-xs font-semibold"
          >
            <LogOut className="w-4 h-4" /> Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 flex-grow">
        
        {/* Tarjeta de Bienvenida */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-wider">
              Cliente Verificado
            </span>
            <h1 className="text-3xl font-black text-white">
              Hola, {cliente?.nombre || 'Cliente'} {cliente?.apellido || ''}
            </h1>
            <p className="text-xs text-neutral-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" /> {cliente?.direccion || 'Dirección no especificada'}
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 px-5 py-4 rounded-2xl text-right">
            <div className="text-xs text-neutral-400">Estado del Servicio</div>
            <div className={`text-sm font-bold uppercase mt-1 ${esActivo ? 'text-emerald-400' : 'text-amber-400'}`}>
              ● {estadoServicio}
            </div>
          </div>
        </div>

        {/* Tarjetas de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl space-y-2 shadow-lg">
            <div className="flex items-center justify-between text-cyan-400">
              <Video className="w-6 h-6" />
              <span className="text-2xl font-black">{cliente?.cant_camaras ?? 0}</span>
            </div>
            <div className="text-sm font-bold text-white">Cámaras Instaladas</div>
            <div className="text-xs text-neutral-400">Monitoreo óptico activo</div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl space-y-2 shadow-lg">
            <div className="flex items-center justify-between text-purple-400">
              <Bell className="w-6 h-6" />
              <span className="text-2xl font-black">{cliente?.cant_sensores ?? 0}</span>
            </div>
            <div className="text-sm font-bold text-white">Sensores de Seguridad</div>
            <div className="text-xs text-neutral-400">Sistema de alarmas</div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl space-y-2 shadow-lg">
            <div className="flex items-center justify-between text-emerald-400">
              <DollarSign className="w-6 h-6" />
              <span className="text-2xl font-black">${cliente?.costo_factura ?? 0}</span>
            </div>
            <div className="text-sm font-bold text-white">Próxima Factura</div>
            <div className="text-xs text-neutral-400">Monto total a abonar</div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl space-y-2 shadow-lg">
            <div className="flex items-center justify-between text-amber-400">
              <Calendar className="w-6 h-6" />
              <span className="text-sm font-bold">{cliente?.proximo_vencimiento || 'Sin definir'}</span>
            </div>
            <div className="text-sm font-bold text-white">Vencimiento</div>
            <div className="text-xs text-neutral-400">Fecha límite de pago</div>
          </div>
        </div>

        {/* Sección de Información de Contacto */}
        <div className="bg-neutral-900/80 border border-neutral-800 p-8 rounded-3xl space-y-4 shadow-xl">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-neutral-800 pb-3">
            <User className="w-5 h-5 text-cyan-400" /> Información de Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-neutral-400 block mb-1">Correo Electrónico</span>
              <span className="font-semibold text-white">{cliente?.email}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1">Teléfono de Contacto</span>
              <span className="font-semibold text-white flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> {cliente?.telefono || 'No especificado'}
              </span>
            </div>
          </div>
        </div>

      </main>

      {/* Pie de página */}
      <footer className="w-full text-center py-6 text-xs text-neutral-500 border-t border-neutral-900 bg-neutral-950">
        © 2026 BP Soluciones - Portal de Clientes
      </footer>

    </div>
  );
}