export type Category = 'all' | 'light' | 'dark' | 'washed'

export type Product = {
  id: string
  name: string
  tone: string
  price: string
  numericPrice: number
  image: string
  currency?: '$' | 'Rs'
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

const strangerThingsImagePath = '/images/stranger-things'

export const strangerThingsProducts: Product[] = [
  {
    id: 'hellfire-club-oversized-tee',
    name: 'Hellfire Club Oversized Tee',
    tone: 'Oversized fit / black cotton / campaign graphic',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1761303563_9922441.jpg`,
    badge: 'New arrival',
    category: 'dark',
  },
  {
    id: 'hawkins-arcade-tee',
    name: 'Hawkins Arcade Tee',
    tone: 'Soft jersey / retro print / easy street fit',
    price: 'Rs 899',
    numericPrice: 899,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1774870327_7033145.jpg`,
    badge: 'Fan pick',
    category: 'washed',
  },
  {
    id: 'upside-down-graphic-tee',
    name: 'Upside Down Graphic Tee',
    tone: 'Heavy gauge fabric / dark artwork / relaxed body',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1764954108_7787471.jpg`,
    badge: 'Oversized fit',
    category: 'dark',
  },
  {
    id: 'demogorgon-motion-tee',
    name: 'Demogorgon Motion Tee',
    tone: 'Animated merch visual / collector energy / dark base',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1774681271_2078809.gif`,
    badge: 'Limited',
    category: 'dark',
  },
  {
    id: 'friends-dont-lie-tee',
    name: "Friends Don't Lie Tee",
    tone: 'Premium cotton / character print / everyday wear',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1762501131_1790696.jpg`,
    category: 'light',
  },
  {
    id: 'hawkins-lab-tee',
    name: 'Hawkins Lab Tee',
    tone: 'Clean graphic / soft black / easy oversized shape',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1764931368_7896203.jpg`,
    category: 'dark',
  },
  {
    id: 'eleven-011-tee',
    name: 'Eleven 011 Tee',
    tone: 'Graphic print / smooth cotton / throwback palette',
    price: 'Rs 899',
    numericPrice: 899,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1759595763_7509683.jpg`,
    category: 'light',
  },
  {
    id: 'mind-flayer-tee',
    name: 'Mind Flayer Tee',
    tone: 'Black base / red artwork / premium heavy fabric',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1763883484_8555637.jpg`,
    category: 'dark',
  },
  {
    id: 'surfer-boy-pizza-tee',
    name: 'Surfer Boy Pizza Tee',
    tone: 'Washed tone / playful graphic / relaxed weekend fit',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1765436176_5713150.jpg`,
    category: 'washed',
  },
  {
    id: 'vecna-red-wash-tee',
    name: 'Vecna Red Wash Tee',
    tone: 'Red wash / oversized fit / dramatic front artwork',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1764753045_6347860.jpg`,
    category: 'washed',
  },
  {
    id: 'palace-arcade-oversized-tee',
    name: 'Palace Arcade Oversized Tee',
    tone: 'Premium jersey / nostalgic graphic / soft drape',
    price: 'Rs 899',
    numericPrice: 899,
    currency: 'Rs',
    image: `${strangerThingsImagePath}/1719212691_2436107.jpg`,
    category: 'light',
  },
]

const houseOfDragonImagePath = '/images/house-of-dragon'

export const houseOfDragonProducts: Product[] = [
  {
    id: 'targaryen-fire-blood-tee',
    name: 'Targaryen Fire & Blood Tee',
    tone: 'Oversized fit / black cotton / dragon crest graphic',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1776244331_8082337.jpg`,
    badge: 'New arrival',
    category: 'dark',
  },
  {
    id: 'house-of-dragon-logo-tee',
    name: 'House of the Dragon Logo Tee',
    tone: 'Premium jersey / title artwork / collector drop',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1748436326_7000739.jpg`,
    badge: 'Fan pick',
    category: 'dark',
  },
  {
    id: 'dragon-rider-oversized-tee',
    name: 'Dragon Rider Oversized Tee',
    tone: 'Heavy gauge fabric / cinematic print / relaxed body',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1774421084_7339592.jpg`,
    badge: 'Oversized fit',
    category: 'washed',
  },
  {
    id: 'house-targaryen-black-tee',
    name: 'House Targaryen Black Tee',
    tone: 'Black base / red sigil / sharp streetwear cut',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1711457733_7600763.jpg`,
    category: 'dark',
  },
  {
    id: 'iron-throne-graphic-tee',
    name: 'Iron Throne Graphic Tee',
    tone: 'Dark artwork / soft cotton / Westeros archive feel',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1728469243_5788072.jpg`,
    category: 'dark',
  },
  {
    id: 'rhaenyra-claim-tee',
    name: 'Rhaenyra Claim Tee',
    tone: 'Royal graphic / premium cotton / dramatic palette',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1722662610_7488407.jpg`,
    category: 'washed',
  },
  {
    id: 'daemon-red-flame-tee',
    name: 'Daemon Red Flame Tee',
    tone: 'Red wash / bold dragon energy / oversized drape',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1729956292_6436496.jpg`,
    category: 'washed',
  },
  {
    id: 'winterfell-archive-tee',
    name: 'Winterfell Archive Tee',
    tone: 'Vintage black / Game of Thrones print / soft handfeel',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1742970235_2302005.jpg`,
    category: 'dark',
  },
  {
    id: 'dragon-family-tree-tee',
    name: 'Dragon Family Tree Tee',
    tone: 'Oversized tee / family tree graphic / lore-heavy piece',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/House of the Dragon Family Tree (2)2024_04_19-21-58-14.jpg`,
    badge: 'Lore drop',
    category: 'light',
  },
  {
    id: 'kingsguard-lannister-tee',
    name: 'Kingsguard Lannister Tee',
    tone: 'Gold-toned graphic / archive character mood / clean fit',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${houseOfDragonImagePath}/1748339739_9678266.jpg`,
    category: 'light',
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
