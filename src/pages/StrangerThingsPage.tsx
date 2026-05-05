import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import { strangerThingsProducts } from '../data'

const perks = [
  { value: '10%', label: 'Cashback on app orders' },
  { value: '30', label: 'Days easy returns & exchanges' },
  { value: 'Fast', label: 'Free & fast shipping' },
]

function StrangerProductCard({ product }: { product: (typeof strangerThingsProducts)[number] }) {
  const { addToCart } = useCart()

  return (
    <article className="group min-w-0 bg-white text-[#202020]">
      <div className="relative overflow-hidden bg-[#101010]">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 bg-black/80 px-3 py-2 text-[10px] font-black uppercase leading-none tracking-[0.18em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="border-b border-[#dddddd] px-2 py-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-black text-[#3f464f]">{product.name}</h3>
            <p className="mt-1 truncate text-sm text-[#58606a]">{product.tone}</p>
            <p className="mt-2 text-sm font-medium text-[#2f343a]">{product.price}</p>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="shrink-0 border border-[#111] bg-[#111] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b3141c]"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

function StrangerThingsPage() {
  const newArrivals = strangerThingsProducts.slice(0, 4)
  const latestDrops = strangerThingsProducts.slice(4)

  return (
    <div className="bg-white text-[#18233a]">
      <section className="relative overflow-hidden bg-[#060607] px-5 py-8 text-white sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('/images/stranger-things/landing-reference.jpg')] bg-cover bg-center opacity-45 lg:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(188,21,30,0.42),transparent_26%),linear-gradient(90deg,#060607_0%,rgba(6,6,7,0.96)_45%,rgba(6,6,7,0.42)_100%)]" />

        <div className="relative max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e5343d]">
            Theme merch session
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Stranger Things
            <span className="block text-[#e5343d]">merch drop</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#d7d7d7] sm:text-lg">
            Eleven, Hawkins, Hellfire, Vecna, arcade nostalgia, and Upside Down graphics collected into the first themed yourtee merch page.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#latest-drops"
              className="border-2 border-[#e5343d] bg-[#e5343d] px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#b3141c]"
            >
              Shop drop
            </a>
            <Link
              to="/shop"
              className="border-2 border-white/70 bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#111]"
            >
              Core shop
            </Link>
          </div>
        </div>
      </section>

      <section className="px-3 py-10 sm:px-6 lg:px-10">
        <h2 className="text-center text-3xl font-black uppercase tracking-[0.02em] text-[#18233a]">
          New Arrivals
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <StrangerProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-3 bg-[#e8fbff] px-5 py-6 sm:mx-6 lg:mx-10">
        <div className="grid gap-5 text-center sm:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.label} className="flex items-center justify-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#111] bg-white text-lg font-black text-[#111]">
                {perk.value}
              </span>
              <p className="max-w-40 text-left text-base font-black leading-5 text-[#111]">{perk.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="latest-drops" className="px-3 py-12 sm:px-6 lg:px-10">
        <h2 className="text-center text-3xl font-black uppercase tracking-[0.02em] text-[#18233a]">
          Latest Drops
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {latestDrops.map((product) => (
            <StrangerProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default StrangerThingsPage
