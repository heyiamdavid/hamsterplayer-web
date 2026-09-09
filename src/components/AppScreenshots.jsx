import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Disc, Mic2, Sliders, Library, Users, Settings } from 'lucide-react'

const TABS = [
  {
    id: 'player',
    label: 'Reproductor',
    icon: Disc,
    title: 'Interfaz Principal Hi-Fi',
    desc: 'Diseño limpio con portada completa, controles táctiles y extracción adaptativa de paleta de colores.',
    img: 'assets/images/photo_2_2026-09-06_12-09-25.webp',
  },
  {
    id: 'lyrics',
    label: 'Letras en Vivo',
    icon: Mic2,
    title: 'Karaoke Sincronizado LRC',
    desc: 'Desplazamiento suave línea por línea, soporte de letras locales y traducción comunitaria.',
    img: 'assets/images/photo_10_2026-09-06_12-09-25.webp',
  },
  {
    id: 'eq',
    label: 'Ecualizador DSP',
    icon: Sliders,
    title: 'Curva de Calibración Acústica',
    desc: '10 bandas independientes, refuerzo de bajos (Bass Boost) y virtualizador envolvente.',
    img: 'assets/images/photo_5_2026-09-06_12-09-25.webp',
  },
  {
    id: 'library',
    label: 'Biblioteca',
    icon: Library,
    title: 'Gestor de Música y Carpetas',
    desc: 'Búsqueda ultrarrápida, navegación por carpetas directas del almacenamiento y soporte para listas.',
    img: 'assets/images/photo_4_2026-09-06_12-09-25.webp',
  },
  {
    id: 'social',
    label: 'Salas & Chats',
    icon: Users,
    title: 'Comunidad Cifrada E2EE',
    desc: 'Salas de escucha compartida en vivo y mensajería directa protegida con cifrado AES-256-GCM.',
    img: 'assets/images/photo_7_2026-09-06_12-09-25.webp',
  },
  {
    id: 'settings',
    label: 'Ajustes',
    icon: Settings,
    title: 'Personalización Extrema',
    desc: 'Temas visuales, selección de icono de aplicación y calibración de audio avanzada.',
    img: 'assets/images/photo_6_2026-09-06_12-09-25.webp',
  }
]

const ALL_SCREENSHOTS = [
  { img: 'assets/images/photo_1_2026-09-06_12-09-25.webp', title: 'Tema Carmesí' },
  { img: 'assets/images/photo_2_2026-09-06_12-09-25.webp', title: 'Tema Acuático' },
  { img: 'assets/images/photo_3_2026-09-06_12-09-25.webp', title: 'Tema Desierto' },
  { img: 'assets/images/photo_4_2026-09-06_12-09-25.webp', title: 'Biblioteca' },
  { img: 'assets/images/photo_5_2026-09-06_12-09-25.webp', title: 'Ecualizador DSP' },
  { img: 'assets/images/photo_6_2026-09-06_12-09-25.webp', title: 'Ajustes' },
  { img: 'assets/images/photo_7_2026-09-06_12-09-25.webp', title: 'Perfil Social' },
  { img: 'assets/images/photo_8_2026-09-06_12-09-25.webp', title: 'Metadatos' },
  { img: 'assets/images/photo_9_2026-09-06_12-09-25.webp', title: 'Listas' },
  { img: 'assets/images/photo_10_2026-09-06_12-09-25.webp', title: 'Letras Sincronizadas' },
  { img: 'assets/images/photo_11_2026-09-06_12-09-25.webp', title: 'Géneros Musicales' },
]

export default function AppScreenshots() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const carouselRef = useRef(null)

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return
    const offset = 280 * direction
    carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id="screenshots" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-3">
            Capturas Oficiales en Android
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Míralo por ti mismo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Explora las pantallas reales de la aplicación funcionando sobre Android. Imágenes optimizadas en formato WebP para máxima nitidez y bajo consumo de datos.
          </p>
        </div>

        {/* Interactive Feature Tabs + Phone Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left: Tab Switchers */}
          <div className="lg:col-span-6 space-y-3">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isSelected = activeTab.id === tab.id
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`p-4 sm:p-5 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[#162544] border-[#42A5F5] shadow-lg scale-[1.01]'
                      : 'bg-[#121E36] border-[#1E2F52] hover:bg-[#162544]/60 hover:border-[#263B66]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? 'bg-[#42A5F5] text-[#0A111F] font-bold' : 'bg-[#0A111F] text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-base">{tab.title}</h4>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#42A5F5]" />
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {tab.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Phone Frame with Smooth AnimatePresence */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative">
              <div className="phone-mockup w-[260px] sm:w-[290px] aspect-[9/19] z-10 shadow-2xl">
                <div className="phone-notch" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab.img}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    src={activeTab.img}
                    alt={activeTab.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

        {/* Complete Screenshots Carousel */}
        <div className="relative pt-8 border-t border-[#1E2F52]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Galería de Capturas Directas</h3>
              <p className="text-xs text-slate-400">Desliza para ver todas las vistas del reproductor</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel(-1)}
                className="p-2.5 rounded-xl bg-[#121E36] border border-[#1E2F52] text-slate-300 hover:text-white hover:border-[#42A5F5] transition active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel(1)}
                className="p-2.5 rounded-xl bg-[#121E36] border border-[#1E2F52] text-slate-300 hover:text-white hover:border-[#42A5F5] transition active:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ALL_SCREENSHOTS.map((s, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 flex flex-col items-center gap-3 group"
              >
                <div className="phone-mockup w-[200px] sm:w-[220px] aspect-[9/19] group-hover:border-[#42A5F5] transition-all duration-300">
                  <div className="phone-notch" />
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-300">{s.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
