# Belvedere 35 — sito web

Sito di presentazione di Belvedere 35, nuove residenze a Garbagnate Monastero (LC).
Realizzato da Besa (besaweb.com).

## Avvio locale

Requisito: Node.js 20 o superiore.

```bash
npm install
cp .env.example .env   # e compilare i valori
npm run dev            # http://localhost:3000
```

Prima di ogni pubblicazione: `npx tsc --noEmit` e `npm run build`.

## Variabili d'ambiente

Vengono lette durante la build: dopo ogni modifica va rifatto il deploy.

| Variabile | Valore |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio definitivo, es. `https://belvedere35.it` |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Chiave di web3forms.com. Senza chiave il modulo apre il programma di posta del visitatore |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | ID del sito su cloud.umami.is. Senza ID le statistiche sono spente |
| `NEXT_PUBLIC_UMAMI_SCRIPT_URL` | Facoltativo, solo per Umami self-hosted |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Facoltativo, codice di verifica di Google Search Console |

## Deploy

- **Vercel** (consigliato): importare il repository, impostare le variabili, collegare il dominio.
- **Netlify**: comando `npm run build`, plugin Next.js automatico.

Ogni modifica su GitHub, anche dal pannello contenuti, ripubblica il sito.

## Pannello contenuti (Pages CMS)

Configurazione in `.pages.yml`. Accesso da https://app.pagescms.org con un account GitHub autorizzato sul repository.
Sezioni: **Appartamenti e planimetrie**, **Domande frequenti**, **Contatti**.

Un campo aggiunto in `content/*.json` va aggiunto anche in `.pages.yml`, altrimenti non compare nel pannello.

## Struttura

| Percorso | Contenuto |
| --- | --- |
| `content/` | Contenuti modificabili: unità e prezzi, FAQ, recapiti e dati privacy |
| `app/` | Pagine (Home, Il Progetto, Tipologie, Il Verde, Piscina, Terrazzi e giardini, Contatti, Privacy, Cookie), `sitemap.ts`, `robots.ts` |
| `components/` | Sezioni riutilizzabili; `ContactMailtoForm.tsx` (modulo contatti), `SiteAnalytics.tsx` (statistiche), `CookieBanner.tsx` |
| `lib/` | `contact.ts` (recapiti), `site.ts` (dominio e pagine della sitemap), `analytics.ts` |
| `public/` | Immagini WebP, planimetrie, `capitolato.pdf` |

## Aggiungere una pagina

Creare `app/<nome>/page.tsx` con i `metadata`, aggiungere il link in `components/Header.tsx` e `components/Footer.tsx` e il percorso in `ROUTES` di `lib/site.ts` (sitemap).

## SEO

- Titoli e descrizioni per pagina, Open Graph con immagine `public/images/og-belvedere.jpg`.
- Dati strutturati (ApartmentComplex + FAQPage) in `app/layout.tsx`.
- `sitemap.xml` e `robots.txt` generati automaticamente dal dominio in `NEXT_PUBLIC_SITE_URL`.
- Controlli: https://search.google.com/test/rich-results · https://pagespeed.web.dev · https://www.opengraph.xyz

## Statistiche ed eventi

Umami, senza cookie. Eventi registrati: "Richiesta inviata", "Errore modulo", "Richiesta via email", "Richiesta scheda unità", "Clic telefono", "Clic email", "Clic indicazioni", "Download capitolato".
Strumenti che usano cookie (es. Google Analytics) richiedono un banner con consenso e l'aggiornamento della cookie policy.

## Immagini

Tutte in WebP (lato massimo 2400 px). Per sostituirne una, caricare un file WebP con lo stesso nome o aggiornare il percorso nei contenuti.
