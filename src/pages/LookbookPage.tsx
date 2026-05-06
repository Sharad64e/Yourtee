import SectionHeading from '../components/SectionHeading'
import { lookbookCards } from '../data'

function LookbookPage() {
  return (
    <div className="bg-[#16110f] px-5 py-8 text-white sm:px-8 lg:px-10 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between rounded-[1.75rem] border-2 border-white/20 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Lookbook"
            title="Styled like a campaign"
            copy="This page is separated from the home screen so editorial content can grow without bloating the main landing page."
            dark
          />
          <div className="mt-10 overflow-hidden rounded-[1.75rem] border-2 border-white/20 bg-[#efe7db]">
            <img src="/images/offwhite-tee.jpg" alt="Off-white t-shirt product photo" className="aspect-[4/5] w-full object-cover" />
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
                  <div className={`inline-flex rounded-full bg-gradient-to-r ${card.accent} px-4 py-1 text-xs font-black uppercase tracking-[0.22em] text-black`}>
                    Styling direction
                  </div>
                  <h3 className="mt-4 font-display text-3xl uppercase text-[#fff2dc]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#d8ccc0] sm:text-base">{card.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LookbookPage
