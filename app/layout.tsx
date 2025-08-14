import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const degular = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-degular",
})

export const metadata: Metadata = {
  title: "Ana Paula Moraes - Designer",
  description:
    "Designer creating future-oriented experiences that drive business impact and transform how people interact with the world.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${degular.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
