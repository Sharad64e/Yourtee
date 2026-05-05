import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import { categories, featuredProducts, type Category } from '../data'

function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredProducts =
    activeCategory === 'all'
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === activeCategory)

  return (
    <div className="bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Shop"
          title="Start with the core lineup"
          copy="A small first drop built around clean color, better fabric weight, and easy proportions."
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category.key
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-full border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-[0.22em] transition ${
                  isActive ? 'bg-[#16110f] text-white' : 'bg-[#fff8ef] text-[#16110f] hover:bg-white'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage
