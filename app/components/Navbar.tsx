'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ClientPortal from './ClientPortal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 bg-neutral-900 shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center group-hover:border-cyan-400 transition-colors">
              <Image 
                src="/logo.png" 
                alt="BP Soluciones Logo" 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-white font-extrabold tracking-wider text-lg sm:text-xl">
              BP <span className="text-cyan-400">SOLUCIONES</span>
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-neutral-300">
            <Link href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            <Link href="#monitoreo" className="hover:text-cyan-400 transition-colors">Monitoreo</Link>
            <Link href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</Link>
            <Link href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</Link>
            <Link href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
            
            {/* Componente de Registro / Área Clientes */}
            <ClientPortal />
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center gap-3">
            <ClientPortal />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú desplegable para Celular */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-cyan-500/20 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
          <Link 
            href="#inicio" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-cyan-400 font-medium"
          >
            Inicio
          </Link>
          <Link 
            href="#monitoreo" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-cyan-400 font-medium"
          >
            Monitoreo
          </Link>
          <Link 
            href="#servicios" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-cyan-400 font-medium"
          >
            Servicios
          </Link>
          <Link 
            href="#proyectos" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-neutral-200 hover:text-cyan-400 font-medium"
          >
            Proyectos
          </Link>
          <Link 
            href="#contacto" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-extrabold uppercase text-sm tracking-wider"
          >
            Contacto Directo
          </Link>
        </div>
      )}
    </nav>
  );
}