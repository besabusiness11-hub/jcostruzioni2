import type { Metadata } from "next"
import IlVerdeClient from "@/components/IlVerdeClient"

export const metadata: Metadata = {
  title: "Piscina & Il Verde | Belvedere 35",
  description: "Scopri la piscina condominiale e l'area verde riservata di Belvedere 35.",
}

export default function PiscinaPage() {
  return <IlVerdeClient />
}
