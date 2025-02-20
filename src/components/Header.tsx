'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isActive = pathname === '/'

  return (
    <header className="flex justify-between items-center mb-7 sm:mb-8">
      <Link
        href="/"
        className={`sm:text-base ${isActive ? 'text-fg' : 'text-fgSecondary'} hover:text-fg`}
      >
        Saboor Bakshi
      </Link>
    </header>
  )
}
