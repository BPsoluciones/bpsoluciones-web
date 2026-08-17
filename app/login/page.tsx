'use client';
import { useState } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegistering) {
        // Registrar usuario en Supabase
        const { error } = await supabase.from('users').insert([
          { nombre: name, correo: email, contraseña: password, estado: 'Inactivo' }
        ]);

        if (error) throw error;

        alert('¡Registro exitoso! Un administrador activará tu cuenta pronto.');
        setIsRegistering(false);
      } else {
        // Iniciar sesión buscando en Supabase
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('correo', email)
          .eq('contraseña', password)
          .single();

        if (error || !data) {
          alert('Correo o contraseña incorrectos.');
        } else if (data.estado !== 'Activo') {
          alert('Tu cuenta está pendiente de activación por el administrador.');
        } else {
          localStorage.setItem('bp_user', data.nombre);
          router.push('/portal');
        }
      }
    } catch (err: any) {
      alert('Ocurrió un error: ' + (err.message || 'Inténtalo de nuevo'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
        <Link href="/" className="text-neutral-500 hover:text-white mb-6 block">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-2xl font-black text-white">{isRegistering ? 'Crear Cuenta' : 'Bienvenido a BP'}</h1>
        </div>
        <form onSubmit={handleAuth} className="space-y-4">
          {isRegistering && (
            <input 
              type="text" 
              placeholder="Nombre completo" 
              required
              onChange={(e) => setName(e.target.value)} 
              className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white text-xs outline-none focus:border-cyan-500" 
            />
          )}
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            required
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white text-xs outline-none focus:border-cyan-500" 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            required
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white text-xs outline-none focus:border-cyan-500" 
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-500 font-bold py-3 rounded-xl text-black text-xs hover:bg-cyan-400 transition-colors"
          >
            {loading ? 'Procesando...' : (isRegistering ? 'Registrarse' : 'Ingresar')}
          </button>
        </form>
        <button 
          type="button"
          onClick={() => setIsRegistering(!isRegistering)} 
          className="w-full text-center text-xs text-cyan-400 mt-6 hover:underline"
        >
          {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
        </button>
      </div>
    </div>
  );
}