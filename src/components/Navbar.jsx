import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import styles from './Navbar.module.css'

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className={styles.navbar}>
      <div className={styles.shell}>
        <a
          href="#inicio"
          className={styles.brand}
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Pedro Henrique"
            className={styles.brandLogo}
          />
        </a>

        <nav className={styles.links}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.desktopCtaWrap}>
          <a
            href="#contato"
            className={styles.cta}
            onClick={() => setIsOpen(false)}
          >
            Agende sua consulta
          </a>
        </div>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className={styles.mobilePanel}
        >
          <nav className={styles.mobileLinks}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className={styles.mobileCta}
              onClick={() => setIsOpen(false)}
            >
              Agende sua consulta
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
