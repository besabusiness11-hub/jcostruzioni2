import React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"

import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Belvedere 35 - Nuove Residenze a Garbagnate Monastero",
  description:
    "Scopri Belvedere 35 a Garbagnate Monastero: appartamenti moderni immersi nel verde, con terrazzi, giardini privati e piscina condominiale.",
  keywords:
    "appartamenti Garbagnate Monastero, nuove costruzioni Lecco, Belvedere 35, appartamenti con piscina",
}

export const viewport: Viewport = {
  themeColor: "#4a7c59",
  width: "device-width",
  initialScale: 1,
}

import FloatingContactButton from "@/components/FloatingContactButton"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <FloatingContactButton />

      </body>
    </html>
  )
}
