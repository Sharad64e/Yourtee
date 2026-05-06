export type Category = 'all' | 'light' | 'dark' | 'washed'
export type ThemeKey =
  | 'core'
  | 'stranger-things'
  | 'house-of-dragon'
  | 'ben-10'
  | 'avengers'
  | 'fc'
export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL'

export type Review = {
  name: string
  rating: number
  copy: string
  fit: string
}

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
  theme?: ThemeKey
  color?: string
  fit?: string
  sizes?: Size[]
  fabric?: string
  description?: string
  rating?: number
  reviewCount?: number
  popularity?: number
  createdAt?: string
  searchTags?: string[]
  reviews?: Review[]
}

export type ThemeCollection = {
  key: ThemeKey
  title: string
  subtitle: string
  image: string
  href: string
  accent: string
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
    price: 'Rs 3400',
    numericPrice: 3400,
    currency: 'Rs',
    image: '/images/cream-tee.jpg',
    badge: 'Best seller',
    category: 'light',
  },
  {
    id: 'soft-black-tee',
    name: 'Soft Black Tee',
    tone: 'Relaxed fit / smooth finish / deep black',
    price: 'Rs 3600',
    numericPrice: 3600,
    currency: 'Rs',
    image: '/images/soft-black.jpg',
    badge: 'Core fit',
    category: 'dark',
  },
  {
    id: 'olive-washed-tee',
    name: 'Olive Washed Tee',
    tone: 'Sun-faded tone / broken-in handfeel / vintage edge',
    price: 'Rs 3800',
    numericPrice: 3800,
    currency: 'Rs',
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

const ben10ImagePath = '/images/ben-10'

export const ben10Products: Product[] = [
  {
    id: 'alien-x-cosmic-tee',
    name: 'Alien X Cosmic Tee',
    tone: 'Black cotton / cosmic alien artwork / oversized fit',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${ben10ImagePath}/1750415838_4107800.jpg`,
    badge: 'New arrival',
    category: 'dark',
  },
  {
    id: 'omnitrix-core-tee',
    name: 'Omnitrix Core Tee',
    tone: 'Glow green graphic / premium jersey / clean drape',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${ben10ImagePath}/1755170272_1070848.jpg`,
    badge: 'Fan pick',
    category: 'dark',
  },
  {
    id: 'ben-ten-hero-tee',
    name: 'Ben Ten Hero Tee',
    tone: 'Character print / relaxed street fit / soft handfeel',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${ben10ImagePath}/1774338567_7257506.jpg`,
    category: 'washed',
  },
  {
    id: 'four-arms-power-tee',
    name: 'Four Arms Power Tee',
    tone: 'Action artwork / heavy cotton / animated energy',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${ben10ImagePath}/1767073050_6672538.jpg`,
    category: 'dark',
  },
  {
    id: 'heatblast-flame-tee',
    name: 'Heatblast Flame Tee',
    tone: 'Warm graphic / premium print / relaxed body',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${ben10ImagePath}/1758698681_1098613.jpg`,
    category: 'washed',
  },
  {
    id: 'omnitrix-symbol-tee',
    name: 'Omnitrix Symbol Tee',
    tone: 'Minimal logo / black base / sharp everyday merch',
    price: 'Rs 899',
    numericPrice: 899,
    currency: 'Rs',
    image: `${ben10ImagePath}/1753784803_8244203.jpg`,
    category: 'dark',
  },
  {
    id: 'diamondhead-tee',
    name: 'Diamondhead Tee',
    tone: 'Crystal alien print / soft cotton / clean fit',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${ben10ImagePath}/1772782121_2964600.jpg`,
    category: 'light',
  },
  {
    id: 'xlr8-speed-tee',
    name: 'XLR8 Speed Tee',
    tone: 'Fast graphic / smooth jersey / movement-ready fit',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${ben10ImagePath}/1751282475_5646282.jpg`,
    category: 'washed',
  },
  {
    id: 'ultimate-alien-tee',
    name: 'Ultimate Alien Tee',
    tone: 'Alien lineup / oversized fit / collector artwork',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${ben10ImagePath}/1760439578_2491774.jpg`,
    badge: 'Limited',
    category: 'dark',
  },
  {
    id: 'omni-green-poster-tee',
    name: 'Omni Green Poster Tee',
    tone: 'Poster print / bright green detail / premium cotton',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${ben10ImagePath}/1776417464_3720228.png`,
    category: 'light',
  },
]

const fcImagePath = '/images/fc'

export const fcProducts: Product[] = [
  {
    id: 'blaugrana-home-tee',
    name: 'Blaugrana Home Tee',
    tone: 'Club colors / premium cotton / matchday street fit',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${fcImagePath}/1771486588_7442988.jpg`,
    badge: 'New arrival',
    category: 'dark',
  },
  {
    id: 'fc-crest-tee',
    name: 'FC Crest Tee',
    tone: 'Crest graphic / smooth jersey / clean supporter look',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${fcImagePath}/1754742647_8442698.jpg`,
    category: 'dark',
  },
  {
    id: 'camp-nou-night-tee',
    name: 'Camp Nou Night Tee',
    tone: 'Deep blue base / stadium mood / relaxed fit',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${fcImagePath}/1765862926_8600095.jpg`,
    category: 'dark',
  },
  {
    id: 'mes-que-un-club-tee',
    name: 'Mes Que Un Club Tee',
    tone: 'Typographic print / soft cotton / classic fan energy',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${fcImagePath}/1744474532_1414592.jpg`,
    category: 'washed',
  },
  {
    id: 'barca-stripe-tee',
    name: 'Barca Stripe Tee',
    tone: 'Stripe graphic / premium jersey / easy drape',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${fcImagePath}/1771653094_8927473.jpg`,
    badge: 'Fan pick',
    category: 'washed',
  },
  {
    id: 'fc-away-tee',
    name: 'FC Away Tee',
    tone: 'Light base / crest detail / matchday casual',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${fcImagePath}/1772706402_2068239.jpg`,
    category: 'light',
  },
  {
    id: 'football-culture-tee',
    name: 'Football Culture Tee',
    tone: 'Street football graphic / relaxed cotton / bold color',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${fcImagePath}/1772016091_8620184.jpg`,
    category: 'washed',
  },
  {
    id: 'victory-crest-tee',
    name: 'Victory Crest Tee',
    tone: 'Supporter crest / heavyweight fabric / clean silhouette',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${fcImagePath}/1774942757_3726709.jpg`,
    category: 'dark',
  },
  {
    id: 'classic-fc-tee',
    name: 'Classic FC Tee',
    tone: 'Vintage-inspired print / soft jersey / daily fan tee',
    price: 'Rs 899',
    numericPrice: 899,
    currency: 'Rs',
    image: `${fcImagePath}/1714991149_5606164.jpg`,
    category: 'light',
  },
]

const avengersImagePath = '/images/avengers'

export const avengersProducts: Product[] = [
  {
    id: 'iron-man-repulsor-tee',
    name: 'Iron Man Repulsor Tee',
    tone: 'Red armor artwork / premium cotton / hero graphic',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${avengersImagePath}/1776937847_2425697.jpg`,
    badge: 'New arrival',
    category: 'washed',
  },
  {
    id: 'avengers-assemble-tee',
    name: 'Avengers Assemble Tee',
    tone: 'Team graphic / black base / collector print',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${avengersImagePath}/1777544907_7484294.jpg`,
    badge: 'Fan pick',
    category: 'dark',
  },
  {
    id: 'captain-shield-tee',
    name: 'Captain Shield Tee',
    tone: 'Shield artwork / smooth jersey / relaxed fit',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${avengersImagePath}/1767352492_9110764.jpg`,
    category: 'light',
  },
  {
    id: 'thor-storm-tee',
    name: 'Thor Storm Tee',
    tone: 'Lightning graphic / heavy fabric / cinematic energy',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${avengersImagePath}/1767352492_1899247.jpg`,
    category: 'washed',
  },
  {
    id: 'hulk-smash-tee',
    name: 'Hulk Smash Tee',
    tone: 'Green graphic / oversized fit / bold comic mood',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${avengersImagePath}/1763123513_3161883.jpg`,
    category: 'dark',
  },
  {
    id: 'black-panther-tee',
    name: 'Black Panther Tee',
    tone: 'Dark print / soft cotton / sharp silhouette',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${avengersImagePath}/1763123513_7192121.jpg`,
    category: 'dark',
  },
  {
    id: 'spider-swing-tee',
    name: 'Spider Swing Tee',
    tone: 'Red-blue artwork / smooth jersey / easy street fit',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${avengersImagePath}/1762930716_8478212.jpg`,
    category: 'washed',
  },
  {
    id: 'wanda-chaos-tee',
    name: 'Wanda Chaos Tee',
    tone: 'Scarlet artwork / premium jersey / dramatic print',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${avengersImagePath}/1762930716_3371185.jpg`,
    category: 'dark',
  },
  {
    id: 'marvel-legends-tee',
    name: 'Marvel Legends Tee',
    tone: 'Archive graphic / light base / collector feel',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${avengersImagePath}/1758799147_1749035.jpg`,
    category: 'light',
  },
  {
    id: 'infinity-saga-tee',
    name: 'Infinity Saga Tee',
    tone: 'Saga print / premium cotton / clean drape',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${avengersImagePath}/1758799147_9924066.jpg`,
    badge: 'Limited',
    category: 'dark',
  },
  {
    id: 'hawkeye-target-tee',
    name: 'Hawkeye Target Tee',
    tone: 'Action graphic / soft cotton / precise fit',
    price: 'Rs 899',
    numericPrice: 899,
    currency: 'Rs',
    image: `${avengersImagePath}/1759217373_8682229.jpg`,
    category: 'light',
  },
  {
    id: 'doctor-strange-tee',
    name: 'Doctor Strange Tee',
    tone: 'Mystic graphic / dark base / premium print',
    price: 'Rs 1199',
    numericPrice: 1199,
    currency: 'Rs',
    image: `${avengersImagePath}/1758704012_5455296.jpg`,
    category: 'dark',
  },
  {
    id: 'quantum-realm-tee',
    name: 'Quantum Realm Tee',
    tone: 'Abstract comic artwork / washed tone / relaxed body',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${avengersImagePath}/1747485503_1304178.jpg`,
    category: 'washed',
  },
  {
    id: 'black-widow-tee',
    name: 'Black Widow Tee',
    tone: 'Stealth graphic / black cotton / sharp everyday tee',
    price: 'Rs 1099',
    numericPrice: 1099,
    currency: 'Rs',
    image: `${avengersImagePath}/1747746294_3460036.jpg`,
    category: 'dark',
  },
  {
    id: 'loki-variant-tee',
    name: 'Loki Variant Tee',
    tone: 'Green-gold artwork / soft jersey / trickster energy',
    price: 'Rs 999',
    numericPrice: 999,
    currency: 'Rs',
    image: `${avengersImagePath}/1742637619_7059128.jpg`,
    category: 'washed',
  },
  {
    id: 'endgame-portal-tee',
    name: 'Endgame Portal Tee',
    tone: 'Team moment artwork / heavyweight fabric / final drop',
    price: 'Rs 1299',
    numericPrice: 1299,
    currency: 'Rs',
    image: `${avengersImagePath}/1742637619_1705228.jpg`,
    category: 'dark',
  },
]

export const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All tees' },
  { key: 'light', label: 'Light tones' },
  { key: 'dark', label: 'Dark tones' },
  { key: 'washed', label: 'Washed tones' },
]

