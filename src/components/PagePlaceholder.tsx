interface PagePlaceholderProps {
  title: string
}

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return <h1>{title}</h1>
}
