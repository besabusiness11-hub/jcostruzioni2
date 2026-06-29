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
    <div className="overflow-x-auto rounded-[32px] border border-slate-200/50 bg-background/50 backdrop-blur-sm shadow-xl p-4 lg:p-6">
      <table className="w-full min-w-[760px] border-collapse">
        <caption className="sr-only">Unità disponibili con planimetrie dedicate per {typeLabel}</caption>
        <thead>
          <tr className="border-b border-slate-200/60">
            <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold">Unità</th>
            <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold">Piano</th>
            <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold">Superficie</th>
            <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold">Terrazzo</th>
            {showGarden && <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold">Giardino</th>}
            <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold">Prezzo</th>
            <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold">Stato</th>
            <th className="text-left py-5 px-5 text-[10px] uppercase tracking-widest text-primary font-bold text-center">Planimetria</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {units.map((unit) => {
            const isOpen = openUnit === unit.name
            const activeSlideIndex = slideByUnit[unit.name] || 0
            const slides = unitSlides[unit.name]
            const activeSlide = slides[activeSlideIndex]
            const SlideIcon = activeSlide.icon
            const panelId = `unit-plan-${unit.name}`

            return (
              <Fragment key={unit.name}>
                <tr className="hover:bg-primary/5 transition-all duration-300">
                  <td className="py-5 px-5 font-serif text-xl text-foreground font-semibold">{unit.name}</td>
                  <td className="py-5 px-5 text-muted-foreground text-sm font-light">{unit.floor}</td>
                  <td className="py-5 px-5 text-muted-foreground text-sm font-medium">{unit.sqm} mq</td>
                  <td className="py-5 px-5 text-muted-foreground text-sm font-light">{unit.terrace} mq</td>
                  {showGarden && (
                    <td className="py-5 px-5 text-muted-foreground text-sm font-light">{unit.garden ? `${unit.garden} mq` : "-"}</td>
                  )}
                  <td className="py-5 px-5 font-serif text-lg text-foreground font-semibold">&euro; {unit.price}</td>
                  <td className="py-5 px-5">
                    {unit.available ? (
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
                        Disponibile
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-stone-400">
                        <span className="w-2.5 h-2.5 bg-stone-300 rounded-full" aria-hidden="true"></span>
                        Venduto
                      </span>
                    )}
                  </td>
                  <td className="py-5 px-5 text-center">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenUnit(isOpen ? null : unit.name)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {isOpen ? "Chiudi" : "Apri"}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  </td>
                </tr>

                {isOpen && (
                  <tr className="bg-gradient-to-b from-[#fbfbf9]/80 to-[#f5f4ed]/80 backdrop-blur-sm">
                    <td colSpan={columnCount} className="px-5 py-8">
                      <div id={panelId} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
                        <div className="relative min-h-[300px] overflow-hidden rounded-[24px] bg-white border border-slate-100 shadow-inner flex items-center justify-center p-6">
                          <Image
                            src={activeSlide.image}
                            alt={activeSlide.title}
                            fill
                            className="object-contain p-6 hover:scale-[1.02] transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 620px"
                          />
                        </div>

                        <div className="flex flex-col justify-between rounded-[24px] bg-white p-8 border border-slate-100 shadow-md">
                          <div>
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/40">
                              <SlideIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                              {typeLabel} {unit.name}
                            </p>
                            <h3 className="mb-4 font-serif text-3xl text-foreground font-semibold">{activeSlide.title}</h3>
                            <p className="text-muted-foreground/90 leading-relaxed font-light text-base">{activeSlide.description}</p>
                          </div>

                          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                            <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                              {activeSlideIndex + 1} / {slides.length}
                            </p>
                            <div className="flex gap-2.5">
                              <button
                                type="button"
                                onClick={() => changeSlide(unit.name, -1)}
                                aria-label={`Slide precedente per ${unit.name}`}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                              >
                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                              </button>
                              <button
                                type="button"
                                onClick={() => changeSlide(unit.name, 1)}
                                aria-label={`Slide successiva per ${unit.name}`}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
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
