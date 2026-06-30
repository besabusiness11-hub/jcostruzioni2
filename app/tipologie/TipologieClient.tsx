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
    sqm: "60-63 mq",
    priceFrom: "215.000",
    available: 3,
    features: [
      "Distribuzione degli spazi estremamente efficiente",
      "Terrazzo loggiato o giardino ad uso esclusivo",
      "Zona notte separata e silenziosa",
      "Ideale per investimento o prima casa"
    ],
    units: [
      { name: "3B", floor: "Piano 1", sqm: 60, terrace: 17, price: "215.000", available: true, uniqueness: "Soluzione funzionale ed efficiente con un'ottima esposizione solare, ideale come investimento o prima casa." },
      { name: "5A", floor: "Piano 1", sqm: 61, terrace: 19, price: "220.000", available: true, uniqueness: "Bilocale luminoso al primo piano con terrazzo abitabile coperto, perfetto per cene estive." },
      { name: "2A", floor: "Piano Terra", sqm: 63, terrace: 19, garden: 62, price: "235.000", available: true, uniqueness: "Splendido bilocale al piano terra dotato di un ampio giardino privato di oltre 60 mq." },
    ]
  },
  trilocali: {
    title: "Trilocali",
    subtitle: "La soluzione più richiesta",
    description: "Appartamenti equilibrati, con zona giorno luminosa e spazi flessibili per studio, famiglia e vita all'aperto.",
    image: "/images/apartment-3rooms.jpg",
    sqm: "104-129 mq",
    priceFrom: "405.000",
    available: 5,
    features: [
      "Living di ampio respiro con cucina a vista o abitabile",
      "Doppi servizi finestrati con finiture di pregio",
      "Giardini privati al piano terra fino a 300 mq",
      "Terrazzi loggiati vivibili al primo piano"
    ],
    units: [
      { name: "3A", floor: "Piano Terra", sqm: 114, terrace: 15, garden: 126, price: "405.000", available: true, uniqueness: "Spettacolare trilocale al piano terra con portico e un magnifico giardino ad angolo di 126 mq." },
      { name: "6A", floor: "Piano 1", sqm: 104, terrace: 13, price: "455.000", available: true, uniqueness: "Trilocale al primo piano con eccellente esposizione solare e balcone loggiato, taglio moderno." },
      { name: "1C", floor: "Piano Terra", sqm: 129, terrace: 29, garden: 240, price: "475.000", available: true, uniqueness: "Trilocale di testa con tripla esposizione ed immenso giardino privato, ideale per famiglie." },
      { name: "2C", floor: "Piano Terra", sqm: 124, terrace: 45, garden: 309, price: "480.000", available: true, uniqueness: "Il trilocale con il giardino più grande del complesso: oltre 300 mq di area verde privata." },
      { name: "1A", floor: "Piano Terra", sqm: 128, terrace: 40, garden: 253, price: "485.000", available: true, uniqueness: "Uno dei trilocali più prestigiosi di Belvedere 35, con giardino di 253 mq e portico coperto di 40 mq." },
    ]
  },
  quadrilocali: {
    title: "Quadrilocali",
    subtitle: "Spazi generosi per la famiglia",
    description: "Soluzioni ampie con ambienti distinti, privacy e una relazione privilegiata con terrazzi o giardini privati.",
    image: "/images/apartment-4rooms.jpg",
    sqm: "124-151 mq",
    priceFrom: "560.000",
    available: 5,
    features: [
      "Salone triplo ad altissima luminosità",
      "Giardini privati al piano terra fino a 300 mq",
      "Terrazzo panoramico avvolgente fino a 70 mq",
      "Suite padronale con cabina armadio o doppi servizi"
    ],
    units: [
      { name: "3C", floor: "Piano 1", sqm: 129, terrace: 32, price: "560.000", available: true, uniqueness: "Luminoso quadrilocale all'ultimo piano caratterizzato da un terrazzo panoramico e un living spazioso." },
      { name: "4C", floor: "Piano 1", sqm: 124, terrace: 45, price: "565.000", available: true, uniqueness: "Quadrilocale angolare al primo piano con uno splendido terrazzo loggiato di 45 mq." },
      { name: "4A", floor: "Piano 1", sqm: 130, terrace: 43, price: "590.000", available: true, uniqueness: "Elegante quadrilocale al primo piano con terrazzo profondo ed ottima illuminazione naturale." },
      { name: "1B", floor: "Piano Terra", sqm: 151, terrace: 71, garden: 299, price: "595.000", available: true, uniqueness: "Esclusivo quadrilocale al piano terra di generosa metratura, con un giardino privato perimetrale di 299 mq." },
      { name: "2B", floor: "Piano 1", sqm: 151, terrace: 71, price: "700.000", available: true, uniqueness: "La residenza più prestigiosa del complesso: attico-quadrilocale di 151 mq con terrazza di 71 mq." },
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
