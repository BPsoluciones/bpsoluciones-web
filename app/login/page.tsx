'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar los usuarios en tiempo real desde Supabase
  const fetchUsers = async () => {
    try {
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

  return (
    <div className="min-h-screen bg-neutral-950 p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black mb-6">Panel de Administración - Usuarios Registrados</h1>
        
        {loading ? (
          <p className="text-neutral-400">Cargando registros de la nube...</p>
        ) : users.length === 0 ? (
          <p className="text-neutral-400">No hay usuarios registrados todavía.</p>
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}