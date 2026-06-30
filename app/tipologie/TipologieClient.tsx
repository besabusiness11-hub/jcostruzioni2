"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, MapPin, Sparkles, Building, Trees, Maximize, Coins } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import UnitAvailabilityTable from "@/components/UnitAvailabilityTable"
import { motion } from "framer-motion"

const apartmentsData = {
  bilocali: {
    title: "Bilocali",
    subtitle: "Ideale per giovani coppie e professionisti",
    description: "Soluzioni compatte e funzionali, con distribuzioni curate e affacci pensati per dare luce agli ambienti quotidiani.",
    image: "/images/apartment-2rooms.jpg",
    sqm: "55-65 mq",
    priceFrom: "245.000",
    available: 8,
    features: [
      "Distribuzione degli spazi estremamente efficiente",
      "Terrazzo loggiato profondo e vivibile",
      "Zona notte separata e silenziosa",
      "Ideale per investimento o prima casa"
    ],
    units: [
      { name: "A1", floor: "Piano 1", sqm: 55, terrace: 8, price: "245.000", available: true, uniqueness: "Affaccio raccolto e distribuzione compatta per una gestione quotidiana semplice." },
      { name: "A2", floor: "Piano 2", sqm: 58, terrace: 10, price: "258.000", available: true, uniqueness: "Zona giorno luminosa con terrazzo proporzionato alla vita all'aperto." },
      { name: "A3", floor: "Piano 3", sqm: 60, terrace: 12, price: "275.000", available: true, uniqueness: "Piano alto e taglio regolare per massimizzare arredo e privacy." },
      { name: "A4", floor: "Piano 4", sqm: 62, terrace: 15, price: "290.000", available: false, uniqueness: "Terrazzo piu ampio e affaccio elevato sulla corte verde." },
      { name: "B1", floor: "Piano 1", sqm: 56, terrace: 8, price: "248.000", available: true, uniqueness: "Soluzione pratica con accesso comodo agli spazi comuni." },
      { name: "B2", floor: "Piano 2", sqm: 59, terrace: 10, price: "262.000", available: true, uniqueness: "Bilocale equilibrato con ambienti facili da personalizzare." },
      { name: "B3", floor: "Piano 3", sqm: 61, terrace: 12, price: "278.000", available: false, uniqueness: "Taglio luminoso con separazione netta tra zona giorno e notte." },
      { name: "B4", floor: "Piano 4", sqm: 65, terrace: 18, price: "305.000", available: true, uniqueness: "Il bilocale piu generoso, con terrazzo profondo e massima vivibilita esterna." },
    ]
  },
  trilocali: {
    title: "Trilocali",
    subtitle: "La soluzione più richiesta",
    description: "Appartamenti equilibrati, con zona giorno luminosa e spazi flessibili per studio, famiglia e vita all'aperto.",
    image: "/images/apartment-3rooms.jpg",
    sqm: "85-100 mq",
    priceFrom: "365.000",
    available: 12,
    features: [
      "Living di ampio respiro con cucina a vista o abitabile",
      "Doppi servizi finestrati con finiture di pregio",
      "Giardini privati al piano terra fino a 40 mq",
      "Camere da letto matrimoniali e singole ampie"
    ],
    units: [
      { name: "C1", floor: "Piano 1", sqm: 85, terrace: 15, price: "365.000", available: true, uniqueness: "Taglio efficiente con living aperto sul terrazzo." },
      { name: "C2", floor: "Piano 2", sqm: 88, terrace: 18, price: "385.000", available: true, uniqueness: "Terrazzo profondo e zona notte raccolta per maggiore privacy." },
      { name: "C3", floor: "Piano 3", sqm: 90, terrace: 20, price: "398.000", available: true, uniqueness: "Piano alto con affacci luminosi e distribuzione regolare." },
      { name: "C4", floor: "Piano 4", sqm: 92, terrace: 25, price: "420.000", available: true, uniqueness: "Ampia superficie esterna per pranzi e relax all'aperto." },
      { name: "D1", floor: "Piano 1", sqm: 86, terrace: 15, price: "368.000", available: false, uniqueness: "Soluzione equilibrata con accessi rapidi agli spazi comuni." },
      { name: "D2", floor: "Piano 2", sqm: 89, terrace: 18, price: "388.000", available: true, uniqueness: "Zona studio flessibile e terrazzo vivibile." },
      { name: "D3", floor: "Piano 3", sqm: 92, terrace: 22, price: "405.000", available: true, uniqueness: "Affaccio piu aperto e living pensato per ricevere." },
      { name: "D4", floor: "Piano 4", sqm: 95, terrace: 28, price: "435.000", available: true, uniqueness: "Il trilocale piu panoramico, con esterno generoso." },
      { name: "E1", floor: "Piano 1", sqm: 95, terrace: 12, garden: 40, price: "425.000", available: true, uniqueness: "Giardino privato ideale per chi desidera uno spazio verde quotidiano." },
      { name: "E2", floor: "Piano 2", sqm: 98, terrace: 20, price: "418.000", available: false, uniqueness: "Superficie ampia e ambienti facilmente personalizzabili." },
      { name: "E3", floor: "Piano 3", sqm: 100, terrace: 22, price: "438.000", available: true, uniqueness: "Taglio ampio con camere ben separate dalla zona giorno." },
      { name: "E4", floor: "Piano 4", sqm: 100, terrace: 30, price: "458.000", available: false, uniqueness: "Grande terrazzo e vista piu aperta sulla corte." },
    ]
  },
  quadrilocali: {
    title: "Quadrilocali",
    subtitle: "Spazi generosi per la famiglia",
    description: "Soluzioni ampie con ambienti distinti, privacy e una relazione privilegiata con terrazzi o giardini privati.",
    image: "/images/apartment-4rooms.jpg",
    sqm: "115-135 mq",
    priceFrom: "485.000",
    available: 6,
    features: [
      "Salone triplo ad altissima luminosità",
      "Giardini privati al piano terra fino a 60 mq",
      "Terrazzo panoramico avvolgente",
      "Suite padronale con cabina armadio dedicata"
    ],
    units: [
      { name: "F1", floor: "Piano 1", sqm: 115, terrace: 20, garden: 50, price: "485.000", available: true, uniqueness: "Giardino privato e zona giorno ampia per una vita familiare aperta verso l'esterno." },
      { name: "F2", floor: "Piano 2", sqm: 118, terrace: 25, price: "498.000", available: true, uniqueness: "Terrazzo importante e ambienti ben separati tra zona giorno e notte." },
      { name: "F3", floor: "Piano 3", sqm: 122, terrace: 30, price: "525.000", available: false, uniqueness: "Piano alto con terrazzo profondo e distribuzione molto regolare." },
      { name: "G1", floor: "Piano 1", sqm: 125, terrace: 18, garden: 60, price: "545.000", available: true, uniqueness: "Il giardino piu ampio, pensato come estensione naturale del living." },
      { name: "G2", floor: "Piano 2", sqm: 128, terrace: 28, price: "558.000", available: true, uniqueness: "Superficie generosa e terrazzo vivibile per pranzi all'aperto." },
      { name: "G3", floor: "Piano 3", sqm: 135, terrace: 35, price: "595.000", available: true, uniqueness: "Il quadrilocale piu ampio, con affacci luminosi e grande terrazzo." },
    ]
  }
}

