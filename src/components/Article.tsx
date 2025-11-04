import { ReactNode } from 'react'
import PillLink from './PillLink'
import { Link } from '../../types'

interface ContentItem {
  title?: string
  text: readonly string[]
}

interface ArticleProps {
  title: string
  date: string
  content: readonly ContentItem[]
  links?: readonly Link[]
  hero?: ReactNode
}

export default function Article({ title, date, content, links = [], hero }: ArticleProps) {
  return (
    <article>
      {/* Hero (image, video, carousel, etc.) */}
      {hero && hero}

      {/* Title + date */}
      <div className="flex gap-2 mt-8">
        <p>{title}</p>
        <p className="text-fg-2">{date}</p>
      </div>

      {/* Main content*/}
      <div className="flex flex-col">
        {content.map((item, idx) => (
          <div key={idx}>
            {item.title && <p className="mt-6">{item.title}</p>}
            {item.text.map((paragraph, pIdx) => (
              <p key={pIdx} className="opacity-70 mt-3">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Link pills (optional) */}
      {links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {links.map(({ label, href }) => (
            <PillLink key={href} label={label} href={href} newTab />
          ))}
        </div>
      )}
    </article>
  )
}
