import { notFound } from 'next/navigation'
import { WORK_DICTIONARY, BREADCRUMBS, PAGE_WIDTH, ASPECT_RATIO } from '../../../../data'
import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import Article from '@/components/Article'

export default async function WorkPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const work = WORK_DICTIONARY[slug as keyof typeof WORK_DICTIONARY]

  if (!work) return notFound()

  const breadcrumbItems = [...BREADCRUMBS.work, { label: work.title, href: slug }]

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb items={breadcrumbItems} />

      <Article
        title={work.title}
        date={work.date}
        hero={
          work.imageUrl ? (
            <Image
              src={'/hero/' + work.imageUrl}
              alt={work.title}
              width={PAGE_WIDTH}
              height={PAGE_WIDTH * ASPECT_RATIO}
              className="border border-border"
            />
          ) : (
            <video
              loop
              muted
              autoPlay
              playsInline
              style={slug === 'topbot' ? {} : { aspectRatio: 1 }}
              className="w-full object-cover border border-border"
            >
              <source src={`/hero/${work.videoUrl}`} type="video/mp4" />
            </video>
          )
        }
        content={work.content}
        links={work.links}
      />
    </div>
  )
}
