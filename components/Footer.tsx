import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    progetto: [
      { label: "Top", href: "/" },
      { label: "Il Progetto", href: "/il-progetto" },
      { label: "Tipologie", href: "/tipologie" },
      { label: "Parti esterne", href: "/terrazzi-e-giardini#parti-esterne" },
    ],
    legale: [
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Termini e Condizioni", href: "#" },
      { label: "Note Legali", href: "#" },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-2xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wide text-background">
                  Parco Aurora
                </span>
                <span className="text-xs tracking-widest uppercase text-background/60">
                  Torino
                </span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Un nuovo concetto di abitare nel cuore verde di Torino. Residenze esclusive pensate per chi cerca qualita, comfort e sostenibilita.
            </p>
            <div className="space-y-3 text-background/70">
              <a href="tel:+390111234567" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
                +39 011 1234567
              </a>
              <a href="mailto:info@jcostruzioni.it" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" aria-hidden="true" />
                info@jcostruzioni.it
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Il Progetto</h4>
            <ul className="space-y-3">
              {footerLinks.progetto.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-5">Legale</h4>
            <ul className="space-y-3">
              {footerLinks.legale.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-background/50 text-sm">In collaborazione con:</p>
            <div className="flex items-center gap-8 flex-wrap justify-center">
              <span className="text-background/50 text-sm font-medium tracking-wider">J COSTRUZIONI</span>
              <span className="text-background/50 text-sm font-medium tracking-wider">IBIM AGENZIA IMMOBILIARE</span>
              <span className="text-background/50 text-sm font-medium tracking-wider">UFFICIO VENDITE: +39 011 1234567</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>&copy; {currentYear} Parco Aurora S.r.l. - P.IVA 12345678901 - Tutti i diritti riservati</p>
            <p>
              Realizzato con cura da{" "}
              <a href="#" className="text-primary hover:underline">
                Studio Digitale
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
