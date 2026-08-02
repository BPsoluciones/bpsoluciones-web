'use client';
import { useState, useEffect } from 'react';
import { Shield, Trash2, Edit2, Check, X, ArrowLeft, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface UserData {
  id: string;
  name: string;
  email: string;
  status: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [users, setUsers] = useState<UserData[]>([]);
  
  // Estados para edición
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editStatus, setEditStatus] = useState('');

  // Clave secreta para entrar como admin (puedes cambiarla aquí mismo)
  const ADMIN_SECRET = 'admin2026';

  useEffect(() => {
    // Cargar usuarios simulados o guardados en localStorage
    const savedUsers = localStorage.getItem('bp_all_users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      // Usuarios de ejemplo iniciales si no hay registros previos
      const initialUsers: UserData[] = [
        { id: '1', name: 'Juan Pérez', email: 'juan@ejemplo.com', status: '100% Protegido' },
        { id: '2', name: 'María Gómez', email: 'maria@ejemplo.com', status: 'Revisión Pendiente' }
      ];
      setUsers(initialUsers);
      localStorage.setItem('bp_all_users', JSON.stringify(initialUsers));
    }
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_SECRET) {
      setIsAdminLoggedIn(true);
    } else {
      alert('Contraseña de Administrador incorrecta.');
    }
  };

  const handleDeleteUser = (id: string) => {
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    localStorage.setItem('bp_all_users', JSON.stringify(updated));
  };

  const startEditing = (user: UserData) => {
    setEditingId(user.id);
    setEditName(user.name);
    setEditStatus(user.status);
  };

  const saveEdit = (id: string) => {
    const updated = users.map(u => u.id === id ? { ...u, name: editName, status: editStatus } : u);
    setUsers(updated);
    localStorage.setItem('bp_all_users', JSON.stringify(updated));
    setEditingId(null);
  };

  // PANTALLA DE LOGIN DE ADMIN
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
          <div className="text-center">
            <div className="inline-flex p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 mb-2">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-lg font-extrabold tracking-wide text-white">Acceso Restringido</h1>
            <p className="text-xs text-neutral-400 mt-1">Panel de Control de Administrador BP</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">Clave de Administrador</label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Ingresa la clave..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-500 text-white font-extrabold text-xs tracking-wider hover:bg-red-600 transition-colors"
            >
              Ingresar como Admin
            </button>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full py-2 text-neutral-400 hover:text-white text-xs font-medium"
            >
              Volver al Inicio
            </button>
          </form>
        </div>
      </div>
    );
  }

  // PANEL PRINCIPAL DE ADMIN
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <header className="border-b border-neutral-800 bg-neutral-900 px-8 py-5 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-wide text-red-400">Panel de Administración General</h1>
            <p className="text-xs text-neutral-400">Gestión de base de datos de clientes</p>
          </div>
        </div>
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-all text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Ir a la Web
        </button>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
            <Users className="w-5 h-5 text-red-400" />
            <span>Usuarios Registrados ({users.length})</span>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950 border-b border-neutral-800 text-neutral-400 uppercase tracking-wider">
                <tr>
                  <th className="p-4">Nombre / Cliente</th>
                  <th className="p-4">Correo Electrónico</th>
                  <th className="p-4">Estado del Sistema</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-neutral-850/50 transition-colors">
                    <td className="p-4 font-medium text-white">
                      {editingId === user.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="bg-neutral-950 border border-neutral-700 rounded px-2 py-1 text-white w-full"
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td className="p-4 text-neutral-400">{user.email}</td>
                    <td className="p-4">
                      {editingId === user.id ? (
                        <input
                          type="text"
                          value={editStatus}
                          onChange={(e) => setEditStatus(e.target.value)}
                          className="bg-neutral-950 border border-neutral-700 rounded px-2 py-1 text-white w-full"
                        />
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                          {user.status}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      {editingId === user.id ? (
                        <>
                          <button
                            onClick={() => saveEdit(user.id)}
                            className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEditing(user)}
                            className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}