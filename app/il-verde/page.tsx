import type { Metadata } from "next"
import IlVerdeClient from "@/components/IlVerdeClient"

export const metadata: Metadata = {
  title: "Il Verde | Terrazzi, Giardini, Parti Esterne & Piscina | Belvedere 35",
  description: "Scopri le aree verdi di Belvedere 35: terrazzi panoramici, giardini privati, parti esterne e la piscina condominiale riservata.",
}

export default function IlVerdePage() {
  return <IlVerdeClient />
}
