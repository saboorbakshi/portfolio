import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const suisse = localFont({
  src: './SuisseIntl-Regular.otf',
  variable: '--font-suisse'
})

export const suisseMono = localFont({
  src: './SuisseIntlMono-Regular.woff2',
  variable: '--font-suisse-mono'
})

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
    <html lang="en" className={`${suisse.variable} ${suisseMono.variable}`}>
      <body className="flex flex-col items-center py-16 sm:py-20 px-8">
        <div className="max-w-page w-full">{children}</div>
      </body>
    </html>
  )
}
