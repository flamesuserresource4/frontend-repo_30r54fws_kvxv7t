import { useEffect, useRef, useState } from 'react'

export default function Counter({ from=0, to=100, duration=1200, reduceMotion=false, className='' }){
  const [value, setValue] = useState(reduceMotion ? to : from)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(()=>{
    if(reduceMotion){ setValue(to); return }
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting && !started.current){
          started.current = true
          const start = performance.now()
          const frame = (now)=>{
            const t = Math.min(1, (now - start)/duration)
            const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
            const current = Math.round(from + (to - from) * eased)
            setValue(current)
            if(t < 1) requestAnimationFrame(frame)
          }
          requestAnimationFrame(frame)
        }
      })
    }, { threshold: 0.3 })
    obs.observe(el)
    return ()=> obs.disconnect()
  }, [from, to, duration, reduceMotion])

  return <span ref={ref} className={className}>{value}</span>
}
