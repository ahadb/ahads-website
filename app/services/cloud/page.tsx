'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function CloudPage() {
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
          Cloud Infrastructure & Deployment
        </h1>
        <p className="text-xl leading-relaxed text-gray-700">
          Scale your AI solutions across your organization with enterprise-grade
          cloud architecture. I design and deploy scalable, secure, and
          cost-effective cloud solutions that grow with your business needs.
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
            Cloud Architecture
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Multi-cloud and hybrid solutions
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Microservices and containerization
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Auto-scaling and load balancing
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              High availability and disaster recovery
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-normal text-gray-900">DevOps & CI/CD</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Automated deployment pipelines
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Infrastructure as Code (IaC)
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Monitoring and alerting systems
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
              Security and compliance automation
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
          Cloud Services
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              AWS Solutions
            </h3>
            <p className="text-gray-600">
              Leverage AWS services for scalable AI infrastructure
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Kubernetes
            </h3>
            <p className="text-gray-600">
              Container orchestration for scalable deployments
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Serverless
            </h3>
            <p className="text-gray-600">
              Cost-effective, auto-scaling serverless solutions
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
          Ready to Scale?
        </h2>
        <p className="mb-6 text-gray-700">
          Let's build cloud infrastructure that scales with your AI solutions
          and business growth.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/services/ai"
            className="inline-flex items-center rounded-lg bg-gray-600 px-6 py-3 text-white transition-colors hover:bg-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            AI Services
          </Link>
          <Link
            href="/services/strategy"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            Strategy Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
