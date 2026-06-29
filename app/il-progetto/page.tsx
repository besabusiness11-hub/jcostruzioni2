import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Leaf, HomeIcon, Sparkles, Building2, Sun, Thermometer, Zap, Snowflake, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Il Progetto | Belvedere 35 - Garbagnate Monastero",
  description: "Scopri Belvedere 35: appartamenti di nuova costruzione, terrazzi, giardini privati e piscina condominiale a Garbagnate Monastero.",
}

const features = [
  {
    icon: Leaf,
    title: "Sostenibilità Ambientale",
    description: "Classe energetica A4 con pannelli fotovoltaici, impianti geotermici e sistemi di recupero acque piovane per un impatto ambientale minimo.",
  },
  {
    icon: HomeIcon,
    title: "Domotica",
    description: "Soluzioni intelligenti per una gestione semplice e moderna della casa, con predisposizioni per comfort, luci e clima.",
  },
  {
    icon: Sparkles,
    title: "Finiture Premium",
    description: "Materiali di pregio italiani selezionati, pavimenti in parquet massello, infissi in alluminio a taglio termico e dettagli artigianali.",
  },
  {
    icon: Building2,
    title: "Design Architettonico",
    description: "Progetto firmato da uno studio di fama internazionale, con linee pulite e contemporanee perfettamente integrate nel verde circostante.",
  },
]

const energyFeatures = [
  {
    icon: Sun,
    title: "Pannelli Fotovoltaici",
    description: "Impianto condominiale per le parti comuni e predisposizione per singoli appartamenti.",
  },
  {
    icon: Thermometer,
    title: "Riscaldamento a Pavimento",
    description: "Sistema radiante a bassa temperatura per il massimo comfort con consumi ridotti.",
  },
  {
    icon: Zap,
    title: "Domotica Integrata",
    description: "Controllo intelligente di luci, clima e sicurezza da smartphone e tablet.",
  },
  {
    icon: Snowflake,
    title: "Raffrescamento Estivo",
    description: "Predisposizione per il raffrescamento degli ambienti durante la stagione estiva.",
  },
]
export default function IlProgettoPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project-detail.jpg"
            alt="Belvedere 35 - Il Progetto"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
          <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
            Belvedere 35
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6">
            Il Progetto
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Appartamenti moderni nel verde di Garbagnate Monastero, con terrazzi, giardini privati e piscina condominiale.
          </p>
        </div>
        
        {/* Bordo inferiore sfumato */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fcfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                La Visione
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight font-medium">
                Una residenza esclusiva
                <span className="block text-primary italic font-normal mt-2">dal cuore verde</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-6 font-light">
                A Garbagnate Monastero nasce una nuova residenza moderna dal cuore verde, pensata per offrire
                un&apos;esperienza abitativa elegante, luminosa e immersa nella natura. Il progetto si distingue per
                un&apos;architettura contemporanea dalle linee pulite, appartamenti di nuova costruzione, ampi terrazzi,
                giardini privati e spazi esterni progettati per garantire comfort, privacy e qualità della vita.
              </p>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-10 font-light">
                Al centro del complesso, la piscina condominiale diventa un elemento distintivo e prezioso:
                uno spazio riservato ai residenti, dedicato al relax, al benessere e alla convivialità.
                Ogni dettaglio è stato studiato per creare un ambiente tranquillo e raffinato, dove design,
                verde e funzionalità si incontrano in perfetto equilibrio.
              </p>
              <Link 
                href="/tipologie"
                className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all duration-300 group text-sm uppercase tracking-wider"
              >
                Scopri le tipologie
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
            <div className="relative h-[450px] lg:h-[650px] rounded-[36px] overflow-hidden shadow-2xl border border-slate-200/50 group animate-fade-in-up">
              <Image
                src="/images/interior-detail.jpg"
                alt="Interni di pregio"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              Caratteristiche
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight font-medium">
              Qualità in ogni dettaglio
            </h2>
            <p className="text-muted-foreground/90 text-lg font-light leading-relaxed">
              Ogni aspetto del progetto è stato curato per garantire il massimo comfort e la migliore qualità della vita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-background/60 backdrop-blur-sm border border-slate-200/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:bg-background transition-all duration-500 hover:-translate-y-1.5 group"
              >
                <div className="w-14 h-14 bg-accent/40 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
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
      </section>

      {/* Energy Section */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fbfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {energyFeatures.map((feature) => (
                  <div key={feature.title} className="group relative bg-white/50 backdrop-blur-sm border border-slate-200/30 rounded-3xl p-6 hover:shadow-lg hover:bg-white transition-all duration-500">
                    <div className="w-12 h-12 bg-accent/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <h4 className="font-serif text-lg text-foreground mb-2 font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
                Efficienza Energetica
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight font-medium">
                Classe Energetica
                <span className="block text-primary italic font-normal mt-2">A4</span>
              </h2>
              <p className="text-muted-foreground/90 text-lg leading-relaxed mb-6 font-light">
                Belvedere 35 raggiunge alti standard di efficienza energetica grazie a 
                soluzioni tecnologiche all&apos;avanguardia che garantiscono comfort abitativo e 
                risparmio sui costi di gestione.
              </p>
              <p className="text-muted-foreground/90 text-lg leading-relaxed font-light">
                L&apos;involucro edilizio ad alte prestazioni termiche, combinato con impianti 
                di ultima generazione, permette di ridurre drasticamente i consumi energetici 
                mantenendo un clima ideale in ogni stagione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#3e2d27] relative overflow-hidden border-t border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 animate-fade-in-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "13", label: "Appartamenti" },
              { value: "3", label: "Tipologie" },
              { value: "A4", label: "Classe Energetica" },
              { value: "Dicembre 2027", label: "Consegna Prevista" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="font-serif text-4xl lg:text-6xl text-primary mb-2 font-semibold tracking-tight transition-transform duration-500 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-[#fcfbf9]/60 text-xs tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-[#fbfbf9] to-[#f5f4ed]">
        <div className="container mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight font-medium">
            Vieni a scoprire il tuo
            <span className="block text-primary italic font-normal mt-2">nuovo appartamento</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link
              href="/tipologie"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/95 hover:shadow-2xl hover:-translate-y-1"
            >
              Scopri le Tipologie
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-10 py-5 bg-background text-foreground border border-slate-200 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-accent hover:border-slate-300 hover:-translate-y-1"
            >
              Prenota una Visita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
