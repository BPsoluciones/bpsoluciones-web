'use client';

import React, { useState } from 'react';
import { ShieldCheck, Cpu, Wifi, Lock, ArrowRight, PhoneCall, Info, CheckCircle2 } from 'lucide-react';

interface BrandInfo {
  name: string;
  category: string;
  description: string;
  features: string[];
}

export default function Hero() {
  const brands: BrandInfo[] = [
    {
      name: "HIKVISION",
      category: "Videovigilancia & IA",
      description: "Líder mundial en tecnología de video. Ofrece cámaras con inteligencia artificial, reconocimiento facial, térmicas y sistemas analíticos avanzados de seguridad.",
      features: ["Cámaras 4K & ColorVu", "Inteligencia Artificial", "Grabadores NVR/DVR de alta capacidad"]
    },
    {
      name: "DAHUA",
      category: "Seguridad Electrónica",
      description: "Soluciones de videovigilancia inteligente y plataformas IoT. Destacada por su tecnología Starlight y sistemas de control perimetral de alta precisión.",
      features: ["Tecnología WizSense", "Protección Perimetral Activa", "Domos PTZ Inteligentes"]
    },
    {
      name: "HILOOK",
      category: "CCTV Profesional Accesible",
      description: "Marca respaldada por Hikvision que combina excelente calidad de imagen con una gran relación costo-beneficio para proyectos residenciales y pymes.",
      features: ["Alta Definición HD-TVI & IP", "Instalación Simplificada", "Aplicación móvil intuitiva"]
    },
    {
      name: "UBIQUITI",
      category: "Conectividad & Redes",
      description: "Infraestructura de red de alta gama (UniFi). Proporciona enlaces de largo alcance, puntos de acceso Wi-Fi corporativos y enrutadores de alto rendimiento.",
      features: ["Wi-Fi 6 de Alta Velocidad", "Gestión Centralizada UniFi", "Enlaces PtP / PtMP profesionales"]
    },
    {
      name: "MIKROTIK",
      category: "Enrutamiento & Telecom",
      description: "Hardware de networking avanzado y sistemas operativos RouterOS para control de tráfico, balanceo de cargas y seguridad de red avanzada.",
      features: ["Firewalls de alto rendimiento", "Balanceadores de ISP", "Switches administrables"]
    },
    {
      name: "PARADOX",
      category: "Alarmas & Intrusión",
      description: "Sistemas de alarmas residenciales y comerciales de alta seguridad. Innovación en paneles con comunicación IP/GSM y sensores anti-masking.",
      features: ["Paneles Spectra & Magellan", "App móvil Insite Gold", "Sensores de doble tecnología"]
    },
    {
      name: "DSC",
      category: "Monitoreo de Alarmas",
      description: "Estándar global en seguridad electrónica contra intrusión. Sistemas cableados e inalámbricos robustos para máxima confiabilidad.",
      features: ["Línea PowerSeries Neo", "Comunicación redundante", "Alta inmunidad a falsas alarmas"]
    },
    {
      name: "TEXECOM",
      category: "Seguridad Avanzada",
      description: "Tecnología de alarmas premier con integración domótica y sistemas de grado comercial con certificación internacional.",
      features: ["Paneles Imperio Premier Elite", "Automatización integrada", "Detectores de exterior avanzados"]
    },
    {
      name: "MOTOROLA",
      category: "Radiocomunicaciones",
      description: "Sistemas de comunicación crítica y radio-enlaces profesionales para operaciones corporativas, seguridad privada y logística.",
      features: ["Radios Portátiles Digitales", "Repetidoras de largo alcance", "Comunicación cifrada segura"]
    },
    {
      name: "CISCO",
      category: "Networking Empresarial",
      description: "Líder mundial en tecnología de redes y ciberseguridad corporativa. Conmutación y enrutamiento robusto para empresas exigentes.",
      features: ["Switches Catalyst & Small Business", "Seguridad perimetral", "Alta disponibilidad"]
    },
    {
      name: "TP-LINK",
      category: "Redes & Smart Home",
      description: "Soluciones de conectividad confiables tanto para hogares como para entornos corporativos y empresariales de gran escala (Omada SDN).",
      features: ["Ecosistema Omada Cloud", "Routers & Extensores Mesh", "Cámaras Wi-Fi Tapo"]
    },
    {
      name: "EZVIZ",
      category: "Videovigilancia Residencial",
      description: "Cámaras inteligentes Wi-Fi para hogares con audio bidireccional, visión nocturna inteligente y alertas directas al celular.",
      features: ["Cámaras motorizadas 360°", "Detección de movimiento por IA", "Almacenamiento Cloud / SD"]
    }
  ];

  // Estado para la marca seleccionada (por defecto la primera)
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo>(brands[0]);

  return (
    <section className="relative overflow-hidden bg-black text-white pt-10 pb-20 border-b border-cyan-500/20">
      {/* Efectos de luz de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contenido Principal en 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Textos y Botones */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Sello / Logo Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs tracking-widest text-cyan-300 font-semibold uppercase">BP SOLUCIONES • TECNOLOGÍA AVANZADA</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
              SEGURIDAD, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                TECNOLOGÍA Y
              </span> <br />
              CONECTIVIDAD
            </h1>

            {/* Descripción */}
            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Infraestructura inteligente de alta gama para hogares, comercios y corporaciones. Máximo rendimiento, monitoreo activo y garantía oficial.
            </p>

            {/* Lista de Beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Instalación Profesional</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Cpu className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Equipos de Primer Nivel</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Wifi className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Soporte Dedicado</span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contacto"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300"
              >
                CONTÁCTANOS
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5493516175777?text=Hola,%20me%20gustaría%20recibir%20asesoramiento%20técnico."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900/80 border border-cyan-500/30 text-cyan-400 font-bold tracking-wide hover:bg-cyan-950/40 hover:border-cyan-400 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5" />
                LLÁMANOS
              </a>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Tecnológica Futurista */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-gradient-to-b from-gray-900/90 to-black border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl group">
              
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>

              <div className="relative z-10 space-y-6 text-center">
                
                <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-pulse">
                  <Lock className="w-10 h-10 text-cyan-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-wider text-white">ECOSISTEMA DE SEGURIDAD</h3>
                  <p className="text-xs text-cyan-400 tracking-widest uppercase font-semibold">Inteligencia Artificial & Monitoreo 24/7</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/20 text-left">
                    <span className="block text-[10px] text-gray-400 uppercase">Estado Red</span>
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 100% Activo
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/20 text-left">
                    <span className="block text-[10px] text-gray-400 uppercase">Protección</span>
                    <span className="text-sm font-bold text-cyan-300 mt-0.5">Grado Militar</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-cyan-500/10 text-xs text-gray-400 flex justify-between items-center">
                  <span>CCTV • Alarmas • Redes</span>
                  <span className="text-cyan-400 font-bold">BP SOLUCIONES</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Sección Interactiva de Marcas Aliadas */}
        <div className="mt-24 pt-12 border-t border-cyan-500/20">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold">ALIANZAS ESTRATÉGICAS</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
              MARCAS LÍDERES E INTERNACIONALES
            </h2>
            <p className="text-gray-400 text-sm">
              Haz clic en cualquiera de las marcas para conocer sus soluciones y especificaciones técnicas disponibles en nuestras instalaciones.
            </p>
          </div>

          {/* Grilla de Botones de Marcas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {brands.map((brand, index) => {
              const isSelected = selectedBrand.name === brand.name;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedBrand(brand)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 text-center ${
                    isSelected 
                      ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105' 
                      : 'bg-gray-900/40 border-cyan-500/10 hover:border-cyan-400/40 hover:bg-cyan-950/20 text-gray-400'
                  }`}
                >
                  <span className={`text-sm font-black tracking-wider ${isSelected ? 'text-cyan-300' : 'text-gray-300'}`}>
                    {brand.name}
                  </span>
                  <span className="text-[10px] text-gray-500 mt-1 truncate max-w-full">
                    {brand.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel Desplegable de Descripción de la Marca Seleccionada */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gray-900/90 via-black to-gray-900/90 border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-xl transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    {selectedBrand.category}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-wide">
                    {selectedBrand.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedBrand.description}
                </p>
              </div>

              {/* Características Clave */}
              <div className="bg-black/60 p-5 rounded-xl border border-cyan-500/20 space-y-2 md:w-80 flex-shrink-0">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-2 flex items-center gap-1.5">
                  <Info className="w-4 h-4" /> Tecnologías Destacadas:
                </span>
                {selectedBrand.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}