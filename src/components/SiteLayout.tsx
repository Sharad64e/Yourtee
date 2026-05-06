import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import CartPanel from './CartPanel'
import { useCart } from './CartContext'
import { useWishlist } from './WishlistContext'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/themes', label: 'Themes' },
  { to: '/account', label: 'Account' },
]

function SiteLayout() {
  const { itemCount, toggleCart } = useCart()
  const { wishlistCount } = useWishlist()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `border-b-2 pb-1 transition-colors duration-200 hover:border-[#c7352a] hover:text-[#c7352a] ${
      isActive ? 'border-[#c7352a] text-[#c7352a]' : 'border-transparent'
    }`

  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#1d1714]">
      <CartPanel />

      <header className="sticky top-0 z-30 border-b border-[#e7ddd1] bg-[#fffaf2]/95 backdrop-blur">
        <div className="flex items-center justify-between px-5 py-3 sm:px-8 lg:px-16">
          <NavLink to="/" className="shrink-0">
            <p className="font-display text-xl uppercase">yourtee</p>
            <p className="hidden text-[10px] font-bold uppercase tracking-[0.28em] text-[#6e625b] sm:block">
              Modern retro essentials
            </p>
          </NavLink>
          <nav className="hidden items-center gap-4 text-[11px] font-black uppercase tracking-[0.16em] lg:flex xl:gap-7">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <NavLink
              to="/account"
              className="hidden border border-[#1d1714] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] transition hover:border-[#c7352a] hover:text-[#c7352a] sm:block"
            >
              Wish ({wishlistCount})
            </NavLink>
            <button
              type="button"
              onClick={toggleCart}
              className="border border-[#16110f] bg-[#16110f] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#c7352a]"
            >
              Cart ({itemCount})
            </button>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="border border-[#16110f] px-3 py-2 text-sm font-black lg:hidden"
            >
              {isMenuOpen ? 'X' : 'Menu'}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="grid gap-1 border-t border-[#e7ddd1] px-5 py-4 text-xs font-black uppercase tracking-[0.18em] sm:px-8 lg:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setIsMenuOpen(false)}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </header>

      <main className="relative w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default SiteLayout
