"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowUpRight, Download, Mail, Menu, X } from "lucide-react"
import Logo from "@/components/Logo"
import { CONTACT_EMAIL } from "@/lib/contact"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/il-progetto", label: "Il Progetto" },
  { href: "/tipologie", label: "Tipologie" },
  { href: "/il-verde", label: "Il Verde" },
  { href: "/terrazzi-e-giardini", label: "Terrazzi e giardini", secondary: true },
  { href: "/piscina", label: "Piscina", secondary: true },
  { href: "/contatti", label: "Contatti" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => setIsMobileMenuOpen(false), [pathname])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  return (
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <header className={'site-header fixed inset-x-0 top-0 z-50 transition-colors duration-300 ' + (isScrolled ? "bg-[#241a16]/95 shadow-sm" : "bg-gradient-to-b from-black/45 to-transparent")}>
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between sm:h-24 lg:grid lg:h-32 lg:grid-cols-7">
            <nav aria-label="Navigazione principale, progetto" className="hidden lg:col-span-3 lg:flex items-center gap-8">
              {navLinks.slice(1, 3).map((link) => (
                <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className="inline-flex min-h-11 items-center text-white hover:text-white/70 uppercase tracking-[0.2em] text-[13px] font-medium">
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link href="/" aria-label="Belvedere 35, pagina iniziale" className="inline-flex items-center lg:col-span-1 lg:justify-center">
              <Logo className="h-14 w-auto sm:h-16 lg:h-24" />
            </Link>

            <nav aria-label="Navigazione principale, informazioni" className="hidden lg:col-span-3 lg:flex items-center justify-end gap-5 xl:gap-8">
              {[navLinks[3], navLinks[6]].map((link) => (
                <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className="inline-flex min-h-11 items-center text-white hover:text-white/70 uppercase tracking-[0.2em] text-[13px] font-medium whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
              <a href="/capitolato.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 px-4 text-xs font-medium uppercase tracking-wider text-white hover:bg-white/10">
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                Capitolato
              </a>
            </nav>

            <Dialog.Trigger asChild>
              <button type="button" aria-label="Apri menu di navigazione" className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-black/10 px-4 text-white lg:hidden">
                <span className="text-xs font-semibold tracking-wider">Menu</span>
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
          </div>
        </div>
      </header>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/50" />
        <Dialog.Content aria-describedby={undefined} className="mobile-navigation fixed inset-0 z-[70] flex flex-col bg-[#241a16] text-[#fcfbf9]">
          <Dialog.Title className="sr-only">Menu di navigazione</Dialog.Title>
          <div className="menu-topbar flex shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-8">
            <Dialog.Close asChild>
              <Link href="/" aria-label="Belvedere 35, pagina iniziale">
                <Logo className="h-14 w-auto" />
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button type="button" aria-label="Chiudi menu di navigazione" className="flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-4">
                <span className="text-xs font-semibold tracking-wider">Chiudi</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8">
            <nav aria-label="Navigazione mobile" className="mx-auto max-w-xl py-5">
              {navLinks.map((link) => (
                <Dialog.Close asChild key={link.href}>
                  <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={'flex min-h-12 items-center justify-between gap-4 rounded-lg px-3 py-2 transition-colors hover:bg-white/10 ' + (pathname === link.href ? "bg-white/10 text-white " : "text-white/80 ") + (link.secondary ? "pl-7 text-base" : "font-serif text-[1.75rem] sm:text-3xl")}>
                    {link.label}
                    {!link.secondary && <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50" aria-hidden="true" />}
                  </Link>
                </Dialog.Close>
              ))}
              <div className="mt-5 space-y-3 border-t border-white/15 pt-5">
                <Dialog.Close asChild>
                  <a href="/capitolato.pdf" target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white">
                    <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Scarica capitolato (PDF)
                  </a>
                </Dialog.Close>
                <a href={'mailto:' + CONTACT_EMAIL} className="flex min-h-12 items-center gap-3 px-3 text-sm text-white/80">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0 break-words">{CONTACT_EMAIL}</span>
                </a>
              </div>
            </nav>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
