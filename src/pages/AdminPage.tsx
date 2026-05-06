import { allProducts } from '../data'

function AdminPage() {
  return (
    <div className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
      <div className="max-w-[600px]">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">Admin</p>
        <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
          Manage merch
        </h1>
        <p className="mt-8 text-base leading-7 text-[#5d534e]">
          Frontend admin dashboard mockup for adding products, stock changes, and order review.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {[
          ['Products', allProducts.length],
          ['Orders', 24],
          ['Low stock', 5],
          ['Images uploaded', allProducts.length + 8],
        ].map(([label, value]) => (
          <article key={label} className="border border-[#e4ddd3] bg-[#fffaf2] p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]">{label}</p>
            <p className="mt-3 font-display text-5xl uppercase">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr]">
        <form className="h-max border border-[#e4ddd3] bg-[#fffaf2] p-5">
          <h2 className="font-display text-3xl uppercase">Add product</h2>
          <div className="mt-5 grid gap-4">
            {['Product name', 'Price', 'Stock', 'Image URL'].map((field) => (
              <label key={field} className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#6e625b]">{field}</span>
                <input className="border border-[#d7cec2] bg-white px-4 py-3 outline-none transition focus:border-[#c7352a]" />
              </label>
            ))}
            <button type="button" className="border border-[#16110f] bg-[#16110f] px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-white">
              Save draft
            </button>
          </div>
        </form>

        <section className="overflow-hidden border border-[#e4ddd3] bg-white">
          <div className="grid grid-cols-[1fr_110px_110px] border-b border-[#e4ddd3] bg-[#fffaf2] px-4 py-3 text-xs font-black uppercase tracking-[0.16em]">
            <span>Product</span>
            <span>Price</span>
            <span>Stock</span>
          </div>
          {allProducts.slice(0, 12).map((product, index) => (
            <div key={product.id} className="grid grid-cols-[1fr_110px_110px] items-center border-b border-[#f0e9df] px-4 py-3 text-sm">
              <span className="font-bold">{product.name}</span>
              <span>{product.price}</span>
              <span>{12 + index}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default AdminPage
