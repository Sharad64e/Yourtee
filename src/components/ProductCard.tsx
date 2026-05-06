import { Link } from 'react-router-dom'
import type { Product } from '../data'
import { useCart } from './CartContext'
import { useWishlist } from './WishlistContext'

function ProductCard({
  product,
  onQuickView,
}: {
  product: Product
  onQuickView?: (product: Product) => void
}) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const defaultSize = product.sizes?.[1] ?? 'M'

  return (
    <article className="group overflow-hidden border border-[#e4ddd3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(29,23,20,0.12)]">
      <div className="relative overflow-hidden bg-[#eee8df]">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 bg-[#1d1714]/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white">
            {product.badge}
          </span>
        ) : null}
        <button
          type="button"
          aria-label="Toggle wishlist"
          onClick={() => toggleWishlist(product.id)}
          className={`absolute right-3 top-3 h-9 w-12 border border-[#1d1714] text-[10px] font-black uppercase transition ${
            isWishlisted(product.id)
              ? 'bg-[#c7352a] text-white'
              : 'bg-white text-[#1d1714] hover:bg-[#fff5ec]'
          }`}
        >
          {isWishlisted(product.id) ? 'Saved' : 'Save'}
        </button>
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <Link
              to={`/products/${product.id}`}
              className="font-display text-xl uppercase text-[#16110f] transition hover:text-[#c7352a]"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-sm leading-6 text-[#5d534e]">{product.tone}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#8a7a6d]">
              {product.fit ?? 'Relaxed'} / {product.color ?? 'Core'}
            </p>
          </div>
          <p className="shrink-0 text-sm font-black text-[#16110f]">
            {product.price}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => addToCart(product, { size: defaultSize })}
            className="flex-1 border border-[#16110f] bg-[#16110f] px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#c7352a]"
          >
            Quick add
          </button>
          <button
            type="button"
            onClick={() => onQuickView?.(product)}
            className="border border-[#d7cec2] bg-[#fffaf2] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#16110f] transition hover:border-[#c7352a] hover:text-[#c7352a]"
          >
            View
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
