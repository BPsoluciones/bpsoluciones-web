'use client';

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  const phoneNumber = "54903516175777"; // Reemplaza con tu número real de WhatsApp/contacto
  const message = "Hola, me interesa obtener más información sobre sus servicios.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat de WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Botón de Llamada / Teléfono */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Llamar"
        className="flex items-center justify-center w-14 h-14 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}