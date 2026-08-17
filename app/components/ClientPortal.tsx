'use client';
import { useState } from 'react';
import { User, Shield, X, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ClientPortal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    const existingUsers = JSON.parse(localStorage.getItem('bp_all_users') || '[]');

    if (isRegistering) {
      if (existingUsers.some((u: any) => u.email === email)) {
        setErrorMsg('El correo ya está registrado.');
        return;
      }
      const newUser = { 
        id: Date.now().toString(), 
        name, 
        email, 
        password, 
        status: 'Inactivo' 
      };
      existingUsers.push(newUser);
      localStorage.setItem('bp_all_users', JSON.stringify(existingUsers));
      alert('Registro enviado. Un administrador activará su cuenta pronto.');
      setIsRegistering(false);
    } else {
      const foundUser = existingUsers.find((u: any) => u.email === email && u.password === password);
      if (foundUser) {
        if (foundUser.status === 'Activo') {
          localStorage.setItem('bp_user', foundUser.name);
          setIsOpen(false);
          router.push('/portal');
        } else {
          setErrorMsg('Cuenta pendiente de activación por el administrador.');
        }
      } else {
        setErrorMsg('Correo o contraseña incorrectos.');
      }
    }
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 overflow-y-auto">
          <div className="w-full max-w-sm bg-neutral-900 border border-neutral-700 rounded-3xl p-6 shadow-2xl relative mt-20 mb-auto">
            
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 p-2 bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto bg-cyan-500/10 flex items-center justify-center rounded-full mb-3 border border-cyan-500/20">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-white font-black text-xl">{isRegistering ? 'Registro' : 'Acceso Clientes'}</h2>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" /> 
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-3">
              {isRegistering && (
                <div>
                  <label className="block text-[11px] text-neutral-400 mb-1">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    required 
                    onChange={(e) => setName(e.target.value)} 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-xs focus:border-cyan-500 outline-none" 
                  />
                </div>
              )}
              
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">Correo electrónico</label>
                <input 
                  type="email" 
                  placeholder="correo@ejemplo.com" 
                  required 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-xs focus:border-cyan-500 outline-none" 
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">Contraseña</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-white text-xs focus:border-cyan-500 outline-none" 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-cyan-500 text-black font-bold py-3 rounded-xl text-xs hover:bg-cyan-400 transition-colors mt-2"
              >
                {isRegistering ? 'Registrarse' : 'Ingresar'}
              </button>
            </form>

            <button 
              type="button"
              onClick={() => setIsRegistering(!isRegistering)} 
              className="w-full text-center text-xs text-cyan-400 mt-5 hover:underline block"
            >
              {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}