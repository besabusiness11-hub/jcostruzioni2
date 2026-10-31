/** URL pubblico del sito, da impostare con NEXT_PUBLIC_SITE_URL sul dominio definitivo. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://belvedere35.it").replace(/\/$/, "")

export const ROUTES = ["/", "/il-progetto", "/tipologie", "/il-verde", "/piscina", "/terrazzi-e-giardini", "/contatti", "/privacy", "/cookie"]
