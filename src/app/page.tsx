import { SocialLinks } from '@/components/SocialLinks'
import { ABOUT, LINKS, WORK_LIST_ITEMS, ARTICLE_LIST_ITEMS } from '../../data'
import { About } from '@/components/About'
import { WorkList } from '@/components/WorkList'
import { ArticleList } from '@/components/ArticleList'

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div>Saboor Bakshi</div>
          <div className="text-fg-2">Updated Nov 03, 2025</div>
        </div>
        <About paragraphs={ABOUT} />
        <SocialLinks links={LINKS} />
      </div>

      <div className="flex flex-col gap-4">
        <div>Work</div>
        <WorkList items={WORK_LIST_ITEMS} />
      </div>

      <div className="flex flex-col gap-4">
        <div>Writing</div>
        <ArticleList articles={ARTICLE_LIST_ITEMS} />
      </div>
    </div>
  )
}
