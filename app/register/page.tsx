'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { Shield, Lock, Mail, User, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

const supabase = createClient(
  'https://vfkczehayprgpeacscll.supabase.co',
  'sb_publishable_yaMi1lRMfoomSgZ-SK45fQ_lrSbdTxz'
);

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    // 1. Registro del usuario en Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    // 2. Inserción o actualización en la tabla pública 'clientes'
    if (data.user) {
      const { error: clienteError } = await supabase
        .from('clientes')
        .upsert({
          id: data.user.id,
          email: email,
          nombre: nombre,
          estado_servicio: 'activo',
          is_admin: false
        });

      if (clienteError) {
        console.error('Error al registrar en clientes:', clienteError);
      }
    }

    setSuccessMsg('¡Registro exitoso! Redirigiendo al portal...');
    setLoading(false);
    setTimeout(() => {
      router.push('/portal');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center items-center p-4 relative">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-md w-full bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-8 rounded-3xl shadow-2xl space-y-6 relative z-10">
        
        {/* LOGO IDÉNTICO AL DE LA PÁGINA PRINCIPAL */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 group justify-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="font-black text-white tracking-wider text-lg block leading-tight">
                BP
              </span>
              <span className="font-extrabold text-cyan-400 tracking-[0.2em] text-[11px] block">
                SOLUCIONES
              </span>
            </div>
          </Link>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Crear Cuenta</h1>
            <p className="text-xs text-neutral-400 mt-1">Regístrate para acceder al portal de clientes</p>
          </div>
        </div>

        {/* Mensaje de Error */}
        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl text-xs font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Mensaje de Éxito */}
        {successMsg && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 rounded-xl text-xs font-medium flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-xs text-neutral-400 block mb-1 font-medium">Nombre y Apellido / Empresa</label>
            <div className="relative">
              <User className="w-5 h-5 text-neutral-500 absolute left-3 top-3" />
              <input 
                type="text" 
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Juan Pérez"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 pl-10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-neutral-400 block mb-1 font-medium">Correo Electrónico</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-neutral-500 absolute left-3 top-3" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 pl-10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-neutral-400 block mb-1 font-medium">Contraseña</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-neutral-500 absolute left-3 top-3" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 pl-10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)] mt-2"
          >
            {loading ? 'Registrando...' : 'Completar Registro'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Enlace de Login y Volver */}
        <div className="pt-4 border-t border-neutral-800 text-center space-y-3">
          <p className="text-xs text-neutral-400">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="text-cyan-400 hover:underline font-semibold">
              Inicia sesión aquí
            </Link>
          </p>
          <div>
            <Link href="/" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              ← Volver a la página principal
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}