'use client'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
    console.log('Input change:', name, value) // Debug log
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
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-[10000] w-full max-w-md border-2 border-black bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <div>
              <h2 className="text-2xl font-normal text-gray-900">
                Speak with us
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                We usually respond within 12 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 p-6">
            <div>
              <label
                htmlFor="firstName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                onFocus={(e) => console.log('First name focused')}
                className={`w-full rounded-md border px-2 py-0.5 text-sm text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.firstName
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full rounded-md border px-2 py-0.5 text-sm text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.lastName
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border px-2 py-0.5 text-sm text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-2 py-0.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="projectNeeds"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Project Requirements
              </label>
              <textarea
                id="projectNeeds"
                name="projectNeeds"
                rows={4}
                required
                value={formData.projectNeeds}
                onChange={handleChange}
                placeholder="Project requirements"
                className={`w-full resize-none rounded-md border px-2 py-0.5 text-sm text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.projectNeeds
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {errors.projectNeeds && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.projectNeeds}
                </p>
              )}
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`text-sm ${submitMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}
              >
                {submitMessage}
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-lg px-3 py-1.5 text-xs text-white shadow-sm transition-all duration-200 ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-gray-400'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
