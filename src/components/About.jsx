import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import apresentacaoImage from '../assets/apresentacao.png'
import styles from './About.module.css'

function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.content}>
        <Reveal>
          <div className={styles.mediaFrame}>
            <img
              src={apresentacaoImage}
              alt="Imagem de apresentacao do escritorio"
              className={styles.mediaImage}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), 34rem"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className={styles.textContent}>
            <SectionHeading
              eyebrow="Apresentacao"
              title="Advocacia orientada por estrategia, consistencia tecnica e uma relacao profissional pautada por confianca."
              description="Pedro Henrique atua com foco consultivo e contencioso, oferecendo acompanhamento juridico estruturado para clientes que buscam seguranca, previsibilidade e excelencia no tratamento de demandas sensiveis e patrimoniais."
            />

            <div className={styles.pillars}>
              <div className={styles.pillarCard}>
                <p className={styles.pillarLabel}>Atendimento</p>
                <p className={styles.pillarText}>
                  Consultivo e contencioso com postura institucional e comunicacao clara.
                </p>
              </div>
              <div className={styles.pillarCard}>
                <p className={styles.pillarLabel}>Estrutura</p>
                <p className={styles.pillarText}>
                  Conducao organizada, com leitura tecnica, acompanhamento e criterio.
                </p>
              </div>
              <div className={styles.pillarCard}>
                <p className={styles.pillarLabel}>Compromisso</p>
                <p className={styles.pillarText}>
                  Defesa qualificada dos interesses do cliente com seriedade e discricao.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
