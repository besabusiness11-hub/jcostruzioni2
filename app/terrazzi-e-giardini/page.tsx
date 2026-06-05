import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageHero from "@/components/PageHero"
import { ArrowRight, Flower, Leaf, Sun, Waves, Wind } from "lucide-react"

export const metadata: Metadata = {
  title: "Terrazzi, Giardini e Parti Esterne | Parco Aurora",
  description:
    "Scopri terrazzi, giardini privati e parti esterne di Parco Aurora, con aree verdi e piscina pensate per il relax quotidiano.",
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
    description: "Terrazzi ampi e luminosi con viste suggestive sulla citta e il parco circostante, ideali per cene e momenti di relax.",
  },
  {
    icon: Sun,
    title: "Esposizione Ottimale",
    description: "Spazi esterni posizionati per massimizzare l'esposizione solare e garantire comfort in ogni stagione.",
  },
  {
    icon: Leaf,
    title: "Sostenibilita Verde",
    description: "Materiali ecologici e piante autoctone per aree esterne curate e a basso impatto ambientale.",
  },
  {
    icon: Waves,
    title: "Piscina e Relax",
    description: "Una zona acqua riservata valorizza le parti esterne e completa l'esperienza residenziale nei mesi piu caldi.",
  },
]

export default function TerrazziGiardiniPage() {
  return (
    <main>
      <Header />
      <PageHero title="Terrazzi, Giardini e Parti Esterne" subtitle="Spazi esclusivi per vivere il verde e la piscina" />

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
              Ogni dettaglio e stato progettato per offrire spazi esterni straordinari, dalla privacy dei giardini alla piscina comune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="terrazzi" className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden">
                  <Image src="/images/terrace.jpg" alt="Terrazza moderna" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden mt-8">
                  <Image src="/images/garden.jpg" alt="Giardino privato" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Terrazzi
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Spazi all'aperto
                <span className="block text-primary">pensati per te</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Le terrazze sono progettate come veri ambienti di vita, ideali per cene estive, lettura al sole e momenti di quiete quotidiana.
              </p>
              <Link href="/contatti" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group">
                Scopri le disponibilita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="giardini" className="py-24 lg:py-32 bg-background">
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
                I giardini privati sono concepiti come estensione dell'abitazione: spazi verdi dove coltivare pace, convivialita e benessere.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ogni giardino puo ospitare zone relax, verde ornamentale o angoli dedicati a piante aromatiche e fiori.
              </p>
              <Link href="/tipologie" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group">
                Vedi le tipologie con giardini
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <Image src="/images/garden.jpg" alt="Giardino privato vista aerea" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="parti-esterne" className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-96 lg:h-[520px] rounded-3xl overflow-hidden">
              <Image src="/images/project-detail.jpg" alt="Parti esterne con area piscina" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-2">Parti esterne</p>
                <h2 className="font-serif text-4xl text-white">Piscina e aree comuni</h2>
              </div>
            </div>

            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Piscina
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Un'estensione elegante
                <span className="block text-primary">della vita di casa</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Le parti esterne sono pensate come spazi da vivere davvero: percorsi verdi, aree relax e una piscina riservata che aggiunge valore al tempo libero quotidiano.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                La piscina diventa il cuore scenografico degli esterni, in dialogo con terrazzi, giardini privati e zone comuni curate.
              </p>
              <Link href="/contatti" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group">
                Richiedi dettagli sulle parti esterne
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Pronto a scoprire i nostri spazi esterni?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Prenota una visita privata e lasciati conquistare da terrazzi, giardini e piscina di Parco Aurora.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-background/90 hover:shadow-xl hover:-translate-y-1"
          >
            Richiedi Informazioni
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
