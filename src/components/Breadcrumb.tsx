import Link from 'next/link'
import { Fragment } from 'react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const lastIndex = items.length - 1

  return (
    <nav className="flex items-center gap-3">
      {items.map((item, idx) => (
        <Fragment key={item.href}>
          <Link
            href={item.href}
            className={
              idx === lastIndex
                ? 'text-fg'
                : 'text-fg-2 hover:text-fg transition-colors'
            }
          >
            {item.label}
          </Link>
          {idx < lastIndex && <span className="text-fg-2">/</span>}
        </Fragment>
      ))}
    </nav>
  )
}
