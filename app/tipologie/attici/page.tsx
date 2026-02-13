import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import PageHero from "@/components/PageHero"
import ContactSection from "@/components/ContactSection"
import Image from "next/image"
import Link from "next/link"
import { BedDouble, Bath, Maximize, Sun, Car, Trees, ArrowLeft, ArrowRight, Star } from "lucide-react"

export const metadata = {
  title: "Attici - Parco Aurora Torino",
  description: "Scopri gli attici esclusivi di Parco Aurora: soluzioni uniche da 150 a 200 mq con terrazze panoramiche a Torino.",
}

const features = [
  { icon: BedDouble, label: "5 Locali", description: "Living + 4 Camere" },
  { icon: Bath, label: "3 Bagni", description: "Di cui 2 en-suite" },
  { icon: Maximize, label: "150-200 mq", description: "Superficie" },
  { icon: Sun, label: "Terrazza", description: "40-60 mq panoramica" },
  { icon: Car, label: "Triplo Box", description: "Incluso" },
  { icon: Trees, label: "Cantina", description: "Doppia inclusa" },
]

const premiumFeatures = [
  "Doppia altezza nel living",
  "Scala interna di design",
  "Terrazza panoramica a 360°",
  "Finiture in marmo pregiato",
  "Domotica completa inclusa",
  "Impianto audio integrato",
  "Camino a gas di design",
  "Cabina armadio walk-in",
]

const floorPlans = [
  { name: "Attico A", sqm: "150 mq + 45 mq terrazza", price: "€ 750.000", available: 1 },
  { name: "Attico B", sqm: "180 mq + 55 mq terrazza", price: "€ 920.000", available: 1 },
]

export default function AtticiPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <PageHero
        title="Attici"
        subtitle="L'Esclusività ai Piani Alti"
        description="Soluzioni uniche con doppia altezza, terrazze panoramiche e finiture premium."
        image="/images/apartment-attico.jpg"
        imageAlt="Attico Parco Aurora"
      />

      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <Link 
            href="/tipologie" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alle Tipologie
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Images */}
            <div className="space-y-6">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/apartment-attico.jpg"
                  alt="Attico - Living con doppia altezza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Esclusivo
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/terrace.jpg"
                    alt="Attico - Terrazza panoramica"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/apartment-4rooms.jpg"
                    alt="Attico - Master bedroom"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                L&apos;apice del lusso residenziale
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Vivere in cima
                <span className="block text-primary">al mondo</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Gli attici di Parco Aurora rappresentano l&apos;esclusività assoluta. 
                Soluzioni uniche con doppia altezza, terrazze panoramiche con vista 
                a 360° sulla città e sulle Alpi, finiture premium e servizi esclusivi. 
                Un&apos;esperienza abitativa senza paragoni.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.label} className="bg-secondary rounded-xl p-4 text-center">
                    <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-medium text-foreground text-sm">{feature.label}</p>
                    <p className="text-muted-foreground text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  A partire da
                </p>
                <p className="font-serif text-4xl text-primary font-semibold mb-2">
                  € 750.000
                </p>
                <p className="text-muted-foreground text-sm">
                  Solo 2 unità esclusive disponibili
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                >
                  Richiedi Visita Privata
                </Link>
                <a
                  href="/capitolato.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Scarica Capitolato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Caratteristiche Esclusive
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                Dettagli che fanno
                <span className="block text-primary">la differenza</span>
              </h2>
              <p className="text-background/70 text-lg leading-relaxed mb-8">
                Ogni attico è un&apos;opera unica, caratterizzata da finiture di altissimo 
                livello e soluzioni architettoniche distintive.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-background/80">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/terrace.jpg"
                alt="Terrazza panoramica attico"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Le Unità Disponibili
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Due soluzioni esclusive
            </h2>
            <p className="text-muted-foreground text-lg">
              Solo due attici disponibili, ognuno con caratteristiche uniche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {floorPlans.map((plan) => (
              <div 
                key={plan.name}
                className="bg-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary rounded-xl h-56 mb-6 flex items-center justify-center">
                  <span className="text-muted-foreground">Planimetria {plan.name}</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.sqm}</p>
                <div className="flex items-center justify-between">
                  <p className="font-serif text-2xl text-primary font-semibold">{plan.price}</p>
                  <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Ultima disponibile
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Typologies */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-10 text-center">
            Altre Tipologie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Bilocali", href: "/tipologie/bilocali", sqm: "55-65 mq" },
              { title: "Trilocali", href: "/tipologie/trilocali", sqm: "85-100 mq" },
              { title: "Quadrilocali", href: "/tipologie/quadrilocali", sqm: "115-135 mq" },
            ].map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="group bg-secondary rounded-2xl p-6 hover:bg-primary transition-all duration-300"
              >
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm mb-4 transition-colors">
                  {type.sqm}
                </p>
                <span className="inline-flex items-center gap-2 text-primary group-hover:text-primary-foreground text-sm font-medium transition-colors">
                  Scopri
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <PromoBanner />
    </main>
  )
}
