import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import { houseOfDragonProducts } from '../data'

const perks = [
  { value: '10%', label: 'Cashback on app orders' },
  { value: '30', label: 'Days easy returns & exchanges' },
  { value: 'Fast', label: 'Free & fast shipping' },
]

function DragonProductCard({ product }: { product: (typeof houseOfDragonProducts)[number] }) {
  const { addToCart } = useCart()

  return (
    <article className="group min-w-0 bg-white text-[#211b17]">
      <div className="relative overflow-hidden bg-[#120706]">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 bg-[#2c0806]/90 px-3 py-2 text-[10px] font-black uppercase leading-none tracking-[0.18em] text-[#ffd8a8]">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="border-b border-[#d8c4aa] px-2 py-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-black text-[#3b2a21]">{product.name}</h3>
            <p className="mt-1 truncate text-sm text-[#6d5b50]">{product.tone}</p>
            <p className="mt-2 text-sm font-medium text-[#2b211c]">{product.price}</p>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="shrink-0 border border-[#1a0d0b] bg-[#1a0d0b] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#9f1d15]"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

function HouseOfDragonPage() {
  const newArrivals = houseOfDragonProducts.slice(0, 4)
  const latestDrops = houseOfDragonProducts.slice(4)

  return (
    <div className="bg-[#fffaf2] text-[#20130f]">
      <section className="relative overflow-hidden bg-[#080504] px-5 py-8 text-white sm:px-8 lg:px-10 lg:py-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('/images/house-of-dragon/house-of-dragon-hero.jpg')] bg-cover bg-center opacity-55 lg:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_8%,rgba(226,83,30,0.4),transparent_28%),linear-gradient(90deg,#080504_0%,rgba(8,5,4,0.96)_45%,rgba(8,5,4,0.36)_100%)]" />

        <div className="relative max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#ff9f43]">
            Theme merch session
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            House of the Dragon
            <span className="block text-[#ff5a2f]">merch drop</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#ead7c2] sm:text-lg">
            Targaryen fire, dragon riders, Iron Throne graphics, and Westeros archive pieces gathered into the second yourtee theme collection.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#latest-drops"
              className="border-2 border-[#ff5a2f] bg-[#ff5a2f] px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#b42a18]"
            >
              Shop drop
            </a>
            <Link
              to="/themes/stranger-things"
              className="border-2 border-white/70 bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#111]"
            >
              Stranger Things
            </Link>
          </div>
        </div>

        <img
          src="/images/house-of-dragon/jaime-lannister.jpg"
          alt="Westeros archive artwork"
          className="relative mt-8 aspect-[16/9] w-full border-2 border-[#8c3a24] object-cover lg:hidden"
        />
      </section>

      <section className="px-3 py-10 sm:px-6 lg:px-10">
        <h2 className="text-center text-3xl font-black uppercase tracking-[0.02em] text-[#241411]">
          New Arrivals
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <DragonProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-3 bg-[#fff0d6] px-5 py-6 sm:mx-6 lg:mx-10">
        <div className="grid gap-5 text-center sm:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.label} className="flex items-center justify-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#1a0d0b] bg-white text-lg font-black text-[#1a0d0b]">
                {perk.value}
              </span>
              <p className="max-w-40 text-left text-base font-black leading-5 text-[#1a0d0b]">{perk.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="latest-drops" className="px-3 py-12 sm:px-6 lg:px-10">
        <h2 className="text-center text-3xl font-black uppercase tracking-[0.02em] text-[#241411]">
          Latest Drops
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {latestDrops.map((product) => (
            <DragonProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HouseOfDragonPage
