import Link from "next/link"
import { Download, Mail, MapPin, Phone } from "lucide-react"
import Logo from "@/components/Logo"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/contact"

const contactLinkClass = "group flex flex-col items-center gap-3 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9dbb9e]"
const footerLinkClass = "transition-colors hover:text-[#9dbb9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9dbb9e]"

export default function Footer() {
  return (
    <footer className="border-t border-[#9dbb9e]/35 bg-[#241a16] pb-24 pt-20 text-[#fcfbf9] sm:pt-24 lg:pb-12">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9dbb9e]">Vivere il verde, ogni giorno</p>
          <Link href="/" aria-label="Belvedere 35, pagina iniziale" className="mx-auto mt-4 inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9dbb9e]">
            <Logo className="h-24 w-auto sm:h-28" />
          </Link>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Residenze contemporanee a Garbagnate Monastero, tra architettura, comfort e natura.
          </p>
        </div>

        <section className="mt-12 grid gap-9 border-b border-white/20 pb-12 md:grid-cols-3 md:gap-8" aria-label="Recapiti">
          <a href="https://www.google.com/maps/search/?api=1&query=Garbagnate+Monastero+LC" target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
            <MapPin size={30} strokeWidth={1.4} className="text-[#9dbb9e]" aria-hidden="true" />
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9dbb9e]">Dove siamo</span>
              <span className="mt-2 block text-sm leading-relaxed text-white/90">Garbagnate Monastero<br />Provincia di Lecco</span>
            </span>
          </a>
          <a href={CONTACT_PHONE_HREF} className={contactLinkClass}>
            <Phone size={30} strokeWidth={1.4} className="text-[#9dbb9e]" aria-hidden="true" />
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9dbb9e]">Telefono</span>
              <span className="mt-2 block text-sm leading-relaxed text-white/90">{CONTACT_PHONE}</span>
            </span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={contactLinkClass}>
            <Mail size={30} strokeWidth={1.4} className="text-[#9dbb9e]" aria-hidden="true" />
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9dbb9e]">Email</span>
              <span className="mt-2 block break-all text-sm leading-relaxed text-white/90">{CONTACT_EMAIL}</span>
            </span>
          </a>
        </section>

        <section className="border-b border-white/20 py-12 text-center" aria-labelledby="footer-explore-title">
          <h2 id="footer-explore-title" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9dbb9e]">Esplora Belvedere 35</h2>
          <nav aria-label="Link utili" className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-white/85">
            <Link href="/il-progetto" className={footerLinkClass}>Il Progetto</Link>
            <Link href="/tipologie" className={footerLinkClass}>Tipologie</Link>
            <Link href="/il-verde" className={footerLinkClass}>Il Verde</Link>
            <Link href="/contatti" className={footerLinkClass}>Contatti</Link>
            <a href="/capitolato.pdf" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${footerLinkClass}`}>
              <Download size={15} aria-hidden="true" /> Capitolato
            </a>
          </nav>
        </section>

        <div className="pt-7 text-center text-xs leading-relaxed text-white/55">
          <p>Le immagini, i render e le planimetrie presenti sul sito sono illustrativi e non costituiscono elemento contrattuale.</p>
          <p className="mt-5">© {new Date().getFullYear()} Belvedere 35. Tutti i diritti riservati.</p>
          <p className="mt-2">Realizzato con cura da <a href="https://besaweb.com" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Besaweb.com</a></p>
        </div>
      </div>
    </footer>
  )
}
