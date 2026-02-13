import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import { ArrowRight, ArrowLeft, BedDouble, Bath, Maximize, Car, TreePine, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Bilocali | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri i bilocali di Parco Aurora: soluzioni compatte ma funzionali, perfette per giovani coppie e professionisti.",
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
  { name: "A1", floor: "Piano 1", sqm: 55, terrace: 8, price: "245.000", available: true },
  { name: "A2", floor: "Piano 2", sqm: 58, terrace: 10, price: "258.000", available: true },
  { name: "A3", floor: "Piano 3", sqm: 60, terrace: 12, price: "275.000", available: true },
  { name: "A4", floor: "Piano 4", sqm: 62, terrace: 15, price: "290.000", available: false },
  { name: "B1", floor: "Piano 1", sqm: 56, terrace: 8, price: "248.000", available: true },
  { name: "B2", floor: "Piano 2", sqm: 59, terrace: 10, price: "262.000", available: true },
  { name: "B3", floor: "Piano 3", sqm: 61, terrace: 12, price: "278.000", available: false },
  { name: "B4", floor: "Piano 4", sqm: 65, terrace: 18, price: "305.000", available: true },
]

export default function BilocaliPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/apartment-2rooms.jpg"
            alt="Bilocali Parco Aurora"
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
            Bilocali
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Ideali per giovani coppie e professionisti. Soluzioni compatte ma funzionali con design ottimizzato.
          </p>
        </div>
      </section>

      {/* Overview */}
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I bilocali di Parco Aurora sono pensati per chi cerca un ambiente accogliente e funzionale 
                senza rinunciare al comfort. Ogni spazio è ottimizzato per garantire luminosità, 
                praticità e un design contemporaneo.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-secondary rounded-2xl">
                <div className="text-center">
                  <BedDouble className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">2</p>
                  <p className="text-xs text-muted-foreground uppercase">Locali</p>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">1</p>
                  <p className="text-xs text-muted-foreground uppercase">Bagno</p>
                </div>
                <div className="text-center">
                  <Maximize className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">55-65</p>
                  <p className="text-xs text-muted-foreground uppercase">mq</p>
                </div>
                <div className="text-center">
                  <TreePine className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground font-semibold">8-18</p>
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
              Layout <span className="text-primary">funzionale</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ogni ambiente è studiato per massimizzare lo spazio e la luminosità naturale.
            </p>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-background">
            <Image
              src="/images/floorplan-sample.jpg"
              alt="Planimetria Bilocale"
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
              Scegli l&apos;appartamento più adatto alle tue esigenze.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-foreground">Unità</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Piano</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Superficie</th>
                  <th className="text-left py-4 px-4 font-medium text-foreground">Terrazzo</th>
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
            Interessato a un bilocale?
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
              href="/tipologie/trilocali"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-1"
            >
              Scopri i Trilocali
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <PromoBanner />
    </main>
  )
}
