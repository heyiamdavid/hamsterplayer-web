import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Check, Sparkles } from 'lucide-react'

const THEMES = [
  {
    id: 'acuatico',
    name: 'Acuático',
    subtitle: 'Cian & Turquesa Vibrante',
    desc: 'Verde petróleo profundo (#0D1F1F) y acentos aguamarina de máxima claridad.',
    gradient: 'from-[#06b6d4] to-[#22d3ee]',
    img: 'assets/images/photo_2_2026-09-06_12-09-25.webp',
  },
  {
    id: 'clasico',
    name: 'Clásico Carmesí',
    subtitle: 'Rojo Pasión & Carbón',
    desc: 'El tema original que define la identidad de HamsterPlayer con contraste extremo.',
    gradient: 'from-[#c0392b] to-[#e74c3c]',
    img: 'assets/images/photo_1_2026-09-06_12-09-25.webp',
  },
  {
    id: 'desierto',
    name: 'Desierto Dorado',
    subtitle: 'Ámbar Cálido & Miel',
    desc: 'Tonos acústicos analógicos que brindan una sensación envolvente.',
    gradient: 'from-[#d97706] to-[#f59e0b]',
    img: 'assets/images/photo_3_2026-09-06_12-09-25.webp',
  },
  {
    id: 'monet',
    name: 'Material You',
    subtitle: 'Monet Dinámico',
    desc: 'Los degradados y botones se adaptan automáticamente a los colores del álbum.',
    gradient: 'from-[#ec4899] to-[#8b5cf6]',
    img: 'assets/images/photo_10_2026-09-06_12-09-25.webp',
  }
]

const APP_ICONS = [
  {
    name: 'Hámster Gris (Oficial)',
    src: 'assets/icons/ic_hamster_gris.jpg',
    badge: 'Predeterminado',
  },
  {
    name: 'Hámster Dorado',
    src: 'assets/icons/ic_hamster_dorado.jpg',
  },
  {
    name: 'Con Semilla',
    src: 'assets/icons/ic_hamster_con_semilla.jpg',
  },
  {
    name: 'Gran Semilla Hi-Fi',
    src: 'assets/icons/ic_gran_semilla.jpg',
  },
  {
    name: 'Cosecha de Semillas',
    src: 'assets/icons/ic_semillas.jpg',
  }
]

export default function ThemesAndIcons() {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0])
  const [selectedIcon, setSelectedIcon] = useState(APP_ICONS[0])

  return (
    <section id="themes" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-3">
            Personalización Visual
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Una aplicación, infinitos estilos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
            Elige entre paletas calibradas para pantallas OLED y personaliza el icono de la app en la pantalla de inicio de tu teléfono.
          </p>
        </div>

        {/* Themes Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Phone Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="phone-mockup w-[240px] sm:w-[270px] aspect-[9/19] z-10 shadow-2xl">
                <div className="phone-notch" />
                <motion.img
                  key={selectedTheme.img}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={selectedTheme.img}
                  alt={selectedTheme.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Theme Selectors */}
          <div className="lg:col-span-7 space-y-3.5">
            {THEMES.map((theme) => {
              const isSelected = selectedTheme.id === theme.id
              return (
                <div
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className={`p-4 sm:p-5 rounded-xl cursor-pointer transition-all border flex items-center gap-4 ${
                    isSelected
                      ? 'bg-[#162544] border-[#42A5F5] shadow-lg scale-[1.01]'
                      : 'bg-[#121E36] border-[#1E2F52] hover:bg-[#162544]/60 hover:border-[#263B66]'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradient} flex-shrink-0 shadow-md flex items-center justify-center text-white`}
                  >
                    {isSelected && <Check className="w-5 h-5 stroke-[3]" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-base">{theme.name}</h4>
                      <span className="text-xs font-mono text-[#42A5F5]">{theme.subtitle}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {theme.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* Launcher Icons Showcase */}
        <div className="bg-[#121E36] rounded-2xl p-6 sm:p-10 border border-[#1E2F52] shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-6 border-b border-[#1E2F52]">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Iconos de Lanzador Oficiales</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Selecciona tu icono preferido directamente desde el menú de Ajustes de la app.
              </p>
            </div>

            <span className="text-xs font-mono font-medium text-slate-400 self-start sm:self-auto">
              5 variantes disponibles
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {APP_ICONS.map((icon, idx) => {
              const isSelected = selectedIcon.name === icon.name
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedIcon(icon)}
                  className={`p-3.5 rounded-xl cursor-pointer flex flex-col items-center gap-2.5 transition-all text-center border ${
                    isSelected
                      ? 'bg-[#162544] border-[#42A5F5] shadow-md scale-105'
                      : 'bg-[#0E1729] border-[#1E2F52] hover:border-[#263B66] hover:bg-[#121E36]'
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow-md border border-white/10">
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-xs font-semibold text-white truncate w-full">
                    {icon.name}
                  </span>

                  {icon.badge && (
                    <span className="text-[9px] font-mono font-bold text-[#42A5F5] bg-[#42A5F5]/15 px-1.5 py-0.5 rounded">
                      {icon.badge}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
