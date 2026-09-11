import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Vikas William | Senior Frontend Engineer',
  description:
    'Vikas William — Senior Frontend Engineer in Kolkata. React, TypeScript, enterprise interfaces, and AI-assisted development. Explore projects, experience, and expertise.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Vikas William | Senior Frontend Engineer',
    description: 'Thoughtful code. Meaningful experiences.',
    type: 'website',
  },
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