export const themeCollections: ThemeCollection[] = [
  {
    key: 'ben-10',
    title: 'Ben 10',
    subtitle: 'Omnitrix energy, Alien X, classic alien forms, and green-glow graphics.',
    image: '/images/ben-10/ben-10-hero.jpg',
    href: '/themes/ben-10',
    accent: '#7ac70c',
  },
  {
    key: 'fc',
    title: 'FC Collection',
    subtitle: 'Club colors, crest graphics, supporter tees, and matchday streetwear.',
    image: '/images/fc/fc-hero.jpg',
    href: '/themes/fc',
    accent: '#1449a7',
  },
  {
    key: 'avengers',
    title: 'Avengers',
    subtitle: 'Iron Man, assemble graphics, infinity saga pieces, and comic hero artwork.',
    image: '/images/avengers/avengers-hero.jpg',
    href: '/themes/avengers',
    accent: '#ef3e32',
  },
  {
    key: 'stranger-things',
    title: 'Stranger Things',
    subtitle: 'Hawkins, Hellfire, Vecna, and Upside Down graphics.',
    image: '/images/stranger-things/landing-reference.jpg',
    href: '/themes/stranger-things',
    accent: '#e5343d',
  },
  {
    key: 'house-of-dragon',
    title: 'House of the Dragon',
    subtitle: 'Targaryen fire, dragon riders, and Westeros archive pieces.',
    image: '/images/house-of-dragon/got-spinoff-hero.jpg',
    href: '/themes/house-of-dragon',
    accent: '#ff5a2f',
  },
]

