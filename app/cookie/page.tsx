import type { Metadata } from "next"
import LegalPage from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Cookie policy | Belvedere 35",
  description: "Informazioni sui cookie e sulle tecnologie utilizzate dal sito Belvedere 35.",
}

export default function CookiePage() {
  return (
    <LegalPage eyebrow="Informativa" title="Cookie policy">
      <p>Il sito Belvedere 35 non utilizza cookie di profilazione né cookie pubblicitari.</p>
      <h2>Archiviazione tecnica</h2>
      <p>Il browser memorizza soltanto l’avvenuta lettura dell’informativa, per non mostrare di nuovo il banner. Questa informazione resta sul dispositivo e non viene inviata a terzi.</p>
      <h2>Statistiche</h2>
      <p>Le statistiche di visita sono raccolte con Umami, uno strumento che non usa cookie e non identifica il visitatore. Per questo non è richiesto il consenso.</p>
      <h2>Contenuti di terze parti</h2>
      <p>La pagina Contatti incorpora una mappa di Google Maps, che può impostare cookie propri secondo la policy di Google. Il link alle indicazioni stradali apre Google Maps in una nuova scheda.</p>
      <h2>Come gestire i cookie</h2>
      <p>È possibile cancellare o bloccare i cookie dalle impostazioni del proprio browser.</p>
      <p className="text-sm">Ultimo aggiornamento: ottobre 2026. Per i dettagli sul trattamento dei dati consulta la <a href="/privacy">privacy policy</a>.</p>
    </LegalPage>
  )
}
