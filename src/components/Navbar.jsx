import React, { useState, useEffect } from 'react'
import { Download, Heart, Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onOpenDonations }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Funciones', href: '#features' },
    { name: 'Reproductor', href: '#player' },
    { name: 'Ecualizador', href: '#equalizer' },
    { name: 'Capturas', href: '#screenshots' },
    { name: 'Temas', href: '#themes' },
    { name: 'Privacidad', href: '#privacy' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A111F]/95 backdrop-blur-md border-b border-[#1E2F52] py-3.5 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo - Clean with Hamster Gris */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#1E2F52] shadow-md transition-transform duration-200 group-hover:scale-105">
              <img
                src="assets/icons/ic_hamster_gris.jpg"
                alt="HamsterPlayer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-white text-lg tracking-tight">
                HamsterPlayer
              </span>
              <span className="text-[11px] text-slate-400 font-medium -mt-0.5 hidden sm:block">
                Audio Hi-Fi · Android
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#support"
              onClick={onOpenDonations}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#121E36] text-[#42A5F5] border border-[#1E2F52] hover:bg-[#162544] hover:text-white transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-[#42A5F5] text-[#42A5F5]" />
              <span>Apoyar</span>
            </a>
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="assets/app-release.apk"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#42A5F5] hover:bg-[#64B5F6] text-[#0A111F] font-bold text-xs tracking-wide shadow-md transition-all active:scale-95"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Descargar APK</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0A111F] flex flex-col justify-between p-6 pt-20 overflow-y-auto lg:hidden"
          >
            {/* Mobile Drawer Close Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1E2F52] mb-4">
              <div className="flex items-center gap-2.5">
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
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-3 text-center my-auto py-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-200 hover:text-[#42A5F5] py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#support"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onOpenDonations) onOpenDonations()
                }}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#121E36] text-[#42A5F5] border border-[#1E2F52] text-base font-bold mt-2"
              >
                <Heart className="w-5 h-5 fill-[#42A5F5]" />
                <span>Apoyar el Proyecto</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#1E2F52]">
              <a
                href="assets/app-release.apk"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#42A5F5] text-[#0A111F] font-black text-base shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Descargar APK Oficial</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
