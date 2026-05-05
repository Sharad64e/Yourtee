import SectionHeading from '../components/SectionHeading'
import { journalEntries } from '../data'

function JournalPage() {
  return (
    <div className="bg-[#e8f0fb] px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[2rem] border-2 border-black bg-[#fff8ef] p-6 shadow-[8px_8px_0_#111] sm:p-8">
          <SectionHeading
            eyebrow="Journal"
            title="Brand notes and fabric stories"
            copy="This page is where longer-form content lives, so the home page can stay cleaner and more visual."
          />

          <div className="mt-8 grid gap-4">
            {journalEntries.map((entry, index) => (
              <div key={entry.title} className="flex gap-4 rounded-[1.5rem] border-2 border-black bg-white p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#f6d25f] font-display text-xl">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-[-0.04em] text-[#16110f]">{entry.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#4d443f]">{entry.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="overflow-hidden rounded-[2rem] border-2 border-black bg-[#ff6f91] shadow-[8px_8px_0_#111]">
          <div className="border-b-2 border-black bg-[#fff8ef] px-6 py-5">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#6e625b]">Editorial note</p>
            <h3 className="mt-2 font-display text-4xl uppercase leading-none tracking-[-0.06em] text-[#16110f]">
              Quiet basics.
              <br />
              Strong frames.
            </h3>
          </div>
          <div className="grid gap-0 md:grid-cols-2">
            <img src="/images/two-up.jpg" alt="Editorial collage" className="h-full w-full border-b-2 border-black object-cover md:border-b-0 md:border-r-2" />
            <div className="flex flex-col justify-between p-6 text-black">
              <p className="max-w-md text-base leading-7">
                Use this page for blogs, collection notes, care guides, or anything longer than a landing-page section.
              </p>
              <div className="mt-8 rounded-[1.5rem] border-2 border-black bg-[#fff8ef] p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6e625b]">Good for</p>
                <p className="mt-2 font-display text-3xl uppercase leading-none tracking-[-0.06em]">
                  Stories, updates,
                  <br />
                  and collection notes.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default JournalPage
