import Link from '@/components/Link'
import { experience, projects } from '@/data'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <div>
        <div className="text-[26px]">Saboor Bakshi</div>
        <div>Software Engineer with a deep appreciation for great design.</div>
        <div>Studying Computer Science at the University of Waterloo.</div>
        <div className="flex gap-2 mt-4">
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
        <div className="text-2xl mb-4">Experience</div>
        <div className="flex flex-col gap-3">
          {experience.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={item.src} className="size-14"></img>
                <div>
                  <div className="font-medium">{item.role}</div>
                  <div>{item.company}</div>
                </div>
              </div>
              <div className="text-fgSecondary">{item.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-2xl mb-4">Projects</div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8">
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
                <span className="text-lg group-hover:underline">{item.name}</span>
                <span className="text-lg text-fgSecondary"> — {item.year}</span>
                <div className="text-fgSecondary">{item.desc}</div>
                <div className="text-fgSecondary">{item.tools}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
