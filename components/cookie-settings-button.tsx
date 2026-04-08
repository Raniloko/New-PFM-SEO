"use client"

export function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="text-white/60 hover:text-white text-sm transition-colors"
    >
      Cookie-Einstellungen
    </button>
  )
}
