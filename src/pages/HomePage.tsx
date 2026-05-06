import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductQuickView from '../components/ProductQuickView'
import { allProducts, themeCollections, type Product } from '../data'

function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const [activeThemeIndex, setActiveThemeIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const heroThemes = themeCollections.slice(0, 5)
  const activeTheme = heroThemes[activeThemeIndex] ?? heroThemes[0]
  const bestSellers = allProducts.filter((product) => product.badge).slice(0, 4)
  const newDrops = allProducts.slice(-4)

  const scrollToTheme = (index: number) => {
    const card = carouselRef.current?.querySelector<HTMLElement>(`[data-theme-index="${index}"]`)
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActiveThemeIndex(index)
  }

  const syncActiveTheme = () => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    carousel.querySelectorAll<HTMLElement>('[data-theme-index]').forEach((card) => {
      const cardBox = card.getBoundingClientRect()
      const cardCenter = cardBox.left + cardBox.width / 2
      const distance = Math.abs(carouselCenter - cardCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = Number(card.dataset.themeIndex)
      }
    })

    setActiveThemeIndex(closestIndex)
  }

  return (
    <div className="bg-[#fffaf2] text-[#1d1714]">
      <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />

      <section className="relative min-h-[calc(100vh-92px)] overflow-hidden bg-[#11100f] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-16 lg:py-16">
        <img
          src={activeTheme.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div
          className="absolute inset-0 opacity-30 transition duration-700"
          style={{
            background: `radial-gradient(circle at 72% 38%, ${activeTheme.accent}55, transparent 34%)`,
          }}
        />

        <div className="relative grid min-h-[calc(100vh-220px)] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div className="max-w-[600px]">
            <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: activeTheme.accent }}>
              Premium theme drop
            </p>
            <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
              Cinematic merch
              <span className="block text-white/70">for every universe.</span>
            </h1>
            <p className="mt-10 text-base leading-7 text-white/70 sm:text-lg">
              A focused streetwear showcase for themed drops. Scroll the cards, let one collection take focus, then enter the drop when the mood feels right.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={activeTheme.href}
                className="border border-white bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-transparent hover:text-white"
              >
                Shop featured
              </Link>
              <Link
                to="/themes"
                className="border border-white/40 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                View all themes
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3">
              {heroThemes.map((theme, index) => (
                <button
                  key={theme.key}
                  type="button"
                  aria-label={`Focus ${theme.title}`}
                  onClick={() => scrollToTheme(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeThemeIndex === index ? 'w-10 bg-white' : 'w-5 bg-white/30 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-white/45">
              Active: {activeTheme.title}
            </p>
          </div>

          <div
            ref={carouselRef}
            onScroll={syncActiveTheme}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-8 pl-[8vw] pr-[18vw] lg:pl-10 lg:pr-[30vw]"
          >
            {heroThemes.map((theme, index) => {
              const isActive = activeThemeIndex === index

              return (
                <Link
                  key={theme.key}
                  to={theme.href}
                  data-theme-index={index}
                  onMouseEnter={() => setActiveThemeIndex(index)}
                  onFocus={() => setActiveThemeIndex(index)}
                  className={`group relative h-[440px] min-w-[72vw] snap-center overflow-hidden bg-black shadow-2xl transition duration-500 sm:min-w-[390px] lg:h-[560px] lg:min-w-[420px] ${
                    isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
                  }`}
                >
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      isActive ? 'bg-gradient-to-t from-black via-black/20 to-transparent' : 'bg-black/45'
                    }`}
                  />
                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: theme.accent }}>
                      0{index + 1} / Collection
                    </p>
                    <h2 className="mt-3 font-display text-4xl uppercase leading-none sm:text-5xl">
                      {theme.title}
                    </h2>
                    <p
                      className={`mt-4 max-w-sm text-sm leading-6 text-white/75 transition duration-500 ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}
                    >
                      {theme.subtitle}
                    </p>
                    <span
                      className={`mt-6 w-max border border-white/60 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      } group-hover:bg-white group-hover:text-black`}
                    >
                      Enter drop
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="max-w-[600px]">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">
            Curated edit
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">Best Sellers</h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
          ))}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="max-w-[600px]">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">
            Fresh stock
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">New Drops</h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {newDrops.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
