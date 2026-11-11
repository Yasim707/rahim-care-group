interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  id?: string
  invert?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  id,
  invert = false,
}: SectionHeadingProps) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
            invert ? 'text-primary' : 'text-secondary'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          invert ? 'text-white' : 'text-secondary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${invert ? 'text-white/80' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
