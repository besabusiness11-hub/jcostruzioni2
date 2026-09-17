"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, MapPin, Sparkles, Building, Trees, Maximize, Coins } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import UnitAvailabilityTable from "@/components/UnitAvailabilityTable"
import { motion, useReducedMotion } from "framer-motion"

const apartmentsData = {
  bilocali: {
    title: "Bilocali",
    subtitle: "Soluzioni compatte e luminose",
    description: "Tre appartamenti tra piano terra e primo piano, con portici o terrazzi e planimetrie dedicate.",
    image: "/images/interior-bilocale.jpg",
    sqm: "60-63 mq",
    priceFrom: "215.000",
    available: 3,
    features: [
      "Piano terra con portico e giardino privato",
      "Primo piano con terrazzo abitabile",
      "Zona giorno luminosa e distribuzioni funzionali",
      "Planimetria dedicata per ogni unità",
    ],
    units: [
      { name: "2", floor: "Piano Terra", sqm: 63.38, terrace: 18.9, terraceLabel: "Portico", garden: 62.22, price: "235.000", available: true, planImage: "/images/planimetrie/appartamento-02.webp", uniqueness: "Bilocale al piano terra con portico e giardino privato." },
      { name: "8", floor: "Piano 1", sqm: 61.17, terrace: 18.9, terraceLabel: "Terrazzo", price: "220.000", available: true, planImage: "/images/planimetrie/appartamento-08.webp", uniqueness: "Bilocale al primo piano con terrazzo privato." },
      { name: "10", floor: "Piano 1", sqm: 59.6, terrace: 17.26, terraceLabel: "Terrazzo", price: "215.000", available: true, planImage: "/images/planimetrie/appartamento-10.webp", uniqueness: "Bilocale al primo piano con terrazzo privato." },
    ],
  },
  trilocali: {
    title: "Trilocali",
    subtitle: "Spazi versatili per la vita quotidiana",
    description: "Quattro trilocali con giardini al piano terra o spazi esterni esclusivi al primo piano.",
    image: "/images/interior-trilocale.jpg",
    sqm: "104-129 mq",
    priceFrom: "405.000",
    available: 4,
    features: [
      "Piano terra con portico e giardino privato",
      "Primo piano con terrazzo, solarium e gazebo",
      "Zona giorno luminosa e spazi ben distribuiti",
      "Planimetria dedicata per ogni unità",
    ],
    units: [
      { name: "3", floor: "Piano Terra", sqm: 114.25, terrace: 15.1, terraceLabel: "Portico", garden: 126.31, price: "405.000", available: true, planImage: "/images/planimetrie/appartamento-03.webp", uniqueness: "Trilocale al piano terra con portico e giardino privato." },
      { name: "6", floor: "Piano Terra", sqm: 124.1, terrace: 45.2, terraceLabel: "Portico", garden: 308.6, price: "480.000", available: true, planImage: "/images/planimetrie/appartamento-06.webp", uniqueness: "Trilocale al piano terra con ampio portico e giardino privato." },
      { name: "9", floor: "Piano 1", sqm: 103.5, terrace: 13.2, terraceLabel: "Terrazzo", price: "465.000", available: true, planImage: "/images/planimetrie/appartamento-09.webp", uniqueness: "Trilocale al primo piano con terrazzo, gazebo e solarium." },
      { name: "13", floor: "Piano 1", sqm: 129, terrace: 31.7, terraceLabel: "Terrazzo", price: "565.000", available: true, planImage: "/images/planimetrie/appartamento-13.webp", uniqueness: "Trilocale al primo piano con terrazzo, gazebo e solarium." },
    ],
  },
  quadrilocali: {
    title: "Quadrilocali",
    subtitle: "Spazi generosi per la famiglia",
    description: "Sei quadrilocali con giardini, portici o ampi spazi esterni al primo piano.",
    image: "/images/interior-quadrilocale.jpg",
    sqm: "124-151 mq",
    priceFrom: "475.000",
    available: 6,
    features: [
      "Piano terra con portico e giardino privato",
      "Primo piano con terrazzo, solarium e gazebo",
      "Ambienti ampi e distribuzioni dedicate",
      "Planimetria dedicata per ogni unità",
    ],
    units: [
      { name: "1", floor: "Piano Terra", sqm: 128.34, terrace: 39.74, terraceLabel: "Portico", garden: 253, price: "485.000", available: true, planImage: "/images/planimetrie/appartamento-01.webp", uniqueness: "Quadrilocale al piano terra con portico e giardino privato." },
      { name: "4", floor: "Piano Terra", sqm: 150.93, terrace: 71.21, terraceLabel: "Portico", garden: 298.5, price: "595.000", available: true, planImage: "/images/planimetrie/appartamento-04.webp", uniqueness: "Quadrilocale al piano terra con ampio portico e giardino privato." },
      { name: "5", floor: "Piano Terra", sqm: 129.1, terrace: 28.7, terraceLabel: "Portico", garden: 240.3, price: "475.000", available: true, planImage: "/images/planimetrie/appartamento-05.webp", uniqueness: "Quadrilocale al piano terra con portico e giardino privato." },
      { name: "7", floor: "Piano 1", sqm: 129.59, terrace: 42.81, terraceLabel: "Terrazzo", price: "595.000", available: true, planImage: "/images/planimetrie/appartamento-07.webp", uniqueness: "Quadrilocale al primo piano con terrazzo, gazebo e solarium." },
      { name: "11", floor: "Piano 1", sqm: 150.99, terrace: 70.5, terraceLabel: "Terrazzo", price: "710.000", available: true, planImage: "/images/planimetrie/appartamento-11.webp", uniqueness: "Quadrilocale al primo piano con terrazzo, gazebo e solarium." },
      { name: "12", floor: "Piano 1", sqm: 124.2, terrace: 45.1, terraceLabel: "Terrazzo", price: "570.000", available: true, planImage: "/images/planimetrie/appartamento-12.webp", uniqueness: "Quadrilocale al primo piano con terrazzo, gazebo e solarium." },
    ],
  },
}

