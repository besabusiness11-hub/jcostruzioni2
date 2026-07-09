"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function Hero() {
  const [sliderPosition, setSliderPosition] = useState(50) // Percentage (0-100)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // High performance Parallax Scroll Effect
  const { scrollY } = useScroll()
  const yTranslation = useTransform(scrollY, [0, 1000], [0, 400])
  const opacityFade = useTransform(scrollY, [0, 800], [1, 0.3])

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove, { passive: true })
      window.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  const handleContainerClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('.slider-handle')) return
    updatePosition(e.clientX)
  }

  return (
    <section 
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-col-resize select-none"
    >
      {/* Contenitore Parallasse */}
      <motion.div 
        style={{ y: yTranslation, opacity: opacityFade }}
        className="absolute inset-0 z-0 scale-110"
      >
        {/* DAY IMAGE (Base Layer) */}
        <Image
          src="/images/hero-building.png"
          alt="Belvedere 35 - Vista Diurna"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* NIGHT IMAGE (Overlay Layer with clipPath) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
        >
          <Image
            src="/images/hero-building-night.png"
            alt="Belvedere 35 - Vista Notturna"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Ambient Dark Gradients on top of both images */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none z-10" />

        {/* Vertical Divider Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle Button */}
          <div 
            onMouseDown={(e) => {
              e.stopPropagation()
              setIsDragging(true)
            }}
            onTouchStart={(e) => {
              e.stopPropagation()
              setIsDragging(true)
            }}
            className="slider-handle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white hover:bg-stone-50 border border-slate-200/80 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-all duration-200 pointer-events-auto z-30 group"
          >
            <div className="flex gap-1 items-center justify-center text-[#3e2d27] transition-transform duration-200 group-hover:scale-105">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <svg className="w-5 h-5 -ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-white text-[10px] tracking-widest uppercase font-semibold flex items-center gap-2 select-none z-20 shadow-md">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          Giorno
        </div>
        <div className="absolute bottom-12 right-12 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white text-[10px] tracking-widest uppercase font-semibold flex items-center gap-2 select-none z-20 shadow-md">
          <Moon className="w-3.5 h-3.5 text-blue-300" />
          Notte
        </div>
      </motion.div>
    </section>
  )
}
