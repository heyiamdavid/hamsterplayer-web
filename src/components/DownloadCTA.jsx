import React from 'react'
import { Download, Sparkles, CheckCircle2 } from 'lucide-react'

export default function DownloadCTA({ onDownloadClick }) {
  return (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#121E36] rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden border border-[#1E2F52] shadow-xl">
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5]">
                Descarga Oficial Directa
              </p>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Comienza a escuchar en alta fidelidad
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
              Descarga el APK oficial para Android 7.0+. Sin tiendas que impongan restricciones, sin registros forzosos y con actualizaciones integradas.
            </p>

            <a
              href="assets/app-release.apk"
              download
              onClick={onDownloadClick}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-[#42A5F5] hover:bg-[#64B5F6] text-[#0A111F] font-black text-base sm:text-lg shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="w-6 h-6 stroke-[2.5]" />
              <span>Descargar APK Oficial — 23.5 MB</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#42A5F5]" />
                <span>Android 7.0 o superior</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#42A5F5]" />
                <span>Firma oficial verificada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#42A5F5]" />
                <span>Gratis para siempre</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
