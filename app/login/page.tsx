'use client';
import { useState } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('bp_all_users') || '[]');
    
    if (isRegistering) {
      const newUser = { id: Date.now().toString(), name, email, password, status: 'Inactivo' };
      existingUsers.push(newUser);
      localStorage.setItem('bp_all_users', JSON.stringify(existingUsers));
      alert('Registro enviado. Un administrador activará su cuenta.');
      setIsRegistering(false);
    } else {
      const found = existingUsers.find((u: any) => u.email === email && u.password === password);
      if (found?.status === 'Activo') {
        localStorage.setItem('bp_user', found.name);
        router.push('/portal');
      } else {
        alert('Credenciales inválidas o cuenta pendiente de activación.');
      }
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
          {isRegistering && <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white" />}
          <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white" />
          <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white" />
          <button type="submit" className="w-full bg-cyan-500 font-bold py-3 rounded-xl text-black">
            {isRegistering ? 'Registrarse' : 'Ingresar'}
          </button>
        </form>
        <button onClick={() => setIsRegistering(!isRegistering)} className="w-full text-center text-xs text-cyan-400 mt-6 hover:underline">
          {isRegistering ? '¿Ya tienes cuenta?' : '¿No tienes cuenta? Regístrate'}
        </button>
      </div>
    </div>
  );
}