import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import UnitAvailabilityTable from "@/components/UnitAvailabilityTable"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Quadrilocali | Belvedere 35 - Garbagnate Monastero",
  description: "Scopri i quadrilocali di Belvedere 35: spazi generosi con planimetrie dedicate per ogni appartamento.",
}

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
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/apartment-4rooms.jpg" alt="Quadrilocali Belvedere 35" fill className="object-cover scale-105" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
          <Link href="/tipologie" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs uppercase tracking-widest mb-6 transition-colors duration-300 font-bold">
            <ArrowLeft className="w-4 h-4" />
            Tutte le tipologie
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6">
            Quadrilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Spazi generosi per la famiglia, con planimetrie dedicate e soluzioni diverse per ogni unità.
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
                115-135 mq
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                La casa per <span className="text-primary italic font-normal">tutta la famiglia</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed font-light">
                I quadrilocali offrono ambienti ampi, privacy e spazi esterni importanti per famiglie che cercano comfort senza compromessi.
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
            <UnitAvailabilityTable units={units} typeLabel="Quadrilocale" />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-[#3e2d27] text-[#fcfbf9] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight font-medium">
            Interessato a un quadrilocale?
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Prenota una visita guidata o richiedi maggiori informazioni. Il nostro team commerciale è a tua disposizione.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1">
              Prenota una visita
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tipologie" className="inline-flex items-center justify-center px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-1">
              Torna alle tipologie
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


