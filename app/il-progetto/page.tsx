import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PromoBanner from "@/components/PromoBanner"
import { Leaf, Shield, Sparkles, Building2, Sun, Thermometer, Zap, Droplets, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Il Progetto | Parco Aurora - Residenze di Prestigio a Torino",
  description: "Scopri il progetto Parco Aurora: architettura contemporanea, sostenibilità e materiali di pregio nel cuore verde di Torino.",
}

const features = [
  {
    icon: Leaf,
    title: "Sostenibilità Ambientale",
    description: "Classe energetica A4 con pannelli fotovoltaici, impianti geotermici e sistemi di recupero acque piovane per un impatto ambientale minimo.",
  },
  {
    icon: Shield,
    title: "Sicurezza Integrata",
    description: "Sistemi di videosorveglianza 24/7, accessi controllati con badge, citofoni video HD e portineria dedicata per la massima tranquillità.",
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
    icon: Droplets,
    title: "Recupero Acque",
    description: "Sistema di raccolta acque piovane per irrigazione giardini e aree comuni.",
  },
]

export default function IlProgettoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project-detail.jpg"
            alt="Parco Aurora - Il Progetto"
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
            Il Progetto
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Un connubio perfetto fra comfort e privacy, architettura pulita per una residenza elegante.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                La Visione
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Una residenza esclusiva
                <span className="block text-primary">dal cuore verde</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Parco Aurora è un progetto di rigenerazione urbana caratterizzato dalle linee pulite 
                ed essenziali dell&apos;architettura torinese contemporanea. La ricerca dei materiali 
                prime-class, la volontà di rendere gli ambienti molto luminosi, il garantire spazi 
                esterni confortevoli ed abitabili sono state peculiarità imprescindibili nelle scelte progettuali.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ampie vetrate arricchiscono gli spazi inondando gli ambienti di luce, energia positiva 
                del vivere la casa. Ogni dettaglio è stato pensato per offrire un&apos;esperienza abitativa 
                unica e rilassante.
              </p>
              <Link 
                href="/tipologie"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
              >
                Scopri le tipologie
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/images/interior-detail.jpg"
                alt="Interni di pregio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Caratteristiche
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Qualità in ogni dettaglio
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ogni aspetto del progetto è stato curato per garantire il massimo comfort e la migliore qualità della vita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 font-medium">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {energyFeatures.map((feature) => (
                  <div key={feature.title} className="group">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h4 className="font-serif text-lg text-foreground mb-2 font-medium">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Efficienza Energetica
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Classe Energetica
                <span className="block text-primary">A4</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Parco Aurora raggiunge i più alti standard di efficienza energetica grazie a 
                soluzioni tecnologiche all&apos;avanguardia che garantiscono comfort abitativo e 
                risparmio sui costi di gestione.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                L&apos;involucro edilizio ad alte prestazioni termiche, combinato con impianti 
                di ultima generazione, permette di ridurre drasticamente i consumi energetici 
                mantenendo un clima ideale in ogni stagione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "48", label: "Appartamenti" },
              { value: "4", label: "Tipologie" },
              { value: "A4", label: "Classe Energetica" },
              { value: "2025", label: "Consegna Prevista" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl lg:text-5xl text-primary-foreground font-semibold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Vieni a scoprire il tuo
            <span className="block text-primary">nuovo appartamento</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Prenota una visita guidata al nostro show-room e lasciati conquistare dalla qualità 
            e dall&apos;eleganza di Parco Aurora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tipologie"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1"
            >
              Scopri le Tipologie
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground border border-border rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-accent hover:-translate-y-1"
            >
              Prenota una Visita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <PromoBanner />
    </main>
  )
}
