import type { Metadata } from "next"
import TipologieClient from "./TipologieClient"

export const metadata: Metadata = {
  title: "Tipologie Abitative | Belvedere 35",
  description: "Scopri le tipologie abitative di Belvedere 35: bilocali, trilocali e quadrilocali con spazi esterni, planimetrie dedicate e caratteristiche uniche in un'unica sezione.",
}

export default function TipologiePage() {
  return <TipologieClient />
}
