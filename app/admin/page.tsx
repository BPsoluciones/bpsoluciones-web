'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { Shield, LogOut, Users, Activity, CheckCircle, AlertTriangle, Edit2, X, Save } from 'lucide-react';

const supabase = createClient(
  'https://vfkczehayprgpeacscll.supabase.co',
  'sb_publishable_yaMi1lRMfoomSgZ-SK45fQ_lrSbdTxz'
);

interface Cliente {
  id: string;
  email: string;
  nombre?: string;
  apellido?: string;
  telefono?: string;
  direccion?: string;
  cant_camaras?: number;
  cant_sensores?: number;
  estado_servicio?: string;
  costo_factura?: number;
  proximo_vencimiento?: string;
  is_admin: boolean;
}

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Estados para el modal de edición
  const [editingCliente, setEditingCliente] = useState<Cliente | null>(null);
  const [saving, setSaving] = useState(false);

  // Registro automático del Service Worker para la PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registrado con éxito:', registration.scope);
          })
          .catch((error) => {
            console.log('Falló el registro del Service Worker:', error);
          });
      });
    }
  }, []);

  useEffect(() => {
    fetchClientes();
  }, [router]);

  const fetchClientes = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
      return;
    }

    const { data: clienteActual } = await supabase
      .from('clientes')
      .select('is_admin')
      .eq('id', session.user.id)
      .single();

    if (!clienteActual?.is_admin) {
      router.push('/portal');
      return;
    }

    const { data: listaClientes, error } = await supabase
      .from('clientes')
      .select('*');

    if (error) {
      setErrorMsg('Error al cargar la lista de clientes.');
    } else {
      setClientes(listaClientes || []);
    }

    setLoading(false);
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCliente) return;
    setSaving(true);

    const { error } = await supabase
      .from('clientes')
      .update({
        nombre: editingCliente.nombre,
        apellido: editingCliente.apellido,
        telefono: editingCliente.telefono,
        direccion: editingCliente.direccion,
        cant_camaras: editingCliente.cant_camaras,
        cant_sensores: editingCliente.cant_sensores,
        estado_servicio: editingCliente.estado_servicio,
        costo_factura: editingCliente.costo_factura,
        proximo_vencimiento: editingCliente.proximo_vencimiento,
      })
      .eq('id', editingCliente.id);

    if (error) {
      setErrorMsg('Error al actualizar el cliente.');
    } else {
      setEditingCliente(null);
      fetchClientes();
    }
    setSaving(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-cyan-400">
          <Activity className="w-6 h-6 animate-spin" />
          <span className="text-sm font-semibold tracking-wide">Cargando panel de control...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between">
      <header className="sticky top-0 z-40 w-full bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/40 text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-white tracking-wider text-base block leading-tight">BP</span>
              <span className="font-extrabold text-cyan-400 tracking-[0.2em] text-[10px] block">ADMIN PANEL</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold">
              Modo Administrador
            </span>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-all text-xs font-semibold">
              <LogOut className="w-4 h-4" /> Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-cyan-400" /> Gestión de Clientes y Datos Técnicos
            </h1>
            <p className="text-xs text-neutral-400 mt-1">Edita la información de cámaras, sensores y facturación de cada cliente.</p>
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-xs font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> {errorMsg}
          </div>
        )}

        <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/50 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Cliente</th>
                  <th className="py-4 px-6">Contacto</th>
                  <th className="py-4 px-6">Equipamiento</th>
                  <th className="py-4 px-6">Servicio / Factura</th>
                  <th className="py-4 px-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-xs">
                {clientes.map((c) => (
                  <tr key={c.id} className="hover:bg-neutral-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white text-sm">{c.nombre} {c.apellido || ''}</div>
                      <div className="text-neutral-400 text-xs">{c.email}</div>
                      <div className="text-neutral-500 text-[11px]">{c.direccion || 'Sin dirección'}</div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">
                      {c.telefono || 'No registrado'}
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-cyan-400 font-semibold">📷 Cámaras: {c.cant_camaras ?? 0}</div>
                      <div className="text-purple-400 font-semibold">🚨 Sensores: {c.cant_sensores ?? 0}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-1 ${c.estado_servicio === 'activo' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}`}>
                        {c.estado_servicio || 'activo'}
                      </span>
                      <div className="text-white font-bold">${c.costo_factura ?? 0}</div>
                      <div className="text-neutral-400 text-[11px]">Vto: {c.proximo_vencimiento || 'N/D'}</div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => setEditingCliente(c)}
                        className="px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-400 border border-cyan-500/30 rounded-xl font-bold transition-all inline-flex items-center gap-1.5"
                      >
                        <Edit2 className="w-3.5 h-3.5" /> Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* MODAL DE EDICIÓN */}
      {editingCliente && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h2 className="text-lg font-bold text-white">Editar Datos del Cliente</h2>
              <button onClick={() => setEditingCliente(null)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Nombre</label>
                  <input type="text" value={editingCliente.nombre || ''} onChange={(e) => setEditingCliente({...editingCliente, nombre: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Apellido</label>
                  <input type="text" value={editingCliente.apellido || ''} onChange={(e) => setEditingCliente({...editingCliente, apellido: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Teléfono</label>
                  <input type="text" value={editingCliente.telefono || ''} onChange={(e) => setEditingCliente({...editingCliente, telefono: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Estado del Servicio</label>
                  <select value={editingCliente.estado_servicio || 'activo'} onChange={(e) => setEditingCliente({...editingCliente, estado_servicio: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none">
                    <option value="activo">Activo</option>
                    <option value="suspendido">Suspendido</option>
                    <option value="pendiente">Pendiente</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1">Dirección</label>
                <input type="text" value={editingCliente.direccion || ''} onChange={(e) => setEditingCliente({...editingCliente, direccion: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Cantidad de Cámaras</label>
                  <input type="number" value={editingCliente.cant_camaras ?? 0} onChange={(e) => setEditingCliente({...editingCliente, cant_camaras: parseInt(e.target.value) || 0})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Cantidad de Sensores</label>
                  <input type="number" value={editingCliente.cant_sensores ?? 0} onChange={(e) => setEditingCliente({...editingCliente, cant_sensores: parseInt(e.target.value) || 0})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Costo Próxima Factura ($)</label>
                  <input type="number" value={editingCliente.costo_factura ?? 0} onChange={(e) => setEditingCliente({...editingCliente, costo_factura: parseFloat(e.target.value) || 0})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 block mb-1">Próximo Vencimiento</label>
                  <input type="date" value={editingCliente.proximo_vencimiento || ''} onChange={(e) => setEditingCliente({...editingCliente, proximo_vencimiento: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-xs focus:border-cyan-500 focus:outline-none" />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-neutral-800">
                <button type="button" onClick={() => setEditingCliente(null)} className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl text-xs font-semibold">Cancelar</button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 rounded-xl text-xs font-bold flex items-center gap-2">
                  <Save className="w-4 h-4" /> {saving ? 'Guardando...' : 'Guardar Cambios'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="w-full text-center py-6 text-xs text-neutral-500 border-t border-neutral-900 bg-neutral-950">
        © 2026 BPSoluciones - Panel de Administración Seguro
      </footer>
    </div>
  );
}