import { notFound } from 'next/navigation'
import { ARTICLE_DICTIONARY, BREADCRUMBS } from '../../../../data'
import Breadcrumb from '@/components/Breadcrumb'

export default async function WorkPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const article = ARTICLE_DICTIONARY[slug as keyof typeof ARTICLE_DICTIONARY]

  if (!article) return notFound()

  const breadcrumbItems = [...BREADCRUMBS.work, { label: article.title, href: slug }]

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbItems} />

      <article>
        <h1 className="text-2xl font-semibold">{article.title}</h1>
        <p className="text-fg-2">{article.date}</p>
      </article>
    </div>
  )
}
