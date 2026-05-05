export type Category = 'all' | 'light' | 'dark' | 'washed'

export type Product = {
  id: string
  name: string
  tone: string
  price: string
  numericPrice: number
  image: string
  badge?: string
  category: Category
}

export type EditorialCard = {
  title: string
  copy: string
  image: string
  accent: string
}

export const featuredProducts: Product[] = [
  {
    id: 'studio-white-tee',
    name: 'Studio White Tee',
    tone: 'Heavy cotton / clean drape / everyday uniform',
    price: '$34',
    numericPrice: 34,
    image: '/images/cream-tee.jpg',
    badge: 'Best seller',
    category: 'light',
  },
  {
    id: 'soft-black-tee',
    name: 'Soft Black Tee',
    tone: 'Relaxed fit / smooth finish / deep black',
    price: '$36',
    numericPrice: 36,
    image: '/images/soft-black.jpg',
    badge: 'Core fit',
    category: 'dark',
  },
  {
    id: 'olive-washed-tee',
    name: 'Olive Washed Tee',
    tone: 'Sun-faded tone / broken-in handfeel / vintage edge',
    price: '$38',
    numericPrice: 38,
    image: '/images/olive-tee.jpg',
    badge: 'New color',
    category: 'washed',
  },
]

export const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All tees' },
  { key: 'light', label: 'Light tones' },
  { key: 'dark', label: 'Dark tones' },
  { key: 'washed', label: 'Washed tones' },
]

export const lookbookCards: EditorialCard[] = [
  {
    title: 'City line',
    copy: 'Sharp pants, clean tees, and a little attitude. Quiet from far away and expensive up close.',
    image: '/images/model-gray.jpg',
    accent: 'from-[#f6d25f] to-[#ff8f5c]',
  },
  {
    title: 'Off-duty retro',
    copy: 'Relaxed silhouettes, faded graphics, and soft neutrals pulled together like an old editorial spread.',
    image: '/images/model-script.jpg',
    accent: 'from-[#5fd6ff] to-[#7b7cff]',
  },
  {
    title: 'Washed essentials',
    copy: 'Dusty blues, chalk whites, and worn fabrics that already feel lived in.',
    image: '/images/washed-blue.jpg',
    accent: 'from-[#b6ef6d] to-[#48cfa7]',
  },
]

export const highlights = [
  { label: 'Fabric', value: '260 GSM jersey' },
  { label: 'Fit', value: 'Relaxed straight body' },
  { label: 'Finish', value: 'Soft vintage wash' },
  { label: 'Drop', value: 'Core 03 collection' },
]

export const journalEntries = [
  {
    title: 'Why heavy tees age better',
    copy:
      'Heavier cotton keeps shape longer, hangs cleaner, and gives even a plain tee more presence with minimal styling.',
  },
  {
    title: 'How we style washed neutrals',
    copy:
      'Start with one faded base tone, then pair it with deeper trousers or denim so the outfit stays sharp instead of flat.',
  },
  {
    title: 'What makes a good everyday fit',
    copy:
      'The shoulder should sit easy, the body should fall straight, and the collar should still hold after repeat wear.',
  },
]