type TabType = "bilocali" | "trilocali" | "quadrilocali"

export default function TipologieClient() {
  const [activeTab, setActiveTab] = useState<TabType>("bilocali")
  const reducedMotion = useReducedMotion()
  const explorerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const tab = params.get("tab") as TabType
      if (tab && ["bilocali", "trilocali", "quadrilocali"].includes(tab)) {
        setActiveTab(tab)
      }
    }
  }, [])

  const handleScrollToExplorer = (tab: TabType) => {
    setActiveTab(tab)
    setTimeout(() => {
      explorerRef.current?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" })
    }, 100)
  }

  const activeData = apartmentsData[activeTab]

  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      {/* HERO SECTION */}
      <section className="page-hero relative flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/interior-kitchen-sunset.jpg"
            alt="Tipologie Abitative"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
        </div>

        <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12 text-left">
          <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
            Belvedere 35
          </span>
          <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6">
            Tipologie Abitative
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Ogni appartamento ha una propria planimetria, con caratteristiche e unicità da scoprire nella tabella delle disponibilità.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* CONCEPT SECTION */}
      <section className="py-16 sm:py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl text-foreground mb-8 leading-tight font-medium">
            Trova la tua <span className="text-primary italic font-normal">casa ideale</span>
          </h2>
          <p className="text-muted-foreground/90 text-base sm:text-lg font-light leading-relaxed">
            Bilocali, trilocali e quadrilocali disegnati per esigenze diverse. Le disponibilità delle singole sezioni ti permettono di aprire ogni unità e visualizzarne planimetria, spazi esterni e punti distintivi.
          </p>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="pb-16 sm:pb-24 lg:pb-36 bg-background">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="space-y-16 sm:space-y-24 lg:space-y-36">
            {(Object.keys(apartmentsData) as TabType[]).map((key, index) => {
              const item = apartmentsData[key]
              return (
                <div
                  key={key}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center"
                >
                  {/* Visual block */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <button
                      onClick={() => handleScrollToExplorer(key)}
                      className="w-full text-left block relative h-[280px] sm:h-[380px] lg:h-[520px] rounded-2xl sm:rounded-[36px] overflow-hidden shadow-xl border border-slate-200/50 group cursor-pointer"
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
                    <h3 className="font-serif text-[2rem] sm:text-4xl md:text-5xl text-foreground mb-6 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground/90 text-base sm:text-lg leading-relaxed mb-8 font-light">
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
                      className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center gap-3 bg-primary text-primary-foreground px-5 sm:px-8 py-4 rounded-full text-sm font-semibold transition-colors hover:bg-primary/95 cursor-pointer"
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
      <section ref={explorerRef} id="disponibilita" className="py-16 sm:py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed] border-t border-slate-200/30 scroll-mt-24 lg:scroll-mt-32">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          {/* Header explorer */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              Explorer Interattivo
            </span>
            <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
              Esplora le unità <span className="text-primary italic font-normal">disponibili</span>
            </h2>
            <p className="text-muted-foreground/90 text-base sm:text-lg font-light leading-relaxed">
              Seleziona la tipologia di appartamento per consultare la tabella completa delle unità, i prezzi, le metrature e visualizzare le planimetrie interattive.
            </p>
          </div>

          {/* TAB BUTTONS (Premium layout con scorrimento Liquid Glass) */}
          <div className="flex justify-center mb-8 sm:mb-16">
            <div role="group" aria-label="Tipologia di appartamento" className="grid w-full max-w-xl grid-cols-3 gap-1 bg-white p-1 rounded-2xl sm:rounded-full border border-slate-200/50 select-none">
              {(Object.keys(apartmentsData) as TabType[]).map((key) => {
                const item = apartmentsData[key]
                const isActive = activeTab === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    aria-pressed={isActive}
                    aria-controls="riepilogo-tipologia"
                    className={`relative min-h-14 rounded-xl sm:rounded-full px-1 sm:px-4 py-3 text-[11px] sm:text-sm font-semibold transition-colors duration-300 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-[#3e2d27]/70 hover:text-[#3e2d27]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-[#3e2d27] rounded-xl sm:rounded-full z-0"
                        transition={{ duration: reducedMotion ? 0 : 0.2 }}
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
          <div id="riepilogo-tipologia" className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch mb-8 sm:mb-16">
            {/* Left box details */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[32px] border border-slate-200/40 flex flex-col justify-between">
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
                <p className="text-muted-foreground/90 text-base sm:text-lg font-light leading-relaxed mb-8">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 border-t border-slate-100 pt-6 mt-6">
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
            <div className="lg:col-span-5 relative min-h-[250px] sm:min-h-[350px] rounded-2xl sm:rounded-[32px] overflow-hidden">
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
          <div className="bg-white rounded-2xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/30">
            <UnitAvailabilityTable key={activeTab} units={activeData.units} typeLabel={activeData.title} />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-24 lg:py-36 bg-[#3e2d27] text-[#fcfbf9] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-medium">
            Desideri maggiori informazioni?
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Prenota una visita in cantiere o fissa un colloquio informativo con i nostri consulenti per scoprire tutte le opportunità di Belvedere 35.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1">
              Fissa un appuntamento
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/il-progetto" className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-10 py-4 sm:py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-1">
              Esplora il Progetto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
