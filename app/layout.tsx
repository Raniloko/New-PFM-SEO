import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

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
    canonical: "https://www.profacilitymanagement.de",
  },
  openGraph: {
    title: "Pro Facility Management - Gebäudedienstleistungen",
    description: "Professionelle Gebäudedienstleistungen und Facility Management Lösungen.",
    url: "https://www.profacilitymanagement.de",
    siteName: "Pro Facility Management",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.profacilitymanagement.de/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Pro Facility Management Logo",
      },
    ],
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
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
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
        <link rel="canonical" href="https://www.profacilitymanagement.de" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script
          type="text/javascript"
          data-cmp-ab="1"
          src="https://cdn.consentmanager.net/delivery/autoblocking/3f2d99a982d8f.js"
          data-cmp-host="c.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="0"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6P9312CKQR"
          strategy="afterInteractive"
          type="text/gtag"
          data-category="marketing"
        />
        <Script id="google-analytics" strategy="afterInteractive" type="text/gtag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6P9312CKQR');
          `}
        </Script>
      </head>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
