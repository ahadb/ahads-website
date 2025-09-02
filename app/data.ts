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
  date: string
}

type CaseStudy = {
  title: string
  client: string
  industry: string
  businessChallenge: string
  solution: string
  businessImpact: string
  technicalStack: string[]
  image: string
  slug: string
  duration: string
  teamSize: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'NLP to SQL AI',
    description:
      'An NLP-to-SQL app lets users query databases using plain English, translating natural language into SQL to fetch data instantly.',
    link: 'https://pro.motion-primitives.com/',
    image: '/nlp-to-sql-original.png',
    id: 'project1',
  },
  {
    name: 'RAG AI',
    description:
      'A real-time analytics platform that provides intelligent insights and predictive modeling for business performance metrics.',
    link: 'https://example.com/',
    image: '/ai-assisted-original.png',
    id: 'project3',
  },
  {
    name: 'AI Powered Productivity',
    description:
      'An AI-assisted task list helps users manage and automate tasks using natural language, intelligent suggestions, and context-aware actions.',
    link: 'https://motion-primitives.com/',
    image: '/ai-assisted-original.png',
    id: 'project2',
  },
  {
    name: 'AI Powered Productivitys',
    description:
      'An AI-assisted task list helps users manage and automate tasks using natural language, intelligent suggestions, and context-aware actions.',
    link: 'https://motion-primitives.com/',
    image: '/ai-assisted-original.png',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Independent Consultant',
    title: 'AI Consultant & Full Stack Engineer',
    start: 'April 2025',
    end: 'Current',
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
    company: 'SS&C • JP Morgan • GE • BofA',
    title: 'Principal UI Software Engineer',
    start: '2014',
    end: '2021',
    link: 'https://www.linkedin.com/in/ahadbokhari/',
    id: 'work2',
  },
  {
    company: 'Contractor • Freelancer',
    title: 'Web Developer & Designer',
    start: '1997',
    end: '2014',
    link: 'https://www.linkedin.com/in/ahadbokhari/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How LLMs Work: A Technical Deep Dive',
    description:
      'Understanding the architecture and mechanics behind Large Language Models, from transformers to attention mechanisms.',
    link: '/blog/how-llms-work',
    uid: 'blog-1',
    date: 'May 05, 2025',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ahadbokhari/',
  },
  {
    label: 'Github',
    link: 'https://github.com/ahadb',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/ibelick',
  // },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'AI-Powered Workflow Automation with n8n and LangChain',
    client: 'Enterprise Workflow Management',
    industry: 'SMBs',
    businessChallenge:
      'Organizations face inefficiencies in managing cross-platform workflows and repetitive tasks that consume valuable time. Traditional automation tools handle triggers and actions but lack the intelligence to make contextual decisions. Businesses need smarter systems that can reason, adapt, and integrate with existing APIs while remaining cost-effective and scalable.',
    solution:
      'Built an AI-powered workflow automation system by integrating LangChain\'s reasoning capabilities into n8n\'s workflow engine. This hybrid approach combines structured automation (n8n) with AI-powered contextual decision-making (LangChain). The system executes workflows such as document summarization, CRM updates, and automated email drafting with dynamic AI intelligence layered on top of existing integrations.',
    businessImpact:
      'This demo demonstrates the potential to reduce manual workflow management time by 80%, enable context-aware automation across tools without custom coding, scale AI-powered workflows across departments with minimal engineering overhead, and deliver intelligent automation rather than simple trigger-action pipelines.',
    technicalStack: [
      'n8n',
      'LangChain',
      'OpenAI API',
      'Supabase',
      'Docker',
      'Python',
    ],
    image: '/automation.png',
    slug: 'ai-workflow-automation',
    duration: '2 weeks',
    teamSize: 'Solo developer',
  },
  {
    title: 'NLP-to-SQL Interface for Enterprise Databases',
    client: 'Financial Services Industry',
    industry: 'Financial Services',
    businessChallenge:
      "Non-technical business users struggle to query complex financial databases, leading to 2-hour delays for simple reports, dependency on IT teams, and missed opportunities for real-time decision making. Traditional SQL requires technical expertise that business analysts don't have.",
    solution:
      'Built a natural language interface that translates plain English queries into SQL with 95% accuracy. The solution includes a React frontend for intuitive query input, OpenAI API integration for natural language processing, and a FastAPI backend that generates and executes SQL queries against PostgreSQL databases.',
    businessImpact:
      'Demonstrates potential to reduce query time from 2 hours to 2 minutes, eliminate 80% of IT support tickets, and enable real-time business insights. The solution scales to handle enterprise-level database complexity while maintaining security and performance.',
    technicalStack: [
      'OpenAI API',
      'PostgreSQL',
      'AWS',
      'React',
      'Python',
      'FastAPI',
      'Docker',
    ],
    image: '/nlp-to-sql-original.png',
    slug: 'nlp-sql-enterprise',
    duration: '3 weeks',
    teamSize: 'Solo developer',
  },
  {
    title: 'RAG-Powered Document Intelligence System',
    client: 'Enterprise Knowledge Management',
    industry: 'Technology',
    businessChallenge:
      'Organizations struggle with information retrieval from large document repositories, leading to hours spent searching through documents, inconsistent answers to questions, and knowledge workers unable to access critical information quickly. Traditional search methods lack context and accuracy.',
    solution:
      'Built a comprehensive Retrieval-Augmented Generation (RAG) system that processes documents through a complete pipeline: cleaning and parsing PDFs, intelligent chunking with overlap strategies, vector embedding generation using OpenAI, storage in Supabase vector database, semantic retrieval with similarity search, and context-aware answer generation. The solution includes a React frontend for natural language queries, OpenAI API integration for advanced language understanding, and a Python backend orchestrating the entire RAG workflow.',
    businessImpact:
      'Demonstrates potential to reduce information retrieval time from hours to seconds, provide 90%+ accuracy in answers, and enable instant access to organizational knowledge. The solution scales to handle enterprise document volumes while maintaining context and relevance.',
    technicalStack: [
      'OpenAI API',
      'Supabase',
      'Vector Embeddings',
      'Python',
      'React',
      'FastAPI',
      'PDF Processing',
    ],
    image: '/rag-frontend-production-257b.up.railway.app.png',
    slug: 'rag-document-intelligence',
    duration: '3 weeks',
    teamSize: 'Solo developer',
  },
]

export const EMAIL = 'ahadbokhari@gmail.com'
