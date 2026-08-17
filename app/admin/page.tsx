'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
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

  // Función para aprobar / activar al usuario
  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'Activo' ? 'Inactivo' : 'Activo';
    const { error } = await supabase
      .from('users')
      .update({ estado: newStatus })
      .eq('id', id);

    if (error) {
      alert('Error al actualizar estado: ' + error.message);
    } else {
      fetchUsers(); // Recargamos la lista para ver el cambio al instante
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black">Panel de Administración - Clientes</h1>
          <button 
            onClick={fetchUsers}
            className="bg-cyan-500 text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-cyan-400 transition-colors"
          >
            Actualizar Lista
          </button>
        </div>

        {loading ? (
          <p className="text-neutral-400">Cargando clientes desde la nube...</p>
        ) : users.length === 0 ? (
          <p className="text-neutral-400">No hay clientes registrados todavía.</p>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id || user.correo} className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg">{user.nombre}</p>
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
                    className="bg-neutral-800 hover:bg-neutral-700 text-xs px-3 py-2 rounded-xl transition-colors"
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