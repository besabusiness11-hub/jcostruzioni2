import React from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Check, Droplets, Sun, Sparkles, Compass } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Piscina e Area Solarium | Belvedere 35",
  description: "Esplora l'esclusiva piscina riscaldata ad elettrolisi e la zona solarium di Belvedere 35, un'oasi di benessere nel verde a Garbagnate Monastero.",
}

const features = [
  {
    icon: Droplets,
    title: "Elettrolisi del Sale",
    description: "Trattamento dell'acqua completamente naturale senza cloro aggiunto. Delicato sulla pelle e privo di odori chimici.",
  },
  {
    icon: Sun,
    title: "Solarium in Legno",
    description: "Un'ampia pavimentazione in Teak pregiato che circonda lo specchio d'acqua, attrezzata con lettini e zone d'ombra relax.",
  },
  {
    icon: Sparkles,
    title: "LED Scenografici",
    description: "Illuminazione subacquea ed esterna studiata per creare un'atmosfera magica e suggestiva durante le ore serali.",
  },
  {
    icon: Compass,
    title: "Integrazione Biolica",
    description: "Circondata da piante aromatiche e alberature che garantiscono una barriera visiva naturale e la massima privacy.",
  },
]

export default function PiscinaPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-end pb-24 md:pb-28 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/pool-hero.png" 
            alt="Piscina Belvedere 35" 
            fill 
            className="object-cover scale-105" 
            priority 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
          <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
            Belvedere 35 · Amenity Esclusiva
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6 max-w-4xl">
            Piscina & Solarium
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Un'oasi privata d'acqua e luce incastonata nel giardino botanico condominiale, riservata esclusivamente ai residenti.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* CONCEPT SECTION */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                L'Esperienza dell'Acqua
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight font-medium">
                Il lusso della <span className="text-primary italic font-normal">quiete quotidiana</span>
              </h2>
            </div>
            <div className="lg:col-span-7 text-muted-foreground/90 text-lg font-light leading-relaxed space-y-6">
              <p>
                La piscina di Belvedere 35 non è una semplice vasca condominiale, ma un'opera architettonica inserita armonicamente nel disegno paesaggistico. Pensata per coniugare l'attività sportiva al relax, offre uno specchio d'acqua riscaldato circondato da essenze botaniche curate nel dettaglio.
              </p>
              <p>
                Ogni particolare, dalla selezione della pietra locale di Piasentina per i bordi sfioratori alla scelta del legno composito ad altissima resistenza per il solarium, risponde a criteri di bioarchitettura e sostenibilità estetica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID SPECIFICHE */}
      <section className="pb-24 lg:pb-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              Caratteristiche Uniche
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight font-medium">
              Dettagli che fanno <span className="text-primary italic font-normal">la differenza</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div 
                  key={i} 
                  className="bg-white p-8 lg:p-12 rounded-[32px] border border-slate-200/40 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow duration-500"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/40 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground/90 leading-relaxed font-light text-base">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DETAIL DISPLAY SECTION */}
      <section className="py-24 lg:py-36 bg-[#f5f4ed] border-t border-slate-200/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left image detail */}
            <div className="lg:col-span-6 relative h-[400px] lg:h-[550px] rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/50">
              <Image 
                src="/images/pool-detail.png" 
                alt="Dettaglio Acqua Solarium" 
                fill 
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 50vw" 
              />
            </div>

            {/* Right text specs list */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                  Materiali d'Autore
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6 font-semibold">
                  Armonia materica
                </h3>
                <p className="text-muted-foreground/90 text-lg leading-relaxed font-light mb-8">
                  La pietra e il legno si fondono in un disegno geometrico pulito, dove la luce rifrange sull'acqua turchese creando riflessi geometrici sempre nuovi sulle facciate degli edifici.
                </p>
              </div>

              <div className="space-y-4 border-t border-slate-200/60 pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-1 bg-primary/10 text-primary rounded-full mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Bordo a Sfioro in Pietra di Piasentina</h4>
                    <p className="text-sm text-muted-foreground/90 font-light mt-1">Garantisce un effetto specchio continuo che si allinea perfettamente con il livello del deck solarium.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-1 bg-primary/10 text-primary rounded-full mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Riscaldamento a Pompa di Calore</h4>
                    <p className="text-sm text-muted-foreground/90 font-light mt-1">Estende la stagionalità di utilizzo della piscina a partire dalla primavera fino all'autunno inoltrato.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-1 bg-primary/10 text-primary rounded-full mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Docce Esterne Riscaldate</h4>
                    <p className="text-sm text-muted-foreground/90 font-light mt-1">Area docce posizionata all'ingresso del solarium, mimetizzata tra la fitta siepe perimetrale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 lg:py-36 bg-[#3e2d27] text-[#fcfbf9] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-medium">
            Vieni a scoprire di persona
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Prenota un appuntamento in cantiere per visionare lo stato dei lavori e lasciati affascinare dal contesto esclusivo di Belvedere 35.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1">
              Fissa un appuntamento
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tipologie" className="inline-flex items-center justify-center px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-1">
              Esplora le tipologie
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
