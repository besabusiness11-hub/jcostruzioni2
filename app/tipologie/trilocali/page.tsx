import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import UnitAvailabilityTable from "@/components/UnitAvailabilityTable"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Trilocali | Belvedere 35 - Garbagnate Monastero",
  description: "Scopri i trilocali di Belvedere 35: spazi equilibrati con planimetrie dedicate per ogni appartamento.",
}

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
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/apartment-3rooms.jpg" alt="Trilocali Belvedere 35" fill className="object-cover scale-105" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
          <Link href="/tipologie" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs uppercase tracking-widest mb-6 transition-colors duration-300 font-bold">
            <ArrowLeft className="w-4 h-4" />
            Tutte le tipologie
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6">
            Trilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            L'equilibrio più richiesto, con planimetrie specifiche per ogni unità disponibile.
          </p>
        </div>

        {/* Bordo inferiore sfumato */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl animate-fade-in-up">
            <div>
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                85-100 mq
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                Spazi pensati per <span className="text-primary italic font-normal">vivere bene</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed font-light">
                I trilocali sono ideali per coppie e piccole famiglie: zona giorno luminosa, ambienti flessibili e terrazzi abitabili.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              Disponibilità
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
              Unità <span className="text-primary italic font-normal">disponibili</span>
            </h2>
            <p className="text-muted-foreground/90 text-lg font-light">
              Apri ogni riga per vedere planimetria, spazi esterni e caratteristiche uniche del singolo appartamento.
            </p>
          </div>

          <div className="animate-fade-in-up">
            <UnitAvailabilityTable units={units} typeLabel="Trilocale" />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-[#3e2d27] text-[#fcfbf9] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-medium">
            Interessato a un trilocale?
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Prenota una visita guidata o richiedi maggiori informazioni. Il nostro team commerciale è a tua disposizione.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1">
              Prenota una visita
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tipologie/quadrilocali" className="inline-flex items-center justify-center px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-1">
              Scopri i Quadrilocali
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
