import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import UnitAvailabilityTable from "@/components/UnitAvailabilityTable"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Bilocali | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri i bilocali di Parco Aurora: soluzioni compatte e funzionali con planimetrie dedicate per ogni appartamento.",
}

const features = [
  "Soggiorno con angolo cottura",
  "Camera matrimoniale",
  "Bagno con doccia",
  "Balcone o terrazzo",
  "Cantina inclusa",
  "Posto auto disponibile",
]

const finishes = [
  "Pavimento in parquet di rovere",
  "Infissi in alluminio a taglio termico",
  "Porta blindata di sicurezza",
  "Videocitofono digitale",
  "Predisposizione climatizzazione",
  "Riscaldamento a pavimento",
]

const units = [
  { name: "A1", floor: "Piano 1", sqm: 55, terrace: 8, price: "245.000", available: true, uniqueness: "Affaccio raccolto e distribuzione compatta per una gestione quotidiana semplice." },
  { name: "A2", floor: "Piano 2", sqm: 58, terrace: 10, price: "258.000", available: true, uniqueness: "Zona giorno luminosa con terrazzo proporzionato alla vita all'aperto." },
  { name: "A3", floor: "Piano 3", sqm: 60, terrace: 12, price: "275.000", available: true, uniqueness: "Piano alto e taglio regolare per massimizzare arredo e privacy." },
  { name: "A4", floor: "Piano 4", sqm: 62, terrace: 15, price: "290.000", available: false, uniqueness: "Terrazzo piu ampio e affaccio elevato sulla corte verde." },
  { name: "B1", floor: "Piano 1", sqm: 56, terrace: 8, price: "248.000", available: true, uniqueness: "Soluzione pratica con accesso comodo agli spazi comuni." },
  { name: "B2", floor: "Piano 2", sqm: 59, terrace: 10, price: "262.000", available: true, uniqueness: "Bilocale equilibrato con ambienti facili da personalizzare." },
  { name: "B3", floor: "Piano 3", sqm: 61, terrace: 12, price: "278.000", available: false, uniqueness: "Taglio luminoso con separazione netta tra zona giorno e notte." },
  { name: "B4", floor: "Piano 4", sqm: 65, terrace: 18, price: "305.000", available: true, uniqueness: "Il bilocale piu generoso, con terrazzo profondo e massima vivibilita esterna." },
]

export default function BilocaliPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/apartment-2rooms.jpg" alt="Bilocali Parco Aurora" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <Link href="/tipologie" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            Tutte le tipologie
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6">
            Bilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Soluzioni compatte e funzionali, ognuna con planimetria propria e dettagli distintivi.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                55-65 mq
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Il comfort in ogni <span className="text-primary">dettaglio</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I bilocali sono pensati per chi cerca un ambiente accogliente senza rinunciare a luce, funzionalita e spazi esterni proporzionati.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <FeatureList title="Caratteristiche" items={features} />
              <FeatureList title="Finiture" items={finishes} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Disponibilita
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Unita <span className="text-primary">disponibili</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Apri ogni riga per vedere planimetria, spazi esterni e caratteristiche uniche del singolo appartamento.
            </p>
          </div>

          <UnitAvailabilityTable units={units} typeLabel="Bilocale" />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6 leading-tight">
            Interessato a un bilocale?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Prenota una visita guidata o richiedi maggiori informazioni. Il nostro team commerciale e a tua disposizione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-background/90 hover:shadow-xl hover:-translate-y-1">
              Prenota una visita
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tipologie/trilocali" className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-1">
              Scopri i Trilocali
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-xl text-foreground mb-4 font-medium">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
