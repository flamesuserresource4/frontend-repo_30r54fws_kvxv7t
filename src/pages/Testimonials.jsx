import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const slides = [
  { quote: 'They transformed our website into a conversion machine. Gorgeous and fast.', name: 'Ava Carter', role: 'CMO, Northwind' },
  { quote: 'Animations feel subtle and premium — our bounce rate dropped 28%.', name: 'Liam Patel', role: 'Founder, Looply' },
  { quote: 'The best web partner we’ve worked with. Performance and polish.', name: 'Maya Kim', role: 'VP Growth, Orbit' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setIndex((i)=> (i+1)%slides.length), 5000)
    return ()=> clearInterval(id)
  },[])

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">What clients say</h1>
          <p className="mt-3 text-slate-600">Real results from real teams.</p>
        </div>
        <div className="relative mt-10">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-10 ring-1 ring-blue-100 min-h-[240px]">
            {slides.map((s, i)=> (
              <div key={s.name} className={`transition-opacity duration-700 ${i===index? 'opacity-100' : 'opacity-0 absolute inset-0 p-10'}`} aria-hidden={i!==index}>
                <blockquote className="text-2xl text-slate-900 font-semibold">“{s.quote}”</blockquote>
                <div className="mt-4 text-slate-700">{s.name} — {s.role}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2" aria-label="Testimonial controls">
            {slides.map((_, i)=> (
              <button key={i} onClick={()=>setIndex(i)} className={`h-2 w-6 rounded-full ${i===index? 'bg-blue-600' : 'bg-slate-300'}`} aria-label={`Go to slide ${i+1}`}></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
