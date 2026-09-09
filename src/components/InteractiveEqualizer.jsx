import React, { useState } from 'react'
import { Sliders, Sparkles, Volume2, RotateCcw } from 'lucide-react'
import { motion } from 'framer-motion'

const BANDS = [
  { label: '31 Hz', key: 'b31' },
  { label: '62 Hz', key: 'b62' },
  { label: '125 Hz', key: 'b125' },
  { label: '250 Hz', key: 'b250' },
  { label: '500 Hz', key: 'b500' },
  { label: '1 kHz', key: 'b1k' },
  { label: '2 kHz', key: 'b2k' },
  { label: '4 kHz', key: 'b4k' },
  { label: '8 kHz', key: 'b8k' },
  { label: '16 kHz', key: 'b16k' },
]

const PRESETS = {
  'Plano': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  'Bass Boost': [9, 8, 6, 3, 1, 0, 0, 2, 4, 5],
  'Claridad Vocal': [-2, -1, 0, 3, 6, 7, 5, 3, 2, 1],
  'Rock Dinámico': [6, 4, 2, 0, -1, 1, 3, 6, 7, 8],
  'Electrónica': [8, 7, 4, 0, 2, 4, 2, 5, 7, 9],
}

export default function InteractiveEqualizer() {
  const [values, setValues] = useState([7, 6, 4, 2, 0, 1, 3, 5, 6, 7])
  const [activePreset, setActivePreset] = useState('Rock Dinámico')
  const [bassBoost, setBassBoost] = useState(true)
  const [virtualizer, setVirtualizer] = useState(true)

  const handleSliderChange = (idx, val) => {
    const newValues = [...values]
    newValues[idx] = parseFloat(val)
    setValues(newValues)
    setActivePreset('Personalizado')
  }

  const applyPreset = (name) => {
    setActivePreset(name)
    setValues(PRESETS[name])
  }

  // Generate SVG curve points
  const width = 600
  const height = 140
  const points = values.map((val, i) => {
    const x = (i / (values.length - 1)) * (width - 40) + 20
    // map val from [-12, +12] to [height-15, 15]
    const y = height / 2 - (val / 12) * (height / 2 - 20)
    return { x, y }
  })

  // Build SVG path using catmull-rom or bezier approximation
  let pathD = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i]
    const p1 = points[i + 1]
    const midX = (p0.x + p1.x) / 2
    pathD += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`
  }

  const areaPath = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`

  return (
    <section id="equalizer" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#42A5F5] mb-2">
            Motor Acústico DSP
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ecualizador Gráfico de 10 Bandas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Prueba cómo reacciona la curva acústica de HamsterPlayer. Arrastra los deslizadores o elige un preajuste para calibrar la respuesta en tiempo real.
          </p>
        </div>

        <div className="bg-[#121E36] rounded-2xl p-6 sm:p-10 border border-[#1E2F52] shadow-xl relative overflow-hidden">
          
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-[#1E2F52]">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#42A5F5]" />
              <span className="text-xs font-bold uppercase text-slate-300 tracking-wider">Preajustes</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.keys(PRESETS).map((p) => (
                <button
                  key={p}
                  onClick={() => applyPreset(p)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activePreset === p
                      ? 'bg-[#42A5F5] text-[#0A111F] shadow'
                      : 'bg-[#0A111F] border border-[#1E2F52] text-slate-300 hover:bg-[#162544] hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => applyPreset('Plano')}
                className="px-2.5 py-1.5 rounded-lg bg-[#0A111F] border border-[#1E2F52] text-slate-400 hover:text-white transition"
                title="Reiniciar a plano"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Dynamic Curve Display */}
          <div className="relative w-full h-36 bg-[#0A111F] rounded-xl p-2 mb-8 border border-[#1E2F52] overflow-hidden flex items-center justify-center">
            
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
              <div className="border-b border-white w-full" />
              <div className="border-b border-[#42A5F5] w-full opacity-60" />
              <div className="border-b border-white w-full" />
            </div>

            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full preserve-3d"
            >
              <defs>
                <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#42A5F5" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#42A5F5" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path d={areaPath} fill="url(#curveGrad)" />

              {/* Curve Stroke */}
              <path
                d={pathD}
                fill="none"
                stroke="#42A5F5"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="transition-all duration-150"
              />

              {/* Curve Control Dots */}
              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="4"
                  fill="#ffffff"
                  stroke="#42A5F5"
                  strokeWidth="2"
                />
              ))}
            </svg>

            <div className="absolute right-4 top-3 text-[10px] font-mono text-[#42A5F5] font-bold px-2 py-0.5 rounded bg-[#121E36] border border-[#1E2F52]">
              DSP ACTIVO · 64-BIT PRECISION
            </div>
          </div>

          {/* 10 Slider Slits */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 sm:gap-2 mb-8">
            {BANDS.map((b, i) => (
              <div key={b.key} className="flex flex-col items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-[#42A5F5]">
                  {values[i] > 0 ? `+${values[i]}` : values[i]} dB
                </span>

                <div className="relative h-44 w-7 bg-[#0A111F] rounded-full flex items-center justify-center p-1 border border-[#1E2F52]">
                  <input
                    type="range"
                    min="-12"
                    max="12"
                    step="0.5"
                    value={values[i]}
                    onChange={(e) => handleSliderChange(i, e.target.value)}
                    className="w-36 -rotate-90 origin-center cursor-pointer accent-[#42A5F5] bg-transparent"
                    style={{ WebkitAppearance: 'slider-vertical' }}
                    aria-label={b.label}
                  />
                </div>

                <span className="text-[10px] font-medium text-slate-400 font-mono mt-1 text-center">
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          {/* Audio Enhancements Toggles */}
          <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-[#1E2F52]">
            <div
              onClick={() => setBassBoost(!bassBoost)}
              className="bg-[#0A111F] p-4 rounded-xl flex items-center justify-between cursor-pointer border border-[#1E2F52] hover:border-[#42A5F5]/40 transition"
            >
              <div>
                <h4 className="text-white font-bold text-sm">Bass Boost Potente</h4>
                <p className="text-xs text-slate-400 mt-0.5">Refuerzo armónico de subgraves sin saturación</p>
              </div>
              <div
                className={`w-11 h-6 rounded-full p-1 transition-colors ${
                  bassBoost ? 'bg-[#42A5F5]' : 'bg-[#1E2F52]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    bassBoost ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>

            <div
              onClick={() => setVirtualizer(!virtualizer)}
              className="bg-[#0A111F] p-4 rounded-xl flex items-center justify-between cursor-pointer border border-[#1E2F52] hover:border-[#42A5F5]/40 transition"
            >
              <div>
                <h4 className="text-white font-bold text-sm">Virtualizador 3D Envolvente</h4>
                <p className="text-xs text-slate-400 mt-0.5">Escenario acústico tridimensional para auriculares</p>
              </div>
              <div
                className={`w-11 h-6 rounded-full p-1 transition-colors ${
                  virtualizer ? 'bg-[#42A5F5]' : 'bg-[#1E2F52]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    virtualizer ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
