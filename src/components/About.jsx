import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Building2, ShieldCheck, UserRound } from 'lucide-react'
import apresentacaoImage from '../assets/apresentacao.png'
import styles from './About.module.css'

const pillars = [
  {
    title: 'Atendimento',
    description: 'Consultivo e contencioso com postura institucional e comunicacao clara.',
    icon: UserRound,
  },
  {
    title: 'Estrutura',
    description: 'Conducao organizada, com leitura tecnica, acompanhamento e criterio.',
    icon: Building2,
  },
  {
    title: 'Compromisso',
    description: 'Defesa qualificada dos interesses do cliente com seriedade e discricao.',
    icon: ShieldCheck,
  },
]

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
              {pillars.map((pillar) => {
                const Icon = pillar.icon

                return (
                  <div key={pillar.title} className={styles.pillarCard}>
                    <div className={styles.pillarTop}>
                      <div className={styles.pillarIcon}>
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <p className={styles.pillarLabel}>{pillar.title}</p>
                    </div>
                    <p className={styles.pillarText}>{pillar.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
