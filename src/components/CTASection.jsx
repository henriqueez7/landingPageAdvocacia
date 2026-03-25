import Reveal from './Reveal'
import styles from './CTASection.module.css'

function CTASection() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.eyebrow}>Atendimento juridico de alto nivel</p>
              <h2 className={styles.title}>
                Fale com um advogado preparado para defender seus interesses com
                estrategia e excelencia.
              </h2>
            </div>

            <a href="#contato" className={styles.button}>
              Entrar em contato
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default CTASection
