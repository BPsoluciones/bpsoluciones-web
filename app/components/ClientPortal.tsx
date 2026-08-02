'use client';
import { useState } from 'react';
import { User, Shield, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ClientPortal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const activeName = isRegistering ? name : email.split('@')[0];
    
    // Guardar sesión activa del usuario
    localStorage.setItem('bp_user', activeName);

    // Guardar o registrar automáticamente al usuario para que aparezca en el Panel de Admin (/admin)
    const existingUsers = JSON.parse(localStorage.getItem('bp_all_users') || '[]');
    const newUserEntry = {
      id: Date.now().toString(),
      name: activeName,
      email: email || 'cliente@bpsoluciones.com',
      status: '100% Protegido'
    };
    
    // Evitar duplicados por correo electrónico en la lista general
    if (!existingUsers.some((u: { email: string }) => u.email === email)) {
      existingUsers.push(newUserEntry);
      localStorage.setItem('bp_all_users', JSON.stringify(existingUsers));
    }

    setIsOpen(false);
    router.push('/portal'); // Redirige a la página completa del portal (/portal/page.tsx)
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all font-bold text-sm"
      >
        <User className="w-4 h-4" />
        Área Clientes
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4">
          <div className="relative w-full max-w-md bg-neutral-950 border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] text-white">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-5">
              <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold tracking-wider">
                {isRegistering ? 'CREAR CUENTA' : 'ACCESO CLIENTES'}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Portal exclusivo de monitoreo BP Soluciones
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-3.5">
              {isRegistering && (
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Nombre y Apellido / Empresa</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Contraseña</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-extrabold uppercase text-xs tracking-wider hover:opacity-95 transition-opacity mt-2"
              >
                {isRegistering ? 'Registrarse Ahora' : 'Ingresar al Portal'}
              </button>
            </form>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-xs text-cyan-400 hover:underline font-medium"
              >
                {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate aquí'}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}