"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"

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

  // 3. SCROLL AL TOP AL CARICAMENTO E AL CAMBIO DI ROTTA
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual"
      window.scrollTo(0, 0)
    }
  }, [pathname])

  const navLinks = [
    { href: "/il-progetto", label: "Il Progetto" },
    { href: "/tipologie", label: "Tipologie" },
    { href: "/il-verde", label: "Il Verde" },
    { href: "/contatti", label: "Contatti" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/30 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-between lg:grid lg:grid-cols-7 lg:items-center">
          
          {/* NAVIGAZIONE SINISTRA (Desktop) - 2 Bottoni */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-start gap-8">
            <Link href="/il-progetto" className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[13px] font-medium">
              Progetto
            </Link>
            
            <Link href="/tipologie" className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[13px] font-medium py-2">
              Tipologie
            </Link>
          </div>

          {/* LOGO CENTRALE */}
          <div className="lg:col-span-1 flex justify-center z-[60]">
            <Link href="/" className="flex items-center justify-center py-1">
              <Logo scrolled={false} className="h-20 md:h-24 w-auto" />
            </Link>
          </div>

          {/* NAVIGAZIONE DESTRA (Desktop) - 2 Bottoni + Capitolato */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-end gap-6 xl:gap-8">
            <Link href="/il-verde" className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[13px] font-medium py-2">
              Il Verde
            </Link>

            <Link href="/contatti" className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[13px] font-medium">
              Contatti
            </Link>

            <a
              href="/capitolato.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-medium uppercase tracking-[0.15em] backdrop-blur-sm shadow-sm hover:scale-105"
              title="Apri e scarica il capitolato PDF"
            >
              <Download className="w-3.5 h-3.5 text-primary" />
              <span>Capitolato</span>
            </a>
          </div>

          {/* PULSANTE MENU MOBILE (Hamburger) */}
          <div className="flex lg:hidden z-[60]">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white transition-all duration-300">
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

        </div>
      </div>

      {/* OVERLAY MENU MOBILE */}
      <div className={`fixed top-0 left-0 right-0 bottom-0 transition-all duration-700 ease-in-out z-50 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[40px]"></div>
        
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
              <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-7 text-base font-medium shadow-xl">
                <a href="/capitolato.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" /> Scarica Capitolato (PDF)
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
