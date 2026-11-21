import { Fragment } from 'react'

interface EmphasisProps {
  text: string
  /** Phrases within `text` to render in bold. The wording itself is never changed. */
  phrases: string[]
  className?: string
}

/** Renders `text` verbatim, wrapping any listed phrases in <strong>. */
export default function Emphasis({ text, phrases, className = 'font-semibold text-secondary' }: EmphasisProps) {
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  if (escaped.length === 0) return <>{text}</>
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'i'))
  return (
    <>
      {parts.map((part, i) =>
        phrases.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i} className={className}>
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
