import Image from "next/image"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import PageHero from "@/components/PageHero"
import { Flower, Wind, Sun, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terrazzi e Giardini | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri gli esclusivi terrazzi e giardini privati di Parco Aurora: spazi verdi all'aria aperta per vivere il relax quotidiano a Torino.",
}

const features = [
  {
    icon: Flower,
    title: "Giardini Privati",
    description: "Spazi verdi esclusivi con piante selezionate e design paesaggistico, perfetti per coltivare la tua oasi personale.",
  },
  {
    icon: Wind,
    title: "Terrazze Panoramiche",
    description: "Terrazzi ampi e luminosi con viste suggestive sulla città e il parco circostante, ideali per cene e momenti di relax.",
  },
  {
    icon: Sun,
    title: "Esposizione Ottimale",
    description: "Tutti gli spazi esterni sono posizionati per massimizzare l'esposizione solare e garantire il comfort in ogni stagione.",
  },
  {
    icon: Leaf,
    title: "Sostenibilità Verde",
    description: "Spazi esterni realizzati con materiali ecologici e piante autoctone per un impatto ambientale positivo.",
  },
]

export default function TerrazziGiardiniPage() {
  return (
    <main>
      <Header />
      <PageHero title="Terrazzi e Giardini" subtitle="Spazi esterni esclusivi per vivere il verde" />

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              I Nostri Spazi
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Vivi il relax
              <span className="block text-primary">all'aria aperta</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ogni dettaglio è stato progettato per offrirti uno spazio esterno straordinario,
              dove trascorrere momenti indimenticabili circondato dalla natura e dalla tranquillità.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrace Showcase */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/terrace.jpg"
                    alt="Terrazza moderna"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/garden.jpg"
                    alt="Giardino privato"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Terrazze
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Spazi all'aperto
                <span className="block text-primary">pensati per te</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Le nostre terrazze sono state progettate come veri e propri ambienti di vita,
                dove godersi una cena estiva sotto le stelle, leggere un libro al sole o semplicemente
                rilassarsi con una vista panoramica sulla città. Ogni terrazza è orientata per
                massimizzare l'esposizione solare e garantire il massimo comfort.
              </p>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
              >
                Scopri le disponibilità
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Experience */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Giardini Privati
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                La tua oasi
                <span className="block text-primary">privata</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I giardini privati di Parco Aurora sono stati concepiti come estensione dell'abitazione,
                spazi verdi dove coltivare la pace e la serenità. Con design paesaggistico professionale
                e piante selezionate, ogni giardino è unico e personalizzabile secondo le tue esigenze.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Scegli tra diverse soluzioni: orto biologico, zone relax con sedute comode, o zone dedicate
                alla coltivazione di piante aromatiche e fiori.
              </p>
              <Link
                href="/tipologie"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
              >
                Vedi le tipologie con giardini
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div>
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/garden.jpg"
                  alt="Giardino privato vista aerea"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Pronto a scoprire i nostri spazi esterni?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Prenota una visita privata e lasciati conquistare dalla bellezza e tranquillità
            dei terrazzi e giardini di Parco Aurora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-background/90 hover:shadow-xl hover:-translate-y-1"
            >
              Richiedi Informazioni
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <PromoBanner />
    </main>
  )
}
