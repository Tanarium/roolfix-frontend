import Reveal from './Reveal'
import './Process.css'

const STEPS = [
  { number: '01', title: 'Nos cuentas lo que necesitas', description: 'Nos explicas el espacio y el servicio que buscas.' },
  { number: '02', title: 'Analizamos el espacio', description: 'Valoramos las necesidades reales de la instalación.' },
  { number: '03', title: 'Preparamos una propuesta', description: 'Te presentamos una propuesta adaptada a tu caso.' },
  { number: '04', title: 'Realizamos el servicio', description: 'Ejecutamos el trabajo con nuestro equipo de confianza.' },
  { number: '05', title: 'Hacemos seguimiento', description: 'Comprobamos que el resultado cumple lo esperado.' },
]

export default function Process() {
  return (
    <section id="proceso" className="section section--soft process">
      <div className="container">
        <Reveal as="div" className="section-header section-header--center">
          <p className="section-eyebrow">Cómo trabajamos</p>
          <h2 className="section-title">Un proceso simple, de principio a fin</h2>
        </Reveal>

        <ol className="process__list">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 70} className="process__step">
              <span className="process__number">{step.number}</span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
