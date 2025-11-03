import { notFound } from 'next/navigation'
import { WORK_DICTIONARY, BREADCRUMBS } from '../../../../data'
import Breadcrumb from '@/components/Breadcrumb'

export default async function WorkPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const work = WORK_DICTIONARY[slug as keyof typeof WORK_DICTIONARY]

  if (!work) return notFound()

  const breadcrumbItems = [...BREADCRUMBS.work, { label: work.title, href: slug }]

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbItems} />

      <article>
        <h1 className="text-2xl font-semibold">{work.title}</h1>
        <p className="text-fg-2">{work.date}</p>
      </article>
    </div>
  )
}
