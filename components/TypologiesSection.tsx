"use client"

import Link from "next/link"
import ApartmentCard from "./ApartmentCard"

const apartments = [
  {
    title: "Bilocale",
    subtitle: "Ideale per giovani coppie",
    image: "/images/apartment-2rooms.jpg",
    rooms: 2,
    bathrooms: 1,
    sqm: "55-65 mq",
    price: "€ 245.000",
    available: 8,
    href: "/tipologie/bilocali",
  },
  {
    title: "Trilocale",
    subtitle: "La soluzione più richiesta",
    image: "/images/apartment-3rooms.jpg",
    rooms: 3,
    bathrooms: 2,
    sqm: "85-100 mq",
    price: "€ 365.000",
    available: 12,
    href: "/tipologie/trilocali",
  },
  {
    title: "Quadrilocale",
    subtitle: "Spazi generosi per la famiglia",
    image: "/images/apartment-4rooms.jpg",
    rooms: 4,
    bathrooms: 2,
    sqm: "115-135 mq",
    price: "€ 485.000",
    available: 6,
    href: "/tipologie/quadrilocali",
  },
]

export default function TypologiesSection() {
  return (
    <section id="tipologie" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Le Tipologie
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Trova la tua
            <span className="block text-primary">casa ideale</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tre tipologie abitative pensate per rispondere a diverse esigenze, 
            tutte caratterizzate da ampi spazi, luminosità naturale e finiture di pregio.
          </p>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.title} {...apartment} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Tutte le unità possono essere personalizzate secondo i tuoi gusti. 
            Contattaci per un appuntamento.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            Richiedi la brochure completa
            <span className="text-xl">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
