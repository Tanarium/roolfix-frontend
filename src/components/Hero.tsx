import heroImage from '../assets/images/hero.jpeg'
import Reveal from './Reveal'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <Reveal className="hero__content">
          <p className="section-eyebrow">Limpieza y mantenimiento profesional</p>
          <h1 className="hero__title">Cuidamos cada espacio como si fuera nuestro.</h1>
          <p className="hero__lead">
            Servicios de limpieza, mantenimiento y cuidado de instalaciones para comunidades y empresas que
            quieren un espacio siempre en las mejores condiciones, con un equipo de confianza detrás.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn-primary">
              Solicitar presupuesto
            </a>
            <a href="#servicios" className="btn btn-secondary">
              Conocer nuestros servicios
            </a>
          </div>
        </Reveal>

        <Reveal as="div" delay={120} className="hero__media">
          <img
            className="hero__image"
            src={heroImage}
            alt="Piscina y zona ajardinada de una comunidad mantenida por ROOLFiX"
            fetchPriority="high"
          />
        </Reveal>
      </div>
    </section>
  )
}
