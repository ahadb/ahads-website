type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'NLP Interface for SQL',
    description:
      'An NLP-to-SQL app lets users query databases using plain English, translating natural language into SQL to fetch data instantly.',
    link: 'https://pro.motion-primitives.com/',
    image: '/nlp-sql.png',
    id: 'project1',
  },
  {
    name: 'AI Powered Productivity',
    description:
      'An AI-assisted task list helps users manage and automate tasks using natural language, intelligent suggestions, and context-aware actions.',
    link: 'https://motion-primitives.com/',
    image: '/ai-assisted-original.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Adaptable',
    title: 'Independent Consultant',
    start: 'Feb. 2021',
    end: 'Mar. 2025',
    link: 'https://www.linkedin.com/in/ahadbokhari/',
    id: 'work4',
  },
  {
    company: 'Nomura Securities',
    title: 'VP - Technology & Digital Transformation',
    start: 'Feb. 2021',
    end: 'Mar. 2025',
    link: 'https://www.linkedin.com/in/ahadbokhari/',
    id: 'work1',
  },
  {
    company: 'SS&C Technologies',
    title: 'Principal UI Software Engineer',
    start: '2019',
    end: '2021',
    link: 'https://www.linkedin.com/in/ahadbokhari/',
    id: 'work2',
  },
  {
    company: 'JP Morgan Chase',
    title: 'Sr. Software Engineer',
    start: '2017',
    end: '2019',
    link: 'https://www.linkedin.com/in/ahadbokhari/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
