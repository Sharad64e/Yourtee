import { Link } from 'react-router-dom'
import { themeCollections } from '../data'

function ThemesPage() {
  return (
    <div className="bg-[#fffaf2] px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
      <div className="max-w-[600px]">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">Themes</p>
        <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
          Choose your universe
        </h1>
        <p className="mt-8 text-base leading-7 text-[#5d534e]">
          Theme collections are now grouped in one place so new drops can be added without changing the shopping flow.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {themeCollections.map((theme) => (
          <Link
            key={theme.key}
            to={theme.href}
            className="group relative min-h-[520px] overflow-hidden bg-[#050505] text-white"
          >
            <img
              src={theme.image}
              alt={theme.title}
              className="absolute inset-0 h-full w-full object-contain opacity-85 transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
            <div className="relative flex h-full min-h-[520px] flex-col justify-end p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: theme.accent }}>
                Merch collection
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-none">
                {theme.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/80">{theme.subtitle}</p>
              <span className="mt-6 w-max border border-white/70 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition group-hover:border-white group-hover:bg-white group-hover:text-black">
                Shop now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ThemesPage
