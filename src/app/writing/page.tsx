import { ARTICLE_LIST_ITEMS } from '../../../data'
import { ArticleList } from '@/components/ArticleList'
import Breadcrumb from '@/components/Breadcrumb'
import { BREADCRUMBS } from '../../../data'

export default function Writing() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={BREADCRUMBS.writing} />
      <ArticleList articles={ARTICLE_LIST_ITEMS} />
    </div>
  )
}