type TabType = "bilocali" | "trilocali" | "quadrilocali"

export default function TipologieClient() {
  const [activeTab, setActiveTab] = useState<TabType>("bilocali")
  const explorerRef = useRef<HTMLDivElement>(null)

  const handleScrollToExplorer = (tab: TabType) => {
    setActiveTab(tab)
    setTimeout(() => {
      explorerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const activeData = apartmentsData[activeTab]

  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/apartment-3rooms.jpg" 
            alt="Tipologie Abitative" 
            fill 
            className="object-cover scale-105" 
            priority 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
          <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
            Belvedere 35
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6">
            Tipologie Abitative
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Ogni appartamento ha una propria planimetria, con caratteristiche e unicità da scoprire nella tabella delle disponibilità.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* CONCEPT SECTION */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight font-medium">
            Trova la tua <span className="text-primary italic font-normal">casa ideale</span>
          </h2>
          <p className="text-muted-foreground/90 text-lg font-light leading-relaxed">
            Bilocali, trilocali e quadrilocali disegnati per esigenze diverse. Le disponibilità delle singole sezioni ti permettono di aprire ogni unità e visualizzarne planimetria, spazi esterni e punti distintivi.
          </p>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="pb-24 lg:pb-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24 lg:space-y-36">
            {(Object.keys(apartmentsData) as TabType[]).map((key, index) => {
              const item = apartmentsData[key]
              return (
                <div
                  key={key}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                >
                  {/* Visual block */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <button
                      onClick={() => handleScrollToExplorer(key)}
                      className="w-full text-left block relative h-[380px] lg:h-[520px] rounded-[36px] overflow-hidden shadow-xl border border-slate-200/50 group cursor-pointer"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="absolute top-6 right-6 backdrop-blur-md bg-[#3e2d27]/90 border border-white/10 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
                        {item.available} disponibili
                      </div>
                    </button>
                  </div>

                  {/* Copy block */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground/90 text-lg leading-relaxed mb-8 font-light">
                      {item.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 border-y border-slate-200/50 py-6 mb-8">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 font-bold">Superfici indicative</p>
                        <p className="font-serif text-2xl md:text-3xl text-foreground font-medium">{item.sqm}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 font-bold">A partire da</p>
                        <p className="font-serif text-2xl md:text-3xl text-foreground font-semibold">&euro; {item.priceFrom}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleScrollToExplorer(key)}
                      className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary/95 hover:gap-4 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
                    >
                      Vedi disponibilità e planimetrie
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* EXPLORER SECTON (TAB INTERACTIVE) */}
      <section ref={explorerRef} className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed] border-t border-slate-200/30 scroll-mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header explorer */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              Explorer Interattivo
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
              Esplora le unità <span className="text-primary italic font-normal">disponibili</span>
            </h2>
            <p className="text-muted-foreground/90 text-lg font-light leading-relaxed">
              Seleziona la tipologia di appartamento per consultare la tabella completa delle unità, i prezzi, le metrature e visualizzare le planimetrie interattive.
            </p>
          </div>

          {/* TAB BUTTONS (Premium layout con scorrimento Liquid Glass) */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white/70 p-1.5 rounded-full border border-slate-200/50 shadow-md backdrop-blur-sm select-none">
              {(Object.keys(apartmentsData) as TabType[]).map((key) => {
                const item = apartmentsData[key]
                const isActive = activeTab === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative rounded-full px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2 cursor-pointer outline-none ${
                      isActive 
                        ? "text-white" 
                        : "text-[#3e2d27]/70 hover:text-[#3e2d27]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-[#44322b] to-[#362722] border border-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_20px_-4px_rgba(0,0,0,0.35)] z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.title}</span>
                    <span className={`relative z-10 inline-flex items-center justify-center rounded-full text-[9px] px-2 py-0.5 font-bold transition-all duration-300 ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "bg-slate-200/80 text-foreground"
                    }`}>
                      {item.available}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ACTIVE TAB SUMMARY BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
            {/* Left box details */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[32px] border border-slate-200/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-3 bg-primary/10 text-primary rounded-2xl">
                    <Building className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Categoria</p>
                    <h3 className="font-serif text-3xl text-foreground font-semibold">{activeData.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground/90 text-lg font-light leading-relaxed mb-8">
                  {activeData.description}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeData.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="p-1 bg-primary/10 text-primary rounded-full mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm text-foreground/80 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8 mt-8">
                <div className="flex flex-col">
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                    <Maximize className="w-3 h-3 text-primary/70" /> Superfici
                  </span>
                  <span className="font-serif text-xl md:text-2xl text-foreground font-semibold">{activeData.sqm}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                    <Coins className="w-3 h-3 text-primary/70" /> Prezzo da
                  </span>
                  <span className="font-serif text-xl md:text-2xl text-foreground font-semibold">&euro; {activeData.priceFrom}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary/70" /> Disponibilità
                  </span>
                  <span className="font-serif text-xl md:text-2xl text-foreground font-semibold">{activeData.available} Unità</span>
                </div>
              </div>
            </div>

            {/* Right box visual preview */}
            <div className="lg:col-span-5 relative min-h-[350px] rounded-[32px] overflow-hidden shadow-xl border border-slate-200/40">
              <Image 
                src={activeData.image} 
                alt={`${activeData.title} Preview`}
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 400px" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241a16]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[9px] text-white/70 uppercase tracking-widest mb-1.5 font-bold">Progetto Belvedere 35</p>
                <h4 className="font-serif text-2xl font-semibold">Residenze di Prestigio</h4>
              </div>
            </div>
          </div>

          {/* TABLE OF UNITS */}
          <div className="bg-white rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/30">
            <UnitAvailabilityTable units={activeData.units} typeLabel={activeData.title} />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 lg:py-36 bg-[#3e2d27] text-[#fcfbf9] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-medium">
            Desideri maggiori informazioni?
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Prenota una visita in cantiere o fissa un colloquio informativo con i nostri consulenti per scoprire tutte le opportunità di Belvedere 35.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1">
              Fissa un appuntamento
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/il-progetto" className="inline-flex items-center justify-center px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-1">
              Esplora il Progetto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
