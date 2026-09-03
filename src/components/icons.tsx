import type { SVGProps } from 'react'

/**
 * Small hand-authored line-icon set (stroke-based, 24x24, currentColor) so the
 * project doesn't need an icon-library dependency. Keep additions in this
 * same visual style: 1.8 stroke width, rounded caps/joins, no fills.
 */
const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M11 4l1.2 3.4L15.6 8.6 12.2 9.8 11 13.2 9.8 9.8 6.4 8.6 9.8 7.4 11 4z" />
      <path d="M18 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
      <path d="M4.5 15l.6 1.6L6.7 17l-1.6.6-.6 1.6-.6-1.6L2.3 17l1.6-.4.6-1.6z" />
    </svg>
  )
}

export function BroomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4L10.5 13.5" />
      <path d="M13 6.5L4 15.5c-1 1-1 2.5 0 3.5s2.5 1 3.5 0L16.5 10" />
      <path d="M9.5 12L4 20" />
      <path d="M6 20h10" />
    </svg>
  )
}

export function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 00-5.4 4.7L4 16.3V20h3.7l5.3-5.3a4 4 0 004.7-5.4l-2.6 2.6-2-2z" />
    </svg>
  )
}

export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="10" height="18" rx="1" />
      <path d="M15 9h4v12h-4" />
      <path d="M8 7h1M11 7h1M8 11h1M11 11h1M8 15h1M11 15h1" />
    </svg>
  )
}

export function DropletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5s6 6.7 6 11a6 6 0 11-12 0c0-4.3 6-11 6-11z" />
    </svg>
  )
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.2l1.3 4.5-2 1.6a12 12 0 006.4 6.4l1.6-2 4.5 1.3V19a2 2 0 01-2.2 2A16 16 0 013 6.2 2 2 0 015 4z" />
    </svg>
  )
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M4 6.5l8 6 8-6" />
    </svg>
  )
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17.5L4 20l2.6-2.9A8 8 0 1112 20a8 8 0 01-5-1.7z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5.9-1l-.3-1.3a.9.9 0 00-.9-.7l-1.2.2a5 5 0 01-2.2-2.2l.2-1.2a.9.9 0 00-.7-.9L9.2 7.6c-.5-.1-1 .3-1 .9z" />
    </svg>
  )
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  )
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} fill={props.fill ?? 'none'}>
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5z" />
    </svg>
  )
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}
