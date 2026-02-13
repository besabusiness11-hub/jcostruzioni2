"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    typology: "",
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      content: "Via Aurora 35, 10123 Torino",
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 011 123 4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@parcoaurora.it",
    },
    {
      icon: Clock,
      title: "Orari Ufficio Vendite",
      content: "Lun-Ven: 9:00-18:00 | Sab: 10:00-13:00",
    },
  ]

  return (
    <section id="contatti" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Contattaci
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Inizia il tuo
              <span className="block text-primary">percorso verso casa</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Il nostro team è a disposizione per guidarti nella scelta 
              della soluzione abitativa perfetta per te e la tua famiglia.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-secondary rounded-3xl p-8 lg:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Grazie per averci contattato!
                </h3>
                <p className="text-muted-foreground">
                  Ti risponderemo entro 24 ore lavorative.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl text-foreground mb-6">
                  Richiedi Informazioni
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome e Cognome *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border rounded-xl h-12"
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefono *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border rounded-xl h-12"
                      placeholder="+39 333 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border rounded-xl h-12"
                    placeholder="mario.rossi@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="typology" className="block text-sm font-medium text-foreground mb-2">
                    Tipologia di interesse
                  </label>
                  <select
                    id="typology"
                    value={formData.typology}
                    onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                    className="w-full bg-background border border-border rounded-xl h-12 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Seleziona una tipologia</option>
                    <option value="bilocale">Bilocale</option>
                    <option value="trilocale">Trilocale</option>
                    <option value="quadrilocale">Quadrilocale</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border rounded-xl p-4 text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Scrivi qui le tue domande o richieste..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Accetto la <a href="#" className="text-primary hover:underline">Privacy Policy</a> e 
                    autorizzo il trattamento dei miei dati personali. *
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 text-base font-medium tracking-wide transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Invia Richiesta
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
