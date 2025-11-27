import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Md. Enamul Hoque Marzun | Software Engineer & Researcher",
  description:
    "Portfolio of Md. Enamul Hoque Marzun - Software Engineer at Nesia Inc., specializing in AI, Computer Vision, and Robotics",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/profile.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/profile.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
