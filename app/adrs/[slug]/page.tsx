'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { use } from 'react'
import { ADRS } from '../../data'

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

function formatText(text: string) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let currentList: string[] = []
  let listKey = 0
  let currentSection = ''

  const flushList = (section?: string) => {
    if (currentList.length > 0) {
      // Check if this is an outcome precedence list (contains BLOCK, ESCALATE, REDACT, ALLOW with parentheses)
      const isOutcomePrecedence = currentList.some(
        (item) =>
          item.includes('BLOCK (') ||
          item.includes('ESCALATE (') ||
          item.includes('REDACT (') ||
          item.includes('ALLOW (')
      )
      // Check if this should be a numbered list (only outcome precedence)
      const isNumberedList = isOutcomePrecedence

      const listItems = currentList.map((item, idx) => {
        // Check if item has pattern "WORD: description" and bold the word
        const colonIndex = item.indexOf(':')
        if (colonIndex > 0 && colonIndex < 20) {
          // Word before colon is short (likely an outcome name)
          const word = item.substring(0, colonIndex).trim()
          const rest = item.substring(colonIndex + 1).trim()
          return (
            <li key={idx} className="text-gray-700">
              <span className="font-semibold">{word}:</span> {rest}
            </li>
          )
        }
        // Check if item has pattern "WORD (description)" and bold the word
        const parenIndex = item.indexOf('(')
        if (parenIndex > 0 && parenIndex < 20) {
          // Word before parenthesis is short (likely an outcome name)
          const word = item.substring(0, parenIndex).trim()
          const rest = item.substring(parenIndex).trim()
          return (
            <li key={idx} className="text-gray-700">
              <span className="font-semibold">{word}</span> {rest}
            </li>
          )
        }
        return (
          <li key={idx} className="text-gray-700">
            {item}
          </li>
        )
      })

      if (isNumberedList) {
        elements.push(
          <ol key={`list-${listKey++}`} className="ml-6 mb-4 list-decimal space-y-2">
            {listItems}
          </ol>
        )
      } else {
        elements.push(
          <ul key={`list-${listKey++}`} className="ml-6 mb-4 list-disc space-y-2">
            {listItems}
          </ul>
        )
      }
      currentList = []
    }
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim()
    
    if (trimmed === '') {
      flushList(currentSection)
      // Add spacing between sections
      if (index > 0 && index < lines.length - 1) {
        elements.push(<div key={`spacer-${index}`} className="mb-3" />)
      }
    } else if (trimmed.startsWith('•')) {
      currentList.push(trimmed.substring(1).trim())
    } else if (
      trimmed.includes('→') &&
      !trimmed.includes('[') &&
      !line.startsWith(' ') &&
      trimmed.length < 100 &&
      !trimmed.startsWith('If ') &&
      !trimmed.startsWith('When ') &&
      !trimmed.startsWith('The ')
    ) {
      // List items with arrows (scenarios like "Trader asks → BLOCK")
      // Exclude full sentences that start with "If", "When", "The", etc.
      currentList.push(trimmed)
    } else if (trimmed === 'Flow diagram:') {
      // Flow diagram - render heading and image
      flushList(currentSection)
      elements.push(
        <div key={`flow-diagram-${index}`} className="my-6">
          <h4 className="mb-3 font-semibold text-gray-900">Flow diagram:</h4>
          <Image
            src="/adr-001-flow-diagram.png"
            alt="Flow diagram"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg border border-gray-200"
          />
          <p className="mt-4 text-gray-700">
            LLM Response → Policy Eval → Outcome Decision → [ALLOW/BLOCK/REDACT/ESCALATE] → User
          </p>
        </div>
      )
    } else if (trimmed.endsWith(':')) {
      // Section headers like "Wins:", "Costs:", etc.
      flushList(currentSection)
      currentSection = trimmed // Update current section
      elements.push(
        <h4 key={`header-${index}`} className="mt-4 mb-2 font-semibold text-gray-900">
          {trimmed}
        </h4>
      )
    } else {
      flushList(currentSection)
      elements.push(
        <p key={`p-${index}`} className="mb-3 leading-relaxed">
          {trimmed}
        </p>
      )
    }
  })

  flushList(currentSection)
  return elements
}

export default function ADRPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const adr = ADRS.find((a) => a.slug === slug)

  if (!adr) {
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
            href="/adrs"
            className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
          >
            ← Back to ADRs
          </Link>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="inline-block rounded-lg border border-blue-300 bg-blue-100 px-4 py-2 text-sm font-medium text-gray-800">
                {adr.number}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">{adr.title}</h1>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="-mt-6"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {/* Context */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Context
              </h2>
              <div className="space-y-4 text-gray-700">
                {formatText(adr.context)}
              </div>
            </div>

            {/* Decision */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Decision
              </h2>
              <div className="space-y-4 text-gray-700">
                {formatText(adr.decision)}
              </div>
            </div>

            {/* Alternatives */}
            {adr.alternatives && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Alternatives Considered
                </h2>
                <div className="space-y-4 text-gray-700">
                  {formatText(adr.alternatives)}
                </div>
              </div>
            )}

            {/* Consequences */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Consequences
              </h2>
              <div className="space-y-4 text-gray-700">
                {formatText(adr.consequences)}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Status */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Status
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span className="inline-block rounded-lg border border-green-300 bg-green-100 px-2 py-1 text-xs font-medium text-gray-800">
                    {adr.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{adr.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Number:</span>
                  <span>{adr.number}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

