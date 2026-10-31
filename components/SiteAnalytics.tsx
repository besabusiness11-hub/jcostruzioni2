"use client"

import Script from "next/script"
import { useEffect } from "react"
import { track } from "@/lib/analytics"

const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js"

/** Statistiche Umami (senza cookie) + eventi su clic telefono, email, indicazioni e capitolato. */
export default function SiteAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.("a")
      if (!link) return
      const href = link.getAttribute("href") || ""
      if (href.startsWith("tel:")) track("Clic telefono")
      else if (href.startsWith("mailto:")) track("Clic email")
      else if (href.includes("google.com/maps")) track("Clic indicazioni")
      else if (href.includes("capitolato.pdf")) track("Download capitolato")
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  if (!UMAMI_ID) return null
  return <Script src={UMAMI_SRC} data-website-id={UMAMI_ID} strategy="afterInteractive" />
}
