'use client';
import { useState, useEffect } from 'react';
import { Shield, Trash2, Edit2, CheckCircle, XCircle, Lock, Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  address?: string;
  phone?: string;
  cameras?: string;
  cameraModels?: string;
  monitoringService?: string;
  status: string;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('bp_all_users') || '[]');
    setUsers(storedUsers);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin2026') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña de administrador incorrecta');
    }
  };

  const updateLocalStorage = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
    localStorage.setItem('bp_all_users', JSON.stringify(updatedUsers));
  };

  const toggleStatus = (id: string) => {
    const updated = users.map(u => {
      if (u.id === id) {
        const newStatus = u.status === 'Activo' ? 'Inactivo' : 'Activo';
        return { ...u, status: newStatus };
      }
      return u;
    });
    updateLocalStorage(updated);
  };

  const deleteUser = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      const updated = users.filter(u => u.id !== id);
      updateLocalStorage(updated);
    }
  };

  const saveEditedUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    const updated = users.map(u => u.id === editingUser.id ? editingUser : u);
    updateLocalStorage(updated);
    setEditingUser(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-neutral-900 border border-cyan-500/30 rounded-2xl p-6 text-white shadow-xl">
          <div className="text-center mb-6">
            <Lock className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
            <h1 className="text-lg font-bold">Panel de Administración</h1>
            <p className="text-xs text-neutral-400">Ingrese la clave de seguridad</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Contraseña Admin"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-cyan-500 text-black font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-wide">Gestión de Clientes - BP Soluciones</h1>
              <p className="text-xs text-neutral-400">Control de cuentas y estados de monitoreo</p>
            </div>
          </div>
          <Link href="/" className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 px-3 py-2 rounded-xl border border-neutral-800">
            <ArrowLeft className="w-4 h-4" /> Volver al Sitio
          </Link>
        </div>

        {/* Modal de Edición de Usuario */}
        {editingUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4 overflow-y-auto py-10">
            <div className="w-full max-w-lg bg-neutral-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">Editar Datos del Cliente</h2>
              <form onSubmit={saveEditedUser} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Nombre</label>
                  <input type="text" value={editingUser.name} onChange={e => setEditingUser({...editingUser, name: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Correo Electrónico</label>
                  <input type="email" value={editingUser.email} onChange={e => setEditingUser({...editingUser, email: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Contraseña</label>
                  <input type="text" value={editingUser.password || ''} onChange={e => setEditingUser({...editingUser, password: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" placeholder="Contraseña de acceso" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Teléfono</label>
                    <input type="text" value={editingUser.phone || ''} onChange={e => setEditingUser({...editingUser, phone: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Cámaras</label>
                    <input type="text" value={editingUser.cameras || ''} onChange={e => setEditingUser({...editingUser, cameras: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Dirección</label>
                  <input type="text" value={editingUser.address || ''} onChange={e => setEditingUser({...editingUser, address: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Modelos de Cámaras</label>
                    <input type="text" value={editingUser.cameraModels || ''} onChange={e => setEditingUser({...editingUser, cameraModels: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Servicio</label>
                    <input type="text" value={editingUser.monitoringService || ''} onChange={e => setEditingUser({...editingUser, monitoringService: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white" />
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="submit" className="flex-1 py-2.5 bg-cyan-500 text-black font-bold rounded-xl text-xs flex items-center justify-center gap-1">
                    <Save className="w-4 h-4" /> Guardar Cambios
                  </button>
                  <button type="button" onClick={() => setEditingUser(null)} className="px-4 py-2.5 bg-neutral-800 text-neutral-300 rounded-xl text-xs font-bold">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tabla de Usuarios */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950 text-neutral-400 uppercase tracking-wider border-b border-neutral-800">
                <tr>
                  <th className="p-4">Cliente / Contacto</th>
                  <th className="p-4">Ubicación / Tel</th>
                  <th className="p-4">Cámaras y Modelos</th>
                  <th className="p-4">Servicio</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-6 text-center text-neutral-500">
                      No hay clientes registrados todavía.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-neutral-950/50 transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-white text-sm">{user.name}</div>
                        <div className="text-neutral-400">{user.email}</div>
                        <div className="text-[10px] text-cyan-400 font-mono">Pass: {user.password || 'N/A'}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-white">{user.address || 'Sin dirección'}</div>
                        <div className="text-neutral-400">{user.phone || 'Sin teléfono'}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-white">{user.cameras || '0'} unidades</div>
                        <div className="text-neutral-400">{user.cameraModels || '-'}</div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-[10px] font-semibold">
                          {user.monitoringService || 'Monitoreo'}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => toggleStatus(user.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
                            user.status === 'Activo'
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                              : 'bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20'
                          }`}
                        >
                          {user.status === 'Activo' ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {user.status || 'Inactivo'}
                        </button>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => setEditingUser(user)}
                          className="p-2 bg-neutral-800 hover:bg-cyan-500 hover:text-black rounded-xl text-neutral-300 transition-colors inline-flex"
                          title="Editar usuario"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="p-2 bg-neutral-800 hover:bg-red-500 hover:text-white rounded-xl text-neutral-300 transition-colors inline-flex"
                          title="Eliminar usuario"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}