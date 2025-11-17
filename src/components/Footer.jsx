export default function Footer(){
  return (
    <footer className="mt-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-extrabold text-slate-900 text-xl">BlueWave</div>
          <p className="text-slate-600 mt-2">Premium, animated web experiences that convert.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Company</div>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><a href="/about" className="hover:text-slate-900">About</a></li>
            <li><a href="/services" className="hover:text-slate-900">Services</a></li>
            <li><a href="/pricing" className="hover:text-slate-900">Pricing</a></li>
            <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Legal</div>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><a href="/privacy" className="hover:text-slate-900">Privacy</a></li>
            <li><a href="/terms" className="hover:text-slate-900">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Newsletter</div>
          <p className="text-slate-600 mt-2">Get fresh tips monthly.</p>
          <form className="mt-3 flex gap-2">
            <input aria-label="Email" className="flex-1 rounded-xl border border-slate-300 px-3 py-2" placeholder="you@company.com" />
            <button className="rounded-xl bg-blue-600 text-white px-4">Join</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-slate-500 text-sm">© {new Date().getFullYear()} BlueWave Inc. All rights reserved.</div>
    </footer>
  )
}
