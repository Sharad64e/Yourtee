import { useState } from 'react'

type Category = 'all' | 'light' | 'dark' | 'washed'

type Product = {
  name: string
  tone: string
  price: string
  image: string
  badge?: string
  category: Category
}

type EditorialCard = {
  title: string
  copy: string
  image: string
  accent: string
}

const featuredProducts: Product[] = [
  {
    name: 'Studio White Tee',
    tone: 'Heavy cotton / clean drape / everyday uniform',
    price: '$34',
    image: '/images/cream-tee.jpg',
    badge: 'Best seller',
    category: 'light',
  },
  {
    name: 'Soft Black Tee',
    tone: 'Relaxed fit / smooth finish / deep black',
    price: '$36',
    image: '/images/soft-black.jpg',
    badge: 'Core fit',
    category: 'dark',
  },
  {
    name: 'Olive Washed Tee',
    tone: 'Sun-faded tone / broken-in handfeel / vintage edge',
    price: '$38',
    image: '/images/olive-tee.jpg',
    badge: 'New color',
    category: 'washed',
  },
]

const lookbookCards: EditorialCard[] = [
  {
    title: 'City line',
    copy: 'Sharp pants, clean tees, and a little attitude. The kind of styling that feels quiet from far away and expensive up close.',
    image: '/images/model-gray.jpg',
    accent: 'from-[#f6d25f] to-[#ff8f5c]',
  },
  {
    title: 'Off-duty retro',
    copy: 'Relaxed silhouettes, faded graphics, and soft neutrals pulled together like an old editorial page from a fashion archive.',
    image: '/images/model-script.jpg',
    accent: 'from-[#5fd6ff] to-[#7b7cff]',
  },
  {
    title: 'Washed essentials',
    copy: 'A calmer palette built around dusty blues, chalk whites, and worn fabrics that already look lived in.',
    image: '/images/washed-blue.jpg',
    accent: 'from-[#b6ef6d] to-[#48cfa7]',
  },
]

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All tees' },
  { key: 'light', label: 'Light tones' },
  { key: 'dark', label: 'Dark tones' },
  { key: 'washed', label: 'Washed tones' },
]

const highlights = [
  { label: 'Fabric', value: '260 GSM jersey' },
  { label: 'Fit', value: 'Relaxed straight body' },
  { label: 'Finish', value: 'Soft vintage wash' },
  { label: 'Drop', value: 'Core 03 collection' },
]

