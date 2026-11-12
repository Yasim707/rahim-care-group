import { useEffect } from 'react'

/**
 * Sets the document title and meta description for the current page,
 * restoring the previous values when the page unmounts.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = meta?.content

    document.title = title
    if (meta) meta.content = description

    return () => {
      document.title = previousTitle
      if (meta && previousDescription !== undefined) meta.content = previousDescription
    }
  }, [title, description])
}
