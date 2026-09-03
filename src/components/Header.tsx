import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './icons'
import './Header.css'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#contacto', label: 'Contacto' },
]

const APP_URL = 'https://app.roolfix.com'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__bar">
        <a href="#inicio" className="header__logo" onClick={() => setIsMenuOpen(false)}>
          ROOL<span>FiX</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href={APP_URL} className="header__login">
            Iniciar sesión
          </a>
          <a href="#contacto" className="btn btn-primary header__cta">
            Contactar
          </a>
        </div>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="mobile-nav" className={`header__mobile ${isMenuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Navegación móvil">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__mobile-actions">
          <a href="#contacto" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            Contactar
          </a>
          <a href={APP_URL} className="btn btn-secondary">
            Iniciar sesión
          </a>
        </div>
      </div>
    </header>
  )
}
