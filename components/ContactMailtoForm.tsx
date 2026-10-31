"use client"

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/contact"
import { track } from "@/lib/analytics"

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

type Status = "idle" | "sending" | "sent" | "error"

/**
 * Modulo contatti. Con la chiave Web3Forms (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) invia la richiesta
 * via email con protezione antispam; senza chiave apre il programma di posta del visitatore.
 */
export default function ContactMailtoForm({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>("idle")
  const formRef = useRef<HTMLFormElement>(null)

  // Precompila la richiesta quando si arriva dalla scheda di un'unità (?unita=7&tipologia=quadrilocale)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const unit = params.get("unita")
    const typology = params.get("tipologia")
    const form = formRef.current
    if (!form) return
    if (typology) {
      const select = form.elements.namedItem("contact-typology") as HTMLSelectElement | null
      if (select) select.value = typology
    }
    if (unit) {
      const message = form.elements.namedItem("contact-message") as HTMLTextAreaElement | null
      if (message && !message.value) message.value = `Vorrei ricevere informazioni e la scheda tecnica dell'appartamento ${unit}.`
    }
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (String(data.get("botcheck") ?? "")) return

    const firstName = String(data.get("first-name") ?? "").trim()
    const lastName = String(data.get("last-name") ?? "").trim()
    const email = String(data.get("contact-email") ?? "").trim()
    const phone = String(data.get("contact-phone") ?? "").trim()
    const typology = String(data.get("contact-typology") ?? "").trim()
    const message = String(data.get("contact-message") ?? "").trim()

    if (!ACCESS_KEY) {
      const body = [`Nome: ${firstName} ${lastName}`, `Email: ${email}`, `Telefono: ${phone || "Non indicato"}`, `Tipologia di interesse: ${typology || "Non indicata"}`, "", message].join("\n")
      track("Richiesta via email")
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Richiesta informazioni Belvedere 35")}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Nuova richiesta dal sito Belvedere 35",
          from_name: "Sito Belvedere 35",
          replyto: email,
          Nome: `${firstName} ${lastName}`,
          Email: email,
          Telefono: phone || "Non indicato",
          "Tipologia di interesse": typology || "Non indicata",
          Messaggio: message,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.success === false) throw new Error("invio non riuscito")
      setStatus("sent")
      track("Richiesta inviata", { tipologia: typology || "non indicata" })
      form.reset()
    } catch {
      setStatus("error")
      track("Errore modulo")
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {children}
      <div aria-live="polite">
        {status === "sending" && <p className="text-sm text-muted-foreground">Invio in corso…</p>}
        {status === "sent" && (
          <p className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
            Grazie, la tua richiesta è stata inviata. Ti ricontatteremo al più presto.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900">
            Non è stato possibile inviare la richiesta. Contattaci direttamente al{" "}
            <a href={CONTACT_PHONE_HREF} className="font-semibold underline">{CONTACT_PHONE}</a> o a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">{CONTACT_EMAIL}</a>.
          </p>
        )}
        {!ACCESS_KEY && (
          <p className="text-xs leading-relaxed text-muted-foreground" role="note">
            Il pulsante apre il tuo programma di posta con il messaggio già compilato: conferma l’invio da lì.
          </p>
        )}
      </div>
    </form>
  )
}
