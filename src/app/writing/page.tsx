import Breadcrumb from '@/components/Breadcrumb'
import { WritingList } from '@/components/WritingList'
import { BREADCRUMBS, WRITING_SORTED_LIST } from '../../../data'

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={BREADCRUMBS.writing} />
      <WritingList writings={WRITING_SORTED_LIST} />
    </div>
  )
}
