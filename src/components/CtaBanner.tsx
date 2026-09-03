import Reveal from './Reveal'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <Reveal as="div">
          <h2 className="cta-banner__title">¿Necesitas un servicio de limpieza o mantenimiento?</h2>
          <p className="cta-banner__subtitle">Hablemos de lo que necesitas.</p>
        </Reveal>
        <Reveal as="div" delay={100}>
          <a href="#contacto" className="btn btn-outline-light">
            Solicitar presupuesto
          </a>
        </Reveal>
      </div>
    </section>
  )
}
