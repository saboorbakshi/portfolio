import { Work } from './types'

export const ASPECT_RATIO = 9 / 16

export const PAGE_WIDTH = 560

export const ABOUT = [
  'Recent Computer Science graduate from the University of Waterloo, actively seeking full-time roles.',
  'Love working on core product experiences, going from 0 → 1, and sweating the details.',
  'Co-founded a web and mobile app studio — biggest win scaled to 40K installs and $6K MRR in under six months, and exited for $90K CAD.',
  'Feel free to reach out. Always looking to connect.'
]

export const LINKS = [
  { label: 'Email', href: 'mailto:saboor.bakshi@uwaterloo.ca' },
  { label: 'GitHub', href: 'https://github.com/saboorbakshi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saboor-bakshi/' },
  { label: 'X', href: 'https://x.com/saboorbakshi' }
]

export const WORK_DICTIONARY: Record<string, Work> = {
  topbot: {
    title: 'TopBot',
    subtitle: 'App Store crypto app rankings',
    videoUrl: 'topbot.mp4',
    category: 'Project',
    date: '05-2024',
    links: [
      { label: 'Visit site', href: 'https://topbot-beta.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/saboorbakshi/topbot' }
    ],
    content: [
      {
        text: [
          'Real-time App Store ranking tracker for top crypto apps.',
          'My first ever web project. Built using React and Supabase. Learnt HTML/CSS/JS for the first time. Reverse-engineered publicly accessible endpoints to retrieve rankings. Used Cron to run python scripts for data collection for free.'
        ]
      }
    ]
  },
  'cold-email-hackers': {
    title: 'ColdEmailHackers',
    subtitle: 'Client',
    imageUrl: 'cold-email-hackers.webp',
    category: 'Product',
    date: '06-2024',
    links: [{ label: 'Visit site', href: 'https://www.coldemailhackers.com/' }],
    content: [
      {
        text: [
          'First client project. Got the lead through cold emailing people on LinkedIn. Designed and developed their entire site. Used React and MagicUI.'
        ]
      }
    ]
  },
  ustc: {
    title: 'USTC',
    subtitle: 'Client',
    imageUrl: 'ustc.webp',
    category: 'Product',
    date: '08-2024',
    links: [{ label: 'Visit site', href: 'https://ustc.sa/' }],
    content: [
      {
        text: [
          'Second client project. Used Next.js and Tailwind CSS this time around and never looked back. Used i18next for Arabic localization.',
          'Really learned my way around text hierarchy, color, and typography between mobile and desktop layouts.'
        ]
      }
    ]
  },
  'hairloss-ai': {
    title: 'Hairloss AI',
    subtitle: 'Male pattern baldness detection',
    imageUrl: 'hairloss-ai.webp',
    category: 'Product',
    date: '09-2024',
    links: [
      {
        label: 'Jupyter Notebook',
        href: 'https://github.com/saboorbakshi/norwood-scale/blob/main/norwood_check.ipynb'
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/hair-loss-ai-therapy-scanner/id6563141135'
      },
      { label: 'Exit', href: 'https://x.com/amaan_shabeer/status/1932113158329839910' }
    ],
    content: [
      {
        text: [
          'Designed and developed an app to help men diagnose Androgenic Alopecia, i.e. male pattern baldness.'
        ]
      },
      {
        title: 'Development',
        text: [
          'Used React Native and Expo to build the app. Supabase to power the referral system and RevenueCat for subscription handling.',
          'Used ML Kit’s face detection for automatic image capture, this helped enforce normalized inputs for better scan accuracy as well as a better UX.',
          'Built a diagnostic pipeline in Python with OpenCV using facial landmark, selfie, and hair segmentation models so users could track their progress visually.'
        ]
      }
    ]
  },
  'pod-search': {
    title: 'PodSearch',
    subtitle: 'Local semantic search for podcasts',
    imageUrl: 'pod-search.webp',
    category: 'Project',
    date: '11-2024',
    links: [{ label: 'GitHub', href: 'https://github.com/saboorbakshi/pod-search' }],
    content: [
      {
        text: [
          'Local semantic search for podcasts.',
          'Built this as part of my first hackathon at co-op. Learned about embeddings, vector spaces, and cosine similarity.',
          'Used open-source embedding models from Hugging Face and the Sentence Transformers library to generate transcript embeddings and process query requests, then compute similarity scores between them and pinpoint the timestamps of the most similar segments.'
        ]
      }
    ]
  },
  'cs-492': {
    title: 'CS 492',
    subtitle: 'Outcomes of bias in clinical research',
    imageUrl: 'cs-492.webp',
    category: 'Research',
    date: '03-2025',
    links: [
      { label: 'Visit site', href: 'https://cs492-racial-bias.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/saboorbakshi/cs492-racial-bias' }
    ],
    content: [
      {
        text: [
          'Explored how biased clinical research data affects healthcare practices for our CS 492 project. ',
          "Designed and built the site, used Assembly AI's speech-to-text model with speaker diarization to generate transcripts for the interviews."
        ]
      }
    ]
  },
  'marketing-tool': {
    title: 'Marketing Tool',
    subtitle: 'Automated reel generation',
    imageUrl: 'marketing-tool.webp',
    category: 'Product',
    date: '08-2025',
    links: [
      { label: 'Visit site', href: 'https://marketing-client-three.vercel.app/fake-texts' },
      { label: 'GitHub', href: 'https://github.com/saboorbakshi/marketing-client' }
    ],
    content: [
      {
        text: [
          'Automated the creation of fake text conversions for marketing reels with product placement.'
        ]
      },
      {
        title: 'Development',
        text: [
          'Used remotion.dev to generate videos programmatically, OpenAI’s models for script generation and text-to-speech models for Arabic audio synthesis.',
          'Used AWS Lambda to render videos in the cloud at scale.'
        ]
      },
      {
        title: 'Result',
        text: [
          'Instead of paying $1-3 for each video with a 30 minute turnaround time, we could generate 10+ videos for the same cost in under 5 minutes — 10x cheaper and 60x faster.'
        ]
      }
    ]
  },
  'ninja-scraper': {
    title: 'NinjaScraper',
    subtitle: 'Web scraping and crawling',
    imageUrl: 'ninja.webp',
    category: 'Project',
    date: '09-2025',
    links: [{ label: 'GitHub', href: 'https://github.com/saboorbakshi/haleeb-script' }],
    content: [
      {
        text: [
          'Started off trying to create the Yuka for Saudi Arabia. Scraped the entire Ninja website, a popular e-commerce platform in Saudi Arabia, to collect all product data.',
          'Used Python and Selenium. Later realized I could use the sitemap to recursively crawl through the site.',
          "Next steps were to use LLMs to extract barcodes and nutrition info, but realized the market wasn't as strong as anticipated."
        ]
      }
    ]
  },
  hubb: {
    title: 'Hubb',
    subtitle: 'Rizz for arabs',
    videoUrl: 'hubb.mp4',
    category: 'Experiment',
    date: '09-2025',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/hubb-%D8%AD%D8%A8/id6752775983'
      }
    ],
    content: [
      {
        text: [
          'Created a relationship assistant for arab couples. Wanted to test the market in Saudi Arabia.'
        ]
      },
      {
        title: 'Development',
        text: [
          'Built the app with Swift. Learnt the language from Stanford’s CS193p class. Spent a bit too much time tweaking design details.'
        ]
      },
      {
        title: 'Result',
        text: [
          'Hit 50k views in less than a week from two cold TikTok accounts with automated marketing. Resulted in single digit downloads. No user intent whatsoever.'
        ]
      }
    ]
  },
  'calorie-tracker': {
    title: 'Calorie tracker',
    subtitle: 'Onboarding flow in Swift',
    videoUrl: 'calorie-tracker-onboarding.mp4',
    category: 'Project',
    date: '10-2025',
    links: [{ label: 'GitHub', href: 'https://github.com/saboorbakshi/mycalories-client' }],
    content: [
      {
        text: [
          'Built an onboarding flow for a calorie tracking app in Swift.',
          'Created a custom router and implemented navigation using data. Added light and dark mode. Put quite a bit of effort into the design.'
        ]
      }
    ]
  }
}

export const WORK_SORTED_LIST = Object.entries(WORK_DICTIONARY)
  .map(([href, data]) => ({ href, ...data }))
  .sort((a, b) => {
    const [monthA, yearA] = a.date.split('-').map(Number)
    const [monthB, yearB] = b.date.split('-').map(Number)

    if (yearA !== yearB) return yearB - yearA
    return monthB - monthA
  })

export const WRITING_DICTIONARY = {
  'clowder-of-cats': {
    title: 'Clowder of cats',
    date: 'WIP'
  },
  'uwaterloo-recap': {
    title: 'UWaterloo recap',
    date: 'WIP'
  }
} as const

export const WRITING_SORTED_LIST = Object.entries(WRITING_DICTIONARY)
  .map(([href, data]) => ({ href, ...data }))
  // .sort((a, b) => {
  //   if (a.date === 'WIP') return 1
  //   if (b.date === 'WIP') return -1

  //   const [monthA, yearA] = a.date.split('-').map(Number)
  //   const [monthB, yearB] = b.date.split('-').map(Number)

  //   if (yearA !== yearB) return yearB - yearA
  //   return monthB - monthA
  // })

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
