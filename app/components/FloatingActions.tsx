'use client';

import React from 'react';

export default function FloatingActions() {
  const phoneNumber = "5493516175777";
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
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white text-2xl rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        💬
      </a>

      {/* Botón de Llamada / Teléfono */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Llamar"
        className="flex items-center justify-center w-14 h-14 bg-[#00f3ff] hover:bg-cyan-400 text-gray-950 text-xl font-bold rounded-full shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        📞
      </a>
    </div>
  );
}