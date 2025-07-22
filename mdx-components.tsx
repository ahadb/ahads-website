import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    table: (props) => (
      <table
        className="my-4 w-full table-auto border-collapse border border-gray-300 text-sm"
        {...props}
      />
    ),
    thead: (props) => <thead className="bg-gray-800" {...props} />,
    tbody: (props) => <tbody {...props} />,
    tr: (props) => <tr className="border-b" {...props} />,
    th: (props) => (
      <th className="border px-3 py-2 text-left font-medium" {...props} />
    ),
    td: (props) => <td className="border px-3 py-2" {...props} />,
  }
}
