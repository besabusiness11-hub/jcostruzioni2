"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Maximize, BedDouble, Bath } from "lucide-react"

interface ApartmentCardProps {
  title: string
  subtitle: string
  image: string
  rooms: number
  bathrooms: number
  sqm: string
  price: string
  available: number
  href?: string
}

export default function ApartmentCard({
  title,
  subtitle,
  image,
  rooms,
  bathrooms,
  sqm,
  price,
  available,
  href = "#",
}: ApartmentCardProps) {
  return (
    <Link href={href} className="group relative bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 block">
      {/* Image Container */}
      <div className="relative h-72 lg:h-80 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
          {available} disponibili
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl lg:text-3xl text-white mb-1">
            {title}
          </h3>
          <p className="text-white/80 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        {/* Features */}
        <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BedDouble className="w-5 h-5" />
            <span className="text-sm">{rooms} locali</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Bath className="w-5 h-5" />
            <span className="text-sm">{bathrooms} bagni</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Maximize className="w-5 h-5" />
            <span className="text-sm">{sqm}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              A partire da
            </p>
            <p className="font-serif text-2xl text-foreground font-semibold">
              {price}
            </p>
          </div>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
