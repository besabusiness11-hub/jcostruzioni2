import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import { ArrowRight, ArrowLeft, BedDouble, Bath, Maximize, TreePine, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Quadrilocali | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri i quadrilocali di Parco Aurora: spazi generosi per tutta la famiglia con finiture di pregio.",
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
  { name: "F1", floor: "Piano 1", sqm: 115, terrace: 20, garden: 50, price: "485.000", available: true },
  { name: "F2", floor: "Piano 2", sqm: 118, terrace: 25, price: "498.000", available: true },
  { name: "F3", floor: "Piano 3", sqm: 122, terrace: 30, price: "525.000", available: false },
  { name: "G1", floor: "Piano 1", sqm: 125, terrace: 18, garden: 60, price: "545.000", available: true },
  { name: "G2", floor: "Piano 2", sqm: 128, terrace: 28, price: "558.000", available: true },
  { name: "G3", floor: "Piano 3", sqm: 135, terrace: 35, price: "595.000", available: true },
]

export default function QuadrilocaliPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/apartment-4rooms.jpg"
            alt="Quadrilocali Parco Aurora"
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
            Quadrilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Spazi generosi per tutta la famiglia. La soluzione ideale per chi non vuole compromessi.
          </p>
        </div>
      </section>

      {/* Overview */}
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I quadrilocali di Parco Aurora offrono tutto lo spazio necessario per una famiglia 
                che cresce. La zona giorno con doppio affaccio, la cucina abitabile separata e 
                tre camere da letto permettono a ogni membro della famiglia di avere i propri spazi.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-secondary rounded-2xl">
                <div className="text-center">
                  <BedDouble className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">4</p>
                  <p className="text-xs text-muted-foreground uppercase">Locali</p>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">2</p>
                  <p className="text-xs text-muted-foreground uppercase">Bagni</p>
                </div>
                <div className="text-center">
                  <Maximize className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">115-135</p>
                  <p className="text-xs text-muted-foreground uppercase">mq</p>
                </div>
                <div className="text-center">
                  <TreePine className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">18-60</p>
                  <p className="text-xs text-muted-foreground uppercase">mq esterni</p>
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
                <h3 className="font-serif text-xl text-foreground mb-4 font-medium">Finiture Premium</h3>
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
              Spazi <span className="text-primary">generosi</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Zona giorno e zona notte ben separate per il massimo comfort familiare.
            </p>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-background">
            <Image
              src="/images/floorplan-sample.jpg"
              alt="Planimetria Quadrilocale"
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
              6 unità esclusive, alcune con giardino privato al piano terra.
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
            Interessato a un quadrilocale?
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
              href="/tipologie/attici"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-1"
            >
              Scopri gli Attici
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <PromoBanner />
    </main>
  )
}
