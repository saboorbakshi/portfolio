export const ABOUT = [
  'Recent Computer Science graduate from the University of Waterloo, actively seeking full-time roles.',
  'Love working on core product experiences that make your heart flutter, going from 0 → 1, and sweating the details.',
  'Co-founded a web and mobile app studio — biggest win scaled to 40K installs and $6K MRR in under six months, and exited for $90K CAD.',
  'Feel free to reach out. Always looking to connect.'
]

export const LINKS = [
  { name: 'Email', href: 'mailto:saboor.bakshi@uwaterloo.ca' },
  { name: 'GitHub', href: 'https://github.com/saboorbakshi' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saboor-bakshi/' },
  { name: 'X', href: 'https://x.com/saboorbakshi' }
]

export const WORK_DICTIONARY = {
  'top-bot': {
    title: 'TopBot',
    subtitle: 'App Store crypto app rankings',
    category: 'Project',
    date: '05-2024'
  },
  'cold-email-hackers': {
    title: 'ColdEmailHackers',
    subtitle: 'Client',
    category: 'Product',
    date: '06-2024'
  },
  ustc: {
    title: 'USTC',
    subtitle: 'Client',
    category: 'Product',
    date: '08-2024'
  },
  'hairloss-ai': {
    title: 'Hairloss AI',
    subtitle: 'Male pattern baldness detection',
    category: 'Product',
    date: '09-2024'
  },
  'pod-search': {
    title: 'PodSearch',
    subtitle: 'Local semantic search for podcasts',
    category: 'Project',
    date: '11-2024'
  },
  'cs-492': {
    title: 'CS 492',
    subtitle: 'Outcomes of bias in clinical research',
    category: 'Research',
    date: '03-2025'
  },
  'marketing-engine': {
    title: 'MarketingEngine',
    subtitle: 'Automated reel generation',
    category: 'Product',
    date: '08-2025'
  },
  hubb: {
    title: 'Hubb',
    subtitle: 'Rizz for Saudis',
    category: 'Product',
    date: '09-2025'
  },
  'ninja-scraper': {
    title: 'NinjaScraper',
    subtitle: 'Web scraping and crawling',
    category: 'Project',
    date: '09-2025'
  },
  'calorie-tracker': {
    title: 'Calorie tracker',
    subtitle: 'Onboarding flow in Swift',
    category: 'Project',
    date: '10-2025'
  }
} as const

export const WORK_SORTED_LIST = Object.entries(WORK_DICTIONARY)
  .map(([href, data]) => ({ href, ...data }))
  .sort((a, b) => {
    const [monthA, yearA] = a.date.split('-').map(Number)
    const [monthB, yearB] = b.date.split('-').map(Number)

    if (yearA !== yearB) return yearB - yearA
    return monthB - monthA
  })

export const ARTICLE_DICTIONARY = {
  'clowder-of-cats': {
    title: 'Clowder of cats',
    date: '03-2025'
  },
  'thoughts-post-graduation': {
    title: 'Thoughts post graduation',
    date: 'WIP'
  }
} as const

export const ARTICLE_SORTED_LIST = Object.entries(ARTICLE_DICTIONARY)
  .map(([href, data]) => ({ href, ...data }))
  .sort((a, b) => {
    if (a.date === 'WIP') return 1
    if (b.date === 'WIP') return -1

    const [monthA, yearA] = a.date.split('-').map(Number)
    const [monthB, yearB] = b.date.split('-').map(Number)

    if (yearA !== yearB) return yearB - yearA
    return monthB - monthA
  })

export const BREADCRUMBS = {
  work: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' }
  ],
  writing: [
    { label: 'Home', href: '/' },
    { label: 'Writing', href: '/writing' }
  ]
}
