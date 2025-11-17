import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Pricing(){
  const [yearly, setYearly] = useState(true)
  const plans = [
    { name:'Starter', priceM: 59, features:['Beautiful landing page','Basic animations','Email support'] },
    { name:'Growth', priceM: 129, features:['Multi‑page site','Advanced animations','Priority support'] },
    { name:'Scale', priceM: 249, features:['Custom components','Integrations','Success manager'] },
  ]
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Simple, transparent pricing</h1>
          <p className="mt-3 text-slate-600">Choose monthly or save 20% yearly.</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-slate-100 p-1">
            <button onClick={()=>setYearly(false)} className={`px-4 py-2 rounded-full ${!yearly? 'bg-white shadow': ''}`}>Monthly</button>
            <button onClick={()=>setYearly(true)} className={`px-4 py-2 rounded-full ${yearly? 'bg-white shadow': ''}`}>Yearly</button>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, i)=> {
            const price = yearly ? Math.round(p.priceM*12*0.8) : p.priceM
            const suffix = yearly ? '/yr' : '/mo'
            return (
              <ScrollReveal key={p.name}>
                <div className={`rounded-3xl p-6 ring-2 ${i===1? 'ring-blue-500 bg-blue-50' : 'ring-slate-200 bg-white'} shadow-sm transition`}> 
                  <div className="flex items-baseline justify-between">
                    <div className="text-lg font-semibold text-slate-900">{p.name}</div>
                    {i===1 && <span className="text-xs font-bold text-blue-700">Popular</span>}
                  </div>
                  <div className="mt-4 text-4xl font-extrabold text-slate-900">${price}<span className="text-base font-medium text-slate-500">{suffix}</span></div>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {p.features.map(f=> <li key={f}>• {f}</li>)}
                  </ul>
                  <button className={`mt-6 w-full rounded-xl px-4 py-3 font-semibold ${i===1? 'bg-blue-600 text-white shadow-blue-600/30 shadow-lg' : 'bg-slate-900 text-white'}`}>Choose {p.name}</button>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>
    </div>
  )
}
