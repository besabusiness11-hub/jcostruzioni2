"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageHero from "@/components/PageHero"
import { ArrowRight } from "lucide-react"

const tabs = [
  { id: "tutti", label: "Tutti gli Spazi" },
  { id: "terrazzi", label: "Terrazzi" },
  { id: "giardini", label: "Giardini" },
  { id: "parti-esterne", label: "Parti Esterne" },
  { id: "piscina", label: "Piscina" },
]

const features = [
  {
    title: "Giardini privati",
    description: "Uno spazio verde esterno riservato ad alcune unità abitative.",
  },
  {
    title: "Terrazzi",
    description: "Superfici all’aperto collegate agli appartamenti.",
  },
  {
    title: "Piscina condominiale",
    description: "Uno spazio comune per i residenti, inserito nell’area verde.",
  },
]

export default function IlVerdeClient({ initialTab = "tutti" }: { initialTab?: string }) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const reducedMotion = useReducedMotion()
  const scrollAfterTabChange = useRef(false)

  useEffect(() => {
    if (!scrollAfterTabChange.current || activeTab === "tutti") return
    scrollAfterTabChange.current = false
    document.getElementById(activeTab)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
  }, [activeTab, reducedMotion])

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) {
      document.getElementById(tabId)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
      return
    }
    scrollAfterTabChange.current = tabId !== "tutti"
    setActiveTab(tabId)
  }

  return (
    <main className="min-h-screen bg-[#f7faf9]">
      <Header />
      <PageHero
        title={initialTab === "piscina" ? "La Piscina" : "Il Verde & Le Aree Esterne"}
        subtitle="Un'esperienza abitativa immersa nella natura: Terrazzi, Giardini, Parti Esterne e Piscina"
        image="/images/project-sunset-drone.jpg"
        imageAlt="Belvedere 35 Il Verde e Piscina"
      />

      {/* Tab Navigation Bar (Statica nel flusso della pagina, senza scorrimento sticky) */}
      <section className="bg-[#f7faf9] border-b border-slate-200/60 py-6">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center">
            <div role="group" aria-label="Filtra gli spazi esterni" className="grid w-full grid-cols-2 gap-1 rounded-2xl border border-slate-300/40 bg-slate-200/60 p-1.5 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-2 sm:rounded-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    aria-pressed={isActive}
                    aria-controls={tab.id === "tutti" ? undefined : tab.id}
                    className={`relative min-h-12 px-3 sm:px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${tab.id === "tutti" ? "col-span-2" : ""} ${
                      isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeVerdeTab"
                        className="absolute inset-0 bg-[#1b3941] rounded-full shadow-md"
                        transition={{ duration: reducedMotion ? 0 : 0.2 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Panoramica Caratteristiche */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#f7faf9] to-[#edf4f2]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-fade-in-up">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              Il Verde a Belvedere 35
            </span>
            <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight font-medium">
              Vivi il relax
              <span className="block text-primary italic font-normal mt-2">all'aria aperta</span>
            </h2>
            <p className="text-muted-foreground/90 text-base sm:text-lg font-light leading-relaxed">
              Il progetto comprende giardini privati, terrazzi e una piscina condominiale inserita nell’area verde.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-[#122b32]/20 pt-8 md:grid-cols-3 md:gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="border-l-2 border-primary/50 pl-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE TERRAZZI */}
      {(activeTab === "tutti" || activeTab === "terrazzi") && (
        <section id="terrazzi" className="py-16 sm:py-24 lg:py-32 bg-background border-t border-slate-200/40">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-700 group hover:-translate-y-1">
                    <Image src="/images/terrace-main.png" alt="Terrazza moderna" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-1.5">
                      <span className="text-white text-[10px] tracking-wider uppercase font-semibold">Terrazzi</span>
                    </div>
                  </div>
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-700 sm:mt-12 group hover:-translate-y-1">
                    <Image src="/images/outdoor-lounge.png" alt="Relax in terrazzo" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-1.5">
                      <span className="text-white text-[10px] tracking-wider uppercase font-semibold">Area Living</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-fade-in-up">
                <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  01 / Terrazzi
                </span>
                <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                  Spazi all'aperto
                  <span className="block text-primary italic font-normal mt-2">pensati per te</span>
                </h2>
                <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-6 font-light">
                  Le terrazze sono progettate come veri ambienti di vita, ideali per cene estive, lettura al sole e momenti di quiete quotidiana.
                </p>
                <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-10 font-light">
                  Dotate di pavimentazione galleggiante in gres porcellanato ad alta resistenza, punti luce integrati e parapetti trasparenti per il massimo panorama.
                </p>
                <Link href="/tipologie" className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider">
                  Scopri gli appartamenti con terrazzo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEZIONE GIARDINI */}
      {(activeTab === "tutti" || activeTab === "giardini") && (
        <section id="giardini" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#f7faf9] to-[#edf4f2] border-t border-slate-200/40">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  02 / Giardini Privati
                </span>
                <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                  La tua oasi
                  <span className="block text-primary italic font-normal mt-2">privata nel verde</span>
                </h2>
                <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-6 font-light">
                  I giardini privati al piano terra sono concepiti come estensione diretta dell'abitazione: spazi dove coltivare pace, convivialità e benessere.
                </p>
                <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-10 font-light">
                  Ogni giardino dispone di predisposizione per l'irrigazione automatica e siepi perimetrali selezionate per garantire riservatezza.
                </p>
                <Link href="/tipologie" className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider">
                  Vedi le tipologie con giardino
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>

              <div className="relative h-72 sm:h-96 lg:h-[500px] rounded-2xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 group animate-fade-in-up">
                <Image src="/images/garden-main.png" alt="Giardino privato vista estiva" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEZIONE PARTI ESTERNE */}
      {(activeTab === "tutti" || activeTab === "parti-esterne") && (
        <section id="parti-esterne" className="py-16 sm:py-24 lg:py-32 bg-background border-t border-slate-200/40">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
              <div className="relative h-72 sm:h-96 lg:h-[520px] rounded-2xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 group animate-fade-in-up">
                <Image src="/images/outdoor-vertical-1.png" alt="Camminamenti e parti esterne" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12">
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Parti esterne</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-semibold">Camminamenti & Solarium</h3>
                </div>
              </div>

              <div className="animate-fade-in-up">
                <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  03 / Parti Esterne
                </span>
                <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                  Un'estensione elegante
                  <span className="block text-primary italic font-normal mt-2">della vita di casa</span>
                </h2>
                <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-6 font-light">
                  Le parti esterne condominiali sono pensate come spazi da vivere: percorsi pedonali illuminati con tecnologia LED a basso consumo, arredi urbani integrati ed erbe essenziali.
                </p>
                <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-10 font-light">
                  L'intero perimetro rispetta i più severi criteri di bio-architettura e videosorveglianza per la massima tranquillità dei residenti.
                </p>
                <Link href="/contatti" className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider">
                  Richiedi brochure del progetto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEZIONE PISCINA */}
      {(activeTab === "tutti" || activeTab === "piscina") && (
        <section data-header-theme="dark" id="piscina" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#122b32] to-[#0b2027] text-white border-t border-white/10">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12">
            <div className="max-w-3xl mb-10 sm:mb-16 animate-fade-in-up">
              <span className="inline-block text-[#9ddbd2] text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                04 / Piscina Condominiale
              </span>
              <h2 className="font-serif text-[2rem] sm:text-4xl md:text-6xl text-white mb-6 font-medium leading-tight">
                La piscina riservata
                <span className="block text-[#9ddbd2] italic font-normal mt-2">il cuore azzurro di Belvedere 35</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed">
                La piscina condominiale si trova al centro dell’area verde ed è riservata ai residenti di Belvedere 35.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-8 relative h-[280px] sm:h-[450px] lg:h-[550px] rounded-2xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image src="/images/pool-and-gardens.png" alt="Piscina principale di Belvedere 35" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
              <ul className="lg:col-span-4 divide-y divide-white/20 border-y border-white/20">
                <li className="py-6">
                  <h3 className="font-serif text-2xl font-semibold text-white">Zona solarium</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">Una zona prendisole accanto alla piscina condominiale.</p>
                </li>
                <li className="py-6">
                  <h3 className="font-serif text-2xl font-semibold text-white">Accesso riservato</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">La piscina è destinata ai residenti del complesso.</p>
                </li>
                <li className="py-6">
                  <h3 className="font-serif text-2xl font-semibold text-white">Nel verde</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">Lo spazio si trova al centro dell’area verde comune.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#f7faf9] to-[#edf4f2]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 text-center animate-fade-in-up">
          <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight font-medium">
            Vuoi scoprire dal vivo gli spazi esterni?
          </h2>
          <p className="text-muted-foreground/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Prenota un incontro dedicato per esplorare la planimetria e le disposizioni del verde di Belvedere 35.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1"
          >
            Contattaci Ora
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
