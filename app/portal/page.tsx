'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function PortalPage() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('users').select('*');
      if (error) throw error;
      if (data) setUsers(data);
    } catch (err: any) {
      console.error('Error al cargar usuarios:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'Activo' ? 'Inactivo' : 'Activo';
    const { error } = await supabase
      .from('users')
      .update({ estado: newStatus })
      .eq('id', id);

    if (error) {
      alert('Error al actualizar estado: ' + error.message);
    } else {
      fetchUsers();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('bp_user');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black">Panel de Administración</h1>
            <p className="text-sm text-neutral-400 mt-1">Clientes registrados desde cualquier dispositivo</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={fetchUsers}
              className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
            >
              Actualizar Lista
            </button>
            <button 
              onClick={handleLogout}
              className="bg-red-500/20 text-red-400 hover:bg-red-500/30 px-4 py-2 rounded-xl text-xs font-bold transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-neutral-400">Cargando registros desde la nube...</p>
        ) : users.length === 0 ? (
          <p className="text-neutral-400">No hay clientes registrados todavía.</p>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id || user.correo} className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex justify-between items-center shadow-lg">
                <div>
                  <p className="font-bold text-lg text-white">{user.nombre}</p>
                  <p className="text-sm text-neutral-400">{user.correo}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    user.estado === 'Activo' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {user.estado || 'Inactivo'}
                  </span>
                  <button
                    onClick={() => toggleStatus(user.id, user.estado)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    {user.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}