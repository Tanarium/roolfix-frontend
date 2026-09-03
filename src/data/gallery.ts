import gallery1 from '../assets/images/gallery/gallery-1.jpeg'
import gallery2 from '../assets/images/gallery/gallery-2.jpeg'
import gallery3 from '../assets/images/gallery/gallery-3.jpeg'
import gallery4 from '../assets/images/gallery/gallery-4.jpeg'
import gallery5 from '../assets/images/gallery/gallery-5.jpeg'

export interface GalleryItem {
  id: string
  category: string
  image: string
}

// Añadir nuevos elementos aquí para ampliar la galería sin tocar el componente.
export const galleryItems: GalleryItem[] = [
  { id: 'comunidades-1', category: 'Comunidades', image: gallery1 },
  { id: 'comunidades-2', category: 'Comunidades', image: gallery2 },
  { id: 'comunidades-3', category: 'Comunidades', image: gallery3 },
  { id: 'comunidades-4', category: 'Comunidades', image: gallery4 },
  { id: 'comunidades-5', category: 'Comunidades', image: gallery5 },
]
