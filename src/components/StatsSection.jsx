import Reveal from './Reveal'
import styles from './StatsSection.module.css'

function StatsSection({ items }) {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <div className={styles.item}>
                <strong className={styles.value}>{item.value}</strong>
                <p className={styles.label}>{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
