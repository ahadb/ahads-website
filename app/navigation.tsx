'use client'
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="mb-4 flex justify-end">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-sm text-gray-600 transition-colors hover:text-gray-900"
        >
          Home
        </Link>
        <Link
          href="/case-studies"
          className="text-sm text-gray-600 transition-colors hover:text-gray-900"
        >
          Outcomes
        </Link>
        <Link
          href="/blog"
          className="text-sm text-gray-600 transition-colors hover:text-gray-900"
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}
