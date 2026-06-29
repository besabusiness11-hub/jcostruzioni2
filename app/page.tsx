import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, HomeIcon, Sparkles, Building2 } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Sostenibilità",
    description: "Classe energetica A4 e impianti di ultima generazione",
  },
  {
    icon: HomeIcon,
    title: "Domotica",
    description: "Predisposizioni intelligenti per una casa pratica, moderna e connessa",
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
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />
      <Hero />
      
      {/* Sezione Il Progetto (Project Preview) */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fbfbf9] to-[#f5f4ed] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Blocco di testo a sinistra */}
            <div className="lg:col-span-5 animate-fade-in-up">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                Il Progetto
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight font-medium">
                Una residenza esclusiva
                <span className="block text-primary italic font-normal mt-2">dal cuore verde</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-10 font-light">
                Il progetto nasce a Garbagnate Monastero con l&apos;obiettivo di creare un nuovo modo di vivere la casa:
                moderno, luminoso e immerso nel verde. Il complesso sarà composto da appartamenti di nuova costruzione,
                progettati con linee contemporanee, ampi terrazzi, giardini privati e spazi esterni pensati per garantire
                comfort, privacy e qualità della vita. Al centro della residenza, la piscina condominiale diventerà un
                luogo esclusivo di relax e convivialità, riservato ai residenti.
              </p>
              <Link
                href="/il-progetto"
                className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider"
              >
                Scopri di più
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Bento Grid a destra */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="relative bg-background/60 backdrop-blur-sm border border-slate-200/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:bg-background transition-all duration-500 hover:-translate-y-1.5 group"
                  >
                    <div className="w-14 h-14 bg-accent/40 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-3 font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
 
      {/* Sezione Tipologie Abitative (Typologies Preview) */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Header centrato */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              Tipologie Abitative
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight font-medium">
              Ambienti unici,
              <span className="block text-primary italic font-normal mt-2">curati, sofisticati</span>
            </h2>
            <p className="text-muted-foreground/90 text-lg font-light leading-relaxed">
              Bilocali, trilocali e quadrilocali disegnati per soddisfare 
              le più attente e preziose esigenze abitative del vivere moderno, con planimetrie dedicate per ogni appartamento.
            </p>
          </div>
 
          {/* Griglia delle tipologie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
            {apartments.map((apt) => (
              <Link
                key={apt.title}
                href={apt.href}
                className="group relative h-[480px] rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <Image
                  src={apt.image || "/placeholder.svg"}
                  alt={apt.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:via-black/20 transition-all duration-700" />
                
                {/* Metratura in vetro */}
                <div className="absolute top-6 right-6 backdrop-blur-md bg-white/15 border border-white/20 rounded-full px-4 py-1.5 shadow-lg">
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">{apt.sqm}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-3 font-semibold">{apt.title}</h3>
                  <span className="inline-flex items-center gap-2 text-white/95 text-xs font-semibold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Scopri
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
 
          <div className="text-center mt-16">
            <Link
              href="/tipologie"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-550 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1"
            >
              Vedi tutte le tipologie
            </Link>
          </div>
        </div>
      </section>
 
      {/* Sezione Spazi Esterni (Outdoor Preview) */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fbfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Composizione asimmetrica a sinistra */}
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <div className="grid grid-cols-2 gap-6 relative">
                {/* Immagine Terrazza */}
                <div className="relative h-80 lg:h-96 rounded-[32px] overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-700 group hover:-translate-y-1">
                  <Image
                    src="/images/terrace.jpg"
                    alt="Terrazza"
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-white text-[10px] tracking-wider uppercase font-semibold">Terrazzi</span>
                  </div>
                </div>
                {/* Immagine Giardino */}
                <div className="relative h-80 lg:h-96 rounded-[32px] overflow-hidden shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-700 mt-12 group hover:-translate-y-1">
                  <Image
                    src="/images/garden.jpg"
                    alt="Giardino"
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-1.5">
                    <span className="text-white text-[10px] tracking-wider uppercase font-semibold">Giardini</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blocco di testo a destra */}
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                Spazi Esterni
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                Terrazzi, giardini
                <span className="block text-primary italic font-normal mt-2">esclusivi</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-10 font-light">
                Spazi esterni accoglienti e riservati, pensati per vivere la casa anche all&apos;aperto e valorizzati dalla
                presenza della piscina condominiale.
              </p>
              <Link
                href="/terrazzi-e-giardini"
                className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider"
              >
                Lasciati conquistare
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>
 
      {/* Sezione Contatti (Contact CTA) */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-white to-[#fcfbf9] overflow-hidden relative">
        {/* Glow ambientali in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 animate-fade-in-up">
          <div className="bg-[#3e2d27] text-white rounded-[48px] p-12 lg:p-24 text-center shadow-2xl relative overflow-hidden border border-white/10">
            {/* Gradiente radiale per effetto di luce speculare interna */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none" />
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 font-medium leading-tight max-w-3xl mx-auto">
              Contattaci per maggiori informazioni
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Chiedi un appuntamento dedicato con un responsabile commerciale 
              per scoprire tutto su Belvedere 35.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/95 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              Richiedi Informazioni
            </Link>
          </div>
        </div>
      </section>
 
      <Footer />
    </main>
  )
}
