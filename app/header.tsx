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
      <div className="relative z-10 flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-3 ring-zinc-200/5 dark:ring-white/10">
          <Image
            src="/ahadb-profile.png"
            alt="Ahad Bokhari"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <Link
            href="/"
            className="text-xl font-medium text-black dark:text-white"
          >
            Ahad Bokhari
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            AI Consultant & Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
