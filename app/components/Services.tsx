'use client';

import React, { useState } from 'react';
import { Camera, Shield, Wifi, Server, Radio, Zap, Home, Cpu, CheckCircle2, ArrowRight, Wrench } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  badge: string;
}

export default function Services() {
  const servicesList: ServiceItem[] = [
    {
      id: 'cctv',
      title: 'Cámaras de Seguridad CCTV',
      subtitle: 'Videovigilancia en Alta Definición',
      icon: <Camera className="w-6 h-6 text-cyan-400" />,
      description: 'Implementación de sistemas de circuito cerrado de televisión con inteligencia artificial, visión nocturna a color (ColorVu), reconocimiento facial y visualización remota en tiempo real desde tu celular.',
      details: [
        'Cámaras 4K con IA y detección humana',
        'Grabadores inteligentes NVR / DVR',
        'Monitoreo remoto 24/7 desde la app',
        'Instalación y cableado profesional oculto'
      ],
      badge: 'Más Solicitado'
    },
    {
      id: 'alarmas',
      title: 'Sistemas de Alarmas',
      subtitle: 'Protección Antintrusión Avanzada',
      icon: <Shield className="w-6 h-6 text-pink-400" />,
      description: 'Equipos de seguridad contra robos e intrusiones con paneles inteligentes, comunicación celular de respaldo, sensores de movimiento anti-masking y control total desde aplicaciones móviles.',
      details: [
        'Paneles cableados e inalámbricos de alta gama',
        'Sensores magnéticos y de movimiento avanzados',
        'Notificaciones instantáneas al smartphone',
        'Integración con centrales de monitoreo'
      ],
      badge: 'Seguridad Total'
    },
    {
      id: 'electricidad',
      title: 'Electricidad General',
      subtitle: 'Instalaciones y Tableros Eléctricos',
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      description: 'Instalaciones eléctricas residenciales y comerciales bajo estrictas normas de seguridad. Armado de tableros seccionales, colocación de protecciones termomagnéticas y disyuntores.',
      details: [
        'Cableados y tendidos eléctricos certificados',
        'Armado y optimización de tableros de protección',
        'Instalación de iluminación LED interior y exterior',
        'Detección y solución de fallas eléctricas'
      ],
      badge: 'Esencial'
    },
    {
      id: 'domotica',
      title: 'Domótica y Smart Home',
      subtitle: 'Automatización y Confort Inteligente',
      icon: <Home className="w-6 h-6 text-pink-400" />,
      description: 'Transforma tu hogar o espacio comercial en un entorno inteligente. Controla iluminación, climatización, persianas y accesos de forma remota o mediante comandos de voz.',
      details: [
        'Automatización de iluminación y escenas',
        'Control inteligente de portones y accesos',
        'Integración con asistentes virtuales (Alexa / Google)',
        'Monitoreo y gestión de consumo eléctrico'
      ],
      badge: 'Innovación'
    },
    {
      id: 'cercos',
      title: 'Cercos Eléctricos',
      subtitle: 'Seguridad Perimetral Activa',
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      description: 'Instalación de sistemas de cerramientos perimetrales electrificados de alto voltaje disuasivo. Protege el perímetro exterior de viviendas, industrias y comercios de manera efectiva.',
      details: [
        'Energizadores de alta potencia y bajo consumo',
        'Tendido de alambre tensor y aisladores reforzados',
        'Sistemas de alarma por corte o descarga a tierra',
        'Batería de respaldo ante cortes de energía'
      ],
      badge: 'Perímetro'
    },
    {
      id: 'redes',
      title: 'Redes y Conectividad',
      subtitle: 'Infraestructura Wi-Fi y Cableada',
      icon: <Wifi className="w-6 h-6 text-pink-400" />,
      description: 'Diseño y despliegue de redes corporativas y hogareñas de alto rendimiento. Cobertura total sin zonas muertas utilizando tecnología Wi-Fi 6 y equipos profesionales.',
      details: [
        'Sistemas Mesh y Access Points corporativos',
        'Configuración de routers y firewalls avanzados',
        'Cableado estructurado UTP / Fibra óptica',
        'Enlaces de internet de largo alcance (PtP)'
      ],
      badge: 'Alta Velocidad'
    },
    {
      id: 'servidores',
      title: 'Servidores y Networking',
      subtitle: 'Gestión y Almacenamiento de Datos',
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      description: 'Instalación, configuración y mantenimiento de racks de comunicaciones, servidores locales y sistemas de respaldo de energía para garantizar la continuidad operativa de tu empresa.',
      details: [
        'Armado y certificación de Racks de Datos',
        'Configuración de Switches administrables',
        'Sistemas de respaldo eléctrico (UPS)',
        'Políticas de seguridad informática y respaldos'
      ],
      badge: 'Empresarial'
    },
    {
      id: 'comunicaciones',
      title: 'Radiocomunicaciones',
      subtitle: 'Radio-enlaces y Comunicación Crítica',
      icon: <Radio className="w-6 h-6 text-pink-400" />,
      description: 'Sistemas de comunicación por radiofrecuencia para empresas de seguridad, industrias y logística que requieren comunicación instantánea, cifrada y sin depender de la señal celular.',
      details: [
        'Radios portátiles y móviles digitales',
        'Instalación de repetidoras de alcance',
        'Sistemas de comunicación privada',
        'Mantenimiento técnico especializado'
      ],
      badge: 'Operativa'
    },
    {
      id: 'mantenimiento',
      title: 'Soporte y Mantenimiento',
      subtitle: 'Asistencia Técnica Preventiva y Correctiva',
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      description: 'Planes de servicio técnico especializado para optimizar, reparar y actualizar tus sistemas tecnológicos actuales con atención prioritaria y garantía oficial.',
      details: [
        'Service preventivo de cámaras y alarmas',
        'Optimización y limpieza de redes',
        'Atención técnica presencial y remota',
        'Garantía oficial en todos los trabajos'
      ],
      badge: 'Garantizado'
    }
  ];

  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesList[0]);

  return (
    <section id="servicios" className="py-24 bg-black text-white relative overflow-hidden border-b border-cyan-500/20">
      
      {/* Efectos lumínicos decorativos */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            SOLUCIONES TECNOLÓGICAS INTEGRALES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider uppercase">
            NUESTROS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">SERVICIOS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Selecciona cada categoría interactiva para conocer en detalle el alcance, equipamiento y especificaciones técnicas de lo que ofrecemos.
          </p>
        </div>

        {/* Grilla de Botones Interactivos de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {servicesList.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden ${
                  isSelected 
                    ? 'bg-cyan-950/60 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.25)] scale-[1.02]' 
                    : 'bg-gray-900/40 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/20'
                }`}
              >
                <div className={`p-3 rounded-xl bg-black/60 border border-cyan-500/30 flex-shrink-0 transition-transform group-hover:scale-110 ${isSelected ? 'border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.4)]' : ''}`}>
                  {service.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${isSelected ? 'bg-pink-500/20 text-pink-300 border border-pink-400/30' : 'bg-cyan-500/10 text-cyan-400'}`}>
                      {service.badge}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold tracking-wide truncate ${isSelected ? 'text-pink-300' : 'text-white group-hover:text-cyan-300'}`}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate mt-0.5">
                    {service.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Panel Desplegable de Detalles del Servicio Seleccionado */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-gray-900/90 via-black to-gray-900/90 border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] backdrop-blur-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Información Principal */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  {selectedService.icon}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-pink-400 font-bold">
                    {selectedService.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
                {selectedService.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
                >
                  SOLICITAR ESTE SERVICIO
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Columna Derecha: Características Clave */}
            <div className="lg:col-span-5 bg-black/60 p-6 rounded-2xl border border-cyan-500/20 space-y-3">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Especificaciones del Servicio:
              </span>
              
              {selectedService.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 py-1 border-b border-cyan-500/10 last:border-none">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}