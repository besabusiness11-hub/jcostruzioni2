import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#3e2d27",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "serif",
          padding: "3px",
        }}
      >
        {/* Cornice bianca quadrata ad angoli smussati che richiama il logo */}
        <div
          style={{
            border: "1.5px solid white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
          }}
        >
          {/* Numero 35 al centro */}
          <span style={{ fontSize: 15, fontWeight: "bold", fontFamily: "serif" }}>35</span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
