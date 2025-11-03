import Breadcrumb from '@/components/Breadcrumb'
import { WORK_SORTED_LIST } from '../../../data'
import { WorkList } from '@/components/WorkList'
import { BREADCRUMBS } from '../../../data'

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={BREADCRUMBS.work} />
      <WorkList items={WORK_SORTED_LIST} />
    </div>
  )
}
