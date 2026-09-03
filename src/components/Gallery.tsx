import { galleryItems } from '../data/gallery'
import Reveal from './Reveal'
import './Gallery.css'

export default function Gallery() {
  return (
    <section id="trabajos" className="section section--soft gallery">
      <div className="container">
        <Reveal as="div" className="section-header section-header--center">
          <p className="section-eyebrow">Nuestros trabajos</p>
          <h2 className="section-title">Resultados reales, no promesas</h2>
          <p className="section-subtitle">
            Una muestra de trabajos realizados por ROOLFiX. Iremos ampliando esta galería con más fotografías.
          </p>
        </Reveal>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <Reveal as="figure" key={item.id} delay={(index % 3) * 70} className="gallery__item">
              <img src={item.image} alt={item.category} loading="lazy" />
              <figcaption className="gallery__caption">{item.category}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
