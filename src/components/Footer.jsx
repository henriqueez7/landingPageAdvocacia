import { Mail, MapPin, Phone } from 'lucide-react'
import styles from './Footer.module.css'
import Reveal from './Reveal'

function Footer({ links }) {
  return (
    <footer id="contato" className={styles.footer}>
      <Reveal className={styles.content}>
        <div className={styles.column}>
          <p className={styles.title}>Links rapidos</p>
          <div className={styles.links}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <p className={styles.title}>Contato</p>
          <div className={styles.contactList}>
            <span className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              contato@pedrohenrique.adv.br
            </span>
            <span className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              +55 (11) 99999-9999
            </span>
            <span className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              Av. Ficticia, 1500, Conj. 1201, Sao Paulo - SP
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal className={styles.bottom} delay={0.08} y={18}>
        <span className={styles.signature}>
          Landing page para portfolio, criada por{' '}
          <a
            href="https://www.linkedin.com/in/henriqueez7/"
            target="_blank"
            rel="noreferrer"
            className={styles.signatureLink}
          >
            Henrique
          </a>
          .
        </span>
      </Reveal>
    </footer>
  )
}

export default Footer
