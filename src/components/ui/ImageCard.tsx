import type { ImageCardData } from '../../data/home'
import TextLink from './TextLink'

export default function ImageCard({ title, description, image, alt, to, tag }: ImageCardData) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-primary/30 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_44px_-26px_rgba(108,44,145,0.4)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={alt}
          width={900}
          height={675}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            {tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>
        <TextLink to={to} className="mt-6">
          Learn More
        </TextLink>
      </div>
    </article>
  )
}
