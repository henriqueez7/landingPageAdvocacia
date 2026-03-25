import { motion as Motion, useReducedMotion } from 'framer-motion'

function Reveal({ children, className = '', delay = 0, y = 30 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
      }
    >
      {children}
    </Motion.div>
  )
}

export default Reveal
