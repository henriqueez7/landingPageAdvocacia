import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import styles from './Differentials.module.css'

function Differentials({ items }) {
  return (
    <section id="diferenciais" className={styles.section}>
      <div className={styles.content}>
        <Reveal>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Uma experiencia juridica desenhada para transmitir seguranca, clareza e alto nivel de acompanhamento."
            description="Mais do que defender interesses, a proposta e oferecer previsibilidade, leitura tecnica cuidadosa e relacionamento institucional de excelencia."
          />
        </Reveal>

        <div className={styles.grid}>
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className={styles.card}>
                  <div className={styles.icon}>
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.text}>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Differentials
