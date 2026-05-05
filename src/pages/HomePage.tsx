import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { highlights } from '../data'

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

      <div className="mt-10 rounded-[2rem] border-2 border-black bg-white p-6 shadow-[8px_8px_0_#111] sm:p-8">
        <SectionHeading
          eyebrow="Site map"
          title="Now split into real pages"
          copy="Use this structure as the pattern whenever you want to add more pages later."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Shop page', copy: 'Filtered product grid with product cards and collection intro.' },
            { title: 'Lookbook page', copy: 'Editorial blocks, styling notes, and visual campaign layouts.' },
            { title: 'Journal page', copy: 'Brand notes, fabric stories, and longer content sections.' },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border-2 border-black bg-[#fff8ef] p-5">
              <h3 className="font-display text-2xl uppercase tracking-[-0.04em] text-[#16110f]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4d443f]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
