import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import { ArrowRight, ArrowLeft, BedDouble, Bath, Maximize, TreePine, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Trilocali | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri i trilocali di Parco Aurora: l'equilibrio perfetto tra spazio e funzionalità per coppie e piccole famiglie.",
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
  { name: "C1", floor: "Piano 1", sqm: 85, terrace: 15, price: "365.000", available: true },
  { name: "C2", floor: "Piano 2", sqm: 88, terrace: 18, price: "385.000", available: true },
  { name: "C3", floor: "Piano 3", sqm: 90, terrace: 20, price: "398.000", available: true },
  { name: "C4", floor: "Piano 4", sqm: 92, terrace: 25, price: "420.000", available: true },
  { name: "D1", floor: "Piano 1", sqm: 86, terrace: 15, price: "368.000", available: false },
  { name: "D2", floor: "Piano 2", sqm: 89, terrace: 18, price: "388.000", available: true },
  { name: "D3", floor: "Piano 3", sqm: 92, terrace: 22, price: "405.000", available: true },
  { name: "D4", floor: "Piano 4", sqm: 95, terrace: 28, price: "435.000", available: true },
  { name: "E1", floor: "Piano 1", sqm: 95, terrace: 12, garden: 40, price: "425.000", available: true },
  { name: "E2", floor: "Piano 2", sqm: 98, terrace: 20, price: "418.000", available: false },
  { name: "E3", floor: "Piano 3", sqm: 100, terrace: 22, price: "438.000", available: true },
  { name: "E4", floor: "Piano 4", sqm: 100, terrace: 30, price: "458.000", available: false },
]

export default function TrilocaliPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/apartment-3rooms.jpg"
            alt="Trilocali Parco Aurora"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <Link 
            href="/tipologie"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Tutte le tipologie
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6">
            Trilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            La soluzione più richiesta. L&apos;equilibrio perfetto tra spazio e funzionalità.
          </p>
        </div>
      </section>

      {/* Overview */}
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I trilocali di Parco Aurora rappresentano la scelta ideale per coppie che desiderano 
                più spazio o per piccole famiglie. La zona giorno ampia e luminosa si affaccia su 
                terrazzi abitabili, mentre le camere garantiscono privacy e comfort.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-secondary rounded-2xl">
                <div className="text-center">
                  <BedDouble className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">3</p>
                  <p className="text-xs text-muted-foreground uppercase">Locali</p>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">2</p>
                  <p className="text-xs text-muted-foreground uppercase">Bagni</p>
                </div>
                <div className="text-center">
                  <Maximize className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">85-100</p>
                  <p className="text-xs text-muted-foreground uppercase">mq</p>
                </div>
                <div className="text-center">
                  <TreePine className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">12-30</p>
                  <p className="text-xs text-muted-foreground uppercase">mq terrazzo</p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4 font-medium">Caratteristiche</h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4 font-medium">Finiture</h3>
                <ul className="space-y-3">
                  {finishes.map((finish) => (
                    <li key={finish} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{finish}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Planimetria
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Distribuzione <span className="text-primary">ottimale</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Zona giorno separata dalla zona notte per la massima privacy e comfort.
            </p>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-background">
            <Image
              src="/images/floorplan-sample.jpg"
              alt="Planimetria Trilocale"
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </div>
      </section>

      {/* Available Units */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Disponibilità
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Unità <span className="text-primary">disponibili</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              12 unità totali, alcune con giardino privato al piano terra.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-foreground">Unità</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Piano</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Superficie</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Terrazzo</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Giardino</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Prezzo</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Stato</th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit) => (
                  <tr key={unit.name} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4 font-serif text-lg text-foreground">{unit.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{unit.floor}</td>
                    <td className="py-4 px-4 text-muted-foreground">{unit.sqm} mq</td>
                    <td className="py-4 px-4 text-muted-foreground">{unit.terrace} mq</td>
                    <td className="py-4 px-4 text-muted-foreground">{'garden' in unit && unit.garden ? `${unit.garden} mq` : '-'}</td>
                    <td className="py-4 px-4 font-semibold text-foreground">&euro; {unit.price}</td>
                    <td className="py-4 px-4">
                      {unit.available ? (
                        <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Disponibile
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                          Venduto
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6 leading-tight">
            Interessato a un trilocale?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Prenota una visita guidata o richiedi maggiori informazioni. 
            Il nostro team commerciale è a tua disposizione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-background/90 hover:shadow-xl hover:-translate-y-1"
            >
              Prenota una visita
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tipologie/quadrilocali"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-1"
            >
              Scopri i Quadrilocali
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <PromoBanner />
    </main>
  )
}
