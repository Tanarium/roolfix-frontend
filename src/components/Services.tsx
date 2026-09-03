import { services } from '../data/services'
import Reveal from './Reveal'
import './Services.css'

export default function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <Reveal as="div" className="section-header section-header--center">
          <p className="section-eyebrow">Nuestros servicios</p>
          <h2 className="section-title">Todo lo que tu espacio necesita, en un solo proveedor</h2>
          <p className="section-subtitle">
            Adaptamos cada servicio a las necesidades reales de tu vivienda, comunidad o negocio.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal as="article" key={service.id} delay={index * 70} className="service-card">
                <div className="service-card__icon">
                  <Icon />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <a href="#contacto" className="service-card__link">
                  Pedir información
                </a>
              </Reveal>
            )
          })}

          <Reveal as="article" delay={services.length * 70} className="service-card service-card--muted">
            <h3 className="service-card__title">¿Necesitas algo distinto?</h3>
            <p className="service-card__desc">
              Cuéntanos qué necesitas y te decimos si podemos ayudarte.
            </p>
            <a href="#contacto" className="service-card__link">
              Consultar servicio
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
