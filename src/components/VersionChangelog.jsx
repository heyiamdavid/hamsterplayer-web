import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Zap, Shield, Radio, Music, MessageCircle, ChevronDown, CheckCircle2, Download, Clock } from 'lucide-react'

const releaseHistory = [
  {
    version: 'v2.5.6',
    tag: 'Última Versión',
    isLatest: true,
    releaseDate: 'Septiembre 2026',
    summary: 'Eliminación definitiva de mensajes y chats con lápidas persistentes, visualización de música en vivo en información de contacto y avatar reactivo en Biblioteca.',
    highlights: [
      {
        category: 'Mensajería & Chats',
        icon: MessageCircle,
        color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
        title: 'Persistencia y Eliminación Limpia',
        desc: 'Lápidas locales en disco y filtrado en tiempo real que evitan que mensajes o conversaciones eliminadas reaparezcan al reabrir el chat.'
      },
      {
        category: 'Social & Perfiles',
        icon: Radio,
        color: 'text-[#42A5F5] bg-[#42A5F5]/10 border-[#42A5F5]/30',
        title: 'Música en Vivo en Perfil de Contacto',
        desc: 'Tarjeta de actividad musical en tiempo real ("Escuchando en vivo" y "Canción destacada") en la modal de información de usuario y sección de chats.'
      },
      {
        category: 'Interfaz & Biblioteca',
        icon: Sparkles,
        color: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
        title: 'Foto de Perfil Reactiva',
        desc: 'Actualización instantánea del avatar en la cabecera de la Biblioteca al modificar o subir una nueva foto de perfil sin reiniciar la app.'
      }
    ]
  },
  {
    version: 'v2.5.5',
    tag: 'Estable',
    isLatest: false,
    releaseDate: 'Septiembre 2026',
    summary: 'Salas de escucha grupal en tiempo real, validación anti-salas duplicadas, playlists O(1) sin trabas, confirmación de lectura con doble check y temporizador de apagado perfeccionado.',
    highlights: [
      {
        category: 'Social & Salas',
        icon: Radio,
        color: 'text-[#42A5F5] bg-[#42A5F5]/10 border-[#42A5F5]/30',
        title: 'Listening Party y Prevención de Duplicados',
        desc: 'Escucha compartida en vivo, sincronización de pista y posición, modo flotante PIP y validación para evitar crear múltiples salas simultáneas.'
      },
      {
        category: 'Rendimiento',
        icon: Zap,
        color: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        title: 'Playlists Compartidas O(1) con Duración',
        desc: 'Carga instantánea de canciones remotas indexadas contra la biblioteca local en O(1) sin pérdida de fotogramas, con tiempo de duración visible.'
      },
      {
        category: 'Mensajería',
        icon: MessageCircle,
        color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
        title: 'Confirmación de Lectura y Timestamps',
        desc: 'Doble check azul interactivo con opción de activar/desactivar en Ajustes de Privacidad, horas exactas en burbujas y separadores cronológicos.'
      },
      {
        category: 'Sistema & Audio',
        icon: Sparkles,
        color: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
        title: 'Temporizador y Parser Universal',
        desc: 'Corrección integral en el contador del temporizador de apagado ("Apagado en mm:ss" y "Al terminar la canción") y compatibilidad con timestamps ISO.'
      }
    ]
  },
  {
    version: 'v2.5.0',
    tag: 'Estable',
    isLatest: false,
    releaseDate: 'Septiembre 2026',
    summary: 'Widget de letras optimizado con solución a cierres en launchers, perfiles de amigos renovados y clasificación de géneros musicales.',
    highlights: [
      {
        category: 'Widgets',
        icon: Sparkles,
        color: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
        title: 'Widget de Letras en Inicio',
        desc: 'Solución definitiva para RemoteViews en launchers de Android, colores adaptativos a la carátula y visualización sincronizada.'
      },
      {
        category: 'Comunidad',
        icon: Radio,
        color: 'text-[#42A5F5] bg-[#42A5F5]/10 border-[#42A5F5]/30',
        title: 'Perfiles de Amigos Renovados',
        desc: 'Visualización de biografía, avatar, banner y actividad musical en vivo (reproducción en tiempo real o canción fijada).'
      },
      {
        category: 'Biblioteca',
        icon: Music,
        color: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
        title: 'Organización de Géneros',
        desc: 'Detección inteligente de géneros musicales (Rock, Pop, Electrónica, etc.) con ordenación y reproducción aleatoria dedicada.'
      },
      {
        category: 'Letras',
        icon: MessageCircle,
        color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
        title: 'Letras Comunitarias Estilo Flutter',
        desc: 'Nueva hoja modal con vista limpia, alternador LRC y descarga optimizada desde la base de datos de Supabase.'
      }
    ]
  },
  {
    version: 'v2.4.0',
    tag: 'Estable',
    isLatest: false,
    releaseDate: 'Agosto 2026',
    summary: 'Laboratorio de mezclas Mashup Studio con ecualización de 3 bandas, pitch shift en tiempo real y separación de pistas vocales por IA.',
    highlights: [
      {
        category: 'Mashup Studio',
        icon: Zap,
        color: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        title: 'Mezcla Multipista en Tiempo Real',
        desc: 'Control independiente de volumen, ecualizador de 3 bandas por canal y alteración tonal (pitch shift) en caliente.'
      },
      {
        category: 'Audio IA',
        icon: Music,
        color: 'text-[#42A5F5] bg-[#42A5F5]/10 border-[#42A5F5]/30',
        title: 'Separación de Voces e Instrumentos',
        desc: 'Aislamiento de tallos acústicos vocales e instrumentales de alta resolución sin pérdida de dinámica.'
      }
    ]
  },
  {
    version: 'v2.0.0',
    tag: 'Lanzamiento v2.0',
    isLatest: false,
    releaseDate: 'Junio 2026',
    summary: 'Reescritura completa en Kotlin nativo y Jetpack Compose con motor DSP Bit-Perfect y Ecualizador de 10 bandas.',
    highlights: [
      {
        category: 'Audio',
        icon: Music,
        color: 'text-[#42A5F5] bg-[#42A5F5]/10 border-[#42A5F5]/30',
        title: 'Motor DSP Bit-Perfect',
        desc: 'Procesamiento de audio de 32-bit float con soporte nativo para FLAC, MP3, WAV, AAC y Opus.'
      },
      {
        category: 'Ecualizador',
        icon: Zap,
        color: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
        title: 'Ecualizador Paramétrico de 10 Bandas',
        desc: 'Presets de estudio, amplificador de graves Bass Boost y espacializador envolvente 3D.'
      },
      {
        category: 'Diseño',
        icon: Sparkles,
        color: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
        title: 'Temas Material You y Modo Oscuro AMOLED',
        desc: 'Colores dinámicos extraídos del álbum, negro puro AMOLED y personalización de iconos.'
      }
    ]
  }
]

