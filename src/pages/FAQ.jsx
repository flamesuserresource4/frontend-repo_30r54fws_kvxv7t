export default function FAQ(){
  const faqs = [
    { q:'Do you support custom designs?', a:'Absolutely. We craft bespoke visuals and motion tailored to your brand.' },
    { q:'How fast can we launch?', a:'MVPs launch in 2–4 weeks depending on scope.' },
    { q:'Will this affect performance?', a:'We prioritize GPU‑friendly transforms and provide reduced‑motion fallbacks.' },
  ]
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">FAQ</h1>
        <div className="mt-8 divide-y divide-slate-200 rounded-3xl bg-white ring-1 ring-slate-200">
          {faqs.map((f,i)=> (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-slate-900">{f.q}<span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌃</span></summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
