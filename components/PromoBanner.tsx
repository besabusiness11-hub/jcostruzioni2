"use client"

import { useState } from "react"
import { X, Percent } from "lucide-react"

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-10 h-10 bg-primary-foreground/20 rounded-full items-center justify-center">
            <Percent className="w-5 h-5" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-semibold text-sm sm:text-base">
              Promo Lancio
            </span>
            <span className="text-primary-foreground/90 text-sm">
              Sconto del 5% per prenotazioni entro il 31 Marzo 2025
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contatti"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 bg-primary-foreground text-primary rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/90 hover:scale-105"
          >
            Scopri di più
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 hover:bg-primary-foreground/20 rounded-full transition-colors duration-300"
            aria-label="Chiudi banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
