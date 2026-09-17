"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false)
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const yTranslation = useTransform(scrollY, [0, 1000], [0, 400])
  const opacityFade = useTransform(scrollY, [0, 800], [1, 0.3])

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)")
    const update = () => setIsDesktop(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  const animate = isDesktop && !reducedMotion

  return (
    <section aria-label="Belvedere 35, nuove residenze a Garbagnate Monastero" className="relative min-h-[75svh] sm:min-h-[90svh] lg:min-h-screen overflow-hidden">
      <h1 className="sr-only">Belvedere 35, nuove residenze a Garbagnate Monastero</h1>
      <motion.div
        style={{ y: animate ? yTranslation : 0, opacity: animate ? opacityFade : 1 }}
        className="absolute inset-0 z-0 select-none pointer-events-none lg:scale-110"
      >
        <Image
          src="/images/hero-building.png?v=4"
          alt="Belvedere 35 - Residenze moderne a Garbagnate Monastero"
          fill
          className="object-cover object-[55%_center] lg:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40" />
      </motion.div>
    </section>
  )
}
