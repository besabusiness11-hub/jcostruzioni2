"use client"

import Image from "next/image"
import { Sun, TreePine, Wind, Eye } from "lucide-react"

const features = [
  {
    icon: Sun,
    title: "Esposizione Ottimale",
    description: "Orientamento studiato per massimizzare la luce naturale",
  },
  {
    icon: TreePine,
    title: "Verde Privato",
    description: "Giardini curati e piantumazioni di pregio",
  },
  {
    icon: Wind,
    title: "Aria Pura",
    description: "Lontano dal traffico, immersi nella tranquillità",
  },
  {
    icon: Eye,
    title: "Viste Panoramiche",
    description: "Affacci suggestivi sulle colline torinesi",
  },
]

export default function OutdoorSection() {
  return (
    <section id="esterni" className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Spazi Esterni
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Il lusso di vivere
            <span className="block text-primary">all&apos;aperto</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Terrazzi abitabili e giardini privati per godere della bella stagione 
            senza uscire di casa. Un privilegio raro nel cuore della città.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Large Image - Terrace */}
          <div className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden group">
            <Image
              src="/images/terrace.jpg"
              alt="Terrazza panoramica"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif text-3xl text-white mb-2">Terrazzi Abitabili</h3>
              <p className="text-white/80">Fino a 50 mq di spazio esterno privato</p>
            </div>
          </div>

          {/* Large Image - Garden */}
          <div className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden group">
            <Image
              src="/images/garden.jpg"
              alt="Giardino privato"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif text-3xl text-white mb-2">Giardini Privati</h3>
              <p className="text-white/80">Verde esclusivo per le unità al piano terra</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
