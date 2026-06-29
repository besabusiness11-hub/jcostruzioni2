"use client"

import { useRef } from "react"
import { Building2, HomeIcon, Leaf, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Sostenibilita",
    description: "Classe energetica A4, fotovoltaico e impianti di ultima generazione per contenere consumi e impatto ambientale.",
  },
  {
    icon: HomeIcon,
    title: "Domotica",
    description: "Predisposizioni intelligenti per una casa pratica, moderna e connessa.",
  },
  {
    icon: Sparkles,
    title: "Finiture Premium",
    description: "Materiali selezionati, dettagli curati e ambienti progettati per un comfort quotidiano di alto livello.",
  },
  {
    icon: Building2,
    title: "Design Contemporaneo",
    description: "Architettura moderna integrata con il verde e pensata per valorizzare luce, privacy e spazi esterni.",
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
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Il Progetto
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Vivere in armonia
            <span className="block text-primary">con la natura</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Belvedere 35 nasce per offrire un nuovo modo di abitare a Garbagnate
            Monastero, con appartamenti moderni, spazi esterni privati e una piscina
            condominiale pensata per il benessere quotidiano.
          </p>
        </div>

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

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { value: "13", label: "Appartamenti" },
            { value: "3", label: "Tipologie" },
            { value: "A4", label: "Classe Energetica" },
            { value: "2027", label: "Consegna" },
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
