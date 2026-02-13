import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Parco Aurora - Residenze di Prestigio a Torino',
  description: 'Scopri le nuove residenze di lusso nel cuore di Torino. Appartamenti esclusivi con terrazzi e giardini privati, finiture di pregio e sostenibilità ambientale.',
  keywords: 'appartamenti torino, residenze lusso, nuove costruzioni torino, parco aurora',
}

export const viewport: Viewport = {
  themeColor: '#4a7c59',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
