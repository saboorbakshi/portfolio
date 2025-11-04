import { notFound } from 'next/navigation'
import { WRITING_DICTIONARY, BREADCRUMBS } from '../../../../data'
import Breadcrumb from '@/components/Breadcrumb'

export default async function WritingPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const writing = WRITING_DICTIONARY[slug as keyof typeof WRITING_DICTIONARY]

  if (!writing) return notFound()

  const breadcrumbItems = [...BREADCRUMBS.writing, { label: writing.title, href: slug }]

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbItems} />

      <article>
        <h1 className="text-2xl font-semibold">{writing.title}</h1>
        <p className="text-fg-2">{writing.date}</p>
      </article>
    </div>
  )
}
