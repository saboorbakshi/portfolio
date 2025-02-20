import Link from '@/components/Link'
import { projects } from '@/data'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="sm:text-base">
        Software Engineer with a deep appreciation for good design. Currently studying Computer
        Science at the University of Waterloo.
      </div>

      <div className="flex gap-2">
        <Link label="X" url="https://twitter.com/saboorbakshi" />
        <div>•</div>
        <Link label="Github" url="https://github.com/saboorbakshi" />
        <div>•</div>
        <Link label="LinkedIn" url="https://linkedin.com/in/saboor-bakshi" />
        <div>•</div>
        <Link label="Resume" url="/saboor-bakshi-resume.pdf" />
        <div>•</div>
        <Link label="Email" url="mailto:saboor.bakshi@uwaterloo.ca" />
      </div>

      <div className='mb-1.5 sm:mb-2'></div>

      <div className="flex flex-col gap-5">
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
    </div>
  )
}
