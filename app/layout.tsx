import React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"

import "./globals.css"
import { SITE_URL } from "@/lib/site"
import contatti from "@/content/contatti.json"
import faqData from "@/content/faq.json"
import SiteAnalytics from "@/components/SiteAnalytics"
import CookieBanner from "@/components/CookieBanner"

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
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: "Belvedere 35 - Nuove Residenze a Garbagnate Monastero",
  description:
    "Scopri Belvedere 35 a Garbagnate Monastero: appartamenti moderni immersi nel verde, con terrazzi, giardini privati e piscina condominiale.",
  keywords:
    "appartamenti Garbagnate Monastero, nuove costruzioni Lecco, Belvedere 35, appartamenti con piscina",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Belvedere 35",
    title: "Belvedere 35 - Nuove Residenze a Garbagnate Monastero",
    description: "Appartamenti in Classe A immersi nel verde, con terrazzi, giardini privati e piscina condominiale.",
    images: [{ url: "/images/og-belvedere.jpg", width: 1200, height: 630, alt: "Belvedere 35, Garbagnate Monastero" }],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      name: "Belvedere 35",
      url: SITE_URL,
      image: SITE_URL + "/images/og-belvedere.jpg",
      description: "Complesso di 13 appartamenti in Classe Energetica A con piscina condominiale, giardini e terrazzi.",
      address: { "@type": "PostalAddress", addressLocality: "Garbagnate Monastero", addressRegion: "LC", addressCountry: "IT" },
      telephone: contatti.telefonoInternazionale,
      email: contatti.email,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Piscina condominiale", value: true },
        { "@type": "LocationFeatureSpecification", name: "Giardini privati", value: true },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqData.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ],
}

export const viewport: Viewport = {
  themeColor: "#122b32",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        <CookieBanner />
        <SiteAnalytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
