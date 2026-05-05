import { NavLink, Outlet } from 'react-router-dom'
import CartPanel from './CartPanel'
import { useCart } from './CartContext'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/lookbook', label: 'Lookbook' },
  { to: '/journal', label: 'Journal' },
]

function SiteLayout() {
  const { itemCount, toggleCart } = useCart()

  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#1d1714]">
      <div className="retro-grid pointer-events-none fixed inset-0 opacity-40" />
      <CartPanel />

      <main className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#fff8ef] shadow-[10px_10px_0_#111]">
          <header className="flex items-center justify-between border-b-2 border-black px-5 py-4 sm:px-8">
            <div>
              <p className="font-display text-2xl uppercase tracking-[-0.06em]">yourtee</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6e625b]">
                Modern retro essentials
              </p>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-black uppercase tracking-[0.2em] md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? 'border-b-2 border-black pb-1' : 'pb-1'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <div className="hidden rounded-2xl border-2 border-black bg-[#f6d25f] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] sm:block">
                Core 03
              </div>
              <button
                type="button"
                onClick={toggleCart}
                className="rounded-2xl border-2 border-black bg-[#16110f] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white"
              >
                Cart ({itemCount})
              </button>
            </div>
          </header>

          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default SiteLayout
