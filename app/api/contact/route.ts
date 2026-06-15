import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

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

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY ist nicht gesetzt")
      return NextResponse.json(
        {
          error:
            "E-Mail-Service ist nicht konfiguriert. Bitte kontaktieren Sie uns direkt per Telefon.",
        },
        { status: 500 }
      )
    }

    // Initialize Resend at request time so the env var is always available
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Use verified domain for sending
    const fromEmail = "noreply@profacilitymanagement.de"

    // Send to intended recipients via verified domain
    const businessEmailResult = await resend.emails.send({
      from: fromEmail,
      to: ["info@profacilitymanagement.de", "cem-bolgi@web.de"],
      replyTo: sanitizedData.email,
      subject: `Neue Kontaktanfrage: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedData.name}</p>
            <p style="margin: 10px 0;"><strong>E-Mail:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
            <p style="margin: 10px 0;"><strong>Betreff:</strong> ${sanitizedData.subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Nachricht:</h3>
            <p style="white-space: pre-wrap; color: #666; line-height: 1.6;">
              ${sanitizedData.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </p>
          </div>
          
          <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 30px; font-size: 12px; color: #999;">
            <p>Diese E-Mail wurde automatisch vom Kontaktformular auf profacilitymanagement.de versendet.</p>
            <p>Absender-IP: ${request.headers.get("x-forwarded-for") || "N/A"}</p>
            <p>Zeitstempel: ${new Date().toLocaleString("de-DE")}</p>
          </div>
        </div>
      `,
    })

    if (businessEmailResult.error) {
      console.error("[v0] Fehler beim Versand der Business-E-Mail:", businessEmailResult.error)
      return NextResponse.json(
        {
          error:
            "Die E-Mail konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns per Telefon.",
        },
        { status: 500 }
      )
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: fromEmail,
      to: [sanitizedData.email],
      subject: "Pro Facility Management - Wir haben Ihre Nachricht erhalten",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Vielen Dank für Ihre Kontaktaufnahme</h2>
          
          <p style="color: #666; line-height: 1.6;">
            Lieber ${sanitizedData.name},
          </p>
          
          <p style="color: #666; line-height: 1.6;">
            wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
          </p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #666;"><strong>Ihr Anliegen:</strong> ${sanitizedData.subject}</p>
            <p style="margin: 5px 0; color: #666;"><strong>Nachricht eingegangen:</strong> ${new Date().toLocaleString("de-DE")}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            Falls Sie dringende Fragen haben, erreichen Sie uns jederzeit unter:<br/>
            <strong>Telefon:</strong> <a href="tel:+4915214861221" style="color: #0066cc; text-decoration: none;">+49 1521 4861221</a><br/>
            <strong>E-Mail:</strong> <a href="mailto:info@profacilitymanagement.de" style="color: #0066cc; text-decoration: none;">info@profacilitymanagement.de</a>
          </p>
          
          <p style="color: #666; line-height: 1.6; margin-top: 30px;">
            Freundliche Grüße<br/>
            <strong>Pro Facility Management</strong>
          </p>
          
          <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 30px; font-size: 11px; color: #999;">
            <p>Pro Facility Management UG (haftungsbeschränkt)<br/>
            Ostlandstraße 5, 63796 Kahl am Main<br/>
            <a href="https://www.profacilitymanagement.de" style="color: #0066cc;">www.profacilitymanagement.de</a>
            </p>
          </div>
        </div>
      `,
    }).catch((err) => {
      console.error("[v0] Fehler beim Versand der Bestätigungs-E-Mail:", err)
    })

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank für Ihre Nachricht! Wir haben eine Bestätigungsemail an Ihre Adresse gesendet und werden uns innerhalb von 24 Stunden bei Ihnen melden.",
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
