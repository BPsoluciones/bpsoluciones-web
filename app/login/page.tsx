'use client';

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!supabaseUrl || !supabaseAnonKey) {
      setErrorMsg('Faltan configurar las variables de Supabase en Vercel.');
      return;
    }

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
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#090d16', 
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <form onSubmit={handleLogin} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%', 
        maxWidth: '380px', 
        padding: '32px', 
        background: '#111827', 
        borderRadius: '12px', 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
        border: '1px solid #1f2937',
        gap: '16px' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>Iniciar Sesión</h2>
          <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Acceso al panel de administración</p>
        </div>

        {errorMsg && (
          <div style={{ padding: '10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '6px', color: '#f87171', fontSize: '13px' }}>
            {errorMsg}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '13px', color: '#d1d5db' }}>Correo electrónico</label>
          <input 
            type="email" 
            placeholder="tucorreo@ejemplo.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              padding: '12px', 
              borderRadius: '6px', 
              border: '1px solid #374151', 
              background: '#1f2937', 
              color: '#fff',
              outline: 'none',
              fontSize: '15px'
            }}
            required 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '13px', color: '#d1d5db' }}>Contraseña</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              padding: '12px', 
              borderRadius: '6px', 
              border: '1px solid #374151', 
              background: '#1f2937', 
              color: '#fff',
              outline: 'none',
              fontSize: '15px'
            }}
            required 
          />
        </div>

        <button 
          type="submit" 
          style={{ 
            marginTop: '8px',
            padding: '12px', 
            background: '#2563eb', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '6px', 
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '15px',
            transition: 'background 0.2s'
          }}
        >
          Entrar al Sistema
        </button>
      </form>
    </div>
  );
}