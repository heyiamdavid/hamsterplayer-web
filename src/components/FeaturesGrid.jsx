import React from 'react'
import { Disc, Sliders, Mic2, Users, Lock, Scissors, Moon, Shield } from 'lucide-react'

const FEATURES = [
  {
    icon: Disc,
    title: 'Motor de Audio Hi-Fi',
    desc: 'Reproducción bit-perfect sin remuestreo forzado. Compatible con FLAC de alta resolución (hasta 24-bit / 192kHz), MP3 320kbps, AAC, OGG, WAV y ALAC.',
    badge: 'Bit-Perfect',
  },
  {
    icon: Sliders,
    title: 'Ecualizador DSP de 10 Bandas',
    desc: 'Respuesta acústica calibrada con precisión matemática. Incluye refuerzo de graves (Bass Boost) y virtualizador tridimensional para auriculares.',
    badge: '64-Bit Precision',
  },
  {
    icon: Mic2,
    title: 'Letras Sincronizadas LRC',
    desc: 'Experiencia karaoke con desplazamiento suave en tiempo real. Soporte para archivos .lrc locales, búsqueda y traducción comunitaria.',
    badge: '8 Idiomas',
  },
  {
    icon: Users,
    title: 'Salas de Escucha en Vivo',
    desc: 'Invita a tus amigos y disfruten de la música perfectamente sincronizada por internet, con baja latencia y chat integrado.',
    badge: 'Baja Latencia',
  },
  {
    icon: Lock,
    title: 'Mensajería Cifrada E2EE',
    desc: 'Las conversaciones directas se cifran y descifran localmente en el móvil mediante AES-256-GCM. Nadie en los servidores puede leer tus mensajes.',
    badge: 'AES-256-GCM',
  },
  {
    icon: Scissors,
    title: 'Mashup Studio',
    desc: 'Laboratorio de mezclas integrado para experimentar con separación de pistas de voz e instrumentales sin perder calidad acústica.',
    badge: 'Experimental',
  },
  {
    icon: Moon,
    title: 'Negro Puro AMOLED',
    desc: 'Modo ultra oscuro con píxeles completamente apagados para ahorrar hasta 30% de batería en pantallas OLED y contraste infinito.',
    badge: 'Ahorro Batería',
  },
  {
    icon: Shield,
    title: '100% Privado y Offline',
    desc: 'Tus canciones y listas nunca salen de tu teléfono. Sin cuentas obligatorias, sin telemetría ni rastreo de hábitos de reproducción.',
    badge: 'Cero Telemetría',
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-3">
            Capacidades del Sistema
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Todo lo que un reproductor moderno debe tener
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Construido para audiófilos y amantes del software limpio. Sin suscripciones forzadas ni anuncios que interrumpan tus canciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="bg-[#121E36] border border-[#1E2F52] hover:border-[#263B66] hover:bg-[#162544] transition-all rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#42A5F5]/15 border border-[#42A5F5]/25 flex items-center justify-center text-[#42A5F5] shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#0A111F] border border-[#1E2F52] text-slate-300">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
