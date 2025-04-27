import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "İZDÜŞÜ - Mühendislik, Mimarlık, Madencilik, Reklam, Turizm",
  description: "Zemin Etüdü | Maden Arama | Post Prodüksiyon | Servis Taşımacılığı | Gayrimenkul Danışmanlığı",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
