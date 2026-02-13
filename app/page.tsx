import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Shield, Sparkles, Building2 } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Sostenibilità",
    description: "Classe energetica A4 e impianti di ultima generazione",
  },
  {
    icon: Shield,
    title: "Sicurezza",
    description: "Videosorveglianza e accessi controllati",
  },
  {
    icon: Sparkles,
    title: "Finiture Premium",
    description: "Materiali di pregio selezionati",
  },
  {
    icon: Building2,
    title: "Design Italiano",
    description: "Architettura contemporanea d'eccellenza",
  },
]

const apartments = [
  {
    title: "Bilocali",
    image: "/images/apartment-2rooms.jpg",
    sqm: "55-65 mq",
    href: "/tipologie/bilocali",
  },
  {
    title: "Trilocali",
    image: "/images/apartment-3rooms.jpg",
    sqm: "85-100 mq",
    href: "/tipologie/trilocali",
  },
  {
    title: "Quadrilocali",
    image: "/images/apartment-4rooms.jpg",
    sqm: "115-135 mq",
    href: "/tipologie/quadrilocali",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Project Preview Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Il Progetto
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Una residenza esclusiva
                <span className="block text-primary">dal cuore verde</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Parco Aurora è un progetto di rigenerazione urbana caratterizzato dalle linee 
                pulite ed essenziali dell&apos;architettura torinese. La ricerca dei materiali 
                prime-class e la volontà di rendere gli ambienti molto luminosi sono state 
                peculiarità imprescindibili nelle scelte progettuali.
              </p>
              <Link
                href="/il-progetto"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
              >
                Scopri di più
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typologies Preview Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Tipologie Abitative
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Ambienti unici,
              <span className="block text-primary">curati, sofisticati</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Bilocali, trilocali, quadrilocali ed attici disegnati per soddisfare 
              le più attente e preziose esigenze abitative del vivere moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apartments.map((apt) => (
              <Link
                key={apt.title}
                href={apt.href}
                className="group relative h-96 rounded-3xl overflow-hidden"
              >
                <Image
                  src={apt.image || "/placeholder.svg"}
                  alt={apt.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-3xl text-white mb-2">{apt.title}</h3>
                  <p className="text-white/80 mb-4">{apt.sqm}</p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-4 transition-all duration-300">
                    Scopri
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tipologie"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1"
            >
              Vedi tutte le tipologie
            </Link>
          </div>
        </div>
      </section>

      {/* Outdoor Preview Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/terrace.jpg"
                    alt="Terrazza"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden mt-8">
                  <Image
                    src="/images/garden.jpg"
                    alt="Giardino"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Spazi Esterni
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Terrazzi e giardini
                <span className="block text-primary">esclusivi</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Spazi fondamentali per un&apos;esperienza abitativa unica e rilassante 
                da godere in ogni momento della giornata. Spazi esterni accoglienti 
                e riservati per una cena estiva o per un più semplice e quotidiano momento di relax.
              </p>
              <Link
                href="/terrazzi-e-giardini"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
              >
                Lasciati conquistare
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Contattaci per maggiori informazioni
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Chiedi un appuntamento dedicato con un responsabile commerciale 
            per scoprire tutto su Parco Aurora.
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
      <PromoBanner />
    </main>
  )
}
