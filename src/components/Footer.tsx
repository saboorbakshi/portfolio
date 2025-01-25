'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname.includes('cats')

  return (
    <footer className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-screen-custom flex justify-between items-center py-3">
        <a href={isHome ? '/' : '/cats'} className="text-fgSecondary hover:underline">
          {isHome ? 'Home' : 'Cats'}
        </a>
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center p-1">
            <div className="absolute size-2 animate-ping rounded-full bg-green-500 opacity-75"></div>
            <div className="size-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-fgSecondary">Updated 25/1/2025</div>
        </div>
      </div>
    </footer>
  )
}
