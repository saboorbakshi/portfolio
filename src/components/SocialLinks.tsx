import { Link } from '../../types'

interface SocialLinksProps {
  links: Link[]
}

export const SocialLinks = ({ links }: SocialLinksProps) => (
  <div className="flex gap-4">
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg-2 hover:text-fg"
      >
        {link.label}
      </a>
    ))}
  </div>
)
