import { Link } from 'react-router-dom'
import { highlights, houseOfDragonProducts, strangerThingsProducts } from '../data'

function HomePage() {
  return (
    <div className="bg-[#ffd8a8] px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
      <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14">
        <div className="relative">
          <div className="absolute bottom-6 right-0 rounded-[1.5rem] border-2 border-black bg-white px-4 py-3 shadow-[6px_6px_0_#111] sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6e625b]">New arrival</p>
            <p className="mt-1 font-display text-3xl uppercase leading-none tracking-[-0.05em]">
              Clean fits.
              <br />
              Vintage mood.
            </p>
          </div>

          <p className="mb-4 inline-flex rounded-full border-2 border-black bg-[#ff6f91] px-4 py-1 text-xs font-black uppercase tracking-[0.28em] text-black shadow-[4px_4px_0_#111]">
            Everyday blanks with a retro edge
          </p>
          <h1 className="max-w-4xl font-display text-6xl uppercase leading-[0.9] tracking-[-0.08em] text-[#16110f] sm:text-7xl lg:text-8xl">
            Tees that look
            <span className="block text-[#1f6b7b]">simple from far away</span>
            <span className="block">and strong up close.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#514742] sm:text-lg">
            yourtee is built around heavyweight everyday tops, washed neutrals, and editorial styling that feels clean, grown, and easy to wear.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="rounded-full border-2 border-black bg-[#16110f] px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#2b2320]"
            >
              Shop tees
            </Link>
            <Link
              to="/lookbook"
              className="rounded-full border-2 border-black bg-[#fff8ef] px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-black transition hover:bg-white"
            >
              View lookbook
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] border-2 border-black bg-[#fff8ef] px-4 py-3">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#7b6e66]">{item.label}</p>
                <p className="mt-2 text-sm font-bold leading-5 text-[#16110f]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-2 -top-2 h-24 w-24 rotate-12 rounded-[1.5rem] border-2 border-black bg-[#5fd6ff]" />
          <div className="grid gap-4 md:grid-cols-[1fr_0.68fr]">
            <article className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#dfe7f2] shadow-[8px_8px_0_#111]">
              <img src="/images/two-up.jpg" alt="Editorial campaign image" className="h-full w-full object-cover" />
            </article>
            <div className="grid gap-4">
              <article className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#f2efe8] shadow-[8px_8px_0_#111]">
                <img src="/images/shadow-tee.jpg" alt="Dark tee product shot" className="aspect-[4/5] w-full object-cover" />
              </article>
              <article className="rounded-[2rem] border-2 border-black bg-[#fff8ef] p-5 shadow-[8px_8px_0_#111]">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6e625b]">Explore pages</p>
                <p className="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.06em]">
                  Shop
                  <br />
                  Lookbook
                  <br />
                  Journal
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border-2 border-black bg-[#070707] text-white shadow-[8px_8px_0_#111]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff4b55]">
              First theme session
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
              Stranger Things
              <span className="block text-[#ff4b55]">merch drop</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#d6d6d6]">
              A dedicated page for Hawkins graphics, Hellfire energy, Upside Down artwork, and the full provided merch lineup.
            </p>
            <Link
              to="/themes/stranger-things"
              className="mt-6 inline-flex rounded-full border-2 border-[#ff4b55] bg-[#ff4b55] px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#c91f28]"
            >
              Enter the drop
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2 bg-[#15090a] p-4">
            {strangerThingsProducts.slice(0, 6).map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="aspect-[3/4] w-full border-2 border-black object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border-2 border-black bg-[#120706] text-white shadow-[8px_8px_0_#111]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid grid-cols-3 gap-2 bg-[#24100d] p-4">
            {houseOfDragonProducts.slice(0, 6).map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="aspect-[3/4] w-full border-2 border-black object-cover"
              />
            ))}
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff9f43]">
              Second theme session
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
              House of the Dragon
              <span className="block text-[#ff5a2f]">merch drop</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#ead7c2]">
              Targaryen fire, dragon riders, Iron Throne artwork, and the full provided Westeros merch lineup.
            </p>
            <Link
              to="/themes/house-of-dragon"
              className="mt-6 inline-flex rounded-full border-2 border-[#ff5a2f] bg-[#ff5a2f] px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#b42a18]"
            >
              Enter the drop
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
