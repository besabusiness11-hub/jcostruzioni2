import type { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f7faf9]">
      <Header />
      <section data-header-theme="dark" className="page-hero relative flex items-end bg-gradient-to-b from-[#122b32] to-[#0b2027]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <span className="mb-6 inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-[#9ddbd2]">{eyebrow}</span>
          <h1 className="mb-10 font-serif text-4xl font-medium text-white sm:text-6xl">{title}</h1>
        </div>
      </section>
      <section className="container mx-auto px-5 py-16 sm:px-6 lg:px-12">
        <div className="legal mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-foreground [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </section>
      <Footer />
    </main>
  )
}
