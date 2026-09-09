import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipBack, SkipForward, Heart, Shuffle, Repeat, Volume2, Sparkles } from 'lucide-react'

const PLAYLIST = [
  {
    id: 1,
    title: 'Doma',
    artist: 'Josean Log',
    albumArt: 'assets/images/photo_2_2026-09-06_12-09-25.webp',
    format: 'FLAC · 24-bit / 96 kHz',
    duration: 218,
  },
  {
    id: 2,
    title: 'Loser',
    artist: 'BigBang',
    albumArt: 'assets/images/photo_1_2026-09-06_12-09-25.webp',
    format: 'FLAC · 16-bit / 44.1 kHz',
    duration: 232,
  },
  {
    id: 3,
    title: 'Niño',
    artist: 'Leonel García',
    albumArt: 'assets/images/photo_3_2026-09-06_12-09-25.webp',
    format: 'MP3 · 320 kbps (DSP Enhanced)',
    duration: 245,
  },
  {
    id: 4,
    title: 'Electric Dreams',
    artist: 'Hamster Sound Labs',
    albumArt: 'assets/images/photo_10_2026-09-06_12-09-25.webp',
    format: 'DSD · 2.8 MHz Bit-Perfect',
    duration: 198,
  }
]

export default function InteractivePlayer() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(74)
  const [isLiked, setIsLiked] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const seekbarRef = useRef(null)

  const currentSong = PLAYLIST[currentIdx]

  useEffect(() => {
    let interval = null
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentSong.duration) {
            handleNext()
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentSong.duration])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % PLAYLIST.length)
    setCurrentTime(0)
  }

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length)
    setCurrentTime(0)
  }

  const handleSeek = (e) => {
    if (!seekbarRef.current) return
    const rect = seekbarRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const ratio = Math.max(0, Math.min(1, clickX / rect.width))
    setCurrentTime(Math.floor(ratio * currentSong.duration))
  }

  const progressPct = (currentTime / currentSong.duration) * 100

  return (
    <section id="player" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-2">
            Demostración Interactiva
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            El reproductor que tu biblioteca merece
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
            Haz clic en los controles para probar el reproductor en tiempo real. Soporte para extracción adaptativa de portada y audio bit-perfect.
          </p>
        </div>

        {/* Player Card Frame */}
        <div className="bg-[#121E36] rounded-2xl p-6 sm:p-8 max-w-md mx-auto shadow-2xl relative overflow-hidden border border-[#1E2F52]">
          
          {/* Top Bar Status */}
          <div className="flex items-center justify-between mb-5 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <span>Reproduciendo ahora</span>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#0A111F] border border-[#1E2F52]">
              <span className={`w-2 h-2 rounded-full bg-[#42A5F5] ${isPlaying ? 'animate-pulse' : 'opacity-40'}`} />
              <span className="text-[11px] font-mono font-bold text-[#42A5F5]">BIT-PERFECT</span>
            </div>
          </div>

          {/* Album Art with Framer Motion Animation */}
          <div className="relative rounded-xl overflow-hidden aspect-square shadow-xl mb-6 bg-[#0A111F] border border-[#1E2F52]">
            <motion.img
              key={currentSong.id}
              initial={{ opacity: 0.4, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={currentSong.albumArt}
              alt={currentSong.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F]/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Format Tag */}
            <div className="absolute bottom-3 left-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0A111F]/90 border border-[#1E2F52] text-[#42A5F5] shadow-md">
                {currentSong.format}
              </span>
            </div>
          </div>

          {/* Track Info & Like Button */}
          <div className="flex items-start justify-between mb-5 relative z-10">
            <div className="overflow-hidden pr-3">
              <motion.h3
                key={currentSong.title}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-black text-white truncate"
              >
                {currentSong.title}
              </motion.h3>
              <motion.p
                key={currentSong.artist}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-medium text-slate-400 mt-0.5 truncate"
              >
                {currentSong.artist}
              </motion.p>
            </div>

            <button
              onClick={() => setIsLiked(!isLiked)}
              className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl hover:bg-white/5 transition active:scale-90"
              aria-label="Me gusta"
            >
              <Heart
                className={`w-6 h-6 transition-all duration-200 ${
                  isLiked ? 'fill-rose-500 text-rose-500 scale-110' : 'text-slate-500 hover:text-white'
                }`}
              />
            </button>
          </div>

          {/* Organic Audio Visualizer Bars */}
          <div className="flex items-end justify-between h-9 px-1 mb-4 gap-1">
            {[45, 75, 90, 60, 80, 100, 70, 50, 85, 95, 65, 45, 80, 60, 90, 75, 55, 85, 90, 70, 50, 75, 40, 65].map(
              (height, i) => (
                <motion.span
                  key={i}
                  animate={
                    isPlaying
                      ? {
                          height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
                        }
                      : { height: '20%' }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 0.8 + (i % 5) * 0.15,
                    ease: 'easeInOut',
                    delay: (i % 6) * 0.1,
                  }}
                  className="flex-1 bg-[#42A5F5] rounded-t-sm"
                />
              )
            )}
          </div>

          {/* Interactive Seekbar */}
          <div className="mb-4">
            <div
              ref={seekbarRef}
              onClick={handleSeek}
              className="relative h-2 bg-[#0A111F] rounded-full cursor-pointer group py-1 border border-[#1E2F52]"
            >
              <div
                style={{ width: `${progressPct}%` }}
                className="absolute left-0 top-0 bottom-0 bg-[#42A5F5] rounded-full transition-all"
              />
              <div
                style={{ left: `${progressPct}%` }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md shadow-black/50 transition-transform group-hover:scale-125"
              />
            </div>

            <div className="flex justify-between text-xs font-mono text-slate-400 mt-1.5">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(currentSong.duration)}</span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={`p-2 rounded-xl transition ${
                isShuffle ? 'text-[#42A5F5] bg-[#42A5F5]/10' : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Aleatorio"
            >
              <Shuffle className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:scale-110 active:scale-95 transition"
              aria-label="Canción anterior"
            >
              <SkipBack className="w-6 h-6 fill-current" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#42A5F5] hover:bg-[#64B5F6] text-[#0A111F] hover:scale-105 active:scale-95 transition shadow-lg shadow-[#42A5F5]/20"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-[#0A111F] text-[#0A111F]" />
              ) : (
                <Play className="w-6 h-6 fill-[#0A111F] text-[#0A111F] ml-0.5" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:scale-110 active:scale-95 transition"
              aria-label="Siguiente canción"
            >
              <SkipForward className="w-6 h-6 fill-current" />
            </button>

            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={`p-2 rounded-xl transition ${
                isRepeat ? 'text-[#42A5F5] bg-[#42A5F5]/10' : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Repetir"
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
