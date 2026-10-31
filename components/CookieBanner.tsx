"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const KEY = "belvedere35-cookie-notice"

/** Informativa breve: il sito usa solo cookie tecnici e statistiche anonime senza cookie. */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      setVisible(!window.localStorage.getItem(KEY))
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const close = () => {
    try {
      window.localStorage.setItem(KEY, "1")
    } catch {
      /* archiviazione non disponibile */
    }
    setVisible(false)
  }

  return (
    <div role="region" aria-label="Informativa cookie" className="fixed inset-x-3 bottom-20 z-[55] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#122b32]/95 p-4 text-white shadow-2xl backdrop-blur sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-6 sm:p-5">
      <p className="text-sm leading-relaxed text-white/90">
        Questo sito usa solo cookie tecnici necessari al funzionamento e statistiche di visita anonime, senza cookie di profilazione.{" "}
        <Link href="/cookie" className="font-semibold underline underline-offset-2">Cookie policy</Link>
      </p>
      <button type="button" onClick={close} className="mt-3 inline-flex min-h-11 shrink-0 items-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-[0.18em] text-[#122b32] sm:mt-0">
        Ho capito
      </button>
    </div>
  )
}
