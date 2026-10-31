type UmamiWindow = Window & { umami?: { track: (event: string, data?: Record<string, string | number>) => void } }

/** Registra un evento su Umami (se configurato). Non usa cookie. */
export function track(event: string, data?: Record<string, string | number>) {
  if (typeof window === "undefined") return
  try {
    ;(window as UmamiWindow).umami?.track(event, data)
  } catch {
    /* statistiche non disponibili: nessun effetto sul sito */
  }
}
