import React from 'react'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#0A111F] border-t border-[#1E2F52] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#1E2F52]">
            <img
              src="assets/icons/ic_hamster_gris.jpg"
              alt="HamsterPlayer"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-extrabold text-white text-base tracking-tight">
            HamsterPlayer
          </span>
          <span className="text-xs font-mono text-slate-400">
            v2.5.2
          </span>
        </div>

        {/* Developer Attribution */}
        <p className="text-xs text-slate-400 text-center flex flex-wrap items-center justify-center gap-1.5 px-2">
          <span>Desarrollado de forma independiente por</span>
          <strong className="text-white font-semibold">David</strong>
          <span>para quienes aman la música · &copy; 2026</span>
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs font-medium text-slate-300 w-full md:w-auto px-2">
          <a href="#features" className="hover:text-[#42A5F5] transition">Funciones</a>
          <a href="#player" className="hover:text-[#42A5F5] transition">Reproductor</a>
          <a href="#equalizer" className="hover:text-[#42A5F5] transition">Ecualizador</a>
          <a href="#privacy" className="hover:text-[#42A5F5] transition">Privacidad</a>
          <a href="#support" className="hover:text-rose-400 font-semibold text-[#42A5F5] transition flex items-center gap-1">
            <Heart className="w-3 h-3 fill-current" />
            <span>Donar</span>
          </a>
          <a href="assets/app-release.apk" download className="text-[#42A5F5] font-bold hover:underline">
            APK
          </a>
        </div>

      </div>
    </footer>
  )
}
