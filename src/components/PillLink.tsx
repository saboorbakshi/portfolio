interface PillLinkProps {
  label: string
  href: string
  newTab?: boolean
}

export default function PillLink({ label, href, newTab = true }: PillLinkProps) {
  return (
    <a
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      className="text-[13px] px-2.5 py-1.25 bg-bg-2 rounded-full font-mono hover:bg-bg-3 transition-colors"
    >
      {label}
    </a>
  )
}
