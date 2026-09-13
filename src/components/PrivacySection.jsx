import React, { useState } from 'react'
import { ShieldCheck, Lock, WifiOff, FileCode2, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PrivacySection() {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <section id="privacy" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-3">
            Privacidad y Seguridad
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tu música es de tu propiedad exclusiva
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
            HamsterPlayer está diseñado con filosofía Offline-First. Toda tu biblioteca, ecualizador y letras funcionan de manera 100% local; las funciones comunitarias y de sincronización en la nube son totalmente opcionales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          
          <div className="bg-[#121E36] border border-[#1E2F52] p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#42A5F5]/15 border border-[#42A5F5]/25 flex items-center justify-center text-[#42A5F5] mb-4">
              <WifiOff className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-2">Cero Telemetría</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              No rastreamos qué canciones escuchas, con qué frecuencia ni tus hábitos de reproducción. Todo el registro analítico vive y muere en tu móvil.
            </p>
          </div>

          <div className="bg-[#121E36] border border-[#1E2F52] p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#42A5F5]/15 border border-[#42A5F5]/25 flex items-center justify-center text-[#42A5F5] mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-2">Cifrado E2EE AES-256-GCM</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Los mensajes directos entre amigos se cifran y descifran únicamente en los dispositivos de los participantes. Ni siquiera nosotros podemos leerlos.
            </p>
          </div>

          <div className="bg-[#121E36] border border-[#1E2F52] p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#42A5F5]/15 border border-[#42A5F5]/25 flex items-center justify-center text-[#42A5F5] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-2">Comunidad 100% Opcional</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              No requieres crear una cuenta, iniciar sesión ni vincular redes sociales para usar el reproductor, ecualizador o letras locales.
            </p>
          </div>

          <div className="bg-[#121E36] border border-[#1E2F52] p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#42A5F5]/15 border border-[#42A5F5]/25 flex items-center justify-center text-[#42A5F5] mb-4">
              <FileCode2 className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-2">Auditable y Sin Puertas Traseras</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Cero SDKs publicitarios invasivos de terceros. No monetizamos con tus datos personales bajo ninguna circunstancia.
            </p>
          </div>

        </div>

        {/* Expandable Privacy Policy Accordion */}
        <div className="bg-[#121E36] rounded-2xl overflow-hidden border border-[#1E2F52]">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition"
            aria-expanded={accordionOpen}
          >
            <span className="font-bold text-white text-base">Declaración de Privacidad Detallada</span>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                accordionOpen ? 'rotate-180 text-[#42A5F5]' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {accordionOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-[#1E2F52]"
              >
                <div className="p-6 text-xs sm:text-sm text-slate-300 space-y-3.5 leading-relaxed bg-[#0A111F]">
                  <p><strong className="text-white">Última actualización:</strong> Septiembre 2026</p>
                  <p><strong className="text-white">Desarrollador:</strong> David, creador y desarrollador independiente de HamsterPlayer.</p>
                  <p><strong className="text-white">Datos que se recopilan (únicamente si decides crear cuenta comunitaria):</strong> Nombre de usuario público, correo electrónico para autenticación en Supabase, avatar/banner que elijas subir y lista de amistades mutuas.</p>
                  <p><strong className="text-white">Datos que NUNCA salen de tu dispositivo:</strong> Tus canciones locales, carpetas de audio, tags ID3, listas privadas de reproducción, historial de búsqueda y configuraciones de ecualizador.</p>
                  <p><strong className="text-white">Infraestructura:</strong> La sincronización social y base de datos opera bajo Supabase PostgreSQL con cifrado TLS en tránsito y AES-256 en reposo.</p>
                  <p><strong className="text-white">Derecho al olvido:</strong> Puedes eliminar tu cuenta de forma inmediata desde el menú de Ajustes en la app.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
