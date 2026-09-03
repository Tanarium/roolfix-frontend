export interface Testimonial {
  id: string
  quote: string
  author: string
  company?: string
  rating?: number
}

// IMPORTANTE (ver CLAUDE.md §12): no inventar testimonios, nombres, empresas
// ni estrellas. Sustituir este array por reseñas reales cuando estén
// disponibles; mientras tanto se muestra el placeholder en Testimonials.tsx.
export const testimonials: Testimonial[] = []
