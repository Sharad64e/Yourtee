import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductQuickView from '../components/ProductQuickView'
import { allProducts, themeCollections, type Product, type ThemeKey } from '../data'

const perks = [
  { value: '10%', label: 'Cashback on app orders' },
  { value: '30', label: 'Days easy returns & exchanges' },
  { value: 'Fast', label: 'Free & fast shipping' },
]

function ThemeMerchPage({ themeKey }: { themeKey: ThemeKey }) {
  const collection = themeCollections.find((theme) => theme.key === themeKey)
  const products = allProducts.filter((product) => product.theme === themeKey)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  if (!collection || products.length === 0) {
    return <Navigate to="/themes" replace />
  }

  const newArrivals = products.slice(0, 4)
  const latestDrops = products.slice(4)

  return (
    <div className="bg-white text-[#1d1714]">
      <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />

      <section className="relative overflow-hidden bg-[#080504] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <img
          src={collection.image}
          alt={collection.title}
          className="absolute inset-y-0 right-0 h-full w-full object-contain object-right opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="relative max-w-[600px]">
          <p className="text-xs font-black uppercase tracking-[0.35em]" style={{ color: collection.accent }}>
            Theme merch session
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
            {collection.title}
            <span className="block" style={{ color: collection.accent }}>
              merch drop
            </span>
          </h1>
          <p className="mt-10 text-base leading-7 text-white/80 sm:text-lg">{collection.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#latest-drops"
              className="border px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
              style={{ borderColor: collection.accent, backgroundColor: collection.accent }}
            >
              Shop now
            </a>
            <Link
              to={`/shop?theme=${collection.key}`}
              className="border border-white/70 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#111]"
            >
              Filter shop
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <h2 className="text-left text-3xl font-black uppercase tracking-[0.02em] text-[#1d1714]">
          New Arrivals
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
          ))}
        </div>
      </section>

      <section className="mx-5 bg-[#fffaf2] px-5 py-6 sm:mx-8 lg:mx-16">
        <div className="grid gap-5 text-center sm:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.label} className="flex items-center justify-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center border border-[#1d1714] bg-white text-lg font-black text-[#1d1714]">
                {perk.value}
              </span>
              <p className="max-w-40 text-left text-base font-black leading-5 text-[#1d1714]">{perk.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="latest-drops" className="px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <h2 className="text-left text-3xl font-black uppercase tracking-[0.02em] text-[#1d1714]">
          Latest Drops
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {latestDrops.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ThemeMerchPage
