"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  imageAlt: string
}

export default function PageHero({ title, subtitle, description, image, imageAlt }: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {subtitle && (
          <span 
            className={`inline-block text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {subtitle}
          </span>
        )}
        <h1
          className={`font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
