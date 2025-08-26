'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '../data'

export default function BlogPage() {
  return (
    <motion.main
      className="space-y-8"
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
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        {BLOG_POSTS.map((post, index) => (
          <motion.article
            key={post.uid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group rounded-lg border border-gray-200 p-6 transition-all duration-200 hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Link href={post.link} className="block">
                  <h2 className="mb-3 text-xl font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {post.description}
                  </p>
                </Link>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <Link
                  href={post.link}
                  className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}

        {BLOG_POSTS.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="py-12 text-center"
          >
            <div className="mb-4 text-gray-400">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-base font-medium text-gray-900">
              No blog posts yet
            </h3>
            <p className="text-gray-600">
              Check back soon for insights on AI, cloud computing, and digital
              transformation.
            </p>
          </motion.div>
        )}
      </motion.section>
    </motion.main>
  )
}
