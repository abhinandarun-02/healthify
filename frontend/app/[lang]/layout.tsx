import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import NavBar from '@/components/Navbar/navbar'
import { TailwindIndicator } from '@/components/tailwind-indicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Healthify',
  description: 'AI Powered Health Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
