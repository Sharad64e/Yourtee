import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type WishlistContextValue = {
  wishlistIds: string[]
  wishlistCount: number
  isWishlisted: (productId: string) => boolean
  toggleWishlist: (productId: string) => void
}

const WISHLIST_STORAGE_KEY = 'yourtee-wishlist'

const WishlistContext = createContext<WishlistContextValue | null>(null)

function readStoredWishlist() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(WISHLIST_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => readStoredWishlist())

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistIds))
  }, [wishlistIds])

  const toggleWishlist = (productId: string) => {
    setWishlistIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistCount: wishlistIds.length,
        isWishlisted: (productId) => wishlistIds.includes(productId),
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)

  if (!context) {
    throw new Error('useWishlist must be used inside WishlistProvider')
  }

  return context
}
