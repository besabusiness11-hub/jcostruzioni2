import Link from "next/link"
import { Mail } from "lucide-react"
import Logo from "@/components/Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    legale: [
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Termini e Condizioni", href: "#" },
      { label: "Note Legali", href: "#" },
    ],
  }

  return (
    <footer className="bg-[#241a16] text-[#fcfbf9] border-t border-[#3e2d27]/20">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Logo & Info column */}
          <div className="md:col-span-7">
            <Link href="/" className="inline-block mb-8 group">
              <div className="h-20 flex items-center">
                <Logo className="h-full w-auto text-white group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
            </Link>
            <p className="text-[#fcfbf9]/70 leading-relaxed mb-8 max-w-sm font-light text-base">
              Residenze moderne nel verde di Garbagnate Monastero, pensate per chi cerca qualità, comfort e benessere quotidiano.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:info@jcostruzioni.it" 
                className="inline-flex items-center gap-3 text-[#fcfbf9]/60 hover:text-primary transition-colors duration-300 font-medium text-sm group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                  <Mail className="w-4 h-4 text-white group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
                </div>
                <span>info@jcostruzioni.it</span>
              </a>
            </div>
          </div>

          {/* Links column */}
          <div className="md:col-span-5 md:pl-12 lg:pl-20">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6">
              Legale
            </h4>
            <ul className="space-y-4">
              {footerLinks.legale.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#fcfbf9]/60 hover:text-[#fcfbf9] hover:pl-2 transition-all duration-300 font-light flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>



      {/* Bottom copyrights */}
      <div className="border-t border-white/5 bg-[#140e0c]/80">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#fcfbf9]/40 font-light">
            <p>&copy; {currentYear} Belvedere 35 - Tutti i diritti riservati</p>
            <p className="tracking-wide">
              Realizzato con cura da{" "}
              <a href="https://besaweb.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-primary/80 font-normal transition-colors duration-300">
                Besaweb.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
