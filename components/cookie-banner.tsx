"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp?: string
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

function loadGoogleAnalytics() {
  if (document.querySelector('script[src*="googletagmanager"]')) return
  const script = document.createElement("script")
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-6P9312CKQR"
  script.async = true
  document.head.appendChild(script)
  const script2 = document.createElement("script")
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6P9312CKQR', { anonymize_ip: true });
  `
  document.head.appendChild(script2)
}

function saveConsent(prefs: CookiePreferences) {
  const consentData = {
    ...prefs,
    timestamp: new Date().toISOString(),
    version: "1.0",
  }
  localStorage.setItem("cookie-consent", JSON.stringify(consentData))
  if (prefs.analytics) loadGoogleAnalytics()
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent")
    if (!stored) {
      setShowBanner(true)
    } else {
      const parsed = JSON.parse(stored) as CookiePreferences
      setPreferences(parsed)
      if (parsed.analytics) loadGoogleAnalytics()
    }

    const handler = () => {
      setShowSettings(true)
      setShowBanner(true)
    }
    window.addEventListener("open-cookie-settings", handler)
    return () => window.removeEventListener("open-cookie-settings", handler)
  }, [])

  const acceptAll = () => {
    const prefs = { necessary: true, analytics: true, marketing: true }
    setPreferences(prefs)
    saveConsent(prefs)
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const prefs = { necessary: true, analytics: false, marketing: false }
    setPreferences(prefs)
    saveConsent(prefs)
    setShowBanner(false)
    setShowSettings(false)
  }

  const saveCustom = () => {
    saveConsent(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center bg-black/60 p-0 md:p-4">
      <div className="w-full md:max-w-2xl bg-white shadow-2xl md:rounded-xl overflow-hidden">
        {showSettings ? (
          <>
            {/* Settings Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h2 className="text-base font-bold text-gray-900">Cookie-Einstellungen</h2>
              <button
                onClick={() => setShowSettings(false)}
                aria-label="Schliessen"
                className="text-gray-400 hover:text-gray-700 text-lg leading-none"
              >
                &#x2715;
              </button>
            </div>

            {/* Settings Body */}
            <div className="px-5 py-4 space-y-3 max-h-[60vh] overflow-y-auto">
              <p className="text-xs text-gray-500">
                Hier können Sie Ihre Einwilligung für einzelne Cookie-Kategorien verwalten. Notwendige Cookies können
                nicht deaktiviert werden, da sie für den Betrieb der Website erforderlich sind.
              </p>

              {/* Necessary */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Notwendige Cookies</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Erforderlich für den Betrieb der Website. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Anbieter: Pro Facility Management &nbsp;|&nbsp; Speicherdauer: Session</p>
                  </div>
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-0.5 h-4 w-4 shrink-0 accent-gray-400 cursor-not-allowed"
                    aria-label="Notwendige Cookies (immer aktiv)"
                  />
                </div>
              </div>

              {/* Analytics */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Analyse-Cookies</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Helfen uns zu verstehen, wie Besucher die Website nutzen (Google Analytics). Rechtsgrundlage:
                      Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Anbieter: Google Ireland Ltd. &nbsp;|&nbsp; Speicherdauer: 2 Jahre &nbsp;|&nbsp; IP-Anonymisierung: aktiv
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-gray-800"
                    aria-label="Analyse-Cookies aktivieren"
                  />
                </div>
              </div>

              {/* Marketing */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Marketing-Cookies</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Werden verwendet, um Ihnen relevante Werbung anzuzeigen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a
                      DSGVO.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Anbieter: Google LLC &nbsp;|&nbsp; Speicherdauer: bis zu 2 Jahre</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-gray-800"
                    aria-label="Marketing-Cookies aktivieren"
                  />
                </div>
              </div>
            </div>

            {/* Settings Footer */}
            <div className="px-5 py-4 border-t flex flex-col sm:flex-row gap-2">
              <button
                onClick={saveCustom}
                className="flex-1 bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Alle ablehnen
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Main Banner */}
            <div className="px-5 pt-5 pb-4">
              <h2 className="text-base font-bold text-gray-900 mb-2">
                Datenschutz-Einstellungen
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. Einige
                Cookies sind technisch notwendig, andere helfen uns, das Angebot zu verbessern. Sie können Ihre
                Einwilligung jederzeit widerrufen oder anpassen.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Mehr Informationen in unserer{" "}
                <Link href="/datenschutz" className="underline hover:text-gray-700">
                  Datenschutzerklärung
                </Link>
                . Verantwortlicher: Pro Facility Management, Ostlandstra&#223;e 5, 63796 Kahl am Main.
              </p>
            </div>

            <div className="px-5 pb-5 flex flex-col sm:flex-row gap-2">
              <button
                onClick={acceptAll}
                className="flex-1 bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Alle ablehnen
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 border border-gray-300 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Einstellungen
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
