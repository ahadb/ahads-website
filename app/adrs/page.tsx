'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ADRS } from '../data'

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

export default function ADRsPage() {
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
          Architecture Decision Records
        </h1>
        <p className="mb-4 text-gray-700">
          Documented decisions that shape the architecture of production AI
          systems. Each ADR captures the context, decision rationale, and
          consequences of key technical choices.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-4">
          {ADRS.map((adr) => (
            <Link
              key={adr.slug}
              href={`/adrs/${adr.slug}`}
              className="group block"
            >
              <div className="rounded-xl border border-gray-500 bg-white p-6 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block rounded-lg border border-blue-300 bg-blue-100 px-3 py-1.5 text-xs font-medium text-gray-800">
                        {adr.number}
                      </span>
                      <span className="text-xs text-gray-500">
                        {adr.status} • {adr.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-500">
                      {adr.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-700 line-clamp-3">
                      {adr.context.split('\n')[0]}
                    </p>
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

