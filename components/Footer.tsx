import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    progetto: [
      { label: "Il Progetto", href: "#progetto" },
      { label: "Tipologie", href: "#tipologie" },
      { label: "Spazi Esterni", href: "#esterni" },
      { label: "Classe Energetica", href: "#" },
    ],
    servizi: [
      { label: "Ufficio Vendite", href: "#contatti" },
      { label: "Finanziamenti", href: "#" },
      { label: "Personalizzazioni", href: "#" },
      { label: "FAQ", href: "#" },
    ],
    legale: [
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Termini e Condizioni", href: "#" },
      { label: "Note Legali", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
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
              Un nuovo concetto di abitare nel cuore verde di Torino. 
              Residenze esclusive pensate per chi cerca qualità, comfort e sostenibilità.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
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
            <h4 className="font-serif text-lg font-medium mb-5">Servizi</h4>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
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

      {/* Partners Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-background/50 text-sm">In collaborazione con:</p>
            <div className="flex items-center gap-8 flex-wrap justify-center">
              <span className="text-background/40 text-sm font-medium tracking-wider">AURORA COSTRUZIONI</span>
              <span className="text-background/40 text-sm font-medium tracking-wider">STUDIO ARCHITETTURA TORINESE</span>
              <span className="text-background/40 text-sm font-medium tracking-wider">BANCA PIEMONTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
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
