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
        className={`fixed right-0 top-0 z-40 flex h-full w-full max-w-md flex-col border-l-2 border-black bg-[#fff8ef] shadow-[-8px_0_0_#111] transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-black px-5 py-4">
          <div>
            <p className="font-display text-3xl uppercase tracking-[-0.06em] text-[#16110f]">
              Cart
            </p>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6e625b]">
              yourtee order
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#16110f]"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="rounded-[1.5rem] border-2 border-black bg-white p-5">
              <p className="font-display text-2xl uppercase tracking-[-0.04em] text-[#16110f]">
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
                  key={item.id}
                  className="rounded-[1.5rem] border-2 border-black bg-white p-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-20 rounded-[1rem] border-2 border-black object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl uppercase tracking-[-0.04em] text-[#16110f]">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-[#5d534e]">{item.tone}</p>
                        </div>
                        <p className="font-black text-[#16110f]">
                          ${item.numericPrice * item.quantity}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 rounded-full border-2 border-black bg-[#fff8ef] px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-black"
                          >
                            -
                          </button>
                          <span className="min-w-8 text-center text-sm font-black">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white text-sm font-black"
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

        <div className="border-t-2 border-black px-5 py-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6e625b]">
              Subtotal
            </p>
            <p className="font-display text-3xl uppercase tracking-[-0.04em] text-[#16110f]">
              ${subtotal}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={clearCart}
              className="rounded-full border-2 border-black bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#16110f]"
            >
              Clear
            </button>
            <button
              type="button"
              className="flex-1 rounded-full border-2 border-black bg-[#16110f] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-white"
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default CartPanel
