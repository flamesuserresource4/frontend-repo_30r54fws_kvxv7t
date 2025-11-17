import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import ScrollReveal from '../components/ScrollReveal'
import { motion } from 'framer-motion'

export default function Home(){
  const [open, setOpen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar onOpenCTA={()=>setOpen(true)} reduceMotion={reduceMotion} setReduceMotion={setReduceMotion} />
      <main>
        <Hero onOpenCTA={()=>setOpen(true)} reduceMotion={reduceMotion} />

        <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">What we do</h2>
            <p className="mt-2 text-slate-600">Full‑stack design and development tailored to outcomes.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i)=> (
              <ScrollReveal key={i}>
                <div className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-transform will-change-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 grid place-content-center font-bold">{i}</div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">Premium Service {i}</h3>
                  <p className="mt-1 text-slate-600">Launch faster with delightful interactions and measurable impact.</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">Learn more<span aria-hidden>→</span></button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="Workspace" className="rounded-3xl shadow-lg" loading="lazy"/>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Built for performance</h3>
                <p className="mt-2 text-slate-600">Every animation is crafted with GPU‑friendly transforms and reduced‑motion support.</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {["Fast", "Accessible", "Responsive", "Reliable"].map((t)=> (
                    <div key={t} className="rounded-2xl border border-slate-200 p-4">{t}</div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <Modal open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}
