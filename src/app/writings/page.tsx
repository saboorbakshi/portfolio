import { ARTICLE_LIST_ITEMS } from '../../../data'
import { ArticleList } from '@/components/ArticleList'

export default function Writings() {
  return (
    <div className="flex flex-col gap-4">
      <div>Writings</div>
      <ArticleList articles={ARTICLE_LIST_ITEMS} />
    </div>
  )
}
