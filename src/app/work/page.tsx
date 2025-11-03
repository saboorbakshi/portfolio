import { WORK_LIST_ITEMS } from '../../../data'
import { WorkList } from '@/components/WorkList'

export default function Work() {
  return (
    <div className="flex flex-col gap-4">
      <div>Work</div>
      <WorkList items={WORK_LIST_ITEMS} />
    </div>
  )
}
