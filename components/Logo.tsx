import React from "react"

interface LogoProps {
  className?: string
  scrolled?: boolean
}

export default function Logo({ className = "h-16", scrolled = false }: LogoProps) {
  // Colore del logo: bianco su trasparente (non scrolled), marrone scuro su scrolled
  const color = scrolled ? "text-[#3e2d27]" : "text-white"
  const strokeColor = scrolled ? "#3e2d27" : "#ffffff"

  return (
    <svg
      viewBox="0 0 400 320"
      className={`${className} ${color} transition-colors duration-300`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cornice con apertura superiore per il numero 35 */}
      <path
        d="M 170 40 L 20 40 L 20 300 L 380 300 L 380 40 L 230 40"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300"
      />

      {/* Numero 35 in alto al centro */}
      <text
        x="200"
        y="50"
        textAnchor="middle"
        fill="currentColor"
        className="font-serif text-[42px] font-medium"
      >
        35
      </text>

      {/* Scritta BELVEDERE al centro */}
      <text
        x="200"
        y="165"
        textAnchor="middle"
        fill="currentColor"
        className="font-sans text-[44px] font-light tracking-[0.12em]"
      >
        BELVEDERE
      </text>

      {/* Linea divisoria interna */}
      <line
        x1="65"
        y1="205"
        x2="335"
        y2="205"
        stroke={strokeColor}
        strokeWidth="1.5"
        className="transition-all duration-300"
      />

      {/* Sottotitolo Nature & Contemporary Living */}
      <text
        x="200"
        y="250"
        textAnchor="middle"
        fill="currentColor"
        className="font-serif italic text-[22px] tracking-wider"
      >
        Nature & Contemporary Living
      </text>
    </svg>
  )
}
