import { CheckIcon } from './icons'
import Reveal from './Reveal'
import './WhyRoolfix.css'

const REASONS = [
  {
    title: 'Atención personalizada',
    description: 'Cada espacio es distinto, así que adaptamos el servicio a lo que realmente necesitas, no a un plan estándar.',
  },
  {
    title: 'Personal de confianza',
    description: 'Un equipo estable que conoce tus instalaciones y con el que puedes contar servicio tras servicio.',
  },
  {
    title: 'Seguimiento del servicio',
    description: 'No desaparecemos después de facturar: hacemos seguimiento para asegurarnos de que todo queda como esperabas.',
  },
  {
    title: 'Flexibilidad',
    description: 'Nos ajustamos a horarios, frecuencias y necesidades puntuales sin complicarte la gestión.',
  },
  {
    title: 'Cuidado por los detalles',
    description: 'Prestamos atención a lo pequeño, porque es lo que marca la diferencia entre un espacio limpio y un espacio cuidado.',
  },
  {
    title: 'Rapidez de respuesta',
    description: 'Cuando surge un imprevisto, respondemos rápido para que tu instalación no se quede desatendida.',
  },
]

export default function WhyRoolfix() {
  return (
    <section id="por-que-roolfix" className="section section--soft why">
      <div className="container">
        <Reveal as="div" className="section-header section-header--center">
          <p className="section-eyebrow">¿Por qué ROOLFiX?</p>
          <h2 className="section-title">Trabajamos para que no tengas que preocuparte</h2>
          <p className="section-subtitle">Estas son las razones por las que nuestros clientes confían en nosotros.</p>
        </Reveal>

        <div className="why__grid">
          {REASONS.map((reason, index) => (
            <Reveal as="div" key={reason.title} delay={index * 60} className="why__item">
              <span className="why__icon">
                <CheckIcon />
              </span>
              <div>
                <h3 className="why__title">{reason.title}</h3>
                <p className="why__desc">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
