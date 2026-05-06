import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductQuickView from '../components/ProductQuickView'
import { useCart } from '../components/CartContext'
import { useWishlist } from '../components/WishlistContext'
import { allProducts, themeLabels, type Product } from '../data'

function ProductDetailPage() {
  const { productId } = useParams()
  const product = allProducts.find((item) => item.id === productId)
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const [size, setSize] = useState('M')
  const [quantity, setQuantity] = useState(1)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return allProducts
      .filter((item) => item.id !== product.id && (item.theme === product.theme || item.category === product.category))
      .slice(0, 4)
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
      <ProductQuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4 sm:grid-cols-[1fr_0.6fr]">
          <img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover" />
          <div className="grid gap-4">
            <img src={product.image} alt={`${product.name} close view`} className="aspect-[4/5] w-full object-cover" />
            <div className="bg-[#fffaf2] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c7352a]">Fabric</p>
              <p className="mt-3 text-sm leading-6 text-[#5d534e]">{product.fabric}</p>
            </div>
          </div>
        </div>

        <section className="max-w-[600px]">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">
            {product.theme ? themeLabels[product.theme] : 'Product'}
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-8 text-base leading-7 text-[#5d534e]">{product.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-black">{product.price}</p>
            <p className="text-sm font-bold text-[#6e625b]">
              {product.rating?.toFixed(1)} stars / {product.reviewCount} reviews
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(product.sizes ?? ['S', 'M', 'L', 'XL', 'XXL']).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSize(item)}
                  className={`h-12 w-14 border text-sm font-black transition ${
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

          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">Quantity</p>
            <div className="mt-3 inline-flex border border-[#d7cec2]">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-12 w-12 font-black">
                -
              </button>
              <span className="grid h-12 w-14 place-items-center border-x border-[#d7cec2] font-black">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="h-12 w-12 font-black">
                +
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => addToCart(product, { quantity, size })}
              className="flex-1 border border-[#16110f] bg-[#16110f] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#c7352a]"
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="border border-[#d7cec2] bg-[#fffaf2] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] transition hover:border-[#c7352a] hover:text-[#c7352a]"
            >
              {isWishlisted(product.id) ? 'Saved' : 'Wishlist'}
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['Fit', product.fit ?? 'Relaxed'],
              ['Color', product.color ?? 'Core'],
              ['Care', 'Cold wash'],
            ].map(([label, value]) => (
              <div key={label} className="border border-[#e4ddd3] bg-[#fffaf2] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8a7a6d]">{label}</p>
                <p className="mt-2 text-sm font-bold">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-4xl uppercase">Reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {product.reviews?.map((review) => (
            <article key={review.name} className="border border-[#e4ddd3] bg-[#fffaf2] p-5">
              <p className="font-black">{review.name} / {review.rating} stars</p>
              <p className="mt-3 text-sm leading-6 text-[#5d534e]">{review.copy}</p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#c7352a]">{review.fit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl uppercase">You may also like</h2>
          <Link to="/shop" className="text-xs font-black uppercase tracking-[0.18em] text-[#c7352a]">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onQuickView={setQuickViewProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
