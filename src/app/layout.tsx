import "./globals.css"
import {
  DM_Sans,
  Manrope,
} from "next/font/google"
import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "next-themes"
import { ThemeToggle } from '@/components/theme-toggle'
import  EyeCursor  from '@/components/eye-cursor'

// Fonts
const manrope = Manrope({ subsets: ["latin"] })

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmSans",
  display: "swap",
})

export const metadata = {
  title: "Ana Paula Moraes",
  description: "Experience designer",
}

/*export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${manrope.className} ${dmSans.className} ${libreBaskerville.variable} ${dmSerifText.variable} ${frankRuhlLibre.variable} ${caladea.variable}`}>
      <body className='bg-slate-50 text-neutral-500'>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}*/

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="bg-background text-foreground font-dmSans">
        {/* Wrap children in ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <EyeCursor />
          <main className="min-h-screen">{children}</main>

          {/* Global Theme Toggle */}
          
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
