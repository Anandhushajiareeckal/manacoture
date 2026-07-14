import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, X, Gift, Tag, Truck } from "lucide-react";
import { products, formatINR } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Shopping Bag — ManaCouture" }] }),
  component: CartPage,
});

function CartPage() {
  const [items, setItems] = useState(
    products.slice(0, 2).map((p) => ({ ...p, qty: 1, size: "Free", color: "Ivory & Gold" }))
  );

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shipping;

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="eyebrow mb-4">Your Bag</div>
      <h1 className="font-display text-4xl md:text-5xl mb-10">Shopping Bag ({items.length})</h1>

      {items.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-muted-foreground mb-6">Your bag is currently empty.</p>
          <Link to="/shop" className="btn-luxe btn-luxe-hover">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-5 md:gap-8 pb-6 border-b border-border">
                <Link to="/product/$id" params={{ id: item.id }} className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover" />
                </Link>
                <div className="min-w-0 flex flex-col">
                  <div className="flex justify-between gap-3">
                    <div className="min-w-0">
                      <div className="eyebrow text-[10px]">{item.category}</div>
                      <Link to="/product/$id" params={{ id: item.id }} className="font-display text-xl mt-1 block truncate hover:text-accent">
                        {item.name}
                      </Link>
                      <div className="text-xs text-muted-foreground mt-2 space-y-0.5">
                        <div>Colour: {item.color}</div>
                        <div>Size: {item.size}</div>
                        <div>Fabric: {item.fabric}</div>
                      </div>
                    </div>
                    <button
                      aria-label="Remove"
                      onClick={() => setItems(items.filter((i) => i.id !== item.id))}
                      className="p-1 h-fit hover:text-accent"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button onClick={() => setItems(items.map((i) => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))} className="p-2" aria-label="Decrease"><Minus className="h-3 w-3" /></button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button onClick={() => setItems(items.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))} className="p-2" aria-label="Increase"><Plus className="h-3 w-3" /></button>
                    </div>
                    <div className="font-medium">{formatINR(item.price * item.qty)}</div>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/shop" className="inline-block link-underline text-sm tracking-wide mt-4">← Continue shopping</Link>
          </div>

          {/* Summary */}
          <aside className="bg-secondary/40 p-8 h-fit lg:sticky lg:top-28 border border-border">
            <h2 className="font-display text-2xl mb-6">Order Summary</h2>

            <div className="space-y-2 text-sm">
              <Row label="Subtotal" value={formatINR(subtotal)} />
              <Row label="Shipping" value={shipping === 0 ? "Complimentary" : formatINR(shipping)} />
              <Row label="Estimated tax" value="Calculated at checkout" muted />
            </div>

            <div className="border-t border-border mt-4 pt-4 flex items-center justify-between">
              <span className="font-display text-xl">Total</span>
              <span className="font-display text-xl">{formatINR(total)}</span>
            </div>

            <Link to="/checkout" className="btn-luxe btn-luxe-hover w-full mt-6">Proceed to Checkout</Link>

            <div className="mt-8 space-y-3">
              <label className="flex items-center gap-3 border border-border px-3 h-11 focus-within:border-foreground">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <input placeholder="Promo code" className="flex-1 bg-transparent outline-none text-sm" />
                <button className="text-xs eyebrow">Apply</button>
              </label>
              <label className="flex items-center gap-3 text-xs text-muted-foreground">
                <input type="checkbox" className="accent-accent" />
                <Gift className="h-4 w-4" /> Add gift wrapping (₹250)
              </label>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Truck className="h-4 w-4 text-accent" />
                {shipping === 0 ? "You've unlocked complimentary shipping" : `Add ${formatINR(5000 - subtotal)} more for free shipping`}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={muted ? "text-muted-foreground" : ""}>{value}</span>
    </div>
  );
}
