import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface AccordionItem {
  question: string
  answer: string
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-primary/40 border-y border-primary/40">
      {items.map((item, i) => {
        const open = openIndex === i
        const buttonId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-foreground transition-colors hover:text-secondary"
              >
                {item.question}
                <ChevronDown
                  size={22}
                  aria-hidden="true"
                  className={`shrink-0 text-secondary transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-out ${
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
