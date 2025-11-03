interface WorkListItem {
  title: string
  subtitle: string
  href: string
  category: string
  date: string
}

interface WorkListProps {
  items: WorkListItem[]
}

export const WorkList = ({ items }: WorkListProps) => (
  <div className="flex flex-col">
    {[...items].reverse().map((item, index) => (
      <a key={index} href={'/work/' + item.href}>
        <div className="flex justify-between items-center hover:scale-99 transition-all py-2">
          <div className="flex gap-3">
            <div>{item.title}</div>
            <div className="text-fg-2 hidden sm:block">{item.subtitle}</div>
          </div>
          <div className="flex gap-3">
            <div className="text-fg-2">{item.category}</div>
            <div className="text-fg-2 w-16 text-right">{item.date}</div>
          </div>
        </div>
        {index < items.length - 1 && <div className="h-px bg-[#f7f7f7]" />}
      </a>
    ))}
  </div>
)
