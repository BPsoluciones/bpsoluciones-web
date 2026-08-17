'use client';
import { useState } from 'react';
import { User, Shield, X, AlertCircle, Lock } from 'lucide-react';
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-neutral-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
              <h2 className="text-white font-bold">{isRegistering ? 'Registro' : 'Acceso Clientes'}</h2>
            </div>

            {errorMsg && (
              <div className="mb-4 p-2 bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> {errorMsg}
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-3">
              {isRegistering && (
                <input type="text" placeholder="Nombre completo" required onChange={(e) => setName(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-xs" />
              )}
              <input type="email" placeholder="Correo electrónico" required onChange={(e) => setEmail(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-xs" />
              <input type="password" placeholder="Contraseña" required onChange={(e) => setPassword(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-white text-xs" />
              
              <button type="submit" className="w-full bg-cyan-500 text-black font-bold py-2 rounded-xl text-xs hover:bg-cyan-400 transition-colors">
                {isRegistering ? 'Registrarse' : 'Ingresar'}
              </button>
            </form>

            <button onClick={() => setIsRegistering(!isRegistering)} className="w-full text-center text-[10px] text-cyan-400 mt-4 hover:underline">
              {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}