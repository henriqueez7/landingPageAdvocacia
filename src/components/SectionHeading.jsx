import styles from './SectionHeading.module.css'

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={[styles.root, align === 'center' ? styles.center : ''].join(' ')}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
