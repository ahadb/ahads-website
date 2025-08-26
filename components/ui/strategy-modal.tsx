'use client'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { useState } from 'react'

interface StrategyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StrategyModal({ isOpen, onClose }: StrategyModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectNeeds: '',
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectNeeds: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      projectNeeds: '',
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.projectNeeds.trim()) {
      newErrors.projectNeeds = 'Project needs is required'
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => error === '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.')
        // Clear form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          projectNeeds: '',
        })
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose()
          setSubmitMessage('')
        }, 2000)
      } else {
        setSubmitMessage(`Error: ${result.error || 'Something went wrong'}`)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitMessage('Error: Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

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
              src="/strategy.png"
              alt="AI Strategy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-normal text-white">
                  AI Strategy Consulting
                </h2>
                <p className="mt-1 text-sm text-gray-200">
                  Transform your business with comprehensive AI roadmaps and
                  strategic planning
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
                Strategic AI Services
              </h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-gray-200 p-3">
                  <h4 className="mb-1 text-sm font-medium text-gray-900">
                    AI Readiness Assessment
                  </h4>
                  <p className="text-sm text-gray-600">
                    Fast review of your business and tools. I’ll tell you where
                    AI can help, what’s missing, and the quick wins you can
                    implement right away. (1–2 days turnaround)
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-3">
                  <h4 className="mb-1 text-sm font-medium text-gray-900">
                    Strategic Roadmap Sprint
                  </h4>
                  <p className="text-sm text-gray-600">
                    A short, focused workshop to map out your goals, pick the
                    right AI solutions, and create a clear step-by-step plan to
                    get results fast. (2–3 days)
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-3">
                  <h4 className="mb-1 text-sm font-medium text-gray-900">
                    Ongoing Advisory
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ongoing monthly support — I’ll review progress, answer
                    questions, and guide you as you roll out AI in your
                    business.
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
                  <span className="text-blue-500">⚡</span>
                  <span>Fast delivery - results in days, not months</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🎯</span>
                  <span>Focused expertise without corporate overhead</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">💰</span>
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
