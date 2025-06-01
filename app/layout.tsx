import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kasun Kalhara - Official Website",
  description:
    "Official website of legendary Sri Lankan musician Kasun Kalhara. Explore his music, biography, upcoming events, and more.",
  keywords: "Kasun Kalhara, Sri Lankan music, Sinhala songs, musician, composer, singer",
  openGraph: {
    title: "Kasun Kalhara - Official Website",
    description: "Official website of legendary Sri Lankan musician Kasun Kalhara",
    type: "website",
    locale: "en_US",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">{children}</div>
      </body>
    </html>
  )
}
