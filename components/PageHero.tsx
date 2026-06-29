"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  imageAlt?: string
}

export default function PageHero({ title, subtitle, description, image = "/images/project-detail.jpg", imageAlt = "Belvedere 35" }: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 md:pb-24 lg:pb-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={`object-cover transition-transform duration-[10000ms] ease-out ${
            isLoaded ? "scale-100" : "scale-115"
          }`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
        {subtitle && (
          <span 
            className={`inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {subtitle}
          </span>
        )}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {/* Bordo inferiore sfumato */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
