import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Share2, Truck, RefreshCw, Shield, Minus, Plus, Star, ChevronDown, ShoppingBag } from "lucide-react";
import { getProduct, products, formatINR } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `${getProduct(params.id).name} — ManaCouture` },
      { name: "description", content: `${getProduct(params.id).name}. ${getProduct(params.id).fabric}. Handwoven in Kerala.` },
      { property: "og:title", content: `${getProduct(params.id).name} — ManaCouture` },
      { property: "og:image", content: getProduct(params.id).image },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = getProduct(id);
  const gallery = [product.image, product.hoverImage, product.image, product.hoverImage];
  const [selected, setSelected] = useState(0);
  const [size, setSize] = useState("Free");
  const [color, setColor] = useState("Ivory & Gold");
  const [qty, setQty] = useState(1);

  return (
    <div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-10">
        <div className="text-xs text-muted-foreground eyebrow">
          <Link to="/" className="hover:text-foreground">Home</Link> · <Link to="/shop" className="hover:text-foreground">Shop</Link> · <span>{product.category}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        <div className="grid lg:grid-cols-[1fr_480px] gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="grid grid-cols-[80px_1fr] gap-4">
            <div className="flex flex-col gap-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`aspect-[4/5] overflow-hidden border ${i === selected ? "border-foreground" : "border-transparent"}`}
                >
                  <img src={g} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={gallery[selected]}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="eyebrow mb-3">{product.category}</div>
            <h1 className="font-display text-4xl md:text-5xl leading-tight">{product.name}</h1>

            <div className="flex items-center gap-3 mt-4 text-sm">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">· {product.reviews} reviews</span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-3xl font-display">{formatINR(product.price)}</span>
              {product.compareAt && (
                <span className="text-lg text-muted-foreground line-through pb-1">{formatINR(product.compareAt)}</span>
              )}
              {product.compareAt && (
                <span className="text-xs eyebrow text-accent pb-2">Save {formatINR(product.compareAt - product.price)}</span>
              )}
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              An heirloom Kasavu handwoven on pit looms in Balaramapuram. The
              ivory drape is edged with 22k-tested antique zari, finished with
              a signature ManaCouture tassel and packaged in our reusable
              wooden trunk.
            </p>

            {/* Colour */}
            <div className="mt-8">
              <div className="flex justify-between mb-3">
                <span className="eyebrow text-[10px]">Colour</span>
                <span className="text-xs text-muted-foreground">{color}</span>
              </div>
              <div className="flex gap-2.5">
                {[
                  { name: "Ivory & Gold", swatch: "linear-gradient(135deg,#FAF8F5 50%,#C6A664 50%)" },
                  { name: "Cream Maroon", swatch: "linear-gradient(135deg,#F5EDD8 50%,#7A1F2B 50%)" },
                  { name: "Beige Gold", swatch: "linear-gradient(135deg,#EDE6DD 50%,#B8935A 50%)" },
                ].map((c) => (
                  <button
                    key={c.name}
                    aria-label={c.name}
                    onClick={() => setColor(c.name)}
                    style={{ backgroundImage: c.swatch }}
                    className={`h-10 w-10 rounded-full border-2 transition-all ${color === c.name ? "border-foreground scale-110" : "border-transparent"}`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-8">
              <div className="flex justify-between mb-3">
                <span className="eyebrow text-[10px]">Size</span>
                <button className="text-xs link-underline">Size guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {["XS", "S", "M", "L", "XL", "Free", "Blouse Stitch", "Custom"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-11 text-xs tracking-wide border transition-colors ${
                      size === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + Actions */}
            <div className="mt-8 flex gap-3">
              <div className="flex items-center border border-border h-14 px-2">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease" className="p-2"><Minus className="h-3.5 w-3.5" /></button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase" className="p-2"><Plus className="h-3.5 w-3.5" /></button>
              </div>
              <button className="btn-luxe btn-luxe-hover flex-1 h-14">
                <ShoppingBag className="h-4 w-4" /> Add to bag
              </button>
              <button aria-label="Wishlist" className="h-14 w-14 grid place-items-center border border-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Heart className="h-4 w-4" />
              </button>
            </div>

            <button className="btn-outline-luxe w-full mt-3 h-14 hover:bg-primary hover:text-primary-foreground transition-colors">
              Buy Now
            </button>

            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span>In stock · Ships in 2 days</span>
              <button aria-label="Share" className="ml-auto"><Share2 className="h-4 w-4" /></button>
            </div>

            {/* Trust icons */}
            <div className="mt-8 grid grid-cols-3 gap-4 py-6 border-y border-border">
              {[
                { icon: Truck, label: "Free shipping" },
                { icon: RefreshCw, label: "14-day returns" },
                { icon: Shield, label: "Secure checkout" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="h-4 w-4 text-accent mx-auto mb-2" />
                  <div className="text-[11px] tracking-wide">{label}</div>
                </div>
              ))}
            </div>

            {/* Accordions */}
            {[
              { title: "Fabric & Craft", body: `${product.fabric}. Handwoven on pit looms by artisans in Balaramapuram. Zari is real 22k-tested antique gold.` },
              { title: "Care", body: "Dry clean only. Store folded in muslin. Avoid direct sunlight and perfume." },
              { title: "Shipping & Returns", body: "Complimentary shipping across India. International 5–7 days. Easy 14-day returns on unworn pieces." },
            ].map((acc) => (
              <Accordion key={acc.title} title={acc.title} body={acc.body} />
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
        <div className="eyebrow mb-4">You may also love</div>
        <h2 className="font-display text-3xl md:text-4xl mb-10">Curated for you</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {products.filter((p) => p.id !== product.id).slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}

function Accordion({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-sm font-medium">
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-muted-foreground pb-5 leading-relaxed">{body}</p>}
    </div>
  );
}
