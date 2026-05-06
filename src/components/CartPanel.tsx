import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

function CartPanel() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart()
  const [discountCode, setDiscountCode] = useState('')

  const cartCurrency = items.every((item) => (item.currency ?? '$') === (items[0]?.currency ?? '$'))
    ? items[0]?.currency ?? '$'
    : null

  const formatMoney = (currency: '$' | 'Rs', value: number) =>
    currency === 'Rs' ? `Rs ${value}` : `$${value}`
  const discount = discountCode.trim().toUpperCase() === 'YOURTEE10' ? Math.round(subtotal * 0.1) : 0
  const shipping = subtotal > 1499 || subtotal === 0 ? 0 : 99
  const total = Math.max(subtotal - discount + shipping, 0)

  return (
    <>
      {isCartOpen ? (
        <button
          type="button"
          aria-label="Close cart overlay"
          className="fixed inset-0 z-30 bg-black/35"
          onClick={closeCart}
        />
      ) : null}

      <aside
        className={`fixed right-0 top-0 z-40 flex h-full w-full max-w-md flex-col border-l border-[#d7cec2] bg-[#fffaf2] shadow-[-12px_0_32px_rgba(29,23,20,0.16)] transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#d7cec2] px-5 py-4">
          <div>
            <p className="font-display text-3xl uppercase text-[#16110f]">
              Cart
            </p>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6e625b]">
              yourtee order
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="border border-[#1d1714] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#16110f] transition hover:border-[#c7352a] hover:text-[#c7352a]"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="border border-[#d7cec2] bg-white p-5">
              <p className="font-display text-2xl uppercase text-[#16110f]">
                Your cart is empty
              </p>
              <p className="mt-2 text-sm leading-7 text-[#4d443f]">
                Add a tee from the shop page and it will show up here with quantity controls.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.selectedSize ?? 'base'}`}
                  className="border border-[#d7cec2] bg-white p-4 transition duration-200 hover:translate-x-[-2px] hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-20 border border-[#d7cec2] object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl uppercase text-[#16110f]">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-[#5d534e]">{item.tone}</p>
                          {item.selectedSize ? (
                            <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#8a7a6d]">
                              Size {item.selectedSize}
                            </p>
                          ) : null}
                        </div>
                        <p className="font-black text-[#16110f]">
                          {formatMoney(item.currency ?? '$', item.numericPrice * item.quantity)}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 border border-[#d7cec2] bg-[#fff8ef] px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center border border-[#d7cec2] bg-white text-sm font-black"
                          >
                            -
                          </button>
                          <span className="min-w-8 text-center text-sm font-black">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center border border-[#d7cec2] bg-white text-sm font-black"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs font-black uppercase tracking-[0.18em] text-[#8a4940]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#d7cec2] px-5 py-5">
          <div className="mb-4 grid gap-2">
            <label className="text-xs font-black uppercase tracking-[0.18em] text-[#6e625b]" htmlFor="discount-code">
              Discount code
            </label>
            <input
              id="discount-code"
              value={discountCode}
              onChange={(event) => setDiscountCode(event.target.value)}
              placeholder="Try YOURTEE10"
              className="border border-[#d7cec2] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#c7352a]"
            />
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6e625b]">
              Estimated delivery: 3-5 business days
            </p>
            <div className="flex items-center justify-between"><span>Subtotal</span><span>{cartCurrency ? formatMoney(cartCurrency, subtotal) : 'Mixed'}</span></div>
            <div className="flex items-center justify-between"><span>Discount</span><span>{cartCurrency ? formatMoney(cartCurrency, discount) : 'Mixed'}</span></div>
            <div className="flex items-center justify-between"><span>Shipping</span><span>{cartCurrency ? formatMoney(cartCurrency, shipping) : 'Mixed'}</span></div>
            <div className="flex items-center justify-between border-t border-[#d7cec2] pt-3 font-display text-2xl uppercase text-[#16110f]">
              <span>Total</span>
              <span>{cartCurrency ? formatMoney(cartCurrency, total) : 'Mixed'}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={clearCart}
              className="border border-[#d7cec2] bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#16110f]"
            >
              Clear
            </button>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="flex-1 border border-[#16110f] bg-[#16110f] px-5 py-3 text-center text-xs font-black uppercase tracking-[0.22em] text-white transition hover:bg-[#c7352a]"
            >
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default CartPanel
