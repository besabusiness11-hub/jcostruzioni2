"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { ChevronDown, Maximize2, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react"

export interface UnitAvailability {
  name: string
  floor: string
  sqm: number
  terrace: number
  terraceLabel?: string
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
  const [lightboxUnit, setLightboxUnit] = useState<UnitAvailability | null>(null)
  const [scale, setScale] = useState(1)
  const zoomArea = useRef<HTMLDivElement>(null)
  const zoomTrigger = useRef<HTMLButtonElement | null>(null)
  const showGarden = units.some((unit) => unit.garden)
  const columnCount = showGarden ? 8 : 7

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const area = zoomArea.current
      if (!area) return
      area.scrollLeft = (area.scrollWidth - area.clientWidth) / 2
      area.scrollTop = (area.scrollHeight - area.clientHeight) / 2
    })
    return () => cancelAnimationFrame(frame)
  }, [scale, lightboxUnit])

  return (
    <Dialog.Root open={!!lightboxUnit} onOpenChange={(open) => { if (!open) setLightboxUnit(null) }}>
      <div className="unit-list p-3 sm:p-4 lg:overflow-x-auto lg:p-6">
        <table className="unit-table w-full border-collapse lg:min-w-[760px]" role="table">
          <caption className="sr-only">Unità disponibili con planimetrie dedicate per {typeLabel}</caption>
          <thead className="unit-table-head">
            <tr className="border-b border-slate-200/60">
              {["Unità", "Piano", "Superficie", "Spazio esterno", ...(showGarden ? ["Giardino"] : []), "Prezzo", "Stato", "Planimetria"].map((heading) => (
                <th scope="col" key={heading} className="px-3 py-5 text-left text-[10px] uppercase tracking-wider text-primary font-bold">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody role="rowgroup">
            {units.map((unit) => {
              const isOpen = openUnit === unit.name
              const panelId = "unit-plan-" + unit.name
              return (
                <Fragment key={unit.name}>
                  <tr role="row" className="unit-summary border-b border-slate-100">
                    <td role="cell" data-label="Unità" className="px-3 py-5 font-serif text-2xl text-foreground font-semibold">{unit.name}</td>
                    <td role="cell" data-label="Piano" className="px-3 py-5 text-sm text-foreground">{unit.floor}</td>
                    <td role="cell" data-label="Superficie" className="px-3 py-5 text-sm text-foreground">{unit.sqm} mq</td>
                    <td role="cell" data-label="Spazio esterno" className="px-3 py-5 text-sm text-foreground"><span className="block">{unit.terrace} mq</span><span className="mt-1 block text-[10px] uppercase tracking-wider text-muted-foreground">{unit.terraceLabel || "Terrazzo"}</span></td>
                    {showGarden && <td role="cell" data-label="Giardino" className="px-3 py-5 text-sm text-foreground">{unit.garden ? unit.garden + " mq" : "—"}</td>}
                    <td role="cell" data-label="Prezzo" className="px-3 py-5 font-serif text-xl text-foreground font-semibold">&euro; {unit.price}</td>
                    <td role="cell" data-label="Stato" className="px-3 py-5">
                      <span className={'inline-flex items-center gap-2 text-xs font-semibold ' + (unit.available ? "text-primary" : "text-muted-foreground")}>
                        <span className={'h-2 w-2 shrink-0 rounded-full ' + (unit.available ? "bg-primary" : "bg-stone-400")} aria-hidden="true" />
                        {unit.available ? "Disponibile" : "Venduto"}
                      </span>
                    </td>
                    <td role="cell" className="unit-action px-3 py-5">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-label={(isOpen ? "Chiudi" : "Apri") + " planimetria " + unit.name}
                        onClick={() => setOpenUnit(isOpen ? null : unit.name)}
                        className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-3 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        {isOpen ? "Chiudi" : "Planimetria"}
                        <ChevronDown className={'h-4 w-4 transition-transform ' + (isOpen ? "rotate-180" : "")} aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                  {isOpen && (
                    <tr role="row" className="unit-detail bg-secondary/60">
                      <td role="cell" colSpan={columnCount} className="p-3 sm:p-5">
                        <div id={panelId} className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] items-start">
                          <button
                            type="button"
                            onClick={(event) => {
                              zoomTrigger.current = event.currentTarget
                              setScale(1)
                              setLightboxUnit(unit)
                            }}
                            aria-label={"Ingrandisci planimetria " + unit.name}
                            className="relative flex aspect-[4/3] w-full items-end justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-3"
                          >
                            <Image src={unit.planImage || "/images/floorplan-sample.jpg"} alt={"Planimetria " + unit.name} fill className="object-contain p-4 pb-14" sizes="(max-width: 1023px) 100vw, 620px" />
                            <span className="relative inline-flex min-h-11 items-center gap-2 rounded-full bg-[#3e2d27] px-4 py-2 text-xs font-semibold text-white">
                              <Maximize2 className="h-4 w-4" aria-hidden="true" />
                              Ingrandisci planimetria
                            </span>
                          </button>
                          <div className="py-2 lg:p-5">
                            <p className="mb-2 text-sm font-medium text-primary">{typeLabel} · {unit.name}</p>
                            <h3 className="mb-4 font-serif text-2xl sm:text-3xl font-semibold">Planimetria {unit.name}</h3>
                            <p className="text-base leading-relaxed text-muted-foreground">
                              {unit.uniqueness || ("La planimetria dell'appartamento " + unit.name + " valorizza " + unit.sqm + " mq con distribuzione dedicata, affacci e percorsi interni propri.")}
                            </p>
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

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/90" />
        <Dialog.Content
          aria-describedby="plan-zoom-help"
          onCloseAutoFocus={(event) => {
            event.preventDefault()
            zoomTrigger.current?.focus()
          }}
          className="plan-lightbox fixed inset-0 z-[70] flex h-[100dvh] flex-col bg-[#171310] text-white"
        >
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/15 px-4 py-3 sm:px-6">
            <Dialog.Title className="font-serif text-xl sm:text-2xl">Planimetria {lightboxUnit?.name}</Dialog.Title>
            <Dialog.Close asChild>
              <button type="button" aria-label="Chiudi planimetria" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <p id="plan-zoom-help" className="shrink-0 px-4 py-2 text-center text-xs text-white/80">
            Usa + e − per lo zoom. Scorri l'immagine ingrandita per esplorarla.
          </p>
          <div ref={zoomArea} className="min-h-0 flex-1 overflow-auto overscroll-contain bg-white">
            <div style={{ width: (scale * 100) + "%", height: (scale * 100) + "%" }} className="relative min-h-full min-w-full">
              {lightboxUnit && <Image src={lightboxUnit.planImage || "/images/floorplan-sample.jpg"} alt={"Planimetria " + lightboxUnit.name} fill className="object-contain p-3" sizes="100vw" />}
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-center gap-3 border-t border-white/15 px-3 py-3">
            <button type="button" onClick={() => setScale((value) => Math.max(value - 0.5, 1))} disabled={scale <= 1} aria-label="Riduci zoom" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 disabled:opacity-40">
              <ZoomOut className="h-5 w-5" aria-hidden="true" />
            </button>
            <output aria-live="polite" className="min-w-12 text-center text-sm tabular-nums">{scale.toFixed(1)}×</output>
            <button type="button" onClick={() => setScale((value) => Math.min(value + 0.5, 4))} disabled={scale >= 4} aria-label="Aumenta zoom" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 disabled:opacity-40">
              <ZoomIn className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setScale(1)} disabled={scale === 1} aria-label="Ripristina zoom" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 disabled:opacity-40">
              <RotateCcw className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
