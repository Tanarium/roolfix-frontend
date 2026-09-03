import { useState, type FormEvent } from 'react'
import { services } from '../data/services'
import { contactInfo } from '../data/contactInfo'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './icons'
import Reveal from './Reveal'
import './Contact.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdeozrgp'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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

              <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Solicitar presupuesto'}
              </button>

              {status === 'success' && (
                <p className="contact__status contact__status--success" role="status">
                  ¡Gracias! Hemos recibido tu solicitud y te contactaremos pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="contact__status contact__status--error" role="status">
                  No se ha podido enviar. Contáctanos por teléfono o email mientras lo revisamos.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
