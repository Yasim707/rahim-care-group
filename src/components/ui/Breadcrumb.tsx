import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  label: string
  to?: string
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, i) => (
          <Fragment key={item.label}>
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            <li>
              {item.to ? (
                <Link to={item.to} className="transition-colors hover:text-secondary">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-secondary">
                  {item.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}
