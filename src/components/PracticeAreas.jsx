import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import styles from './PracticeAreas.module.css'

function PracticeAreas({ areas }) {
  return (
    <section id="atuacao" className={styles.section}>
      <div className={styles.content}>
        <Reveal>
          <SectionHeading
            eyebrow="Areas de Atuacao"
            title="Atendimento juridico abrangente, com profundidade tecnica e leitura estrategica das demandas."
            description="Uma estrutura de atuacao pensada para pessoas, empresas e relacoes patrimoniais que exigem sofisticacao, previsibilidade e defesa qualificada."
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          {areas.map((area, index) => {
            const Icon = area.icon

            return (
              <Reveal key={area.title} delay={index * 0.06}>
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.icon}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className={styles.index}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className={styles.title}>{area.title}</h3>
                  <p className={styles.text}>{area.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
