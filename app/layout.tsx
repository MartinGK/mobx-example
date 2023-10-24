import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mobx example',
  description: 'mobx example by MartinGK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-yellow-200">{children}</body>
    </html>
  )
}
