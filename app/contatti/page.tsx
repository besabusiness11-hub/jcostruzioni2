import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Mail, MapPin, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Contatti | Belvedere 35 - Garbagnate Monastero",
  description: "Contatta il team di Belvedere 35 per ricevere informazioni, prenotare una visita o per richieste commerciali. Siamo a tua disposizione.",
}

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      {/* Hero Section - Minimal & Modern */}
      <section className="page-hero relative flex items-end bg-gradient-to-b from-[#241a16] to-[#120d0b] overflow-hidden">
        {/* Glow ambientali in background */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3e2d27]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">
              Contatti
            </span>
            <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[0.95] mb-8">
              Parliamo del<br />
              <span className="text-white/40 italic font-normal">tuo futuro</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-light">
              Siamo qui per accompagnarti nella scelta della tua nuova casa.
              Ogni grande progetto inizia con una conversazione.
            </p>
          </div>
        </div>

        {/* Bordo inferiore sfumato */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Form + Info Section */}
      <section className="py-16 sm:py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-24">

            {/* Sinistra: Modulo */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Modulo di contatto</span>
              </div>
              <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl text-foreground mb-4 leading-tight font-semibold">
                Inviaci un messaggio
              </h2>
              <p className="text-muted-foreground/90 text-base sm:text-lg mb-6 max-w-lg font-light">
                Compila il modulo e ti ricontatteremo al più presto per fornirti tutte le informazioni necessarie.
              </p>

              <div className="mb-8 rounded-xl border border-primary/20 bg-white p-4">
                <p className="mb-1 text-sm text-muted-foreground">Preferisci scriverci direttamente?</p>
                <a href={"mailto:" + CONTACT_EMAIL} className="inline-flex min-h-11 items-center break-all text-sm font-semibold text-primary underline underline-offset-4">{CONTACT_EMAIL}</a>
              </div>

              <form className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="first-name" className="block text-sm font-semibold text-foreground mb-2">
                      Nome *
                    </label>
                    <input id="first-name" autoComplete="given-name"
                      type="text"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary text-foreground text-lg placeholder:text-muted-foreground transition-colors duration-300 font-light"
                      placeholder="Mario"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="last-name" className="block text-sm font-semibold text-foreground mb-2">
                      Cognome *
                    </label>
                    <input id="last-name" autoComplete="family-name"
                      type="text"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary text-foreground text-lg placeholder:text-muted-foreground transition-colors duration-300 font-light"
                      placeholder="Rossi"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input id="contact-email" autoComplete="email" inputMode="email"
                      type="email"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary text-foreground text-lg placeholder:text-muted-foreground transition-colors duration-300 font-light"
                      placeholder="mario@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-foreground mb-2">
                      Telefono
                    </label>
                    <input id="contact-phone" autoComplete="tel" inputMode="tel"
                      type="tel"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary text-foreground text-lg placeholder:text-muted-foreground transition-colors duration-300 font-light"
                      placeholder="+39 333 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-typology" className="block text-sm font-semibold text-foreground mb-2">
                    Tipologia di interesse
                  </label>
                  <select id="contact-typology" className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary text-foreground text-lg transition-colors duration-300 cursor-pointer font-light">
                    <option value="">Seleziona una tipologia</option>
                    <option value="bilocale">Bilocale</option>
                    <option value="trilocale">Trilocale</option>
                    <option value="quadrilocale">Quadrilocale</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground mb-2">
                    Messaggio *
                  </label>
                  <textarea id="contact-message"
                    required
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-300 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary text-foreground text-lg placeholder:text-muted-foreground resize-y transition-colors duration-300 font-light"
                    placeholder="Raccontaci le tue esigenze..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <label className="flex min-h-11 min-w-11 shrink-0 cursor-pointer items-start justify-center pt-2">
                    <input id="contact-privacy" type="checkbox" required aria-labelledby="contact-privacy-label" className="h-5 w-5 accent-primary cursor-pointer" />
                    <span className="sr-only">Acconsento al trattamento dei dati personali</span>
                  </label>
                  <label htmlFor="contact-privacy" id="contact-privacy-label" className="min-h-11 cursor-pointer text-muted-foreground text-sm leading-relaxed">
                    Acconsento al trattamento dei miei dati personali ai sensi del GDPR.
                    Leggi la nostra <a href="#" className="text-primary underline underline-offset-2">Privacy Policy</a>.
                  </label>
                </div>

                <Button type="submit" className="group min-h-12 bg-primary text-primary-foreground hover:bg-primary/95 rounded-full w-full sm:w-auto px-5 sm:px-10 py-4 sm:py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                  <Send className="w-4 h-4 mr-3 group-hover:translate-x-0.5 transition-transform" />
                  Invia Messaggio
                </Button>
              </form>
            </div>

            {/* Destra: Blocco Informazioni */}
            <div className="lg:col-span-5 animate-fade-in-up">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Info Card */}
                <div className="bg-[#3e2d27] rounded-2xl sm:rounded-[36px] p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />

                  <h3 className="font-serif text-3xl mb-8 font-semibold relative z-10">Dove trovarci</h3>

                  <div className="space-y-6 relative z-10">
                    <div className="flex gap-4">
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
                        <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">Garbagnate Monastero</p>
                        <p className="text-white/50 text-sm font-light">Provincia di Lecco (LC)</p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <div className="flex gap-4">
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
                        <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="break-words text-white/90 font-medium hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        <p className="text-white/50 text-sm font-light">Risposta entro 24h</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mappa */}
                <div className="rounded-2xl sm:rounded-[36px] overflow-hidden h-64 border border-slate-200/50 shadow-md">
                  <iframe
                    src="https://www.google.com/maps?q=Garbagnate%20Monastero%20LC&t=h&z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
