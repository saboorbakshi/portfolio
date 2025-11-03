import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

export const suisse = localFont({
  src: './SuisseIntl-Regular.ttf'
})

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saboor Bakshi',
  description: '.....'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={suisse.className}>
      <body className="flex flex-col items-center py-16 sm:py-20 px-8">
        <div className="max-w-page w-full">{children}</div>
      </body>
    </html>
  )
}
