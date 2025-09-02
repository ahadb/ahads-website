'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { CASE_STUDIES } from '../../data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="mb-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
          >
            ← Back to Case Studies
          </Link>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="inline-block rounded-lg border border-blue-300 bg-blue-100 px-4 py-2 text-sm font-medium text-gray-800">
                {caseStudy.industry}
              </span>
              <span className="text-sm text-gray-500">
                {caseStudy.duration} • {caseStudy.teamSize}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              {caseStudy.title}
            </h1>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {/* Executive Summary */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Executive Summary
              </h2>
              <p className="leading-relaxed text-gray-700">
                {caseStudy.slug === 'nlp-sql-enterprise'
                  ? 'This demo demonstrates how natural language processing can bridge the gap between business users and complex enterprise databases, potentially reducing query time from hours to minutes while eliminating dependency on technical teams.'
                  : caseStudy.slug === 'rag-document-intelligence'
                  ? 'This demo demonstrates how Retrieval-Augmented Generation (RAG) can transform enterprise knowledge management, providing instant access to organizational information with high accuracy and context awareness.'
                  : 'This demo demonstrates how combining n8n\'s low-code workflow automation with LangChain\'s advanced AI orchestration can transform repetitive business operations into intelligent, automated workflows. The solution showcases the ability to integrate multiple data sources, automate decision-making, and create agentic pipelines with minimal manual intervention.'}
              </p>
            </div>

            {/* Business Challenge */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                The Challenge
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  {caseStudy.businessChallenge}
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Key Pain Points:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {caseStudy.slug === 'nlp-sql-enterprise' ? (
                      <>
                        <li>• 2+ hour delays for simple database queries</li>
                        <li>
                          • Complete dependency on IT teams for data access
                        </li>
                        <li>
                          • Missed opportunities for real-time decision making
                        </li>
                        <li>• Business users lack SQL expertise</li>
                      </>
                    ) : caseStudy.slug === 'rag-document-intelligence' ? (
                      <>
                        <li>
                          • Hours spent searching through document repositories
                        </li>
                        <li>• Inconsistent answers to the same questions</li>
                        <li>
                          • Knowledge workers unable to access critical
                          information quickly
                        </li>
                        <li>• Traditional search lacks context and accuracy</li>
                      </>
                    ) : (
                      <>
                        <li>• Manual effort in repetitive workflows (reporting, data transfer, notifications)</li>
                        <li>• Automation tools limited to "if-this-then-that" logic without intelligence</li>
                        <li>• Difficulty integrating LLM reasoning into real business pipelines</li>
                        <li>• Lack of flexible orchestration across APIs and databases</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                The Solution
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  {caseStudy.solution}
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Technical Architecture:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {caseStudy.slug === 'nlp-sql-enterprise' ? (
                      <>
                        <li>
                          • AWS serverless cloud infrastructure for production
                          deployment
                        </li>
                        <li>
                          • OpenAI API integration for advanced NLP processing
                        </li>
                        <li>
                          • PostgreSQL integration with enterprise security
                        </li>
                        <li>• Docker containerization for scalability</li>
                        <li>• FastAPI backend for robust API management</li>
                        <li>
                          • React frontend with intuitive natural language input
                        </li>
                      </>
                    ) : caseStudy.slug === 'rag-document-intelligence' ? (
                      <>
                        <li>
                          • Complete RAG pipeline: PDF cleaning, parsing, and
                          chunking
                        </li>
                        <li>
                          • OpenAI API integration for embedding generation
                        </li>
                        <li>
                          • Supabase vector database for semantic storage and
                          retrieval
                        </li>
                        <li>• Intelligent chunking with overlap strategies</li>
                        <li>
                          • FastAPI backend orchestrating the entire workflow
                        </li>
                        <li>
                          • React frontend with natural language query interface
                        </li>
                      </>
                    ) : (
                      <>
                        <li>• n8n Workflow Orchestration: Triggers and manages multi-step automation pipelines</li>
                        <li>• LangChain Integration: Provides AI reasoning, context assembly, and tool use within workflows</li>
                        <li>• Vector Database Integration: Stores embeddings for semantic search and contextual memory</li>
                        <li>• LLM-Powered Agents: Handle natural language inputs, API decision-making, and response generation</li>
                        <li>• API Integrations: Slack, Google Drive, CRM, and internal databases</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* RAG Pipeline (RAG case study only) */}
            {caseStudy.slug === 'rag-document-intelligence' && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  RAG Pipeline Architecture
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-gray-700">
                    The solution implements a complete RAG pipeline that
                    transforms raw documents into intelligent, searchable
                    knowledge:
                  </p>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Document Processing Pipeline:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • <strong>PDF Cleaning:</strong> Text extraction,
                        formatting normalization, and noise removal
                      </li>
                      <li>
                        • <strong>Intelligent Parsing:</strong> Structure-aware
                        document breakdown and metadata extraction
                      </li>
                      <li>
                        • <strong>Smart Chunking:</strong> Context-aware text
                        segmentation with overlap strategies for continuity
                      </li>
                      <li>
                        • <strong>Embedding Generation:</strong> OpenAI API
                        integration for high-dimensional vector creation
                      </li>
                      <li>
                        • <strong>Vector Storage:</strong> Supabase vector
                        database for efficient similarity search
                      </li>
                      <li>
                        • <strong>Semantic Retrieval:</strong> Context-aware
                        document retrieval using cosine similarity
                      </li>
                      <li>
                        • <strong>Answer Generation:</strong> OpenAI GPT
                        integration for context-aware responses
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Technical Implementation:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • <strong>PDF Processing:</strong> PyPDF2 and pdfplumber
                        for robust text extraction
                      </li>
                      <li>
                        • <strong>Chunking Strategy:</strong> Recursive
                        character splitting with configurable overlap
                      </li>
                      <li>
                        • <strong>Vector Database:</strong> Supabase pgvector
                        extension for PostgreSQL
                      </li>
                      <li>
                        • <strong>Similarity Search:</strong> Cosine similarity
                        with configurable threshold
                      </li>
                      <li>
                        • <strong>Context Assembly:</strong> Dynamic context
                        window assembly for optimal responses
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Workflow Architecture (Workflow Automation case study only) */}
            {caseStudy.slug === 'ai-workflow-automation' && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Workflow Architecture
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-gray-700">
                    The solution implements a modular AI-automation pipeline combining n8n nodes with LangChain agents for context-aware automation.
                  </p>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Workflow Steps:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • <strong>Trigger Event:</strong> New document uploaded to Google Drive or CRM entry created
                      </li>

                      <li>
                        • <strong>LangChain Reasoning:</strong> AI agent determines next steps (summarize, categorize, notify team)
                      </li>
                      <li>
                        • <strong>Contextual Memory:</strong> Embeddings stored for future semantic queries
                      </li>
                      <li>
                        • <strong>Automated Action:</strong> n8n executes follow-ups (send Slack summary, update CRM, email client)
                      </li>
                      <li>
                        • <strong>Feedback Loop:</strong> Logs decisions and updates workflow for continuous improvement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Technical Implementation (Workflow Automation case study only) */}
            {caseStudy.slug === 'ai-workflow-automation' && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Technical Implementation
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed text-gray-700">
                    The solution leverages modern automation and AI technologies to create intelligent, scalable workflow systems.
                  </p>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Core Technologies:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        • <strong>n8n:</strong> Low-code orchestration of workflows, API triggers, and task automation
                      </li>
                      <li>
                        • <strong>LangChain:</strong> Intelligent context management, tool usage, and natural language decision-making
                      </li>

                      <li>
                        • <strong>LLMs:</strong> OpenAI GPT models for summarization, reasoning, and content generation
                      </li>
                      <li>
                        • <strong>Infrastructure:</strong> Docker-based deployment for scalability, security, and monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Business Impact */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Business Impact & Results
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  {caseStudy.businessImpact}
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {caseStudy.slug === 'nlp-sql-enterprise' ? (
                    <>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          95%
                        </div>
                        <div className="text-sm text-gray-700">
                          Query Accuracy
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          60x
                        </div>
                        <div className="text-sm text-gray-700">
                          Faster Queries
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          80%
                        </div>
                        <div className="text-sm text-gray-700">
                          Fewer IT Tickets
                        </div>
                      </div>
                    </>
                  ) : caseStudy.slug === 'rag-document-intelligence' ? (
                    <>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          90%+
                        </div>
                        <div className="text-sm text-gray-700">
                          Answer Accuracy
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          3600x
                        </div>
                        <div className="text-sm text-gray-700">
                          Faster Retrieval
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          Instant
                        </div>
                        <div className="text-sm text-gray-700">
                          Knowledge Access
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          80%+
                        </div>
                        <div className="text-sm text-gray-700">
                          Reduction in Manual Work
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          Seamless
                        </div>
                        <div className="text-sm text-gray-700">
                          Cross-Platform Integration
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          Dynamic
                        </div>
                        <div className="text-sm text-gray-700">
                          AI Decision Making
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Cloud Infrastructure
              </h2>
              <div className="space-y-4">
                {caseStudy.slug === 'nlp-sql-enterprise' ? (
                  <>
                    <p className="leading-relaxed text-gray-700">
                      The solution is built on AWS serverless cloud
                      infrastructure with enterprise-grade security,
                      scalability, and reliability. The architecture follows
                      cloud-native best practices for production deployment.
                    </p>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        AWS Services & Architecture:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • <strong>AWS RDS:</strong> Managed PostgreSQL
                          database with automated backups
                        </li>
                        <li>
                          • <strong>AWS API Gateway:</strong> RESTful API
                          management and rate limiting
                        </li>
                        <li>
                          • <strong>AWS Lambda:</strong> Serverless functions
                          for NLP processing
                        </li>
                        <li>
                          • <strong>AWS CloudFront:</strong> Global CDN for
                          frontend assets
                        </li>
                        <li>
                          • <strong>AWS IAM:</strong> Fine-grained access
                          control and security
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        DevOps & Deployment:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • <strong>Infrastructure as Code:</strong> AWS
                          CloudFormation for reproducible deployments
                        </li>
                        <li>
                          • <strong>Monitoring:</strong> CloudWatch for
                          performance and error tracking
                        </li>
                      </ul>
                    </div>
                  </>
                ) : caseStudy.slug === 'rag-document-intelligence' ? (
                  <>
                    <p className="leading-relaxed text-gray-700">
                      The solution leverages Supabase's modern cloud
                      infrastructure with built-in vector database capabilities,
                      enterprise-grade security, and automatic scaling. The
                      architecture follows modern SaaS best practices for rapid
                      development and deployment.
                    </p>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        Supabase Services & Architecture:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • <strong>Supabase Database:</strong> PostgreSQL with
                          pgvector extension for vector storage
                        </li>
                        <li>
                          • <strong>Supabase Auth:</strong> Built-in
                          authentication and user management
                        </li>
                        <li>
                          • <strong>Supabase Storage:</strong> File storage for
                          document uploads and management
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        Development & Deployment:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • <strong>Database Management:</strong> Automatic
                          backups, migrations, and monitoring
                        </li>
                        <li>
                          • <strong>API Management:</strong> Auto-generated REST
                          and GraphQL APIs
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="leading-relaxed text-gray-700">
                      The solution leverages n8n's self-hosted environment alongside modern database infrastructure for security and scalability.
                    </p>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        Infrastructure Components:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>
                          • <strong>n8n Self-Hosted:</strong> Secure, extensible workflow orchestration
                        </li>
                        <li>
                          • <strong>Supabase:</strong> Database for data storage and management
                        </li>
                        <li>
                          • <strong>Docker Deployment:</strong> Containerized architecture for portability
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Implementation Approach */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Implementation Approach
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  The project was delivered using an agile methodology over 3
                  weeks, focusing on rapid prototyping and iterative development
                  to validate the concept with stakeholders.
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h4 className="mb-2 font-semibold text-gray-800">
                    Development Phases:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {caseStudy.slug === 'nlp-sql-enterprise' ? (
                      <>
                        <li>
                          • Week 1: Core NLP engine and OpenAI integration
                        </li>
                        <li>
                          • Week 2: AWS infrastructure setup and backend API
                        </li>
                        <li>
                          • Week 3: Frontend interface, testing, and deployment
                        </li>
                      </>
                    ) : caseStudy.slug === 'rag-document-intelligence' ? (
                      <>
                        <li>• Week 1: Core RAG engine and vector embeddings</li>
                        <li>
                          • Week 2: AWS infrastructure setup and backend API
                        </li>
                        <li>
                          • Week 3: Frontend interface, testing, and deployment
                        </li>
                      </>
                    ) : (
                      <>
                        <li>• Week 1: n8n workflow setup, LangChain integration, and vector DB connection</li>
                        <li>• Week 2: End-to-end testing, API integrations, and workflow automation deployment</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Project Details */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Project Details
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Team Size:</span>
                  <span>{caseStudy.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Industry:</span>
                  <span>{caseStudy.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Project Type:</span>
                  <span>Demo</span>
                </div>
              </div>

              <div className="mt-4 border-t border-gray-200 pt-3">
                <div className="mb-2 text-xs text-gray-500">View Project</div>
                {caseStudy.slug === 'nlp-sql-enterprise' ? (
                  <a
                    href="http://nlp-to-sql-frontend-prod.s3-website-us-east-1.amazonaws.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 transition-colors hover:text-blue-700"
                  >
                    View NLP-to-SQL Demo →
                  </a>
                ) : caseStudy.slug === 'rag-document-intelligence' ? (
                  <a
                    href="https://rag-frontend-production-257b.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 transition-colors hover:text-blue-700"
                  >
                    View RAG Demo →
                  </a>
                ) : (
                  <a
                    href="#"
                    className="text-sm text-gray-500 cursor-not-allowed"
                  >
                    Demo Coming Soon →
                  </a>
                )}
              </div>
            </div>

            {/* Technical Stack */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Technical Stack
              </h3>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {caseStudy.technicalStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Ready to Build Something Similar?
              </h3>
              <p className="mb-3 text-sm text-gray-700">
                                  {caseStudy.slug === 'nlp-sql-enterprise'
                  ? 'This demo demonstrates the potential for AI-powered database interfaces in your organization.'
                  : caseStudy.slug === 'rag-document-intelligence'
                  ? 'This demo demonstrates the potential for RAG-powered knowledge management in your organization.'
                  : 'This demo demonstrates the potential for AI-powered workflow automation in your organization.'}
              </p>
              <Link
                href="/#contact"
                className="inline-block w-full rounded-lg bg-gray-900 px-3 py-2 text-center font-medium text-white transition-colors hover:bg-gray-800"
              >
                Let's Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
