import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__logo">
            ROOL<span>FiX</span>
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación de pie de página">
          <ul>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#trabajos">Trabajos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>

        <nav className="footer__legal" aria-label="Enlaces legales">
          <ul>
            <li>
              <a href="#">Aviso legal</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
            <li>
              <a href="#">Política de cookies</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>© {YEAR} ROOLFiX</p>
        <p className="footer__legal-note">
          [POR DEFINIR] Textos legales pendientes de redactar con la información real de la empresa.
        </p>
      </div>
    </footer>
  )
}
