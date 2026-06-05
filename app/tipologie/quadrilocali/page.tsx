import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import UnitAvailabilityTable from "@/components/UnitAvailabilityTable"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Quadrilocali | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri i quadrilocali di Parco Aurora: spazi generosi con planimetrie dedicate per ogni appartamento.",
}

const features = [
  "Ampio soggiorno doppio",
  "Cucina abitabile separata",
  "Camera matrimoniale con cabina armadio",
  "Due camere per i ragazzi",
  "Doppi servizi con finestra",
  "Terrazzo o giardino privato",
  "Doppio posto auto",
  "Cantina di pertinenza",
]

const finishes = [
  "Pavimento in parquet di rovere a listoni",
  "Infissi in alluminio a taglio termico",
  "Porta blindata classe 4",
  "Videocitofono digitale HD",
  "Impianto di climatizzazione canalizzato",
  "Riscaldamento a pavimento",
  "Predisposizione antifurto",
  "Tapparelle motorizzate",
]

const units = [
  { name: "F1", floor: "Piano 1", sqm: 115, terrace: 20, garden: 50, price: "485.000", available: true, uniqueness: "Giardino privato e zona giorno ampia per una vita familiare aperta verso l'esterno." },
  { name: "F2", floor: "Piano 2", sqm: 118, terrace: 25, price: "498.000", available: true, uniqueness: "Terrazzo importante e ambienti ben separati tra zona giorno e notte." },
  { name: "F3", floor: "Piano 3", sqm: 122, terrace: 30, price: "525.000", available: false, uniqueness: "Piano alto con terrazzo profondo e distribuzione molto regolare." },
  { name: "G1", floor: "Piano 1", sqm: 125, terrace: 18, garden: 60, price: "545.000", available: true, uniqueness: "Il giardino piu ampio, pensato come estensione naturale del living." },
  { name: "G2", floor: "Piano 2", sqm: 128, terrace: 28, price: "558.000", available: true, uniqueness: "Superficie generosa e terrazzo vivibile per pranzi all'aperto." },
  { name: "G3", floor: "Piano 3", sqm: 135, terrace: 35, price: "595.000", available: true, uniqueness: "Il quadrilocale piu ampio, con affacci luminosi e grande terrazzo." },
]

export default function QuadrilocaliPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/apartment-4rooms.jpg" alt="Quadrilocali Parco Aurora" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <Link href="/tipologie" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            Tutte le tipologie
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6">
            Quadrilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Spazi generosi per la famiglia, con planimetrie dedicate e soluzioni diverse per ogni unita.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                115-135 mq
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                La casa per <span className="text-primary">tutta la famiglia</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I quadrilocali offrono ambienti ampi, privacy e spazi esterni importanti per famiglie che cercano comfort senza compromessi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <FeatureList title="Caratteristiche" items={features} />
              <FeatureList title="Finiture Premium" items={finishes} />
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

          <UnitAvailabilityTable units={units} typeLabel="Quadrilocale" />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6 leading-tight">
            Interessato a un quadrilocale?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Prenota una visita guidata o richiedi maggiori informazioni. Il nostro team commerciale e a tua disposizione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-background/90 hover:shadow-xl hover:-translate-y-1">
              Prenota una visita
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tipologie" className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-1">
              Torna alle tipologie
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
