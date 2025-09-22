import Image from "next/image";
import SectionTransition from "./SectionTransition";

export default function TrajectorySection() {
  return (
    <section className="bg-[#efefef] relative overflow-hidden">
      
      <div className="max-w-content container-px mx-auto pt-8 md:pt-12 lg:pt-16 pb-28 md:pb-32 lg:pb-36 relative z-10 px-6 sm:px-8 md:px-4">
        <SectionTransition>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenido principal */}
            <SectionTransition delay={200} className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] font-montserrat leading-tight">
                  Más de <span className="text-[#D96E48]">40 Años</span> de Trayectoria
                </h2>
                <div className="w-20 h-1 bg-[#D96E48] mx-auto lg:mx-0 rounded-full"></div>
              </div>
            
            <div className="space-y-6 text-[#333333] font-lato max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg leading-relaxed">
                Desde 1983, nuestro estudio ha sido un referente en el ámbito jurídico, 
                brindando soluciones legales integrales con un enfoque moderno y personalizado.
              </p>
              <p className="text-base leading-relaxed opacity-90">
                Hemos acompañado a miles de clientes en sus procesos legales más importantes, 
                construyendo relaciones basadas en la confianza, la transparencia y la excelencia profesional.
              </p>
              <p className="text-base leading-relaxed opacity-90">
                Nuestro compromiso con la innovación y la actualización constante nos permite 
                ofrecer servicios de vanguardia adaptados a las necesidades del mundo contemporáneo.
              </p>
            </div>
            
              {/* Estadísticas destacadas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                <SectionTransition delay={400} className="text-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl md:text-4xl font-bold text-[#D96E48] font-montserrat mb-2">40+</div>
                  <div className="text-sm font-medium text-[#333333] font-lato uppercase tracking-wide">Años de experiencia</div>
                </SectionTransition>
                <SectionTransition delay={500} className="text-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl md:text-4xl font-bold text-[#D96E48] font-montserrat mb-2">2000+</div>
                  <div className="text-sm font-medium text-[#333333] font-lato uppercase tracking-wide">Casos exitosos</div>
                </SectionTransition>
                <SectionTransition delay={600} className="text-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl md:text-4xl font-bold text-[#D96E48] font-montserrat mb-2">95%</div>
                  <div className="text-sm font-medium text-[#333333] font-lato uppercase tracking-wide">Satisfacción del cliente</div>
                </SectionTransition>
              </div>
            </SectionTransition>
          
            
            {/* Logo y elementos visuales */}
            <SectionTransition delay={300} className="relative order-1 lg:order-2">
              <div className="relative bg-gradient-to-br from-white to-[#f8f8f8] rounded-2xl p-12 shadow-lg">
                {/* Logo principal */}
                <div className="flex items-center justify-center">
                  <div className="relative w-56 h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                    {/* Logo creado con CSS */}
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#D96E48] to-[#E47A34] rounded-2xl flex items-center justify-center shadow-xl mx-auto">
                        <span className="text-white font-bold text-4xl lg:text-5xl font-montserrat">P&A</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-[#333333] font-montserrat">
                          Pérez & Asociados
                        </h3>
                        <p className="text-[#D96E48] font-lato text-sm lg:text-base font-semibold">
                          Estudio Jurídico
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <div className="w-2 h-2 bg-[#D96E48] rounded-full"></div>
                          <span className="text-[#666666] font-lato text-xs lg:text-sm">Fundado en 1983</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#D96E48]/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#D96E48]/20 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-2 h-16 bg-[#D96E48]/30 rounded-full"></div>
              </div>
              
              {/* Línea decorativa conectora */}
              <div className="absolute -bottom-8 left-1/2 w-1 h-16 bg-gradient-to-b from-[#D96E48] to-transparent transform -translate-x-1/2 rounded-full"></div>
            </SectionTransition>
          </div>
        </SectionTransition>
      </div>
      
      {/* Onda en la parte inferior */}
      <div className="absolute -bottom-8 sm:-bottom-4 md:bottom-0 left-0 right-0">
        <div className="relative">
          <svg
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className="w-full h-40 md:h-48"
          >
            <defs>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
                <stop offset="40%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 C120,160 280,160 600,80 C920,0 1080,140 1200,40 L1200,200 L0,200 Z"
              fill="#333333"
            />
            <path
              d="M0,0 C120,160 280,160 600,80 C920,0 1080,140 1200,40 L1200,200 L0,200 Z"
              fill="url(#waveGradient2)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