export default function VersionChangelog() {
  const [activeVersion, setActiveVersion] = useState('v2.5.6')

  const current = releaseHistory.find((r) => r.version === activeVersion) || releaseHistory[0]

  return (
    <section id="changelog" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-3">
            Historial de Actualizaciones
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Novedades de cada versión
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Evolución constante con foco en fidelidad acústica, rendimiento sin compromisos y privacidad absoluta.
          </p>
        </div>

        {/* Version Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {releaseHistory.map((rel) => {
            const isSelected = rel.version === activeVersion
            return (
              <button
                key={rel.version}
                onClick={() => setActiveVersion(rel.version)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#162544] text-white border-[#42A5F5] shadow-lg shadow-[#42A5F5]/10'
                    : 'bg-[#0E1729] text-slate-400 border-[#1E2F52] hover:border-slate-600 hover:text-slate-200'
                }`}
              >
                <span>{rel.version}</span>
                {rel.isLatest && (
                  <span className="text-[10px] font-mono font-bold text-[#42A5F5] uppercase tracking-wider">
                    · Actual
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Active Version Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.version}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121E36] border border-[#1E2F52] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Version Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#1E2F52]">
              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    HamsterPlayer {current.version}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-slate-400 tracking-wide">
                    — {current.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#42A5F5]" />
                  <span>Publicado: {current.releaseDate}</span>
                </div>
              </div>

              {current.isLatest && (
                <a
                  href="assets/app-release.apk"
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#42A5F5] hover:bg-[#64B5F6] text-[#0A111F] font-black text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Descargar {current.version}</span>
                </a>
              )}
            </div>

            {/* Summary */}
            <p className="mt-6 text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {current.summary}
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
              {current.highlights.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0A111F]/70 border border-[#1E2F52] hover:border-[#42A5F5]/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${item.color}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Verification Footer */}
            <div className="mt-8 pt-6 border-t border-[#1E2F52] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#42A5F5]" />
                <span>Compatibilidad probada desde Android 7.0 (Nougat) hasta Android 16</span>
              </div>
              <div className="font-mono text-slate-400">
                Compilación: <span className="text-[#42A5F5]">release-v2.5.6-signed</span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
