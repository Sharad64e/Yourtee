import { useState } from 'react'
import type { Product } from '../data'
import { useCart } from './CartContext'

function ProductQuickView({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  const { addToCart } = useCart()
  const [size, setSize] = useState('M')

  if (!product) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4 py-6">
      <button
        type="button"
        aria-label="Close quick view"
        className="absolute inset-0"
        onClick={onClose}
      />
      <article className="relative grid w-full max-w-4xl overflow-hidden bg-white shadow-2xl md:grid-cols-[0.9fr_1.1fr]">
        <img src={product.image} alt={product.name} className="h-full min-h-80 w-full object-cover" />
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c7352a]">
                Quick view
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none">
                {product.name}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="border border-[#1d1714] px-3 py-2 text-xs font-black uppercase"
            >
              Close
            </button>
          </div>
          <p className="mt-6 text-base leading-7 text-[#5d534e]">{product.description}</p>
          <p className="mt-4 text-2xl font-black">{product.price}</p>
          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(product.sizes ?? ['S', 'M', 'L', 'XL', 'XXL']).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSize(item)}
                  className={`h-11 w-12 border text-sm font-black transition ${
                    size === item
                      ? 'border-[#c7352a] bg-[#c7352a] text-white'
                      : 'border-[#d7cec2] bg-[#fffaf2] hover:border-[#c7352a]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              addToCart(product, { size })
              onClose()
            }}
            className="mt-8 w-full border border-[#16110f] bg-[#16110f] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#c7352a]"
          >
            Add to cart
          </button>
        </div>
      </article>
    </div>
  )
}

export default ProductQuickView
