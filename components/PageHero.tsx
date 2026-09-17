import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  imageAlt?: string
}

export default function PageHero({ title, subtitle, description, image = "/images/project-detail.jpg", imageAlt = "Belvedere 35" }: PageHeroProps) {
  return (
    <section className="page-hero relative flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={imageAlt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85" />
      </div>
      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12 text-left animate-fade-in">
        {subtitle && (
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
