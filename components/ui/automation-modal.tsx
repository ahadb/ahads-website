'use client'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { useState } from 'react'

interface AutomationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AutomationModal({
  isOpen,
  onClose,
}: AutomationModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-[10000] w-full max-w-xl border-2 border-black bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Image Background */}
          <div className="relative h-32 w-full overflow-hidden">
            <img
              src="/automation.png"
              alt="Automation & Workflows"
              className="h-full w-full object-cover blur-[0.5px]"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-normal text-white">
                  Automation & Workflows
                </h2>
                <p className="mt-1 text-sm text-gray-200">
                  Build & Implementation Packages — From Idea to Live MVP
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-white transition-colors hover:bg-white/20 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 p-6">
            {/* Services Overview */}
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-900">
                Build & Implementation Packages
              </h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-gray-200 p-3">
                  <h4 className="mb-1 text-sm font-medium text-gray-900">
                    1. Process Automation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Automate repetitive tasks and workflows using Zapier,
                    Make.com, and custom integrations.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-3">
                  <h4 className="mb-1 text-sm font-medium text-gray-900">
                    2. AI-Powered Workflows
                  </h4>
                  <p className="text-sm text-gray-600">
                    Build intelligent automation systems that make decisions and
                    handle complex processes.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-3">
                  <h4 className="mb-1 text-sm font-medium text-gray-900">
                    3. API Integrations
                  </h4>
                  <p className="text-sm text-gray-600">
                    Connect different tools and systems to create seamless data
                    flows and workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Solo Consulting */}
            <div className="rounded-lg bg-gray-50 p-3">
              <h4 className="mb-2 text-sm font-medium text-gray-900">
                Why Solo Consulting?
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">⚡</span>
                  <span>Fast delivery - results in days, not months</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">🎯</span>
                  <span>Focused expertise without corporate overhead</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">💰</span>
                  <span>Enterprise-level expertise at consultant rates</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
