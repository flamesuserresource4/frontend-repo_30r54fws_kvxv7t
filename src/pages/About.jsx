import ScrollReveal from '../components/ScrollReveal'

export default function About(){
  const timeline = [
    { year: '2018', title: 'Founded', text: 'We started with a mission to craft delightful digital experiences.' },
    { year: '2020', title: 'Scaled', text: 'Grew into a multi-disciplinary team delivering at speed.' },
    { year: '2023', title: 'Global', text: 'Launched projects for clients across 14 countries.' },
  ]
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">Our Story</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">We create premium, animated websites engineered for conversion and performance.</p>
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-indigo-300 rounded-full" />
          <div className="grid gap-8">
            {timeline.map((e, idx)=> (
              <ScrollReveal key={e.year}>
                <div className="relative grid sm:grid-cols-2 gap-6 items-start">
                  <div className="pl-10 sm:pl-0">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700 font-semibold">{e.year}</div>
                  </div>
                  <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="text-lg font-semibold text-slate-900">{e.title}</div>
                    <p className="mt-1 text-slate-600">{e.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
