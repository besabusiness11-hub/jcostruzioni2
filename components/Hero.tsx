"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Effetto Parallasse ad alte prestazioni (gestito fuori dal ciclo di render di React)
  const { scrollY } = useScroll()
  const yTranslation = useTransform(scrollY, [0, 1000], [0, 400])
  const opacityFade = useTransform(scrollY, [0, 800], [1, 0.3])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Container Parallasse */}
      <motion.div 
        style={{ y: yTranslation, opacity: opacityFade }}
        className="absolute inset-0 z-0 scale-110 select-none pointer-events-none"
      >
        <Image
          src="/images/hero-building.png"
          alt="Belvedere 35 - Residenze moderne a Garbagnate Monastero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </motion.div>

      {/* Content empty to show only background and logo in header */}
    </section>
  )
}
