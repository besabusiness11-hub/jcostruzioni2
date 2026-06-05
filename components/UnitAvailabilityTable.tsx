"use client"

import { Fragment, useMemo, useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronLeft, ChevronRight, LayoutPanelTop, Sparkles, Trees } from "lucide-react"

export interface UnitAvailability {
  name: string
  floor: string
  sqm: number
  terrace: number
  garden?: number
  price: string
  available: boolean
  planImage?: string
  uniqueness?: string
}

interface UnitAvailabilityTableProps {
  units: UnitAvailability[]
  typeLabel: string
}

export default function UnitAvailabilityTable({ units, typeLabel }: UnitAvailabilityTableProps) {
  const [openUnit, setOpenUnit] = useState<string | null>(null)
  const [slideByUnit, setSlideByUnit] = useState<Record<string, number>>({})
  const showGarden = units.some((unit) => unit.garden)
  const columnCount = showGarden ? 8 : 7

  const unitSlides = useMemo(
    () =>
      units.reduce<Record<string, { title: string; description: string; image: string; icon: typeof LayoutPanelTop }[]>>(
        (acc, unit) => {
          const outdoorLabel = unit.garden
            ? `${unit.garden} mq di giardino privato e ${unit.terrace} mq di terrazzo`
            : `${unit.terrace} mq di terrazzo abitabile`

          acc[unit.name] = [
            {
              title: `Planimetria ${unit.name}`,
              description: `La planimetria dell'appartamento ${unit.name} valorizza ${unit.sqm} mq con distribuzione dedicata, affacci e percorsi interni propri.`,
              image: unit.planImage || "/images/floorplan-sample.jpg",
              icon: LayoutPanelTop,
            },
            {
              title: "Spazio esterno",
              description: outdoorLabel,
              image: unit.garden ? "/images/garden.jpg" : "/images/terrace.jpg",
              icon: Trees,
            },
            {
              title: "Carattere unico",
              description:
                unit.uniqueness ||
                `Unita ${unit.name} pensata per offrire luce naturale, privacy e una relazione precisa con gli spazi esterni.`,
              image: "/images/interior-detail.jpg",
              icon: Sparkles,
            },
          ]

          return acc
        },
        {},
      ),
    [units],
  )

  const changeSlide = (unitName: string, direction: 1 | -1) => {
    const slides = unitSlides[unitName]
    setSlideByUnit((current) => ({
      ...current,
      [unitName]: ((current[unitName] || 0) + direction + slides.length) % slides.length,
    }))
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px]">
        <caption className="sr-only">Unita disponibili con planimetrie dedicate per {typeLabel}</caption>
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 font-medium text-foreground">Unita</th>
            <th className="text-left py-4 px-4 font-medium text-foreground">Piano</th>
            <th className="text-left py-4 px-4 font-medium text-foreground">Superficie</th>
            <th className="text-left py-4 px-4 font-medium text-foreground">Terrazzo</th>
            {showGarden && <th className="text-left py-4 px-4 font-medium text-foreground">Giardino</th>}
            <th className="text-left py-4 px-4 font-medium text-foreground">Prezzo</th>
            <th className="text-left py-4 px-4 font-medium text-foreground">Stato</th>
            <th className="text-left py-4 px-4 font-medium text-foreground">Planimetria</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => {
            const isOpen = openUnit === unit.name
            const activeSlideIndex = slideByUnit[unit.name] || 0
            const slides = unitSlides[unit.name]
            const activeSlide = slides[activeSlideIndex]
            const SlideIcon = activeSlide.icon
            const panelId = `unit-plan-${unit.name}`

            return (
              <Fragment key={unit.name}>
                <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-4 font-serif text-lg text-foreground">{unit.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">{unit.floor}</td>
                  <td className="py-4 px-4 text-muted-foreground">{unit.sqm} mq</td>
                  <td className="py-4 px-4 text-muted-foreground">{unit.terrace} mq</td>
                  {showGarden && (
                    <td className="py-4 px-4 text-muted-foreground">{unit.garden ? `${unit.garden} mq` : "-"}</td>
                  )}
                  <td className="py-4 px-4 font-semibold text-foreground">&euro; {unit.price}</td>
                  <td className="py-4 px-4">
                    {unit.available ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></span>
                        Disponibile
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full" aria-hidden="true"></span>
                        Venduto
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenUnit(isOpen ? null : unit.name)}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {isOpen ? "Chiudi" : "Apri"}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  </td>
                </tr>

                {isOpen && (
                  <tr className="border-b border-border bg-secondary/40">
                    <td colSpan={columnCount} className="px-4 py-6">
                      <div id={panelId} className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
                        <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-background">
                          <Image
                            src={activeSlide.image}
                            alt={activeSlide.title}
                            fill
                            className="object-contain p-6"
                            sizes="(max-width: 1024px) 100vw, 620px"
                          />
                        </div>

                        <div className="flex flex-col justify-between rounded-2xl bg-background p-6">
                          <div>
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                              <SlideIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                              {typeLabel} {unit.name}
                            </p>
                            <h3 className="mb-4 font-serif text-3xl text-foreground">{activeSlide.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{activeSlide.description}</p>
                          </div>

                          <div className="mt-8 flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">
                              {activeSlideIndex + 1} / {slides.length}
                            </p>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => changeSlide(unit.name, -1)}
                                aria-label={`Slide precedente per ${unit.name}`}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                              >
                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                              </button>
                              <button
                                type="button"
                                onClick={() => changeSlide(unit.name, 1)}
                                aria-label={`Slide successiva per ${unit.name}`}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                              >
                                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
