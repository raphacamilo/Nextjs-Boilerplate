import "./globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"

const TTNorms = localFont({
  display: "swap",
  variable: "--font-ttnorms",
  src: [
    {
      path: "./tt-norms-pro-regular.woff2",
      weight: "100 400"
    },
    {
      path: "./tt-norms-pro-medium.woff2",
      weight: "500"
    },
    {
      path: "./tt-norms-pro-bold.woff2",
      weight: "600 900"
    }
  ]
})

export const metadata: Metadata = {
  title: "Manga App",
  description: "The best app for mangas"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={TTNorms.className}>{children}</body>
    </html>
  )
}
