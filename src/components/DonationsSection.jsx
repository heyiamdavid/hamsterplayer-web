import React, { useState } from 'react'
import { Heart, Copy, Check, ExternalLink, Coffee, ShieldCheck, Server, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DonationsSection({ onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(null)

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      if (onShowToast) onShowToast(`¡Enlace copiado al portapapeles! (${text})`)
      setTimeout(() => setCopiedKey(null), 2500)
    } catch (_) {
      if (onShowToast) onShowToast(`Enlace: ${text}`)
    }
  }

  return (
    <section id="support" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-3">
            Desarrollo Independiente
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Apoya el crecimiento de HamsterPlayer
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            HamsterPlayer es desarrollado con pasión por <strong className="text-white">David</strong> como un proyecto 100% independiente. No vendemos tus datos, no incluimos publicidad invasiva ni cobramos suscripciones para desbloquear funciones de audio. Si te gusta la app y quieres ayudar a costear la infraestructura de servidores y nuevas mejoras, tu contribución es bienvenida.
          </p>
        </div>

        {/* Single Centered Ko-fi Card */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-[#121E36] rounded-2xl p-7 sm:p-9 flex flex-col justify-between border border-[#1E2F52] shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#42A5F5]/15 border border-[#42A5F5]/25 flex items-center justify-center text-[#42A5F5] shadow">
                  <Coffee className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#42A5F5]">
                  ko-fi.com/heyiamdavid
                </span>
              </div>

              <h3 className="text-2xl font-black text-white">Invitar un Café en Ko-fi</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Micro-donaciones y aportes voluntarios para respaldar el mantenimiento de servidores y horas de desarrollo de nuevas funciones.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://ko-fi.com/heyiamdavid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#42A5F5] hover:bg-[#64B5F6] text-[#0A111F] font-bold text-sm shadow-md transition"
              >
                <span>Invitar en Ko-fi</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={() => copyToClipboard('https://ko-fi.com/heyiamdavid', 'kofi')}
                className="px-4 py-3.5 rounded-xl bg-[#0A111F] hover:bg-[#162544] text-slate-200 border border-[#1E2F52] font-semibold text-xs flex items-center justify-center gap-2 transition"
                aria-label="Copiar enlace de Ko-fi"
              >
                {copiedKey === 'kofi' ? (
                  <>
                    <Check className="w-4 h-4 text-[#42A5F5]" />
                    <span className="text-[#42A5F5]">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Enlace</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Commitment Badges */}
        <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-[#1E2F52]">
          <div className="bg-[#121E36] p-5 rounded-xl border border-[#1E2F52] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#42A5F5] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm">100% Sin Publicidad</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Nunca colocaremos anuncios en la pantalla de reproducción ni en los menús.
              </p>
            </div>
          </div>

          <div className="bg-[#121E36] p-5 rounded-xl border border-[#1E2F52] flex items-start gap-3">
            <Server className="w-5 h-5 text-[#42A5F5] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm">Servidores Supabase</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Financia la sincronización en tiempo real de salas de escucha y mensajería cifrada.
              </p>
            </div>
          </div>

          <div className="bg-[#121E36] p-5 rounded-xl border border-[#1E2F52] flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#42A5F5] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm">Desarrollo Activo</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Nuevas funciones de audio, mejoras en letras LRC y optimizaciones frecuentes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
