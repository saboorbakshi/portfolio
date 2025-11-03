import Breadcrumb from '@/components/Breadcrumb'
import { WORK_LIST_ITEMS } from '../../../data'
import { WorkList } from '@/components/WorkList'
import { BREADCRUMBS } from '../../../data'

export default function Work() {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={BREADCRUMBS.work} />
      <WorkList items={WORK_LIST_ITEMS} />
    </div>
  )
}
