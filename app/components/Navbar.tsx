'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Shield, Menu, X } from 'lucide-react';
import ClientPortal from './ClientPortal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO MEJORADO Y PROFESIONAL */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="font-black text-white tracking-wider text-base block leading-tight">
              BP
            </span>
            <span className="font-extrabold text-cyan-400 tracking-[0.2em] text-[10px] block">
              SOLUCIONES
            </span>
          </div>
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-neutral-300">
          <Link href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</Link>
          <Link href="#monitoreo" className="hover:text-cyan-400 transition-colors">Monitoreo</Link>
          <Link href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</Link>
          <Link href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
        </nav>

        {/* ACCESO CLIENTES Y BOTÓN MÓVIL */}
        <div className="flex items-center gap-3">
          <ClientPortal />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 py-6 space-y-4">
          <Link
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-cyan-400"
          >
            Servicios
          </Link>
          <Link
            href="#monitoreo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-cyan-400"
          >
            Monitoreo
          </Link>
          <Link
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-cyan-400"
          >
            Proyectos
          </Link>
          <Link
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-cyan-400"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}