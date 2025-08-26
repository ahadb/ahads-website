import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className="mb-6 text-2xl font-bold text-gray-900" {...props} />
    ),
    h2: (props) => (
      <h2 className="mb-4 text-xl font-semibold text-gray-900" {...props} />
    ),
    h3: (props) => (
      <h3 className="mb-3 text-xl font-medium text-gray-900" {...props} />
    ),
    h4: (props) => (
      <h3 className="mb-2 text-lg font-medium text-gray-900" {...props} />
    ),
    p: (props) => (
      <p className="mb-4 leading-relaxed text-gray-900" {...props} />
    ),
    ul: (props) => (
      <ul className="mb-4 ml-6 list-disc text-gray-900" {...props} />
    ),
    ol: (props) => (
      <ol className="mb-4 ml-6 list-decimal text-gray-900" {...props} />
    ),
    li: (props) => <li className="mb-2 text-gray-900" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mb-4 border-l-4 border-gray-300 pl-4 text-gray-700 italic"
        {...props}
      />
    ),
    strong: (props) => (
      <strong className="font-semibold text-gray-900" {...props} />
    ),
    em: (props) => <em className="text-gray-900 italic" {...props} />,
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
        className="my-4 w-full table-auto border-collapse border border-gray-300 text-sm text-gray-900"
        {...props}
      />
    ),
    thead: (props) => <thead className="bg-gray-800 text-white" {...props} />,
    tbody: (props) => <tbody className="text-gray-900" {...props} />,
    tr: (props) => <tr className="border-b text-gray-900" {...props} />,
    th: (props) => (
      <th
        className="border px-3 py-2 text-left font-medium text-white"
        {...props}
      />
    ),
    td: (props) => <td className="border px-3 py-2 text-gray-900" {...props} />,
  }
}
