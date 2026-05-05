import type { Product } from '../data'
import { useCart } from './CartContext'

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <article className="group overflow-hidden rounded-[2rem] border-2 border-black bg-[#fff8ef] shadow-[8px_8px_0_#111] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden border-b-2 border-black bg-[#dfe7f2]">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full border-2 border-black bg-[#ff6f91] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-black">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-[-0.04em] text-[#16110f]">
              {product.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#5d534e]">{product.tone}</p>
          </div>
          <p className="rounded-full border-2 border-black bg-white px-3 py-1 font-black text-[#16110f]">
            {product.price}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex-1 rounded-full border-2 border-black bg-[#16110f] px-4 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#2b2320]"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="rounded-full border-2 border-black bg-[#5fd6ff] px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#87e1ff]"
          >
            View
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
