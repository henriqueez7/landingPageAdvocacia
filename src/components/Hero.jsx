import { motion as Motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import advogadoImage from '../assets/advogado.png'
import styles from './Hero.module.css'

const easeOutExpo = [0.22, 1, 0.36, 1]

const textTransition = { duration: 0.8, delay: 0.85, ease: easeOutExpo }
const mediaTransition = { duration: 0.85, delay: 0.15, ease: easeOutExpo }
const frameTransition = { duration: 1.05, delay: 0.9, ease: easeOutExpo }
const cardTransition = {
  opacity: { duration: 0.7, delay: 1.05, ease: easeOutExpo },
  y: { duration: 4.8, delay: 1.2, repeat: Infinity, ease: 'easeInOut' },
}

function Hero() {
  return (
    <section id="inicio" className={styles.section}>
      <div className={styles.background}>
        <div className={styles.glow} />
        <div className={styles.wash} />
      </div>

      <div className={styles.banner}>
        <div className={styles.bannerAccent} />
        <div className={styles.content}>
          <Motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={textTransition}
            className={styles.textColumn}
          >
            <p className={styles.overline}>Atendimento juridico premium</p>

            <p className={styles.name}>Pedro Henrique</p>

            <div className={styles.actions}>
              <a href="#contato" className={styles.primaryCta}>
                Agende sua consulta
                <ArrowRight size={16} />
              </a>
              <a href="#sobre" className={styles.secondaryCta}>
                Saiba mais
              </a>
            </div>
          </Motion.div>

          <div className={styles.mediaColumn}>
            <Motion.div
              initial={{ opacity: 0, scale: 0.88, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={mediaTransition}
              className={styles.media}
            >
              <Motion.div
                initial={{ x: 0 }}
                animate={{ x: 28 }}
                transition={frameTransition}
                className={styles.mediaInner}
              >
                <div className={styles.panelShape} />
                <div className={styles.panelGlow} />
                <Motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={cardTransition}
                  className={styles.floatingCard}
                >
                  <p className={styles.floatingCardText}>
                    Atuacao juridica personalizada para pessoas e empresas que exigem
                    seriedade, clareza e acompanhamento profissional em demandas de
                    alta relevancia.
                  </p>
                </Motion.div>
                <img
                  src={advogadoImage}
                  alt="Advogado em postura profissional e confiante"
                  className={styles.image}
                  fetchPriority="high"
                  decoding="async"
                  sizes="(max-width: 639px) 25rem, (max-width: 1023px) 30rem, 49rem"
                />
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
