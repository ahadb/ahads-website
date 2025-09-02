'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { CASE_STUDIES } from '../data'

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

export default function CaseStudies() {
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
        <h1 className="mb-2 text-2xl font-normal text-gray-900">
          Outcomes & Case Studies
        </h1>
        <p className="mb-4 text-gray-700">
          Real-world implementations that demonstrate measurable business
          impact. Each case study showcases how AI and cloud engineering
          solutions can transform enterprise operations, from natural language
          database interfaces to intelligent document processing systems.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-4">
          {CASE_STUDIES.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/case-studies/${caseStudy.slug}`}
              className="group block"
            >
              <div className="rounded-xl border border-gray-500 bg-white p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block rounded-lg border border-blue-300 bg-blue-100 px-3 py-1.5 text-xs font-medium text-gray-800">
                        {caseStudy.industry}
                      </span>
                      <span className="text-xs text-gray-500">
                        {caseStudy.duration} • {caseStudy.teamSize}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-500">
                      {caseStudy.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-700 line-clamp-2">
                      {caseStudy.businessChallenge}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700 line-clamp-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 border border-green-300 mr-2">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                        {caseStudy.businessImpact}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.technicalStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-block rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technicalStack.length > 3 && (
                        <span className="inline-block rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-500">
                          +{caseStudy.technicalStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="flex items-center gap-1 text-sm font-semibold text-gray-800 transition-colors group-hover:text-blue-500">
                      View Case Study
                      <span className="text-gray-600 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
