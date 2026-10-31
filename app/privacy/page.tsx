import type { Metadata } from "next"
import LegalPage from "@/components/LegalPage"
import { PRIVACY_EMAIL, PRIVACY_OWNER } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Privacy policy | Belvedere 35",
  description: "Informativa sul trattamento dei dati personali raccolti dal sito Belvedere 35.",
}

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Informativa" title="Privacy policy">
      <p>Informativa ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR) per chi visita il sito Belvedere 35 e invia una richiesta di informazioni.</p>
      <h2>Titolare del trattamento</h2>
      <p>{PRIVACY_OWNER} — email: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.</p>
      <h2>Dati raccolti e finalità</h2>
      <ul>
        <li><strong>Modulo contatti:</strong> nome, cognome, email, telefono (facoltativo), tipologia di interesse e messaggio, usati solo per rispondere alla richiesta e fornire informazioni sugli immobili. Base giuridica: misure precontrattuali richieste dall’interessato (art. 6.1.b).</li>
        <li><strong>Statistiche di visita:</strong> dati aggregati e anonimi (pagine visitate, provenienza, dispositivo) raccolti con Umami, senza cookie e senza identificare il visitatore. Base giuridica: legittimo interesse (art. 6.1.f).</li>
      </ul>
      <h2>Fornitori che trattano i dati</h2>
      <ul>
        <li>Web3Forms, per l’inoltro via email delle richieste del modulo contatti.</li>
        <li>Umami, per le statistiche anonime di visita.</li>
        <li>Il fornitore di hosting del sito e Google (mappa incorporata nella pagina Contatti).</li>
      </ul>
      <h2>Conservazione</h2>
      <p>Le richieste sono conservate per il tempo necessario a gestire il contatto e comunque non oltre 24 mesi, salvo l’avvio di una trattativa.</p>
      <h2>Diritti dell’interessato</h2>
      <p>È possibile chiedere in ogni momento accesso, rettifica, cancellazione, limitazione od opposizione al trattamento e portabilità dei dati scrivendo a <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>, e proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).</p>
      <p className="text-sm">Ultimo aggiornamento: ottobre 2026.</p>
    </LegalPage>
  )
}
