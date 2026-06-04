import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Bitte geben Sie Ihren vollständigen Namen ein (mind. 2 Zeichen)." },
        { status: 400 }
      )
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      )
    }

    if (!subject || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Bitte geben Sie einen Betreff ein (mind. 3 Zeichen)." },
        { status: 400 }
      )
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen)." },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 200),
      subject: subject.trim().slice(0, 200),
      message: message.trim().slice(0, 2000),
    }

    // Here you would integrate with an email provider (e.g. Resend, Nodemailer, etc.)
    // For now we log the data server-side and return success.
    console.log("[v0] Kontaktformular empfangen:", {
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      messageLength: sanitizedData.message.length,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Fehler beim Verarbeiten der Kontaktanfrage:", error)
    return NextResponse.json(
      {
        error:
          "Es ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon.",
      },
      { status: 500 }
    )
  }
}
