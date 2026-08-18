'use client';

import { supabase } from '@/lib/supabase'; // Asegúrate de que la ruta coincida con donde creaste el archivo
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push('/portal');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#090d16', color: '#fff' }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <h2>Iniciar Sesión</h2>
        {errorMsg && <p style={{ color: '#ef4444', fontSize: '13px' }}>{errorMsg}</p>}
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', background: '#1f2937', border: '1px solid #374151', color: '#fff', borderRadius: '4px' }}
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', background: '#1f2937', border: '1px solid #374151', color: '#fff', borderRadius: '4px' }}
          required 
        />
        <button 
          type="submit" 
          style={{ padding: '10px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}