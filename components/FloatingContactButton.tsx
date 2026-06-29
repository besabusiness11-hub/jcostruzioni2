"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Mostra il pulsante solo dopo aver scrollato un po' la pagina
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <Link
      href="/contatti"
      className={`fixed bottom-8 right-8 z-40 flex items-center justify-center gap-2 h-14 px-4 rounded-full bg-[#3e2d27]/95 border border-white/10 text-white shadow-2xl backdrop-blur-md transition-all duration-500 hover:bg-primary hover:shadow-primary/20 hover:scale-105 group cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        {/* Cerchio di notifica pulsante */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full border border-[#3e2d27] group-hover:bg-white transition-colors duration-300 animate-pulse" />
      </div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 pl-0 group-hover:pl-1">
        Contattaci
      </span>
    </Link>
  )
}
