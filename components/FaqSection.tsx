"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Quali sono i tempi di consegna previsti?",
    answer: "La consegna degli appartamenti di Belvedere 35 è ufficialmente programmata per Dicembre 2027. Il cantiere procede secondo i tempi prestabiliti."
  },
  {
    question: "In quale classe energetica rientrano gli immobili?",
    answer: "Tutti gli appartamenti del complesso sono realizzati in Classe Energetica A4, il massimo standard di efficienza sul mercato. Questo garantisce un abbattimento drastico dei costi di gestione e un comfort termico e acustico eccezionale."
  },
  {
    question: "C'è la possibilità di personalizzare le finiture interne?",
    answer: "Assolutamente sì. Offriamo un capitolato di pregio con un'ampia selezione di materiali italiani (parquet massello, ceramiche di design, infissi a taglio termico). Un nostro architetto sarà a tua disposizione per personalizzare ogni ambiente."
  },
  {
    question: "La piscina è condominiale o privata?",
    answer: "La grande piscina situata al centro del complesso è condominiale ed è ad uso esclusivo dei residenti di Belvedere 35. L'area comprende anche un solarium curato e percorsi verdi riservati."
  },
  {
    question: "Cosa comprende il sistema di domotica di capitolato?",
    answer: "Il capitolato include un sistema domotico integrato di ultima generazione per il controllo intelligente dell'illuminazione, del riscaldamento a pavimento e delle predisposizioni di sicurezza, interamente gestibile da smartphone o tablet."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-36 bg-[#fcfbf9] border-t border-slate-200/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Intestazione */}
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="inline-block text-primary text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
              FAQ
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-tight">
              Domande <span className="text-primary italic font-normal">Frequenti</span>
            </h2>
            <p className="text-muted-foreground/90 text-lg font-light mt-4">
              Risposte rapide ai dubbi più comuni su Belvedere 35.
            </p>
          </div>

          {/* Accordion delle FAQ */}
          <div className="space-y-4 animate-fade-in-up">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`bg-white/40 border border-slate-200/30 rounded-[24px] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md hover:bg-white/60 ${
                    isOpen ? "bg-white/80 border-slate-200/60" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 font-serif text-lg md:text-xl text-foreground font-semibold transition-colors duration-300"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-primary border-primary text-white" : "text-primary hover:bg-accent"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-6 text-muted-foreground/90 leading-relaxed font-light text-base border-t border-slate-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
