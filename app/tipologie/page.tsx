import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tipologie Abitative | Belvedere 35",
  description: "Scopri le tipologie abitative di Belvedere 35: bilocali, trilocali e quadrilocali con spazi esterni, planimetrie dedicate e caratteristiche uniche.",
}

const apartments = [
  {
    title: "Bilocali",
    subtitle: "Ideale per giovani coppie e professionisti",
    description: "Soluzioni compatte e funzionali, con distribuzioni curate e affacci pensati per dare luce agli ambienti quotidiani.",
    image: "/images/apartment-2rooms.jpg",
    sqm: "55-65 mq",
    priceFrom: "245.000",
    available: 8,
    href: "/tipologie/bilocali",
  },
  {
    title: "Trilocali",
    subtitle: "La soluzione piu richiesta",
    description: "Appartamenti equilibrati, con zona giorno luminosa e spazi flessibili per studio, famiglia e vita all'aperto.",
    image: "/images/apartment-3rooms.jpg",
    sqm: "85-100 mq",
    priceFrom: "365.000",
    available: 12,
    href: "/tipologie/trilocali",
  },
  {
    title: "Quadrilocali",
    subtitle: "Spazi generosi per la famiglia",
    description: "Soluzioni ampie con ambienti distinti, privacy e una relazione privilegiata con terrazzi o giardini privati.",
    image: "/images/apartment-4rooms.jpg",
    sqm: "115-135 mq",
    priceFrom: "485.000",
    available: 6,
    href: "/tipologie/quadrilocali",
  },
]

export default function TipologiePage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />

      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/apartment-3rooms.jpg" alt="Tipologie Abitative" fill className="object-cover scale-105" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
          <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
            Belvedere 35
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6">
            Tipologie Abitative
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Ogni appartamento ha una propria planimetria, con caratteristiche e unicità da scoprire nella tabella delle disponibilità.
          </p>
        </div>

        {/* Bordo inferiore sfumato */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight font-medium">
            Trova la tua <span className="text-primary italic font-normal">casa ideale</span>
          </h2>
          <p className="text-muted-foreground/90 text-lg font-light leading-relaxed">
            Bilocali, trilocali e quadrilocali disegnati per esigenze diverse. Le disponibilità delle singole pagine permettono di aprire ogni unità e visualizzarne planimetria, esterni e punti distintivi.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24 lg:space-y-36">
            {apartments.map((apartment, index) => (
              <div
                key={apartment.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <div className={`lg:col-span-6 animate-fade-in-up ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Link href={apartment.href} className="block relative h-[380px] lg:h-[520px] rounded-[36px] overflow-hidden shadow-xl border border-slate-200/50 group">
                    <Image
                      src={apartment.image}
                      alt={apartment.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge fluttuante disponibili */}
                    <div className="absolute top-6 right-6 backdrop-blur-md bg-[#3e2d27]/90 border border-white/10 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
                      {apartment.available} disponibili
                    </div>
                  </Link>
                </div>

                <div className={`lg:col-span-6 animate-fade-in-up ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                    {apartment.subtitle}
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6 font-semibold">
                    {apartment.title}
                  </h3>
                  <p className="text-muted-foreground/90 text-lg leading-relaxed mb-8 font-light">
                    {apartment.description}
                  </p>
                  
                  {/* Grid dettagli affiancati */}
                  <div className="grid grid-cols-2 gap-8 border-y border-slate-200/50 py-6 mb-8">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 font-bold">Superfici indicative</p>
                      <p className="font-serif text-2xl md:text-3xl text-foreground font-medium">{apartment.sqm}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5 font-bold">A partire da</p>
                      <p className="font-serif text-2xl md:text-3xl text-foreground font-semibold">&euro; {apartment.priceFrom}</p>
                    </div>
                  </div>

                  <Link
                    href={apartment.href}
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary/95 hover:gap-4 hover:shadow-2xl hover:-translate-y-0.5"
                  >
                    Vedi disponibilità e planimetrie
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fbfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight font-medium">
            Ogni unità racconta una casa diversa
          </h2>
          <p className="text-muted-foreground/90 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Apri una riga nella tabella delle disponibilità per vedere planimetria, spazi esterni e caratteristiche specifiche dell'appartamento.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1"
          >
            Contattaci
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
