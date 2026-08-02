'use client';
import { useState } from 'react';
import { User, Shield, X, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ClientPortal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  
  // Campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [cameras, setCameras] = useState('');
  const [cameraModels, setCameraModels] = useState('');
  const [monitoringService, setMonitoringService] = useState('Monitoreo 24/7');
  const [errorMsg, setErrorMsg] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const existingUsers = JSON.parse(localStorage.getItem('bp_all_users') || '[]');

    if (isRegistering) {
      // Validar si el correo ya existe
      if (existingUsers.some((u: { email: string }) => u.email === email)) {
        setErrorMsg('Este correo ya está registrado.');
        return;
      }

      const newUserEntry = {
        id: Date.now().toString(),
        name,
        email,
        password, // Guardamos la contraseña para validación posterior
        address,
        phone,
        cameras: cameras || '0',
        cameraModels: cameraModels || 'Estándar',
        monitoringService,
        status: 'Inactivo' // Arranca inactivo hasta que el admin lo active
      };

      existingUsers.push(newUserEntry);
      localStorage.setItem('bp_all_users', JSON.stringify(existingUsers));
      localStorage.setItem('bp_user', name);
      
      setIsOpen(false);
      router.push('/portal');
    } else {
      // Lógica de inicio de sesión validando la contraseña
      const foundUser = existingUsers.find((u: { email: string; password?: string }) => u.email === email);

      if (!foundUser) {
        setErrorMsg('Correo no registrado.');
        return;
      }

      if (foundUser.password && foundUser.password !== password) {
        setErrorMsg('Contraseña incorrecta.');
        return;
      }

      localStorage.setItem('bp_user', foundUser.name);
      setIsOpen(false);
      router.push('/portal');
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4 overflow-y-auto py-10">
          <div className="relative w-full max-w-lg bg-neutral-950 border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)] text-white">
            
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
                {isRegistering ? 'REGISTRO DE CLIENTE' : 'ACCESO CLIENTES'}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Portal exclusivo de monitoreo BP Soluciones
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-3">
              {isRegistering && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Nombre y Apellido</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">Teléfono de Contacto</label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. 1122334455"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">Cantidad de Cámaras</label>
                      <input
                        type="number"
                        required
                        value={cameras}
                        onChange={(e) => setCameras(e.target.value)}
                        placeholder="Ej. 4"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Dirección del Objetivo</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Ej. Av. Corrientes 1234"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">Modelos de Cámaras</label>
                      <input
                        type="text"
                        required
                        value={cameraModels}
                        onChange={(e) => setCameraModels(e.target.value)}
                        placeholder="Ej. Dahua IP / Hikvision"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">Servicio de Monitoreo</label>
                      <input
                        type="text"
                        required
                        value={monitoringService}
                        onChange={(e) => setMonitoringService(e.target.value)}
                        placeholder="Ej. 24/7 con Patrulla"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
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
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-extrabold uppercase text-xs tracking-wider hover:opacity-95 transition-opacity mt-3"
              >
                {isRegistering ? 'Completar Registro' : 'Ingresar al Portal'}
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