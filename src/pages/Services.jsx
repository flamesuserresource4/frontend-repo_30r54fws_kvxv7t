import ScrollReveal from '../components/ScrollReveal'

export default function Services(){
  const services = [
    { title: 'Brand & Identity', text: 'Foundations that feel premium and memorable.' },
    { title: 'Web Experience', text: 'Animated sites crafted for speed and conversion.' },
    { title: 'E‑commerce', text: 'High-performing shopping flows with subtle micro‑UX.' },
    { title: 'SEO & Performance', text: 'Score higher, rank faster, convert better.' },
    { title: 'Integrations', text: 'Payments, CRM, analytics — all wired up right.' },
    { title: 'Care & Growth', text: 'Iterative improvements that compound results.' },
  ]
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">Services</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">Everything you need to launch and grow with confidence.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i)=> (
            <ScrollReveal key={s.title}>
              <div className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-transform will-change-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 grid place-content-center font-bold">{i+1}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.text}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">Learn more<span aria-hidden>→</span></button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
