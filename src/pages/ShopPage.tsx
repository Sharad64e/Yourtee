import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductQuickView from '../components/ProductQuickView'
import {
  allProducts,
  categories,
  themeCollections,
  themeLabels,
  type Category,
  type Product,
  type ThemeKey,
} from '../data'

const sortOptions = [
  { value: 'popular', label: 'Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'low', label: 'Price low' },
  { value: 'high', label: 'Price high' },
]

function ShopPage() {
  const [searchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [activeTheme, setActiveTheme] = useState<ThemeKey | 'all'>(
    (searchParams.get('theme') as ThemeKey | null) ?? 'all',
  )
  const [activeSize, setActiveSize] = useState('all')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return [...allProducts]
      .filter((product) => activeCategory === 'all' || product.category === activeCategory)
      .filter((product) => activeTheme === 'all' || product.theme === activeTheme)
      .filter((product) => activeSize === 'all' || (product.sizes ?? []).some((size) => size === activeSize))
      .filter((product) => {
        if (!normalizedQuery) {
          return true
        }

        return [product.name, product.tone, product.description, product.theme, ...(product.searchTags ?? [])]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      })
      .sort((first, second) => {
        if (sortBy === 'low') return first.numericPrice - second.numericPrice
        if (sortBy === 'high') return second.numericPrice - first.numericPrice
        if (sortBy === 'newest') return (second.createdAt ?? '').localeCompare(first.createdAt ?? '')
        return (second.popularity ?? 0) - (first.popularity ?? 0)
      })
  }, [activeCategory, activeSize, activeTheme, query, sortBy])

  return (
    <div className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
      <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />

      <div className="max-w-[600px]">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">Shop</p>
        <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
          All drops, one rack
        </h1>
        <p className="mt-6 text-base leading-7 text-[#5d534e]">
          Search by theme, character, fit, color, or collection. Use filters to move fast.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-max border border-[#e4ddd3] bg-[#fffaf2] p-5 lg:sticky lg:top-24">
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Search</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search merch"
                className="border border-[#d7cec2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c7352a]"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="border border-[#d7cec2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c7352a]"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Categories</p>
              <div className="mt-3 grid gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => setActiveCategory(category.key)}
                    className={`border px-3 py-2 text-left text-xs font-black uppercase tracking-[0.16em] transition ${
                      activeCategory === category.key
                        ? 'border-[#c7352a] bg-[#c7352a] text-white'
                        : 'border-[#d7cec2] bg-white hover:border-[#c7352a]'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Theme</p>
              <div className="mt-3 grid gap-2">
                {(['all', 'core', ...themeCollections.map((theme) => theme.key)] as const).map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    onClick={() => setActiveTheme(theme)}
                    className={`border px-3 py-2 text-left text-xs font-black uppercase tracking-[0.16em] transition ${
                      activeTheme === theme
                        ? 'border-[#1d1714] bg-[#1d1714] text-white'
                        : 'border-[#d7cec2] bg-white hover:border-[#c7352a]'
                    }`}
                  >
                    {theme === 'all' ? 'All themes' : themeLabels[theme]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Size</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {['all', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setActiveSize(size)}
                    className={`border px-2 py-2 text-xs font-black uppercase transition ${
                      activeSize === size
                        ? 'border-[#c7352a] bg-[#c7352a] text-white'
                        : 'border-[#d7cec2] bg-white hover:border-[#c7352a]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section>
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm font-bold text-[#6e625b]">{filteredProducts.length} products</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ShopPage
