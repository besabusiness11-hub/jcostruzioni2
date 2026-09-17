"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageSquare } from "lucide-react"

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const update = () => setIsVisible(window.scrollY > 200)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [pathname])

  if (!isVisible || pathname === "/contatti") return null

  return (
    <Link
      href="/contatti"
      className="contact-float fixed z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#3e2d27] px-4 text-white shadow-lg transition-colors hover:bg-primary"
    >
      <MessageSquare className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-semibold">Contattaci</span>
    </Link>
  )
}
