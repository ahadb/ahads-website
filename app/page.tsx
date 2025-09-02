'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import { XIcon } from 'lucide-react'
import StrategyModal from '../components/ui/strategy-modal'
import ContactModal from '../components/ui/contact-modal'
import AIIntegrationModal from '../components/ui/ai-integration-modal'
import CloudArchitectureModal from '../components/ui/cloud-architecture-modal'
import AutomationModal from '../components/ui/automation-modal'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

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

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [isStrategyModalOpen, setIsStrategyModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isAIIntegrationModalOpen, setIsAIIntegrationModalOpen] =
    useState(false)
  const [isCloudArchitectureModalOpen, setIsCloudArchitectureModalOpen] =
    useState(false)
  const [isAutomationModalOpen, setIsAutomationModalOpen] = useState(false)

  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          projectNeeds: `${formData.service ? `Service: ${formData.service}\n\n` : ''}${formData.message}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col">
          <h1 className="mb-2 text-2xl font-normal text-gray-900">
            Hello there.
          </h1>
          <p className="text-gray-700">
            I help founders and tech leaders turn AI ideas into production-ready
            systems fast — going from concept to launch in weeks, not months.
            With 20+ years in enterprise software and deep in LLMs, RAG,
            automation workflows, agentic systems, and cloud-native platforms I
            deliver solutions that scale smoothly, cut costs, and create
            measurable business impact.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              <span className="text-gray-500">↪</span>{' '}
              <a
                href="https://ahadb.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-800"
              >
                Read my old blog
              </a>
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/case-studies"
                className="cursor-pointer rounded-lg border border-gray-400 bg-gray-900 px-6 py-1 text-sm text-white shadow-sm transition-all duration-200 hover:bg-gray-800"
              >
                View Outcomes
              </Link>
              <a
                href="#contact"
                className="cursor-pointer rounded-lg border border-gray-400 bg-white px-6 py-1 text-sm text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200"></div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="-mt-6"
      >
        <h3 className="mb-2 text-2xl font-normal text-gray-900">Outcomes</h3>
        <p className="mb-4 text-gray-700">
          Outcomes designed for your business — enabling measurable results in
          AI implementation, automation, and strategic planning to help you
          reach your goals faster.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, index) => (
            <div key={project.name} className="space-y-2">
              <div className="relative">
                {index === 0 ? (
                  <div className="group flex h-44 w-full flex-col justify-start border-1 border-gray-500 bg-white p-6 pt-2.5 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500"></div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                      From AI vision to execution
                    </h3>
                    <p className="text-sm text-gray-600">
                      AI implementation planning and ROI analysis
                    </p>
                  </div>
                ) : index === 1 ? (
                  <div className="group flex h-44 w-full flex-col justify-start border-1 border-gray-500 bg-white p-6 pt-2.5 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500"></div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                      Conversation AI at scale
                    </h3>
                    <p className="text-sm text-gray-600">
                      LLM-driven chat and automation for teams and clients alike
                    </p>
                    <div className="mt-2 flex justify-end">
                      <a
                        href="http://nlp-to-sql-frontend-prod.s3-website-us-east-1.amazonaws.com/"
                        className="text-sm text-gray-600 underline hover:text-gray-800"
                        target="_blank"
                      >
                        View demo ↗
                      </a>
                    </div>
                  </div>
                ) : index === 2 ? (
                  <div className="group flex h-44 w-full flex-col justify-start border-1 border-gray-500 bg-white p-6 pt-2 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500"></div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                      From Data to Insights Fast
                    </h3>
                    <p className="text-sm text-gray-600">
                      RAG pipelines delivering real-time, accurate answers
                    </p>
                    <div className="mt-2 flex justify-end">
                      <a
                        href="https://rag-frontend-production-257b.up.railway.app/"
                        className="text-sm text-gray-600 underline hover:text-gray-800"
                        target="_blank"
                      >
                        View demo ↗
                      </a>
                    </div>
                  </div>
                ) : index === 3 ? (
                  <div className="group flex h-44 w-full flex-col justify-start border-1 border-gray-500 bg-white p-6 pt-2 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500"></div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                      Smarter Workflows, Less Effort
                    </h3>
                    <p className="text-sm text-gray-600">
                      Agentic AI that executes tasks end-to-end without human
                      handholding
                    </p>
                    <div className="mt-2 flex justify-end">
                      <span className="text-sm text-gray-500">Coming soon</span>
                    </div>
                  </div>
                ) : index === 4 ? (
                  <div className="group flex h-44 w-full flex-col justify-start border-1 border-gray-500 bg-white p-6 pt-4 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <polygon
                            points="8,2 4,8 7,8 6,14 12,8 9,8"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                      Workflow Automation: 70% Faster
                    </h3>
                    <p className="text-sm text-gray-600">
                      Seamless integrations, reduced errors
                    </p>
                  </div>
                ) : index === 5 ? (
                  <div className="flex h-40 w-full flex-col justify-start border-1 border-[#9ca3af] bg-white p-6 pt-4 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-colors transition-transform duration-200 hover:scale-[1.02] hover:border-blue-400">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="4"
                            height="4"
                            fill="currentColor"
                          />
                          <rect
                            x="8"
                            y="2"
                            width="4"
                            height="4"
                            fill="currentColor"
                          />
                          <rect
                            x="2"
                            y="8"
                            width="4"
                            height="4"
                            fill="currentColor"
                          />
                          <rect
                            x="8"
                            y="8"
                            width="4"
                            height="4"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700">
                      AI Strategy Consulting
                    </h3>
                    <p className="text-sm text-gray-600">
                      From AI vision to execution
                    </p>
                  </div>
                ) : index === 6 ? (
                  <div className="flex h-48 w-full flex-col justify-start border-1 border-gray-500 bg-white p-6 pt-4 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-colors transition-transform duration-200 hover:scale-[1.02] hover:border-blue-400">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="10"
                            height="2"
                            fill="currentColor"
                          />
                          <rect
                            x="3"
                            y="7"
                            width="10"
                            height="2"
                            fill="currentColor"
                          />
                          <rect
                            x="3"
                            y="11"
                            width="10"
                            height="2"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700">
                      Data Analytics
                    </h3>
                    <p className="text-sm text-gray-600">
                      Insights and performance optimization
                    </p>
                    <div className="mt-auto flex justify-end">
                      <a
                        href="#"
                        className="text-sm text-blue-600 underline hover:text-blue-800"
                      >
                        View demo →
                      </a>
                    </div>
                  </div>
                ) : index === 7 ? (
                  <div className="flex h-40 w-full flex-col justify-start border-1 border-[#9ca3af] bg-white p-6 pt-4 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-colors transition-transform duration-200 hover:scale-[1.02] hover:border-blue-400">
                    <div className="mb-2">
                      <div className="text-xl font-bold text-gray-500">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <rect
                            x="4"
                            y="4"
                            width="8"
                            height="8"
                            fill="currentColor"
                          />
                          <rect x="6" y="2" width="4" height="2" fill="white" />
                          <rect
                            x="6"
                            y="10"
                            width="4"
                            height="2"
                            fill="white"
                          />
                          <rect x="2" y="6" width="2" height="4" fill="white" />
                          <rect
                            x="10"
                            y="6"
                            width="2"
                            height="4"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-700">
                      Cloud Integration
                    </h3>
                    <p className="text-sm text-gray-600">
                      Scalable infrastructure and deployment
                    </p>
                    <div className="mt-auto flex justify-end">
                      <a
                        href="#"
                        className="text-sm text-blue-600 underline hover:text-blue-800"
                      >
                        View demo →
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="h-40 w-full border-2 border-gray-200 bg-gray-50"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200"></div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="-mt-6"
      >
        <h3 className="mb-2 text-2xl font-normal text-gray-900">Services</h3>
        <p className="mb-4 text-gray-700">
          I offer comprehensive services to help organizations implement AI
          solutions, automate workflows, and develop strategic roadmaps for
          digital transformation.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="group flex h-56 w-full border border-gray-500 bg-white shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="relative w-1/2 p-8">
              <h4 className="absolute top-2 right-0 left-0 border-b-1 border-gray-300 pb-3 pl-4 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                Strategy
              </h4>
              <p className="mt-8 line-clamp-4 text-sm leading-relaxed text-gray-600">
                Transform your business with comprehensive AI roadmaps and
                strategic planning
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsStrategyModalOpen(true)}
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1 text-xs text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="flex w-1/2 bg-gray-100">
              <img
                src="/strategy.png"
                alt="AI Roadmaps"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="group flex h-56 w-full border border-gray-500 bg-white shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="relative w-1/2 p-8">
              <h4 className="absolute top-2 right-0 left-0 border-b-1 border-gray-300 pb-3 pl-4 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                AI Solutions
              </h4>
              <p className="mt-8 line-clamp-4 text-sm leading-relaxed text-gray-600">
                Build custom AI MVPs for clients — from concept to working
                prototype in weeks. Specializing in RAG systems, LLM
                integrations, and AI automation workflows
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsAIIntegrationModalOpen(true)}
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-3 py-1 text-xs text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
                >
                  Learn more
                </button>
              </div>
            </div>

            <div className="relative w-1/2 overflow-hidden bg-gray-100">
              <img
                src="/code.png"
                alt="AI Roadmaps"
                className="absolute right-0 h-full w-auto object-cover"
              />
            </div>
          </div>

          <div className="group flex h-56 w-full border border-gray-500 bg-white shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="relative w-1/2 p-8">
              <h4 className="absolute top-2 right-0 left-0 border-b-1 border-gray-300 pb-3 pl-4 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                Cloud Architecture
              </h4>
              <p className="mt-8 line-clamp-4 text-sm leading-relaxed text-gray-600">
                Scale AI solutions across your organization with
                enterprise-grade architecture and multi-tenant support.
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsCloudArchitectureModalOpen(true)}
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-3 py-1 text-xs text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="flex w-1/2 bg-gray-100">
              <img
                src="/cloud.png"
                alt="Cloud Architecture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="group flex h-56 w-full border border-gray-500 bg-white shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="relative w-1/2 p-8">
              <h4 className="absolute top-2 right-0 left-0 border-b-1 border-gray-300 pb-3 pl-4 text-base font-bold text-gray-700 transition-colors group-hover:text-blue-400">
                Automation Workflows
              </h4>
              <p className="mt-8 line-clamp-4 text-sm leading-relaxed text-gray-600">
                Transform manual processes into efficient, AI-powered workflows
                that save time and reduce errors.
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsAutomationModalOpen(true)}
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-300 bg-white px-3 py-1 text-xs text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
                >
                  Learn more
                </button>
              </div>
            </div>

            <div className="relative w-1/2 overflow-hidden bg-gray-100">
              <img
                src="/automation.png"
                alt="Automation & Workflows"
                className="absolute right-0 h-full w-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200"></div>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="-ml-4 flex flex-col -space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl hover:bg-transparent hover:no-underline"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] p-4">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200"></div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-3">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section> */}

      <motion.section
        id="contact"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="-mt-12 bg-gray-100 px-8 py-8"
      >
        <h3 className="mb-2 text-2xl font-normal text-gray-900">Get Started</h3>
        <p className="mb-4 text-gray-700">
          Ready to transform your business with AI, cloud architecture, or
          automation? Let's discuss your project and how I can help you achieve
          your goals.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-6">
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-400 focus:outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-400 focus:outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-400 focus:outline-none"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-400 focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Service Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-400 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="ai-integration">AI/LLM Integration</option>
                  <option value="cloud-architecture">Cloud Architecture</option>
                  <option value="automation">Automation & Workflows</option>
                  <option value="strategy">AI Strategy Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-blue-400 focus:outline-none"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gray-900 px-6 py-1 font-medium text-white transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-sm text-green-600">
                  Message sent successfully! I'll get back to you within 24
                  hours.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-600">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="mb-4 text-lg font-medium text-gray-900">
                Let's Connect
              </h4>
              <p className="mb-6 text-gray-700">
                I'm here to help you bring your AI, cloud, and automation ideas
                to life. Whether you need a quick consultation or want to
                discuss a full project, let's start the conversation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Response Time
                  </p>
                  <p className="text-sm text-gray-600">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Availability
                  </p>
                  <p className="text-sm text-gray-600">Limited availability</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="mb-4 text-lg font-medium text-gray-900">
                Follow & Connect
              </h5>
              <div className="flex items-center space-x-3">
                {SOCIAL_LINKS.map((link) => (
                  <MagneticSocialLink key={link.label} link={link.link}>
                    {link.label}
                  </MagneticSocialLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Strategy Modal */}
      <StrategyModal
        isOpen={isStrategyModalOpen}
        onClose={() => setIsStrategyModalOpen(false)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* AI Integration Modal */}
      <AIIntegrationModal
        isOpen={isAIIntegrationModalOpen}
        onClose={() => setIsAIIntegrationModalOpen(false)}
      />

      {/* Cloud Architecture Modal */}
      <CloudArchitectureModal
        isOpen={isCloudArchitectureModalOpen}
        onClose={() => setIsCloudArchitectureModalOpen(false)}
      />

      {/* Automation Modal */}
      <AutomationModal
        isOpen={isAutomationModalOpen}
        onClose={() => setIsAutomationModalOpen(false)}
      />
    </motion.main>
  )
}
