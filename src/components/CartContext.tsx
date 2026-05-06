import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '../data'

type CartItem = Product & {
  quantity: number
  selectedSize?: string
}

type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotal: number
  isCartOpen: boolean
  addToCart: (product: Product, options?: { quantity?: number; size?: string }) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

const CART_STORAGE_KEY = 'yourtee-cart'

const CartContext = createContext<CartContextValue | null>(null)

function readStoredCart(): CartItem[] {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart())
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product, options?: { quantity?: number; size?: string }) => {
    const quantityToAdd = options?.quantity ?? 1
    const selectedSize = options?.size

    setItems((currentItems) => {
      const existing = currentItems.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize,
      )

      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity: quantityToAdd, selectedSize }]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((count, item) => count + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        toggleCart: () => setIsCartOpen((value) => !value),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
