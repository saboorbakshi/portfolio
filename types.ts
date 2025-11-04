export interface Link {
  label: string
  href: string
}

export type Work = {
  title: string
  subtitle: string
  category: string
  date: string
  links: Link[]
  content: { title?: string; text: string[] }[]
  imageUrl?: string
  videoUrl?: string
}
