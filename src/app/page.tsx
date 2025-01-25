import Link from '@/components/Link'
import { experience, projects } from '@/data'

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-14">
      <div>
        <div className="text-[23px] sm:text-[26px] mb-1">Saboor Bakshi</div>
        <div className="sm:hidden">
          Software Engineer with a deep appreciation for great design. Studying Computer Science at
          the University of Waterloo.
        </div>
        <div className="hidden sm:block sm:text-base">
          <div>Software Engineer with a deep appreciation for great design.</div>
          <div>Studying Computer Science at the University of Waterloo.</div>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-5">
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
      </div>

      <div>
        <div className="text-xl sm:text-2xl mb-2 sm:mb-4">Experience</div>
        <div className="flex flex-col gap-2 sm:gap-3">
          {experience.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={item.src} className="size-12 sm:size-14"></img>
                <div>
                  <div className="sm:hidden sm:text-base font-medium">{item.role}</div>
                  <div className="hidden sm:block sm:text-base font-medium">{item.roleFull}</div>
                  <div className="sm:text-base">{item.company}</div>
                </div>
              </div>
              <div className="sm:text-base text-fgSecondary">{item.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xl sm:text-2xl mb-2 sm:mb-4">Projects</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 gap-y-6 sm:gap-y-8">
          {projects.map((item, index) => (
            <a
              key={index}
              className="flex flex-col gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
            >
              <img src={item.src} className="w-full"></img>
              <div>
                <span className="sm:text-base text-lg group-hover:underline">{item.name}</span>
                <span className="sm:text-base text-lg text-fgSecondary"> — {item.year}</span>
                <div className="sm:text-base text-fgSecondary">{item.desc}</div>
                <div className="sm:text-base text-fgSecondary">{item.tools}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
