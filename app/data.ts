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

type ADR = {
  number: string
  title: string
  slug: string
  context: string
  decision: string
  alternatives?: string
  consequences: string
  status: string
  date: string
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
      'Built a comprehensive Retrieval-Augmented Generation (RAG) system that processes documents through a complete pipeline: cleaning and parsing PDFs, intelligent chunking with overlap strategies, vector embedding generation using OpenAI, storage in Supabase vector database, semantic retrieval with similarity search, and context-aware answer generation. The solution leverages LangChain for advanced document processing, chain orchestration, and intelligent retrieval strategies. The system includes a React frontend for natural language queries, OpenAI API integration for advanced language understanding, and a Python backend with LangChain orchestrating the entire RAG workflow.',
    businessImpact:
      'Demonstrates potential to reduce information retrieval time from hours to seconds, provide 90%+ accuracy in answers, and enable instant access to organizational knowledge. The solution scales to handle enterprise document volumes while maintaining context and relevance.',
    technicalStack: [
      'OpenAI API',
      'LangChain',
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

export const ADRS: ADR[] = [
  {
    number: 'ADR-001',
    title: 'Policy Outcome Model Design',
    slug: 'policy-outcome-model-design',
    context: `Policy evaluation needs to return something the gateway can act on. Binary allow/deny works for firewalls, but enterprise AI needs more nuance.
Real scenarios:

Trader asks about a restricted security → BLOCK immediately
Analyst pastes a document with PII → STRIP the PII, then allow
Junior employee drafts client communication → PAUSE for senior review
Normal query → ALLOW through

Binary forces us to either block everything risky or allow everything and handle edge cases downstream.`,
    decision: `Four outcomes: ALLOW, BLOCK, REDACT, ESCALATE
Each outcome applies to both input and output policies:

• Input policies evaluate the request before it hits the LLM
• Output policies evaluate the LLM response before returning to user
• Same outcome model, different checkpoint

Outcome definitions:
• ALLOW: Request/response proceeds unchanged
• BLOCK: Stops flow immediately. Returns error to user. Logged with reason.
• REDACT: Returns new content (does not mutate original). Sensitive data replaced with tokens (e.g., [REDACTED:PII:ref_4821]). Original stored in secure lookup table. Flow continues with redacted version.
• ESCALATE: Synchronously blocks and creates review queue entry. Request suspended until human approves/rejects. If approved, flow resumes from where it paused. If rejected, treated as BLOCK.
Outcome precedence (when multiple policies fire):

• BLOCK (most restrictive, stops everything)
• ESCALATE (requires human decision)
• REDACT (modifies but allows)
• ALLOW (least restrictive)

If input policy says REDACT and output policy says BLOCK → BLOCK wins.
Flow diagram:`,
    alternatives: `Binary model (ALLOW/BLOCK only):
Rejected because redaction and human review would need separate middleware. Trade-off: 2x complexity for 4x expressiveness.
Six outcomes (adding WARN and DEFER):
Rejected because WARN can be logged without being a distinct outcome, and DEFER (rate limiting) belongs at the gateway layer. Trade-off: Less granularity for simpler mental model.
Outcome combinations (REDACT + ESCALATE):
Rejected because it creates combinatorial explosion and unclear semantics. Trade-off: Single outcome per evaluation. Chain policies if you need both.
Async ESCALATE:
Rejected for v1 because it requires distributed workflow engine and complex timeout handling. Trade-off: Synchronous blocking for simplicity. Will revisit at scale.`,
    consequences: `Wins:

• Human review is first-class (ESCALATE)
• Data sanitization happens at policy layer (REDACT)
• Clear precedence rules prevent conflicts
• Immutable redaction (returns new content, doesn't mutate)
• Same model works at both checkpoints

Costs:

• 4 code paths instead of 2
• ESCALATE blocks synchronously (can't scale to millions of concurrent escalations)
• Gateway must handle precedence logic
• Testing matrix: 4 outcomes × 2 checkpoints = 8 paths minimum

When to revisit:

If ESCALATE becomes async (would change entire queue architecture)
If 90%+ of policies only use ALLOW/BLOCK
If we need outcome combinations (REDACT + ESCALATE simultaneously)`,
    status: 'Accepted',
    date: '2026',
  },
  {
    number: 'ADR-002',
    title: 'Synchronous vs Async Communication Patterns',
    slug: 'sync-vs-async-communication-patterns',
    context: `The system has multiple components that need to communicate: Gateway calls Policy Engine, policies write to Audit Logger, escalations go to HITL Queue, etc. Each interaction could be sync (caller waits for response) or async (fire-and-forget or eventual response).
The core question: when should we block waiting for a response vs. when should we publish an event and move on?`,
    decision: `Use sync for the main request flow, async for everything else.
Synchronous (caller waits):

• Gateway → Policy Engine (input evaluation)
• Gateway → Model Router
• Gateway → Policy Engine (output evaluation)
• HITL Service → Gateway (when human makes decision and request resumes)

Asynchronous (fire-and-forget):

• Any component → Audit Logger
• Policy Engine → HITL Queue (when escalation happens)
• All background jobs (metrics, cleanup, archiving)

Why this split:

Main request flow is sync because the user is waiting. Can't return a response without knowing if policies passed.
Logging is async because it shouldn't slow down responses. If audit write fails, retry in background.
HITL escalation is async because human review takes minutes/hours. Can't block the request thread that long.`,
    alternatives: `All sync:
Rejected because logging and escalations would block request threads. A slow database write blocks the entire request. Trade-off: Simpler code for worse performance.
All async:
Rejected because the main flow requires answers before proceeding. You can't route to a model without knowing which model to use. Trade-off: Lower latency for broken semantics.
Async HITL with webhooks:
Rejected for v1 because it requires the caller to provide a callback URL and handle async responses. Enterprise clients aren't ready for this. Trade-off: Simpler client integration for blocked request threads during review.`,
    consequences: `Wins:

• Main request flow is fast (only blocks on necessary decisions)
• Audit logging never slows down responses
• Clear separation: sync = user is waiting, async = background work
• Can scale audit and HITL independently from request handling

Costs:

• Dual communication patterns (both REST and message queue)
• More infrastructure (need Redis/Kafka for async)
• Failure modes are different (sync = retry immediately, async = dead letter queue)
• HITL escalations block request threads (can't handle millions of concurrent reviews)

When to revisit:

If HITL review volume grows to thousands/day (need async with webhooks)
If audit writes become a bottleneck (need faster async pipeline)
If policy evaluation becomes slow enough that sync calls are noticeable (>100ms)`,
    status: 'Accepted',
    date: '2026',
  },
  {
    number: 'ADR-003',
    title: 'Modular Monolith to Microservices Strategy',
    slug: 'modular-monolith-to-microservices-strategy',
    context: `We could build this as microservices from day one or start as a monolith. The architecture has clear components—Gateway, Policy Engine, Audit Logger, HITL Queue, Model Router—that could be separate services.
Microservices are the default for "scalable systems," but they come with real operational overhead: service discovery, distributed tracing, network calls instead of function calls, deployment orchestration, data consistency across services. For a 3-week MVP, that's a lot of infrastructure for unclear benefit.
But we also know this needs to scale eventually. Audit logging has different scaling characteristics than policy evaluation. At high traffic, these need to be independent services.
The question: do we pay the microservices tax upfront, or start simple and split later?`,
    decision: `Start as a modular monolith. Design for microservices decomposition from day one.
All components run in a single FastAPI application, but they're structured as independent modules with clear boundaries:

/gateway - API routes and orchestration
/policy_engine - Evaluation logic and module registry
/audit - Logging service
/hitl - Review queue management
/model_router - LLM abstraction layer

Each module:

• Has its own interface (not directly importing from other modules)
• Owns its data access (no cross-module database queries)
• Communicates through defined contracts
• Could be extracted to a service by wrapping in HTTP/gRPC

Single deployment, single database, single process. But architected so that extracting a service is moving a folder to a new repo and adding a network boundary, not rewriting code.
Decomposition strategy (when to split):

• Audit Service first (10x traffic) - High write volume, read occasionally. Different scaling profile.
• Policy Engine second (100x traffic) - CPU-intensive evaluation becomes bottleneck.
• HITL Service third (if review volume grows) - Async workflows, different availability needs.
• Full microservices (1000x traffic) - Gateway becomes thin orchestrator, everything else independent.`,
    alternatives: `Microservices from day one:
Rejected because it adds weeks to development for features we don't need yet (service mesh, distributed tracing, deployment orchestration). Trade-off: Premature complexity for theoretical future scale.
Pure monolith (no module boundaries):
Rejected because splitting later would require major refactoring. Tight coupling makes extraction expensive. Trade-off: Faster initial development for painful future migration.
Serverless (Lambda functions):
Rejected because the request flow is orchestration-heavy with state. Lambda works for independent functions, not multi-step workflows with shared context. Trade-off: Auto-scaling for poor fit to problem domain.
Service-per-policy-module:
Rejected because policy modules are plugins, not services. Each module is ~100 lines of code. The overhead of making each one a service is absurd. Trade-off: Maximum isolation for operational nightmare.`,
    consequences: `Wins:

• Single deployment (docker-compose up, done)
• Fast development (no network calls, no service discovery)
• Easier debugging (single process, stack traces work)
• Lower infrastructure cost (one container vs five)
• Designed for split (clear boundaries, defined interfaces)
• Can defer microservices decisions until actual bottlenecks appear

Costs:

• Can't scale components independently yet (audit and policy engine share resources)
• Single point of failure (if the process crashes, everything crashes)
• Shared database initially (can't optimize storage per service)
• Deploy together (can't update audit service without redeploying everything)
• Risk of coupling creep (need discipline to maintain boundaries)

When to revisit:

When audit writes become bottleneck (>1000 writes/sec, PostgreSQL struggling)
When policy engine CPU consumption separates from gateway (different scaling needs visible)
When team grows beyond 3-4 people (separate ownership needed)
When different components need different deployment schedules (audit changes daily, core is stable)`,
    status: 'Accepted',
    date: '2026',
  },
]

export const EMAIL = 'ahadbokhari@gmail.com'
