interface Writing {
  date: string
  title: string
  href: string
}

interface WritingListProps {
  writings: Writing[]
}

export const WritingList = ({ writings }: WritingListProps) => (
  <div className="flex flex-col">
    {writings.map((writing, index) => (
      <a key={index} href={'/writing/' + writing.href}>
        <div className="flex items-center gap-6 hover:scale-[0.99] transition-all py-2">
          <div className="text-fg-2 w-16 text-right">{writing.date}</div>
          <div>{writing.title}</div>
        </div>
        {index < writings.length - 1 && <div className="h-px bg-border" />}
      </a>
    ))}
  </div>
)
