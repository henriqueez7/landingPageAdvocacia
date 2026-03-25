import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import cardContrato from '../assets/cardContrato.png'
import cardTrabalhista from '../assets/CardTrabalhista.png'
import cardDigital from '../assets/cardDigital.png'
import styles from './ArticlesSection.module.css'

const articleImages = {
  contratos: cardContrato,
  trabalhista: cardTrabalhista,
  digital: cardDigital,
}

function ArticlesSection({ items }) {
  return (
    <section id="artigos" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.panel}>
          <Reveal>
            <div className={styles.header}>
              <p className={styles.eyebrow}>Artigos</p>
              <h2 className={styles.heading}>
                Conteudo juridico que reforca autoridade, clareza e orientacao estrategica.
              </h2>
              <p className={styles.description}>
                Uma presenca institucional forte tambem se constroi com informacao
                qualificada e leitura atual das principais demandas do cliente.
              </p>
            </div>
          </Reveal>

          <div className={styles.grid}>
            {items.map((article, index) => (
              <Reveal key={article.title} delay={index * 0.08}>
                <article className={styles.card}>
                  <div className={styles.visual}>
                    {article.image ? (
                      <img
                        src={articleImages[article.image]}
                        alt={article.title}
                        className={styles.visualImage}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 2rem), 24rem"
                      />
                    ) : null}
                  </div>
                  <div className={styles.body}>
                    <p className={styles.category}>{article.category}</p>
                    <h3 className={styles.title}>{article.title}</h3>
                    <p className={styles.text}>{article.excerpt}</p>
                    <a href="#contato" className={styles.link}>
                      Ler mais
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticlesSection
