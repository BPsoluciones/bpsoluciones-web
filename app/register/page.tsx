'use client';

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setMessage('¡Registro exitoso! Revisa tu correo o inicia sesión.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0f172a', color: '#fff' }}>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <h2>Crear Cuenta</h2>
        {errorMsg && <p style={{ color: '#ef4444', fontSize: '14px' }}>{errorMsg}</p>}
        {message && <p style={{ color: '#22c55e', fontSize: '14px' }}>{message}</p>}
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #334155', background: '#1e293b', color: '#fff' }}
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #334155', background: '#1e293b', color: '#fff' }}
          required 
        />
        <button 
          type="submit" 
          style={{ padding: '10px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Registrarse
        </button>
        <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
          ¿Ya tienes cuenta? <a href="/login" style={{ color: '#3b82f6' }}>Inicia sesión</a>
        </p>
      </form>
    </div>
  );
}