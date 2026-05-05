type SectionHeadingProps = {
  eyebrow: string
  title: string
  copy: string
  dark?: boolean
}

function SectionHeading({ eyebrow, title, copy, dark = false }: SectionHeadingProps) {
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

export default SectionHeading
