import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pro Facility Management - Gebäudedienstleistungen & Facility Management",
  description:
    "Pro Facility Management bietet professionelle Gebäudedienstleistungen: Gebäudereinigung, Hausmeisterdienste, Winterdienst, Glasreinigung und Grünflächenpflege. Zuverlässig und fair kalkuliert.",
  keywords:
    "Gebäudedienstleistungen, Facility Management, Gebäudereinigung, Hausmeisterdienst, Winterdienst, Glasreinigung, Gartenpflege, Kahl am Main",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.profacilitymanagement.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pro Facility Management - Gebäudedienstleistungen",
    description:
      "Pro Facility Management bietet professionelle Gebäudedienstleistungen: Gebäudereinigung, Hausmeisterdienste, Winterdienst, Glasreinigung und Grünflächenpflege. Zuverlässig und fair kalkuliert.",
    url: "https://www.profacilitymanagement.de",
    siteName: "Pro Facility Management",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.profacilitymanagement.de/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pro Facility Management - Professionelle Gebäudedienstleistungen in Kahl am Main",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Facility Management - Gebäudedienstleistungen",
    description:
      "Pro Facility Management bietet professionelle Gebäudedienstleistungen: Gebäudereinigung, Hausmeisterdienste, Winterdienst, Glasreinigung und Grünflächenpflege.",
    images: ["https://www.profacilitymanagement.de/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pro Facility Management",
  image: "https://www.profacilitymanagement.de/android-chrome-512x512.png",
  logo: "https://www.profacilitymanagement.de/android-chrome-512x512.png",
  "@id": "https://www.profacilitymanagement.de",
  url: "https://www.profacilitymanagement.de",
  telephone: "+49 1521 4861221",
  email: "info@profacilitymanagement.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ostlandstraße 5",
    addressLocality: "Kahl am Main",
    postalCode: "63796",
    addressCountry: "DE",
  },
  description:
    "Pro Facility Management bietet professionelle Gebäudedienstleistungen: Gebäudereinigung, Hausmeisterdienste, Winterdienst, Glasreinigung und Grünflächenpflege.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.google.com/maps/search/Pro+Facility+Management+Kahl+am+Main",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Cem Bolgi",
      jobTitle: "Geschäftsführer",
    },
    {
      "@type": "Person",
      name: "Ilyas Omar Daib",
      jobTitle: "Gesellschafter",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <CookieBanner />
        {children}
      </body>
    </html>
  )
}
