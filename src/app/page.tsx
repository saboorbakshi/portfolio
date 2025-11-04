import { SocialLinks } from '@/components/SocialLinks'
import { ABOUT, LINKS, WORK_SORTED_LIST, WRITING_SORTED_LIST } from '../../data'
import { About } from '@/components/About'
import { WorkList } from '@/components/WorkList'
import { WritingList } from '@/components/WritingList'

export default function RootPage() {
  return (
    <div className="w-full flex flex-col gap-16 sm:gap-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div>Saboor Bakshi</div>
          <div className="text-fg-2">Updated Nov 04, 2025</div>
        </div>
        <About paragraphs={ABOUT} />
        <SocialLinks links={LINKS} />
      </div>

      <div className="flex flex-col gap-4">
        <a href="/work">Work</a>
        <WorkList items={WORK_SORTED_LIST} />
      </div>

      <div className="flex flex-col gap-4">
        <a href="/writing">Writing</a>
        <WritingList writings={WRITING_SORTED_LIST} />
      </div>
    </div>
  )
}
