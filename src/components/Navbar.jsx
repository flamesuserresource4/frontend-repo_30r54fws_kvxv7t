import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar({ onOpenCTA, reduceMotion, setReduceMotion }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu on route change
    setOpen(false)
  }, [location.pathname])

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-xl transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900'}`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'bg-transparent'}`}
      aria-label="Main navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white shadow-lg">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg">BlueWave</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
            <NavLink to="/testimonials" className={navLinkClass}>Testimonials</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" checked={reduceMotion} onChange={(e)=>setReduceMotion(e.target.checked)} aria-label="Reduce animations" />
              Reduce Animations
            </label>
            <button onClick={onOpenCTA} className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 font-semibold shadow-lg shadow-blue-600/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Get Started
            </button>
          </div>

          <button onClick={() => setOpen(o=>!o)} className="md:hidden p-2" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/services" className={navLinkClass}>Services</NavLink>
              <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
              <NavLink to="/testimonials" className={navLinkClass}>Testimonials</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
              <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
              <div className="flex items-center gap-2 pl-1 pt-2">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" checked={reduceMotion} onChange={(e)=>setReduceMotion(e.target.checked)} aria-label="Reduce animations" />
                  Reduce Animations
                </label>
                <button onClick={onOpenCTA} className="ml-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 font-semibold shadow-lg shadow-blue-600/30">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
