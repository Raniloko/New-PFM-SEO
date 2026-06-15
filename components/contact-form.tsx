"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen ein (mind. 2 Zeichen)."
  }
  if (!data.email.trim() || !validateEmail(data.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein."
  }
  if (!data.subject.trim() || data.subject.trim().length < 3) {
    errors.subject = "Bitte geben Sie einen Betreff ein (mind. 3 Zeichen)."
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen)."
  }

  return errors
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [responseMessage, setResponseMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("loading")
    setErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus("success")
        setResponseMessage(data.message)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
        setResponseMessage(data.error || "Ein unbekannter Fehler ist aufgetreten.")
      }
    } catch (err) {
      console.error("Kontaktformular Fehler:", err)
      setStatus("error")
      setResponseMessage(
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Nachricht gesendet!</h3>
        <p className="text-green-700 mb-6">{responseMessage}</p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="border-green-600 text-green-700 hover:bg-green-50"
        >
          Weitere Nachricht senden
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Global error message */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{responseMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Max Mustermann"
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              errors.name
                ? "border-red-400 focus:ring-red-200"
                : "border-border hover:border-primary/50"
            }`}
          />
          {errors.name && (
            <p className="text-red-600 text-xs flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="max@beispiel.de"
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              errors.email
                ? "border-red-400 focus:ring-red-200"
                : "border-border hover:border-primary/50"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Betreff <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            errors.subject
              ? "border-red-400 focus:ring-red-200"
              : "border-border hover:border-primary/50"
          }`}
        >
          <option value="">Bitte wählen...</option>
          <option value="Angebot Gebäudereinigung">Angebot Gebäudereinigung</option>
          <option value="Angebot Hausmeisterservice">Angebot Hausmeisterservice</option>
          <option value="Angebot Glasreinigung">Angebot Glasreinigung</option>
          <option value="Angebot Winterdienst">Angebot Winterdienst</option>
          <option value="Angebot Gartenpflege">Angebot Gartenpflege</option>
          <option value="Angebot Entrümpelung">Angebot Entrümpelung</option>
          <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
        {errors.subject && (
          <p className="text-red-600 text-xs flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Beschreiben Sie Ihr Anliegen..."
          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none ${
            errors.message
              ? "border-red-400 focus:ring-red-200"
              : "border-border hover:border-primary/50"
          }`}
        />
        <div className="flex justify-between items-start">
          {errors.message ? (
            <p className="text-red-600 text-xs flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground ml-auto">
            {formData.message.length}/2000
          </span>
        </div>
      </div>

      {/* DSGVO Hinweis */}
      <p className="text-xs text-muted-foreground">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
        <a href="/datenschutz" className="underline hover:text-foreground transition-colors">
          Datenschutzerklärung
        </a>{" "}
        zu (Art. 6 Abs. 1 lit. b DSGVO).
      </p>

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto px-8 py-3 text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Nachricht senden
          </>
        )}
      </Button>
    </form>
  )
}
