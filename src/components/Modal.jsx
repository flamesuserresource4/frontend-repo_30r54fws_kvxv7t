import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, onClose }){
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} aria-modal="true" role="dialog" aria-labelledby="cta-title">
          <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
          <motion.div initial={{scale:0.95, opacity:0, y:10}} animate={{scale:1, opacity:1, y:0}} exit={{scale:0.98, opacity:0}} transition={{ type:'spring', stiffness:260, damping:22 }} className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <h3 id="cta-title" className="text-xl font-bold text-slate-900">Get your free strategy session</h3>
            <p className="mt-2 text-slate-600">Tell us about your goals and we’ll craft an action plan.</p>
            <form className="mt-4 grid gap-3">
              <label className="grid gap-1">
                <span className="text-sm text-slate-700">Name</span>
                <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Your name" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-700">Email</span>
                <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="you@company.com" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-700">Message</span>
                <textarea className="rounded-xl border border-slate-300 px-3 py-2" placeholder="What are you aiming to achieve?" rows={4} />
              </label>
              <button type="button" onClick={onClose} className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 font-semibold shadow-lg shadow-blue-600/30">Request Session</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
