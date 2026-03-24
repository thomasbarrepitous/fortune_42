import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fortune Cookie',
  description: 'Click the cookie to reveal your fortune',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
