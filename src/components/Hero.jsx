import { useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero({ onOpenCTA, reduceMotion }) {
  const prefersReduced = useReducedMotion()
  const shouldReduce = reduceMotion || prefersReduced

  useEffect(()=>{
    // no-op, just to ensure hydration of prefersReduced
  },[prefersReduced])

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
    }
  }
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show" aria-live="polite">
          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Elevate your business with premium digital experiences
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-lg text-slate-600 max-w-xl">
            We craft high-converting, animated websites that feel fast, look world‑class, and drive growth.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <button onClick={onOpenCTA} className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 font-semibold shadow-xl shadow-blue-600/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Get Started
            </button>
            <a href="#services" className="px-6 py-3 rounded-2xl border border-slate-300 text-slate-700 hover:bg-white/60 backdrop-blur transition-colors">Explore Services</a>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              {label:'Projects', value:'500+'},
              {label:'Avg. ROI', value:'3.2x'},
              {label:'Uptime', value:'99.98%'}
            ].map((stat)=> (
              <div key={stat.label} className="rounded-2xl bg-white/70 backdrop-blur p-4 shadow-sm">
                <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative h-[420px] lg:h-[520px]">
          {!shouldReduce ? (
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          ) : (
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200" aria-hidden />
          )}
        </div>
      </div>
    </section>
  )
}
