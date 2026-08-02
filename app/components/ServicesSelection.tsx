export default function ServicesSection() {
  const services = [
    {
      title: "Desarrollo Web & Portales",
      description: "Aplicaciones modernas, escalables y ultrarrápidas con Next.js y paneles de administración a medida.",
    },
    {
      title: "Gestión de Infraestructura",
      description: "Configuración avanzada de dominios, DNS en Cloudflare y despliegues optimizados en la nube.",
    },
    {
      title: "Soporte y Automatización",
      description: "Soluciones tecnológicas integrales para potenciar la productividad y digitalización de tu negocio.",
    },
  ];

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Nuestros <span className="text-cyan-400">Servicios</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Impulsamos tu empresa al siguiente nivel con tecnología de punta y un diseño vanguardista.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl neon-border group cursor-pointer"
          >
            {/* Línea de brillo superior que se ilumina al hacer hover */}
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}