function SectionHeading({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string
  title: string
  copy: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 inline-flex rounded-full border-2 border-black bg-[#f6d25f] px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-black shadow-[4px_4px_0_#111]">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl uppercase tracking-[-0.04em] sm:text-5xl ${
          dark ? 'text-[#fff1dc]' : 'text-[#16110f]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 max-w-xl text-base leading-7 sm:text-lg ${
          dark ? 'text-[#d8ccc0]' : 'text-[#4d443f]'
        }`}
      >
        {copy}
      </p>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
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
          <button className="flex-1 rounded-full border-2 border-black bg-[#16110f] px-4 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#2b2320]">
            Add to cart
          </button>
          <button className="rounded-full border-2 border-black bg-[#5fd6ff] px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#87e1ff]">
            View
          </button>
        </div>
      </div>
    </article>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredProducts =
    activeCategory === 'all'
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#1d1714]">
      <div className="retro-grid pointer-events-none fixed inset-0 opacity-40" />

      <main className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#ffd8a8] shadow-[10px_10px_0_#111]">
          <header className="flex items-center justify-between border-b-2 border-black bg-[#fff8ef] px-5 py-4 sm:px-8">
            <div>
              <p className="font-display text-2xl uppercase tracking-[-0.06em]">yourtee</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6e625b]">
                Modern retro essentials
              </p>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-black uppercase tracking-[0.2em] md:flex">
              <a href="#shop" className="border-b-2 border-black pb-1">
                Shop
              </a>
              <a href="#lookbook">Lookbook</a>
              <a href="#about">About</a>
              <a href="#details">Details</a>
            </nav>
            <div className="rounded-2xl border-2 border-black bg-[#f6d25f] px-4 py-2 text-xs font-black uppercase tracking-[0.2em]">
              Core 03
            </div>
          </header>

          <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:px-10 lg:py-12">
            <div className="relative">
              <div className="absolute bottom-6 right-0 rounded-[1.5rem] border-2 border-black bg-white px-4 py-3 shadow-[6px_6px_0_#111] sm:px-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6e625b]">
                  New arrival
                </p>
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
                yourtee is built around heavyweight everyday tops, washed neutrals, and editorial
                styling that feels clean, grown, and easy to wear. Minimal pieces, better shape,
                sharper presence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#shop"
                  className="rounded-full border-2 border-black bg-[#16110f] px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#2b2320]"
                >
                  Shop tees
                </a>
                <a
                  href="#lookbook"
                  className="rounded-full border-2 border-black bg-[#fff8ef] px-6 py-3 text-sm font-black uppercase tracking-[0.22em] text-black transition hover:bg-white"
                >
                  View lookbook
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.2rem] border-2 border-black bg-[#fff8ef] px-4 py-3"
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#7b6e66]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-5 text-[#16110f]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-2 -top-2 h-24 w-24 rotate-12 rounded-[1.5rem] border-2 border-black bg-[#5fd6ff]" />
              <div className="grid gap-4 md:grid-cols-[1fr_0.68fr]">
                <article className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#dfe7f2] shadow-[8px_8px_0_#111]">
                  <img
                    src="/images/two-up.jpg"
                    alt="Editorial campaign image"
                    className="h-full w-full object-cover"
                  />
                </article>
                <div className="grid gap-4">
                  <article className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#f2efe8] shadow-[8px_8px_0_#111]">
                    <img
                      src="/images/shadow-tee.jpg"
                      alt="Dark tee product shot"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </article>
                  <article className="rounded-[2rem] border-2 border-black bg-[#fff8ef] p-5 shadow-[8px_8px_0_#111]">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6e625b]">
                      Drop palette
                    </p>
                    <p className="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.06em]">
                      03 core
                      <br />
                      tones
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#5d534e]">
                      Chalk, ink, and faded olive.
                    </p>
                    <div className="mt-5 flex gap-3">
                      {['#f5f1e7', '#1c1a19', '#525e3a'].map((color) => (
                        <span
                          key={color}
                          className="h-9 w-9 rounded-full border-2 border-black"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="shop"
          className="mt-10 rounded-[2rem] border-2 border-black bg-white px-5 py-8 shadow-[10px_10px_0_#111] sm:px-8 sm:py-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Shop"
              title="Start with the core lineup"
              copy="A small first drop built around clean color, better fabric weight, and easy proportions. Use the filter to switch mood instead of scrolling past filler."
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
                      isActive
                        ? 'bg-[#16110f] text-white'
                        : 'bg-[#fff8ef] text-[#16110f] hover:bg-white'
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
        </section>

        <section
          id="lookbook"
          className="mt-10 grid gap-6 rounded-[2rem] border-2 border-black bg-[#16110f] p-5 text-white shadow-[10px_10px_0_#111] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="flex flex-col justify-between rounded-[1.75rem] border-2 border-white/20 bg-white/5 p-6">
            <SectionHeading
              eyebrow="Lookbook"
              title="Styled like a campaign, built for daily wear"
              copy="The references you gave feel polished but still wearable. So this section reads like editorial direction, not random filler cards."
              dark
            />

            <div className="mt-10 overflow-hidden rounded-[1.75rem] border-2 border-white/20 bg-[#efe7db]">
              <img
                src="/images/offwhite-tee.jpg"
                alt="Off-white t-shirt product photo"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-5">
            {lookbookCards.map((card) => (
              <article
                key={card.title}
                className="grid gap-5 rounded-[1.75rem] border-2 border-white/20 bg-white/5 p-4 sm:grid-cols-[0.75fr_1fr] sm:p-5"
              >
                <div className="overflow-hidden rounded-[1.5rem] border-2 border-black bg-[#f1ecdf]">
                  <img src={card.image} alt={card.title} className="aspect-[4/5] w-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div
                      className={`inline-flex rounded-full bg-gradient-to-r ${card.accent} px-4 py-1 text-xs font-black uppercase tracking-[0.22em] text-black`}
                    >
                      Styling direction
                    </div>
                    <h3 className="mt-4 font-display text-3xl uppercase tracking-[-0.05em] text-[#fff2dc]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#d8ccc0] sm:text-base">{card.copy}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#fff2dc]">
                      Washed jersey
                    </span>
                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#fff2dc]">
                      Relaxed fit
                    </span>
                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#fff2dc]">
                      Editorial tone
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border-2 border-black bg-[#fff8ef] p-6 shadow-[10px_10px_0_#111] sm:p-8">
            <SectionHeading
              eyebrow="About"
              title="A small label built around shape, weight, and color"
              copy="yourtee focuses on the pieces that get worn hardest: plain tees, washed surfaces, and quiet graphics that sit inside a wardrobe instead of shouting over it."
            />

            <div className="mt-8 grid gap-4">
              {[
                'Cuts stay relaxed and straight so they layer well and fall clean on their own.',
                'Colors are muted on purpose: chalky whites, softened blacks, dusty olives, and washed blues.',
                'The overall brand mood sits somewhere between city basics and old magazine campaign styling.',
              ].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[1.5rem] border-2 border-black bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#f6d25f] font-display text-xl">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-[#4d443f] sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#ff6f91] shadow-[10px_10px_0_#111]">
            <div className="border-b-2 border-black bg-[#fff8ef] px-6 py-5">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#6e625b]">
                Campaign note
              </p>
              <h3 className="mt-2 font-display text-4xl uppercase leading-none tracking-[-0.06em] text-[#16110f]">
                Quiet basics.
                <br />
                Strong frames.
              </h3>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <img
                src="/images/two-up.jpg"
                alt="Minimal editorial collage"
                className="h-full w-full border-b-2 border-black object-cover md:border-b-0 md:border-r-2"
              />
              <div className="flex flex-col justify-between p-6 text-black">
                <p className="max-w-md text-base leading-7">
                    We now sells a mood first: modern basics with cleaner copy, stronger
                  hierarchy, and sections that read like a real fashion page instead of a tutorial.
                </p>
                <div className="mt-8 rounded-[1.5rem] border-2 border-black bg-[#fff8ef] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6e625b]">
                    Collection focus
                  </p>
                  <p className="mt-2 font-display text-3xl uppercase leading-none tracking-[-0.06em]">
                    Built for repeat wear,
                    <br />
                    not one-season noise.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section
          id="details"
          className="mt-10 rounded-[2rem] border-2 border-black bg-[#e8f0fb] p-6 shadow-[10px_10px_0_#111] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Details"
                title="The material story matters as much as the image"
                copy="Good basics only work when the boring parts are right: weight, finish, shape, and how they age after wear. This last section closes the page with product confidence."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Garment-washed for a softer first wear',
                  'Dense collar with a cleaner neckline',
                  'Relaxed shoulder and straight hem',
                  'Designed to sit well with denim or tailored pants',
                ].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border-2 border-black bg-white px-4 py-4 text-sm font-bold leading-6 text-[#4d443f]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border-2 border-black bg-white shadow-[8px_8px_0_#111]">
              <img
                src="/images/model-script.jpg"
                alt="Fashion model wearing washed tee"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
