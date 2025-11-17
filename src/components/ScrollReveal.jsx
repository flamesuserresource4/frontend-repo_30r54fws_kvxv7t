import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function ScrollReveal({ children, className = '', amount = 0.2, delay = 0 }) {
  const controls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start('show')
        }
      })
    }, { threshold: amount })
    obs.observe(el)
    return () => obs.disconnect()
  }, [controls, amount])

  const variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
