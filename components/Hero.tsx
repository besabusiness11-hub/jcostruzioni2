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
          alt="Parco Aurora - Residenze di prestigio a Torino"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light">
            Nuove Residenze a Torino
          </span>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight mb-6 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block">Parco</span>
          <span className="block text-primary-foreground/90">Aurora</span>
        </h1>

        <p
          className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Un nuovo concetto di abitare nel cuore verde di Torino. 
          Residenze esclusive con terrazzi panoramici e giardini privati.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/tipologie"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1"
          >
            Scopri le Tipologie
          </Link>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            Richiedi Informazioni
          </Link>
        </div>
      </div>

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
