import { projects } from '@/data'

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {projects.map((item, index) => (
        <a
          key={index}
          className="flex flex-col gap-2 group"
          target="_blank"
          rel="noopener noreferrer"
          href={item.url}
        >
          <div>
            <span className="sm:text-base group-hover:underline">{item.name}</span>
            <span className="sm:text-base text-fgSecondary"> — {item.year}</span>
            <div className="sm:text-base text-fgSecondary">{item.desc}</div>
            {/* <div className="sm:text-base text-fgSecondary">{item.tools}</div> */}
          </div>
        </a>
      ))}
    </div>
  )
}