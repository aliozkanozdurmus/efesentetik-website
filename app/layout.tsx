import "./globals.css"
import { Montserrat } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import ScrollProgress from "@/components/scroll-progress"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Efe Sentetik - Gaziantep Çuval Üretimi",
  description:
    "Gaziantep merkezli, kaliteli çuval üretimi yapan Efe Sentetik. PP çuval, jüt çuval ve özel üretim çuvallar.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className="bg-background text-foreground antialiased">
        <MouseMoveEffect />
        <ScrollProgress />
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
