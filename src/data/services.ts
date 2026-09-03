import type { ComponentType, SVGProps } from 'react'
import { BroomIcon, BuildingIcon, SparklesIcon, WrenchIcon } from '../components/icons'

export interface Service {
  id: string
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

// Punto de partida tomado de CLAUDE.md. Ajustar título/descripción a los
// servicios reales confirmados por ROOLFiX; añadir nuevos servicios aquí
// sin tener que tocar el componente Services.
export const services: Service[] = [
  {
    id: 'limpieza',
    title: 'Limpieza',
    description:
      'Limpieza profesional y mantenimiento de espacios para garantizar instalaciones cuidadas y agradables.',
    icon: BroomIcon,
  },
  {
    id: 'limpiezas-especiales',
    title: 'Limpiezas especiales',
    description: 'Limpiezas a fondo, post-construcción, reformas y trabajos puntuales.',
    icon: SparklesIcon,
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    description: 'Mantenimiento general y resolución de necesidades habituales de las instalaciones.',
    icon: WrenchIcon,
  },
  {
    id: 'comunidades',
    title: 'Comunidades',
    description: 'Servicios destinados a comunidades de propietarios y zonas comunes.',
    icon: BuildingIcon,
  },
]
