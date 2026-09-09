import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturesGrid from './components/FeaturesGrid.jsx'
import InteractivePlayer from './components/InteractivePlayer.jsx'
import InteractiveEqualizer from './components/InteractiveEqualizer.jsx'
import AppScreenshots from './components/AppScreenshots.jsx'
import ThemesAndIcons from './components/ThemesAndIcons.jsx'
import PrivacySection from './components/PrivacySection.jsx'
import DonationsSection from './components/DonationsSection.jsx'
import DownloadCTA from './components/DownloadCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [toastMessage, setToastMessage] = useState(null)

  const triggerToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3200)
  }

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-200 relative selection:bg-[#42A5F5]/30 selection:text-white font-sans">
      {/* Top Navbar */}
      <Navbar onOpenDonations={() => triggerToast('Abriendo sección de donaciones...')} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <FeaturesGrid />
        <InteractivePlayer />
        <InteractiveEqualizer />
        <AppScreenshots />
        <ThemesAndIcons />
        <PrivacySection />
        <DonationsSection onShowToast={triggerToast} />
        <DownloadCTA onDownloadClick={() => triggerToast('¡Iniciando descarga de HamsterPlayer APK!')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#121E36] px-5 py-3 rounded-xl flex items-center gap-3 shadow-2xl border border-[#42A5F5]/40"
          >
            <CheckCircle2 className="w-5 h-5 text-[#42A5F5] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
