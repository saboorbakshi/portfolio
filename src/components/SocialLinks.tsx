interface Link {
  name: string
  href: string
}

interface SocialLinksProps {
  links: Link[]
}

export const SocialLinks = ({ links }: SocialLinksProps) => (
  <div className="flex gap-4">
    {links.map((link) => (
      <a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg-2 hover:text-fg"
      >
        {link.name}
      </a>
    ))}
  </div>
)
