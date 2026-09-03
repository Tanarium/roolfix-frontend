import { useState, type FormEvent } from 'react'
import { services } from '../data/services'
import { contactInfo } from '../data/contactInfo'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './icons'
import Reveal from './Reveal'
import './Contact.css'

type Status = 'idle' | 'not-configured'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  // El envío del formulario todavía no está conectado a ningún backend
  // (Formspree / Resend / Supabase / email propio — ver CLAUDE.md §15).
  // No enviar datos a ningún servicio externo hasta que se decida cuál usar.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('not-configured')
  }

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <Reveal as="div" className="section-header section-header--center">
          <p className="section-eyebrow">Contacto</p>
          <h2 className="section-title">Hablemos de lo que necesitas</h2>
          <p className="section-subtitle">
            Cuéntanos qué necesitas y te preparamos una propuesta adaptada a tu espacio.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal as="div" className="contact__info">
            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="contact__label">Teléfono</p>
                  <p className="contact__value">{contactInfo.phone}</p>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <MailIcon />
                </span>
                <div>
                  <p className="contact__label">Email</p>
                  <p className="contact__value">{contactInfo.email}</p>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <WhatsAppIcon />
                </span>
                <div>
                  <p className="contact__label">WhatsApp</p>
                  <p className="contact__value">{contactInfo.whatsapp}</p>
                </div>
              </li>
              <li>
                <span className="contact__icon">
                  <PinIcon />
                </span>
                <div>
                  <p className="contact__label">Zona de servicio</p>
                  <p className="contact__value">{contactInfo.serviceArea}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal as="div" delay={100} className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Teléfono</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="service">Servicio</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={4} required />
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Solicitar presupuesto
              </button>

              {status === 'not-configured' && (
                <p className="contact__status" role="status">
                  El formulario todavía no está conectado. Mientras tanto, contáctanos por teléfono o email.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
