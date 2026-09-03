import { testimonials } from '../data/testimonials'
import { StarIcon } from './icons'
import Reveal from './Reveal'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section id="opiniones" className="section testimonials">
      <div className="container">
        <Reveal as="div" className="section-header section-header--center">
          <p className="section-eyebrow">Opiniones</p>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal as="div" className="testimonials__empty">
            <p>
              Todavía no hemos publicado reseñas reales aquí. En cuanto dispongamos de opiniones verificadas de
              clientes de ROOLFiX, se mostrarán en esta sección.
            </p>
          </Reveal>
        ) : (
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <Reveal as="figure" key={testimonial.id} delay={index * 70} className="testimonial-card">
                {testimonial.rating && (
                  <div className="testimonial-card__stars" aria-label={`${testimonial.rating} de 5 estrellas`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        fill={i < testimonial.rating! ? 'currentColor' : 'none'}
                        className={i < testimonial.rating! ? 'is-filled' : ''}
                      />
                    ))}
                  </div>
                )}
                <blockquote className="testimonial-card__quote">“{testimonial.quote}”</blockquote>
                <figcaption className="testimonial-card__author">
                  {testimonial.author}
                  {testimonial.company && <span> · {testimonial.company}</span>}
                </figcaption>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
