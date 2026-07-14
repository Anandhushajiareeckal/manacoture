import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Check } from "lucide-react";
import { products, formatINR } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — ManaCouture" }] }),
  component: CheckoutPage,
});

const steps = ["Contact", "Shipping", "Payment"];

function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState("card");
  const items = products.slice(0, 2);
  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const total = subtotal;

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
      <div className="grid lg:grid-cols-[1fr_420px] gap-16">
        <div>
          <Link to="/" className="font-display text-3xl">ManaCouture</Link>
          <div className="flex items-center gap-3 mt-10 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`h-7 w-7 grid place-items-center rounded-full text-xs ${i <= step ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span className={`text-xs eyebrow ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
                {i < steps.length - 1 && <span className="w-8 h-px bg-border" />}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Section title="Contact information">
              <div className="grid gap-3">
                <Field label="Email address" type="email" placeholder="you@example.com" />
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <input type="checkbox" className="accent-accent" defaultChecked /> Email me with private previews and offers
                </label>
              </div>
            </Section>

            <Section title="Shipping address">
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="First name" />
                <Field label="Last name" />
                <Field label="Address" className="sm:col-span-2" />
                <Field label="Apartment, suite (optional)" className="sm:col-span-2" />
                <Field label="City" />
                <Field label="State" />
                <Field label="PIN code" />
                <Field label="Phone" />
              </div>
            </Section>

            <Section title="Delivery">
              <div className="space-y-2">
                {[
                  { name: "Standard · 3–5 days", price: "Complimentary" },
                  { name: "Express · 1–2 days", price: "₹450" },
                  { name: "International Express · 5–7 days", price: "₹2,500" },
                ].map((d, i) => (
                  <label key={d.name} className="flex items-center gap-3 border border-border p-4 cursor-pointer has-[:checked]:border-foreground">
                    <input type="radio" name="delivery" defaultChecked={i === 0} className="accent-accent" />
                    <span className="flex-1 text-sm">{d.name}</span>
                    <span className="text-sm">{d.price}</span>
                  </label>
                ))}
              </div>
            </Section>

            <Section title="Payment">
              <div className="space-y-2">
                {[
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "upi", label: "UPI" },
                  { id: "netbanking", label: "Net Banking" },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((p) => (
                  <label key={p.id} className="flex items-center gap-3 border border-border p-4 cursor-pointer has-[:checked]:border-foreground">
                    <input type="radio" name="pay" checked={payment === p.id} onChange={() => setPayment(p.id)} className="accent-accent" />
                    <span className="flex-1 text-sm">{p.label}</span>
                  </label>
                ))}
              </div>
              {payment === "card" && (
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <Field label="Card number" className="sm:col-span-2" />
                  <Field label="Expiry (MM/YY)" />
                  <Field label="CVV" />
                  <Field label="Name on card" className="sm:col-span-2" />
                </div>
              )}
            </Section>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                className="link-underline text-sm"
              >
                ← Back
              </button>
              <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} className="btn-luxe btn-luxe-hover">
                <Lock className="h-3.5 w-3.5" /> Place Secure Order
              </button>
            </div>
          </div>
        </div>

        <aside className="bg-secondary/40 p-8 h-fit lg:sticky lg:top-10 border border-border">
          <h2 className="font-display text-2xl mb-6">Order</h2>
          <div className="space-y-5">
            {items.map((p) => (
              <div key={p.id} className="flex gap-4">
                <div className="h-20 w-16 shrink-0 overflow-hidden bg-secondary">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm truncate">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.fabric}</div>
                </div>
                <div className="text-sm">{formatINR(p.price)}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-6 pt-4 space-y-2 text-sm">
            <Row label="Subtotal" value={formatINR(subtotal)} />
            <Row label="Shipping" value="Complimentary" />
          </div>
          <div className="border-t border-border mt-4 pt-4 flex justify-between">
            <span className="font-display text-lg">Total</span>
            <span className="font-display text-lg">{formatINR(total)}</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-[11px] text-muted-foreground">
            <Lock className="h-3 w-3" /> Secure 256-bit encrypted checkout
          </div>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border p-6 md:p-8">
      <h3 className="font-display text-xl mb-4">{title}</h3>
      {children}
    </div>
  );
}
function Field({ label, type = "text", placeholder, className }: { label: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-[11px] eyebrow block mb-1.5">{label}</span>
      <input type={type} placeholder={placeholder} className="w-full h-11 px-3 bg-background border border-border focus:border-foreground outline-none text-sm" />
    </label>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between"><span className="text-muted-foreground">{label}</span><span>{value}</span></div>;
}
