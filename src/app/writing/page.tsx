import Breadcrumb from '@/components/Breadcrumb'
import { ARTICLE_SORTED_LIST } from '../../../data'
import { ArticleList } from '@/components/ArticleList'
import { BREADCRUMBS } from '../../../data'

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={BREADCRUMBS.writing} />
      <ArticleList articles={ARTICLE_SORTED_LIST} />
    </div>
  )
}
