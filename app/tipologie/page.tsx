import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import { ArrowRight, BedDouble, Bath, Maximize } from "lucide-react"

export const metadata: Metadata = {
  title: "Tipologie Abitative | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri le tipologie abitative di Parco Aurora: bilocali, trilocali, quadrilocali e attici con finiture di pregio e spazi esterni.",
}

const apartments = [
  {
    title: "Bilocali",
    subtitle: "Ideale per giovani coppie e professionisti",
    description: "Soluzioni compatte ma funzionali, con design ottimizzato per sfruttare al meglio ogni spazio. Perfetti per chi cerca comfort in città.",
    image: "/images/apartment-2rooms.jpg",
    rooms: 2,
    bathrooms: 1,
    sqm: "55-65 mq",
    priceFrom: "245.000",
    available: 8,
    href: "/tipologie/bilocali",
  },
  {
    title: "Trilocali",
    subtitle: "La soluzione più richiesta",
    description: "L'equilibrio perfetto tra spazio e funzionalità. Zona giorno ampia e luminosa, camera matrimoniale e cameretta o studio.",
    image: "/images/apartment-3rooms.jpg",
    rooms: 3,
    bathrooms: 2,
    sqm: "85-100 mq",
    priceFrom: "365.000",
    available: 12,
    href: "/tipologie/trilocali",
  },
  {
    title: "Quadrilocali",
    subtitle: "Spazi generosi per la famiglia",
    description: "Appartamenti spaziosi con ampia zona living, cucina abitabile, tre camere da letto e doppi servizi. Ideali per famiglie.",
    image: "/images/apartment-4rooms.jpg",
    rooms: 4,
    bathrooms: 2,
    sqm: "115-135 mq",
    priceFrom: "485.000",
    available: 6,
    href: "/tipologie/quadrilocali",
  },
  {
    title: "Attici",
    subtitle: "L'esclusività ai piani alti",
    description: "Soluzioni uniche con doppia altezza, terrazze panoramiche e finiture premium. L'apice del lusso residenziale.",
    image: "/images/apartment-attico.jpg",
    rooms: 5,
    bathrooms: 3,
    sqm: "150-200 mq",
    priceFrom: "750.000",
    available: 4,
    href: "/tipologie/attici",
  },
]

export default function TipologiePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/apartment-3rooms.jpg"
            alt="Tipologie Abitative"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block text-white/90 text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Parco Aurora
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight mb-6">
            Tipologie Abitative
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Ambienti unici, curati, sofisticati. Disegnati per soddisfare le più attente esigenze abitative.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Trova la tua <span className="text-primary">casa ideale</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bilocali, trilocali, quadrilocali ed attici disegnati per soddisfare le più attente e preziose 
            esigenze abitative del vivere moderno. Ogni tipologia è caratterizzata da ampi spazi, 
            luminosità naturale e finiture di pregio.
          </p>
        </div>
      </section>

      {/* Apartments List */}
      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {apartments.map((apartment, index) => (
              <div 
                key={apartment.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link href={apartment.href} className="block relative h-[350px] lg:h-[500px] rounded-3xl overflow-hidden group">
                    <Image
                      src={apartment.image || "/placeholder.svg"}
                      alt={apartment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                      {apartment.available} disponibili
                    </div>
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">
                    {apartment.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                    {apartment.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {apartment.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-border">
                    <div className="flex items-center gap-2 text-foreground">
                      <BedDouble className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{apartment.rooms} locali</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Bath className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{apartment.bathrooms} bagni</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Maximize className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">{apartment.sqm}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                      A partire da
                    </p>
                    <p className="font-serif text-3xl text-foreground font-semibold">
                      &euro; {apartment.priceFrom}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={apartment.href}
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:gap-4 hover:shadow-lg"
                  >
                    Scopri di più
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Non trovi quello che cerchi?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Contattaci per ricevere informazioni personalizzate sulle unità disponibili 
            e sulle possibilità di personalizzazione.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1"
          >
            Contattaci
          </Link>
        </div>
      </section>

      <Footer />
      <PromoBanner />
    </main>
  )
}
