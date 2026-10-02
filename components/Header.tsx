"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowUpRight, Download, Mail, Menu, Phone, X } from "lucide-react"
import Logo from "@/components/Logo"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/contact"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/il-progetto", label: "Il Progetto" },
  { href: "/tipologie", label: "Tipologie" },
  { href: "/il-verde", label: "Il Verde" },
  { href: "/terrazzi-e-giardini", label: "Terrazzi e giardini", secondary: true },
  { href: "/piscina", label: "Piscina", secondary: true },
  { href: "/contatti", label: "Contatti" },
]

type HeaderSurfaces = { left: boolean; center: boolean; right: boolean }

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [darkSurfaces, setDarkSurfaces] = useState<HeaderSurfaces>({ left: true, center: true, right: true })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24)
      const y = Math.min(window.innerHeight - 1, window.innerWidth >= 1024 ? 54 : 38)
      const isDarkAt = (x: number) => {
        const surface = document.elementsFromPoint(x, y)
          .filter((element) => !element.closest(".site-header") && !element.closest(".mobile-navigation"))
          .map((element) => element.closest<HTMLElement>("[data-header-theme]"))
          .find((element) => element !== null)
        return surface?.dataset.headerTheme === "dark"
      }
      const width = window.innerWidth
      setIsDesktop(width >= 1024)
      const next = {
        left: isDarkAt(width >= 1024 ? width * 0.17 : 52),
        center: isDarkAt(width / 2),
        right: isDarkAt(width >= 1024 ? width * 0.83 : width - 52),
      }
      setDarkSurfaces((current) => current.left === next.left && current.center === next.center && current.right === next.right ? current : next)
    }
    updateHeader()
    const frame = window.requestAnimationFrame(updateHeader)
    window.addEventListener("scroll", updateHeader, { passive: true })
    window.addEventListener("resize", updateHeader)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateHeader)
      window.removeEventListener("resize", updateHeader)
    }
  }, [pathname])

  useEffect(() => setIsMobileMenuOpen(false), [pathname])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  const leftInk = darkSurfaces.left ? "header-on-dark" : "header-on-light"
  const logoInk = (isDesktop ? darkSurfaces.center : darkSurfaces.left) ? "header-on-dark" : "header-on-light"
  const rightInk = darkSurfaces.right ? "header-on-dark" : "header-on-light"

  return (
    <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <header className="site-header fixed inset-x-0 top-0 z-50 bg-transparent">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-[height] duration-300 lg:grid lg:grid-cols-7 ${isScrolled ? "h-16 lg:h-20" : "h-20 sm:h-24 lg:h-32"}`}>
            <nav aria-label="Navigazione principale, progetto" className={`hidden lg:col-span-3 lg:flex items-center gap-8 ${leftInk}`}>
              {navLinks.slice(1, 3).map((link) => (
                <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className="inline-flex min-h-11 items-center text-current hover:opacity-70 uppercase tracking-[0.2em] text-[13px] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link href="/" aria-label="Belvedere 35, pagina iniziale" className={`inline-flex items-center lg:col-span-1 lg:justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${logoInk}`}>
              <Logo className={isScrolled ? "h-12 w-auto lg:h-16" : "h-14 w-auto sm:h-16 lg:h-24"} scrolled={logoInk === "header-on-light"} />
            </Link>

            <nav aria-label="Navigazione principale, informazioni" className={`hidden lg:col-span-3 lg:flex items-center justify-end gap-5 xl:gap-8 ${rightInk}`}>
              {[navLinks[3], navLinks[6]].map((link) => (
                <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className="inline-flex min-h-11 items-center text-current hover:opacity-70 uppercase tracking-[0.2em] text-[13px] font-medium whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                  {link.label}
                </Link>
              ))}
              <a href="/capitolato.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-current px-4 text-xs font-medium uppercase tracking-wider text-current hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                Capitolato
              </a>
            </nav>

            <Dialog.Trigger asChild>
              <button type="button" aria-label="Apri menu di navigazione" className={`flex min-h-11 items-center justify-center gap-2 rounded-full border border-current bg-transparent px-4 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current lg:hidden ${rightInk}`}>
                <span className="text-xs font-semibold tracking-wider">Menu</span>
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
          </div>
        </div>
      </header>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/50" />
        <Dialog.Content aria-describedby={undefined} className="mobile-navigation fixed inset-0 z-[70] flex flex-col bg-[#122b32] text-[#f7faf9]">
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
                <a href={CONTACT_PHONE_HREF} className="flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/30 px-4 py-3 text-sm font-semibold text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Chiama {CONTACT_PHONE}
                </a>
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
