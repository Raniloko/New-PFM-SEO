"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    // Warte kurz, bis die Seite gerendert ist
    const hash = window.location.hash
    if (hash) {
      // Kurze Verzögerung für DOM-Rendering
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          // Berechne Offset für fixed Navigation
          const navHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - navHeight - 20

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [pathname])

  return null
}
