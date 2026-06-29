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

  // 3. SCROLL AL TOP AL CAMBIO DI ROTTA
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navLinks = [
    { href: "/il-progetto", label: "Il Progetto" },
    { 
      href: "/tipologie", 
      label: "Tipologie",
      submenu: [
        { href: "/tipologie/bilocali", label: "Bilocali" },
        { href: "/tipologie/trilocali", label: "Trilocali" },
        { href: "/tipologie/quadrilocali", label: "Quadrilocali" },
      ]
    },
    { 
      href: "/terrazzi-e-giardini", 
      label: "Il Verde",
      submenu: [
        { href: "/terrazzi-e-giardini#terrazzi", label: "Terrazzi" },
        { href: "/terrazzi-e-giardini#giardini", label: "Giardini" },
        { href: "/terrazzi-e-giardini#parti-esterne", label: "Parti Esterne" },
      ]
    },
    { href: "/contatti", label: "Contatti" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/30 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-between lg:grid lg:grid-cols-7 lg:items-center">
          
          {/* NAVIGAZIONE SINISTRA (Desktop) - 2 Bottoni */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-start gap-8">
            <Link href="/il-progetto" className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[11px] font-medium">
              Progetto
            </Link>
            
            {/* Dropdown Tipologie */}
            <div className="relative group">
              <button className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[11px] font-medium flex items-center gap-1.5 py-2">
                Tipologie
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute left-0 top-full pt-2 w-52 opacity-0 invisible translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                <div className="bg-gradient-to-br from-[#3e2d27]/95 to-[#241a16]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_10px_30px_-5px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col gap-1.5">
                    <Link href="/tipologie" className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.15em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl font-medium flex items-center justify-between group/link">
                      <span>Vedi Tutte</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/link:bg-white group-hover/link:scale-125 transition-all duration-300"></span>
                    </Link>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-1"></div>
                    <Link href="/tipologie/bilocali" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.1em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      <span>Bilocali</span>
                    </Link>
                    <Link href="/tipologie/trilocali" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.1em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      <span>Trilocali</span>
                    </Link>
                    <Link href="/tipologie/quadrilocali" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.1em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      <span>Quadrilocali</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LOGO CENTRALE */}
          <div className="lg:col-span-1 flex justify-center z-[60]">
            <Link href="/" className="flex items-center justify-center py-1">
              <Logo scrolled={false} className="h-20 md:h-24 w-auto" />
            </Link>
          </div>

          {/* NAVIGAZIONE DESTRA (Desktop) - 2 Bottoni */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-end gap-8">
            {/* Dropdown Il Verde */}
            <div className="relative group">
              <button className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[11px] font-medium flex items-center gap-1.5 py-2">
                Il Verde
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute right-0 top-full pt-2 w-52 opacity-0 invisible translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                <div className="bg-gradient-to-br from-[#3e2d27]/95 to-[#241a16]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_10px_30px_-5px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col gap-1.5 text-left">
                    <Link href="/terrazzi-e-giardini" className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.15em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl font-medium flex items-center justify-between group/link">
                      <span>Vedi Tutto</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/link:bg-white group-hover/link:scale-125 transition-all duration-300"></span>
                    </Link>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-1"></div>
                    <Link href="/terrazzi-e-giardini#terrazzi" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.1em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      <span>Terrazzi</span>
                    </Link>
                    <Link href="/terrazzi-e-giardini#giardini" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.1em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      <span>Giardini</span>
                    </Link>
                    <Link href="/terrazzi-e-giardini#parti-esterne" className="text-white/80 hover:text-white text-xs uppercase tracking-[0.1em] transition-all duration-300 py-2 px-3 hover:bg-white/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-xl flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                      <span>Parti Esterne</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contatti" className="text-white hover:text-white/70 transition-colors uppercase tracking-[0.2em] text-[11px] font-medium">
              Contatti
            </Link>
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
