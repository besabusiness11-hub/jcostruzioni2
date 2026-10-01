"use client"

import type { FormEvent, ReactNode } from "react"
import { CONTACT_EMAIL } from "@/lib/contact"

export default function ContactMailtoForm({ children }: { children: ReactNode }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const firstName = String(data.get("first-name") ?? "").trim()
    const lastName = String(data.get("last-name") ?? "").trim()
    const email = String(data.get("contact-email") ?? "").trim()
    const phone = String(data.get("contact-phone") ?? "").trim()
    const typology = String(data.get("contact-typology") ?? "").trim()
    const message = String(data.get("contact-message") ?? "").trim()

    const body = [
      `Nome: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Telefono: ${phone || "Non indicato"}`,
      `Tipologia di interesse: ${typology || "Non indicata"}`,
      "",
      message,
    ].join("\n")

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Richiesta informazioni Belvedere 35")}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {children}
      <p className="text-xs leading-relaxed text-muted-foreground" role="note">
        Il pulsante apre il tuo programma di posta con il messaggio già compilato: conferma l’invio da lì.
      </p>
    </form>
  )
}
