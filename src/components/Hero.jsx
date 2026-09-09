import React from 'react'
import { motion } from 'framer-motion'
import { Download, Play, Disc, ShieldCheck, Cpu, Volume2, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Direct Category Label - No bubble */}
            <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-4">
              HamsterPlayer · 100% Offline · Sin Anuncios
            </p>

            {/* Main Headline - Solid Pure White */}
            <h1 className="text-3xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.15] mb-6 break-words">
              Tu música.<br />
              Sin limitaciones.<br />
              Con fidelidad pura.
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Diseñado desde cero para Android con arquitectura de audio bit-perfect. Ecualizador DSP de 10 bandas, letras sincronizadas en tiempo real, salas compartidas de baja latencia y mensajería E2EE cifrada con AES-256-GCM.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center w-full max-w-md mx-auto lg:mx-0">
              <a
                href="assets/app-release.apk"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#42A5F5] hover:bg-[#64B5F6] text-[#0A111F] font-black text-sm sm:text-base shadow-lg shadow-[#42A5F5]/10 hover:shadow-[#42A5F5]/20 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Descargar APK — 23.5 MB</span>
              </a>

              <a
                href="#player"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-[#121E36] border border-[#1E2F52] hover:bg-[#162544] text-white font-semibold text-sm sm:text-base transition-all"
              >
                <Play className="w-4 h-4 text-[#42A5F5] fill-[#42A5F5]" />
                <span>Probar Reproductor</span>
              </a>
            </div>

            {/* Quality Badges */}
            <div className="mt-10 pt-8 border-t border-[#1E2F52] flex flex-wrap gap-y-3 gap-x-6 justify-center lg:justify-start text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#42A5F5]" />
                <span>Sin Anuncios ni Rastreadores</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#42A5F5]" />
                <span>Motor DSP Bit-Perfect</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#42A5F5]" />
                <span>FLAC / DSD / MP3 / WAV</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Mockup Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative flex justify-center items-center">
              {/* Main Phone Mockup */}
              <div className="phone-mockup w-[230px] sm:w-[260px] aspect-[9/19] z-20 shadow-2xl">
                <div className="phone-notch" />
                <img
                  src="assets/images/photo_2_2026-09-06_12-09-25.webp"
                  alt="HamsterPlayer Reproductor en Pantalla Completa"
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                />
              </div>

              {/* Secondary Phone Mockup (Behind) */}
              <div className="phone-mockup w-[200px] sm:w-[230px] aspect-[9/19] -ml-20 mt-16 z-10 opacity-75 hidden sm:block">
                <div className="phone-notch" />
                <img
                  src="assets/images/photo_5_2026-09-06_12-09-25.webp"
                  alt="HamsterPlayer Ecualizador DSP"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
