import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contatti | Belvedere 35 - Garbagnate Monastero",
  description: "Contatta il team di Belvedere 35 per ricevere informazioni, prenotare una visita o per richieste commerciali. Siamo a tua disposizione.",
}

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      {/* Hero Section - Minimal & Modern */}
      <section className="relative min-h-[70vh] flex items-end pb-24 bg-gradient-to-b from-[#241a16] to-[#120d0b] overflow-hidden">
        {/* Glow ambientali in background */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3e2d27]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">
              Contatti
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[0.95] mb-8">
              Parliamo del<br />
              <span className="text-white/40 italic font-normal">tuo futuro</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-light">
              Siamo qui per accompagnarti nella scelta della tua nuova casa. 
              Ogni grande progetto inizia con una conversazione.
            </p>
          </div>
        </div>

        {/* Bordo inferiore sfumato */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Form + Info Section */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sinistra: Modulo */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Modulo di contatto</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 leading-tight font-semibold">
                Inviaci un messaggio
              </h2>
              <p className="text-muted-foreground/90 text-lg mb-12 max-w-lg font-light">
                Compila il modulo e ti ricontatteremo al più presto per fornirti tutte le informazioni necessarie.
              </p>
 
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-350 focus:border-primary focus:outline-none focus:ring-0 text-foreground text-lg placeholder:text-muted-foreground/45 transition-colors duration-300 font-light"
                      placeholder="Mario"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-350 focus:border-primary focus:outline-none focus:ring-0 text-foreground text-lg placeholder:text-muted-foreground/45 transition-colors duration-300 font-light"
                      placeholder="Rossi"
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-350 focus:border-primary focus:outline-none focus:ring-0 text-foreground text-lg placeholder:text-muted-foreground/45 transition-colors duration-300 font-light"
                      placeholder="mario@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-350 focus:border-primary focus:outline-none focus:ring-0 text-foreground text-lg placeholder:text-muted-foreground/45 transition-colors duration-300 font-light"
                      placeholder="+39 333 000 0000"
                    />
                  </div>
                </div>
 
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                    Tipologia di interesse
                  </label>
                  <select className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-350 focus:border-primary focus:outline-none focus:ring-0 text-foreground text-lg transition-colors duration-300 appearance-none cursor-pointer font-light">
                    <option value="">Seleziona una tipologia</option>
                    <option value="bilocale">Bilocale</option>
                    <option value="trilocale">Trilocale</option>
                    <option value="quadrilocale">Quadrilocale</option>
                  </select>
                </div>
 
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                    Messaggio *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-350 focus:border-primary focus:outline-none focus:ring-0 text-foreground text-lg placeholder:text-muted-foreground/45 resize-none transition-colors duration-300 font-light"
                    placeholder="Raccontaci le tue esigenze..."
                  ></textarea>
                </div>
 
                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" required className="mt-1.5 w-4 h-4 accent-primary cursor-pointer" />
                  <p className="text-muted-foreground/90 text-sm leading-relaxed font-light">
                    Acconsento al trattamento dei miei dati personali ai sensi del GDPR. 
                    Leggi la nostra <a href="#" className="text-primary underline underline-offset-2">Privacy Policy</a>.
                  </p>
                </div>
 
                <Button className="group bg-primary text-primary-foreground hover:bg-primary/95 rounded-full px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                  <Send className="w-4 h-4 mr-3 group-hover:translate-x-0.5 transition-transform" />
                  Invia Messaggio
                </Button>
              </form>
            </div>
 
            {/* Destra: Blocco Informazioni */}
            <div className="lg:col-span-5 animate-fade-in-up">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Info Card */}
                <div className="bg-[#3e2d27] rounded-[36px] p-10 text-white shadow-2xl relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
                  
                  <h3 className="font-serif text-3xl mb-8 font-semibold relative z-10">Dove trovarci</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">Garbagnate Monastero</p>
                        <p className="text-white/50 text-sm font-light">Provincia di Lecco (LC)</p>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-white/10" />
 
                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/90 font-medium mb-2">Orari di apertura</p>
                        <div className="space-y-1.5 font-light">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/50">Lun - Ven</span>
                            <span className="text-white/70">9:00 — 18:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/50">Sabato</span>
                            <span className="text-white/70">10:00 — 16:00</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/50">Domenica</span>
                            <span className="text-white/70">Su appuntamento</span>
                          </div>
                        </div>
                      </div>
                    </div>
 
                    <div className="w-full h-px bg-white/10" />
 
                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">info@jcostruzioni.it</p>
                        <p className="text-white/50 text-sm font-light">Risposta entro 24h</p>
                      </div>
                    </div>
                  </div>
                </div>
 
                {/* Mappa */}
                <div className="rounded-[36px] overflow-hidden h-64 border border-slate-200/50 shadow-md">
                  <iframe
                    src="https://www.google.com/maps?q=Garbagnate%20Monastero%20LC&output=embed"
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
