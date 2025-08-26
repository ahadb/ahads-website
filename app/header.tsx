'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="relative mb-8 flex items-center">
      {/* Diagonal line pattern for header */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        // style={{
        //   backgroundImage: `repeating-linear-gradient(
        //     45deg,
        //     transparent,
        //     transparent 8px,
        //     rgb(113 113 122) 8px,
        //     rgb(113 113 122) 10px
        //   )`,
        // }}
      />
      <div className="relative z-10 flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-gray-300">
            <Image
              src="/ahad-smile-profile.png"
              alt="Ahad Bokhari"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <Link
              href="/"
              className="text-3xl font-bold text-gray-900 transition-colors hover:text-blue-600"
            >
              Ahad Bokhari
            </Link>
            <p className="text-lg font-medium text-gray-500">
              Gen AI & Cloud Engineering Consultant
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
