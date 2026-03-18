"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // 1. GESTIONE SCROLL DELLA NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 2. BLOCCA LO SCROLL DELLA PAGINA SOTTOSTANTE
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Blocca lo scroll del body e previene il rimbalzo su iOS
      document.body.style.overflow = "hidden"
      document.body.style.height = "100%"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.height = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
      document.body.style.height = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/il-progetto", label: "Il Progetto" },
    { 
      href: "/tipologie", 
      label: "Tipologie",
      submenu: [
        { href: "/tipologie/bilocali", label: "Bilocali" },
        { href: "/tipologie/trilocali", label: "Trilocali" },
        { href: "/tipologie/quadrilocali", label: "Quadrilocali" },
        { href: "/tipologie/attici", label: "Attici" },
      ]
    },
    { href: "/terrazzi-e-giardini", label: "Terrazzi e Giardini" },
    { href: "/contatti", label: "Contatti" },
  ]

  const getTextColor = () => {
    if (isMobileMenuOpen) return "text-white"
    return isScrolled ? "text-slate-900" : "text-white"
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-between">
          <div className="flex-1 lg:flex hidden"></div>
          
          <Link href="/" className="flex flex-col items-center z-[60]">
            <span className={`font-serif text-2xl md:text-3xl font-semibold tracking-[0.25em] uppercase transition-colors duration-300 ${getTextColor()}`}>
              J Costruzioni
            </span>
            <span className={`text-[10px] tracking-[0.4em] uppercase mt-1 transition-colors duration-300 ${isMobileMenuOpen || !isScrolled ? "text-white/80" : "text-slate-500"}`}>
              Residenze di Prestigio
            </span>
          </Link>

          <div className="flex-1 flex justify-end z-[60]">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 transition-all duration-300 ${getTextColor()}`}>
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* CONTENITORE MENU CON SCROLL INTERNO BLOCCATO SUL POSTO */}
      <div className={`fixed top-0 left-0 right-0 bottom-0 transition-all duration-700 ease-in-out z-50 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[40px]"></div>
        
        {/* Nav con altezza massima e scroll interno per garantire visibilità intera */}
        <nav className="relative min-h-screen w-full flex flex-col items-center overflow-y-auto">
          <div className="flex flex-col gap-10 w-full max-w-sm text-center py-24 px-8 my-auto">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col items-center">
                {link.submenu ? (
                  <>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">{link.label}</span>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {link.submenu.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-serif hover:text-white/60 transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-4xl md:text-5xl font-serif tracking-tight hover:opacity-50 transition-opacity">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-6 flex flex-col gap-4">
              <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 py-7 text-lg">
                <a href="tel:+390111234567"><Phone className="w-5 h-5 mr-2" /> Chiama Ora</a>
              </Button>
              <Button asChild className="rounded-full bg-white text-green-600 hover:bg-white/90 py-7 text-lg">
                <a href="/capitolato.pdf" download><Download className="w-5 h-5 mr-2" /> Scarica Capitolato</a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
