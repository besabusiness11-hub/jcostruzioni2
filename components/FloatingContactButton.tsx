import { Phone } from "lucide-react"
import { CONTACT_PHONE_HREF } from "@/lib/contact"

export default function FloatingContactButton() {
  return (
    <a
      href={CONTACT_PHONE_HREF}
      aria-label="Chiama ora per informazioni su Belvedere 35"
      className="contact-float fixed z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-[#1b3941] px-5 text-white shadow-lg transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-semibold">Chiama ora</span>
    </a>
  )
}
