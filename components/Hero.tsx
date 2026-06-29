"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-building.jpg"
          alt="Belvedere 35 - Residenze moderne a Garbagnate Monastero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content empty to show only background and logo in header */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link
          href="/il-progetto"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-xs tracking-widest uppercase">Scopri</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
