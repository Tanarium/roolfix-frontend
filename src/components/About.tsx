import logo from '../assets/logo/logo.png'
import Reveal from './Reveal'
import './About.css'

export default function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about__grid">
        <Reveal as="div" className="about__image">
          <img src={logo} alt="Logo de ROOLFiX" />
        </Reveal>

        <Reveal as="div" delay={100} className="about__content">
          <p className="section-eyebrow">Sobre ROOLFiX</p>
          <h2 className="section-title">Personas cuidando espacios, no solo tareas por completar</h2>
          <p className="about__text">
            En ROOLFiX entendemos la limpieza y el mantenimiento como un servicio de cercanía: escuchamos lo que
            necesita cada cliente y trabajamos para que el resultado se note de verdad, no solo sobre el papel.
          </p>
          <p className="about__text">
            Creemos en el trato directo, en cumplir lo que prometemos y en construir relaciones de confianza a
            largo plazo con cada comunidad, negocio o particular con el que trabajamos.
          </p>

          <div className="about__placeholder-note">
            [POR DEFINIR] Historia de la empresa, filosofía específica y forma de trabajar — pendiente de
            información facilitada por ROOLFiX.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
