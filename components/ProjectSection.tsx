"use client"

import { useRef } from "react"
import { Leaf, Shield, Sparkles, Building2 } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Sostenibilità",
    description: "Classe energetica A4, pannelli fotovoltaici e impianti di ultima generazione per un impatto ambientale minimo.",
  },
  {
    icon: Shield,
    title: "Sicurezza",
    description: "Sistemi di videosorveglianza, accessi controllati e portineria per garantire la massima tranquillità.",
  },
  {
    icon: Sparkles,
    title: "Finiture Premium",
    description: "Materiali di pregio selezionati, pavimenti in legno massello e dettagli artigianali in ogni ambiente.",
  },
  {
    icon: Building2,
    title: "Design Italiano",
    description: "Architettura contemporanea firmata da studi di fama internazionale, perfetta integrazione con il verde circostante.",
  },
]

export default function ProjectSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="progetto"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Il Progetto
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Vivere in armonia
            <span className="block text-primary">con la natura</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Parco Aurora nasce dalla visione di creare residenze che uniscono il comfort 
            contemporaneo alla bellezza degli spazi verdi. Un&apos;oasi di tranquillità a 
            pochi minuti dal centro di Torino.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
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

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { value: "48", label: "Appartamenti" },
            { value: "4", label: "Tipologie" },
            { value: "A4", label: "Classe Energetica" },
            { value: "2025", label: "Consegna" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl lg:text-5xl text-primary font-semibold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
