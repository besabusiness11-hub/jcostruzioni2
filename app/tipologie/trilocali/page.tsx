import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import UnitAvailabilityTable from "@/components/UnitAvailabilityTable"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Trilocali | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri i trilocali di Parco Aurora: spazi equilibrati con planimetrie dedicate per ogni appartamento.",
}

const features = [
  "Ampio soggiorno con cucina a vista",
  "Camera matrimoniale",
  "Cameretta o studio",
  "Doppi servizi",
  "Terrazzo abitabile",
  "Cantina e posto auto",
]

const finishes = [
  "Pavimento in parquet di rovere",
  "Infissi in alluminio a taglio termico",
  "Porta blindata di sicurezza",
  "Videocitofono digitale a colori",
  "Impianto di climatizzazione",
  "Riscaldamento a pavimento",
]

const units = [
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

export default function TrilocaliPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/apartment-3rooms.jpg" alt="Trilocali Parco Aurora" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <Link href="/tipologie" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            Tutte le tipologie
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6">
            Trilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            L'equilibrio piu richiesto, con planimetrie specifiche per ogni unita disponibile.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                85-100 mq
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Spazi pensati per <span className="text-primary">vivere bene</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I trilocali sono ideali per coppie e piccole famiglie: zona giorno luminosa, ambienti flessibili e terrazzi abitabili.
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

          <UnitAvailabilityTable units={units} typeLabel="Trilocale" />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6 leading-tight">
            Interessato a un trilocale?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Prenota una visita guidata o richiedi maggiori informazioni. Il nostro team commerciale e a tua disposizione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-background/90 hover:shadow-xl hover:-translate-y-1">
              Prenota una visita
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tipologie/quadrilocali" className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-1">
              Scopri i Quadrilocali
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
