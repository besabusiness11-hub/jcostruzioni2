"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

import faqData from "@/content/faq.json"

const faqs = faqData.faqs

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-36 bg-[#f7faf9] border-t border-slate-200/50">
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
                  className={`bg-white/40 border border-slate-200/30 rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md hover:bg-white/60 ${
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
