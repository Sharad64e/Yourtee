import { useCart } from '../components/CartContext'

function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const shipping = subtotal > 1499 || subtotal === 0 ? 0 : 99
  const total = subtotal + shipping

  return (
    <div className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
      <div className="max-w-[600px]">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c7352a]">Checkout</p>
        <h1 className="mt-3 font-display text-5xl uppercase leading-[0.9] sm:text-6xl">
          Place your order
        </h1>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <form className="grid gap-6">
          {[
            ['Contact', ['Email', 'Phone']],
            ['Shipping address', ['Full name', 'Address', 'City', 'State', 'PIN code']],
            ['Payment', ['Card number', 'Expiry', 'CVV']],
          ].map(([title, fields]) => (
            <section key={title as string} className="border border-[#e4ddd3] bg-[#fffaf2] p-5 sm:p-6">
              <h2 className="font-display text-3xl uppercase">{title}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {(fields as string[]).map((field) => (
                  <label key={field} className={field === 'Address' ? 'grid gap-2 sm:col-span-2' : 'grid gap-2'}>
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-[#6e625b]">{field}</span>
                    <input className="border border-[#d7cec2] bg-white px-4 py-3 outline-none transition focus:border-[#c7352a]" />
                  </label>
                ))}
              </div>
            </section>
          ))}
        </form>

        <aside className="h-max border border-[#e4ddd3] bg-[#fffaf2] p-5 lg:sticky lg:top-24">
          <h2 className="font-display text-3xl uppercase">Order summary</h2>
          <div className="mt-5 grid gap-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize ?? 'base'}`} className="flex gap-3">
                <img src={item.image} alt={item.name} className="h-20 w-16 object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-black">{item.name}</p>
                  <p className="text-xs text-[#6e625b]">Qty {item.quantity} / Size {item.selectedSize ?? 'M'}</p>
                </div>
                <p className="text-sm font-black">Rs {item.numericPrice * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 border-t border-[#d7cec2] pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>Rs {subtotal}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Rs {shipping}</span></div>
            <div className="flex justify-between pt-3 font-display text-2xl uppercase"><span>Total</span><span>Rs {total}</span></div>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="mt-6 w-full border border-[#16110f] bg-[#16110f] px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#c7352a]"
          >
            Place order
          </button>
        </aside>
      </div>
    </div>
  )
}

export default CheckoutPage
