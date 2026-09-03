import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  delay?: number
}

/** Fades and slides children in the first time they enter the viewport. */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', style, ...rest }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
