'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function StrategyPage() {
  return (
    <motion.main
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="mb-6 text-4xl font-normal text-gray-900">
          AI Strategy Consulting
        </h1>
        <p className="text-xl leading-relaxed text-gray-700">
          Transform your business with comprehensive AI roadmaps and strategic
          planning. I help organizations navigate the complex landscape of AI
          implementation with clear ROI projections and actionable timelines.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-normal text-gray-900">
            Strategic Planning
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              AI readiness assessment and gap analysis
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Technology stack evaluation and recommendations
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Implementation roadmap with clear milestones
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Risk assessment and mitigation strategies
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-normal text-gray-900">ROI Analysis</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Cost-benefit analysis and budget planning
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Performance metrics and KPIs definition
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Success measurement frameworks
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Long-term value projection
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg bg-gray-50 p-8"
      >
        <h2 className="mb-6 text-2xl font-normal text-gray-900">
          What You'll Get
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Strategic Roadmap
            </h3>
            <p className="text-gray-600">
              Detailed implementation plan with timelines and milestones
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              ROI Analysis
            </h3>
            <p className="text-gray-600">
              Comprehensive cost-benefit analysis and projections
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Success Metrics
            </h3>
            <p className="text-gray-600">
              Clear KPIs and measurement frameworks
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <h2 className="mb-4 text-2xl font-normal text-gray-900">
          Ready to Get Started?
        </h2>
        <p className="mb-6 text-gray-700">
          Let's discuss how AI can transform your business and create a
          strategic roadmap for success.
        </p>
        <Link
          href="/services/ai"
          className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Explore AI Services
          <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
        </Link>
      </motion.section>
    </motion.main>
  )
}
