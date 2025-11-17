import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  function onSubmit(e){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const errs = {}
    if(!data.name) errs.name = 'Please enter your name.'
    if(!data.email || !/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) errs.email = 'Enter a valid email.'
    if(!data.message) errs.message = 'Tell us a bit about your project.'
    setErrors(errs)
    if(Object.keys(errs).length===0){
      setTimeout(()=> setSent(true), 400)
    }
  }

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">Let’s talk</h1>
        <p className="mt-3 text-slate-600">Share your goals — we’ll reply within one business day.</p>
        <ScrollReveal>
          <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            {sent ? (
              <div className="flex items-center gap-3 text-green-700">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100">✓</span>
                <span>Thanks! We’ll reach out shortly.</span>
              </div>
            ) : (
              <>
                <label className="grid gap-1">
                  <span className="text-sm text-slate-700">Name</span>
                  <input name="name" className={`rounded-xl border px-3 py-2 ${errors.name? 'border-red-400' : 'border-slate-300'}`} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name? 'name-err' : undefined} />
                  {errors.name && <span id="name-err" className="text-sm text-red-600">{errors.name}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-slate-700">Email</span>
                  <input name="email" className={`rounded-xl border px-3 py-2 ${errors.email? 'border-red-400' : 'border-slate-300'}`} placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email? 'email-err' : undefined} />
                  {errors.email && <span id="email-err" className="text-sm text-red-600">{errors.email}</span>}
                </label>
                <label className="grid gap-1">
                  <span className="text-sm text-slate-700">Message</span>
                  <textarea name="message" rows={4} className={`rounded-xl border px-3 py-2 ${errors.message? 'border-red-400' : 'border-slate-300'}`} placeholder="What are you aiming to achieve?" aria-invalid={!!errors.message} aria-describedby={errors.message? 'msg-err' : undefined} />
                  {errors.message && <span id="msg-err" className="text-sm text-red-600">{errors.message}</span>}
                </label>
                <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 font-semibold shadow-lg shadow-blue-600/30">Send message</button>
              </>
            )}
          </form>
        </ScrollReveal>
      </section>
    </div>
  )
}
