import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageHero from "@/components/PageHero"
import { ArrowRight, Flower, Leaf, Sun, Waves, Wind } from "lucide-react"

export const metadata: Metadata = {
  title: "Terrazzi, Giardini e Parti Esterne | Belvedere 35",
  description:
    "Scopri terrazzi, giardini privati e parti esterne di Belvedere 35, con aree verdi e piscina pensate per il relax quotidiano.",
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
    description: "Terrazzi ampi e luminosi con viste suggestive sul verde e sulle montagne, ideali per cene e momenti di relax.",
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
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />
      <PageHero 
        title="Terrazzi, Giardini e Parti Esterne" 
        subtitle="Spazi esclusivi per vivere il verde e la piscina"
        image="/images/project-detail.jpg"
        imageAlt="Belvedere 35 Terrazzi e Giardini"
      />

      {/* I Nostri Spazi */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              I Nostri Spazi
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight font-medium">
              Vivi il relax
              <span className="block text-primary italic font-normal mt-2">all'aria aperta</span>
            </h2>
            <p className="text-muted-foreground/90 text-lg font-light leading-relaxed">
              Ogni dettaglio è stato progettato per offrire spazi esterni straordinari, dalla privacy dei giardini alla piscina comune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 animate-fade-in-up">
            {features.map((feature) => (
              <div key={feature.title} className="relative bg-background/60 backdrop-blur-sm border border-slate-200/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:bg-background transition-all duration-500 hover:-translate-y-1.5 group">
                <div className="w-14 h-14 bg-accent/40 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground/80 text-sm leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrazzi Section */}
      <section id="terrazzi" className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="relative h-80 lg:h-96 rounded-[32px] overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-700 group hover:-translate-y-1">
                  <Image src="/images/terrace.jpg" alt="Terrazza moderna" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-white text-[10px] tracking-wider uppercase font-semibold">Terrazzi</span>
                  </div>
                </div>
                <div className="relative h-80 lg:h-96 rounded-[32px] overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-700 mt-12 group hover:-translate-y-1">
                  <Image src="/images/garden.jpg" alt="Giardino privato" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-white text-[10px] tracking-wider uppercase font-semibold">Giardini</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-up">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                Terrazzi
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                Spazi all'aperto
                <span className="block text-primary italic font-normal mt-2">pensati per te</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-10 font-light">
                Le terrazze sono progettate come veri ambienti di vita, ideali per cene estive, lettura al sole e momenti di quiete quotidiana.
              </p>
              <Link href="/contatti" className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider">
                Scopri le disponibilità
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Giardini Section */}
      <section id="giardini" className="py-24 lg:py-36 bg-gradient-to-b from-[#fbfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="animate-fade-in-up">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                Giardini Privati
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                La tua oasi
                <span className="block text-primary italic font-normal mt-2">privata</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-6 font-light">
                I giardini privati sono concepiti come estensione dell'abitazione: spazi verdi dove coltivare pace, convivialità e benessere.
              </p>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-10 font-light">
                Ogni giardino può ospitare zone relax, verde ornamentale o angoli dedicati a piante aromatiche e fiori.
              </p>
              <Link href="/tipologie" className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider">
                Vedi le tipologie con giardini
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/50 group animate-fade-in-up">
              <Image src="/images/garden.jpg" alt="Giardino privato vista aerea" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Parti Esterne Section */}
      <section id="parti-esterne" className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative h-96 lg:h-[520px] rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/50 group animate-fade-in-up">
              <Image src="/images/project-detail.jpg" alt="Parti esterne con area piscina" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Parti esterne</p>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-semibold">Piscina e aree comuni</h3>
              </div>
            </div>

            <div className="animate-fade-in-up">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                Piscina
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                Un'estensione elegante
                <span className="block text-primary italic font-normal mt-2">della vita di casa</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-6 font-light">
                Le parti esterne sono pensate come spazi da vivere davvero: percorsi verdi, aree relax e una piscina riservata che aggiunge valore al tempo libero quotidiano.
              </p>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-10 font-light">
                La piscina diventa il cuore scenografico degli esterni, in dialogo con terrazzi, giardini privati e zone comuni curate.
              </p>
              <Link href="/contatti" className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider">
                Richiedi dettagli sulle parti esterne
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fbfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight font-medium">
            Pronto a scoprire i nostri spazi esterni?
          </h2>
          <p className="text-muted-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Prenota una visita privata e lasciati conquistare da terrazzi, giardini e piscina di Belvedere 35.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1"
          >
            Richiedi Informazioni
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