const defaultSizes: Size[] = ['S', 'M', 'L', 'XL', 'XXL']

function enrichProducts(products: Product[], theme: ThemeKey): Product[] {
  return products.map((product, index) => ({
    ...product,
    theme,
    color:
      product.category === 'light'
        ? 'Light'
        : product.category === 'washed'
          ? 'Washed'
          : 'Black',
    fit: product.badge?.toLowerCase().includes('oversized') || product.tone.toLowerCase().includes('oversized')
      ? 'Oversized'
      : 'Relaxed',
    sizes: defaultSizes,
    fabric: product.fabric ?? '240 GSM premium cotton jersey with a soft bio-washed finish.',
    description:
      product.description ??
      `${product.name} is built for daily merch styling with a clean drape, durable print, and a soft finish that holds shape after repeat wear.`,
    rating: 4.3 + (index % 5) * 0.1,
    reviewCount: 18 + index * 7,
    popularity: 100 - index * 3,
    createdAt: `2026-05-${String(6 - Math.min(index, 5)).padStart(2, '0')}`,
    searchTags: [theme, product.category, product.name, product.tone],
    reviews: [
      {
        name: 'Aarav',
        rating: 5,
        copy: 'The print looks sharp in person and the fabric feels heavier than a normal tee.',
        fit: product.tone.toLowerCase().includes('oversized') ? 'Fits oversized' : 'True to size',
      },
      {
        name: 'Mira',
        rating: 4,
        copy: 'Good drape, clean neckline, and easy to style with denim.',
        fit: 'Slightly relaxed',
      },
    ],
  }))
}

export const allProducts = [
  ...enrichProducts(featuredProducts, 'core'),
  ...enrichProducts(strangerThingsProducts, 'stranger-things'),
  ...enrichProducts(houseOfDragonProducts, 'house-of-dragon'),
  ...enrichProducts(ben10Products, 'ben-10'),
  ...enrichProducts(avengersProducts, 'avengers'),
  ...enrichProducts(fcProducts, 'fc'),
]

export const themeLabels: Record<ThemeKey, string> = {
  core: 'Core Essentials',
  'stranger-things': 'Stranger Things',
  'house-of-dragon': 'House of the Dragon',
  'ben-10': 'Ben 10',
  avengers: 'Avengers',
  fc: 'FC Collection',
}

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
