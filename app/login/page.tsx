'use client';

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Definimos las constantes aquí mismo para evitar errores de importación
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Inicializamos el cliente directamente aquí
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setErrorMsg(error.message);
    else router.push('/portal');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' }}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Entrar</button>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      </form>
    </div>
  );
}