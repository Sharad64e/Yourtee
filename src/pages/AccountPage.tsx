import ProductCard from '../components/ProductCard'
import { allProducts } from '../data'
import { useWishlist } from '../components/WishlistContext'

function AccountPage() {
  const { wishlistIds } = useWishlist()
  const wishlistProducts = allProducts.filter((product) => wishlistIds.includes(product.id))

  return (
    <div className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
      <div className="max-w-[600px]">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">Account</p>
        <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
          Profile and saved picks
        </h1>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <section className="border border-[#e4ddd3] bg-[#fffaf2] p-5">
          <h2 className="font-display text-3xl uppercase">User profile</h2>
          <div className="mt-5 grid gap-3 text-sm text-[#5d534e]">
            <p><strong className="text-[#1d1714]">Name:</strong> Yourtee Customer</p>
            <p><strong className="text-[#1d1714]">Email:</strong> shopper@yourtee.local</p>
            <p><strong className="text-[#1d1714]">Saved address:</strong> Chandigarh, India</p>
          </div>
        </section>
        <section className="border border-[#e4ddd3] bg-[#fffaf2] p-5">
          <h2 className="font-display text-3xl uppercase">Order history</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <p className="flex justify-between"><span>#YT-1021</span><span>Delivered</span></p>
            <p className="flex justify-between"><span>#YT-1034</span><span>Processing</span></p>
          </div>
        </section>
        <section className="border border-[#e4ddd3] bg-[#fffaf2] p-5">
          <h2 className="font-display text-3xl uppercase">Quick stats</h2>
          <p className="mt-5 text-sm text-[#5d534e]">{wishlistProducts.length} items saved in wishlist.</p>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-4xl uppercase">Wishlist</h2>
        {wishlistProducts.length ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-[#5d534e]">Save products from the shop and they will appear here.</p>
        )}
      </section>
    </div>
  )
}

export default AccountPage
