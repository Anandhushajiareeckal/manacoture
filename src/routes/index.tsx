import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Shield, Sparkles, Scissors, RefreshCw, Award, Star, Instagram } from "lucide-react";
import { assets, categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ManaCouture — Handwoven Kerala Sarees & Bridal Couture" },
      { name: "description", content: "Kasavu sarees, bridal silks, set mundu and heirloom couture handwoven in Kerala." },
      { property: "og:title", content: "ManaCouture — Handwoven Kerala Couture" },
      { property: "og:description", content: "Kasavu, bridal and festival couture, handwoven in Kerala." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] min-h-[86vh]">
          <div className="relative flex items-center bg-secondary/40 px-6 sm:px-12 lg:px-20 py-20">
            <div className="absolute top-8 left-6 lg:left-20 eyebrow">Onam Collection · 2026</div>
            <div className="max-w-xl animate-fade-up">
              <h1 className="font-display text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.02] tracking-tight">
                Woven in gold.
                <span className="block italic font-serif text-accent">Worn like poetry.</span>
              </h1>
              <p className="mt-8 text-base text-muted-foreground max-w-md leading-relaxed">
                A limited edition of hand-loomed Kasavu sarees, dyed in ivory
                and edged with antique gold — crafted by third-generation
                weavers in Balaramapuram.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/shop" className="btn-luxe btn-luxe-hover">
                  Shop New Collection <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/shop" search={{ c: "kerala-sarees" }} className="btn-outline-luxe hover:bg-primary hover:text-primary-foreground transition-colors">
                  Explore Sarees
                </Link>
              </div>
              <div className="mt-14 flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="gold-divider" />
                  <span>Handloom certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span>4.9 · 12,400 reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-secondary min-h-[60vh] lg:min-h-full">
            <img
              src={assets.hero}
              alt="Kerala Kasavu saree editorial"
              width={1600}
              height={1104}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-background/85 backdrop-blur-md px-5 py-4 max-w-[220px]">
              <div className="eyebrow text-[9px] mb-1">Look 01</div>
              <div className="font-display text-lg leading-tight">Aiswarya Kasavu</div>
              <div className="text-xs text-muted-foreground mt-1">Pure Kanchi cotton · Ivory & gold</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="border-y border-border overflow-hidden py-6 bg-background">
        <div className="animate-marquee whitespace-nowrap font-display text-2xl md:text-4xl italic text-foreground/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              {["Kasavu", "Bridal Silks", "Set Mundu", "Handloom", "Kanchipuram", "Onam", "Vishu", "Temple Wear"].map((w) => (
                <span key={w} className="mx-8">
                  {w} <span className="text-accent">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
        <SectionHeader eyebrow="The Atelier" title="Explore the collections" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/shop"
              search={{ c: cat.slug }}
              className="group relative overflow-hidden aspect-[3/4] bg-secondary"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-primary-foreground">
                <div className="eyebrow text-[9px] text-primary-foreground/80">{cat.count} pieces</div>
                <div className="font-display text-xl md:text-2xl mt-1">{cat.name}</div>
                <div className="mt-3 flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader eyebrow="New Arrivals" title="This season, softly" compact />
          <Link to="/shop" className="link-underline text-sm tracking-wide">View all →</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* BRIDAL EDITORIAL */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={assets.bridal}
              alt="Bridal couture"
              width={1200}
              height={1500}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:pl-10">
            <div className="eyebrow mb-6">The Bridal Edit</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              For the moments that
              <span className="italic font-serif text-accent"> live forever.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              Bespoke Kanchipuram silks and heirloom Kasavu ensembles designed
              for muhurtham, reception and every whispered promise in between.
              Each piece is fitted with a private atelier consultation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/shop" search={{ c: "bridal" }} className="btn-luxe btn-luxe-hover">
                Discover Bridal
              </Link>
              <Link to="/about" className="btn-outline-luxe hover:bg-primary hover:text-primary-foreground transition-colors">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FESTIVAL FULL BLEED */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={assets.festival}
          alt="Festival collection"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/35" />
        <div className="relative h-full flex items-center px-6 lg:px-20">
          <div className="max-w-lg text-primary-foreground">
            <div className="eyebrow text-primary-foreground/80 mb-6">Festival · Onam · Vishu</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
              A courtyard lit for celebration.
            </h2>
            <p className="mt-6 text-primary-foreground/85 max-w-md">
              Discover our festival edit — Kasavu for Onam, silks for Vishu,
              and temple couture for every sacred occasion.
            </p>
            <Link to="/shop" search={{ c: "festival" }} className="btn-luxe btn-luxe-hover mt-10 bg-background text-foreground border-background hover:bg-transparent hover:text-primary-foreground">
              Shop the edit
            </Link>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
        <SectionHeader eyebrow="Best Sellers" title="Loved by many" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-14">
          {products.slice(2, 8).slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* WHY MANACOUTURE */}
      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="The ManaCouture Promise" title="Craft that lasts a lifetime" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { icon: Sparkles, title: "Premium Fabrics", desc: "Only pure silks, handloom cottons and certified zari." },
              { icon: Scissors, title: "Authentic Kerala Weaves", desc: "Woven in Balaramapuram by master families." },
              { icon: Award, title: "Handpicked Collections", desc: "Every piece curated by our in-house atelier." },
              { icon: Shield, title: "Secure Payments", desc: "PCI compliant checkout with 3D Secure." },
              { icon: Truck, title: "Global Shipping", desc: "Insured worldwide delivery, complimentary in India." },
              { icon: RefreshCw, title: "Easy Returns", desc: "14-day easy returns on unworn pieces." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background p-8 rounded-sm border border-border hover:shadow-luxe transition-shadow duration-500">
                <div className="h-11 w-11 grid place-items-center border border-accent/50 rounded-full mb-6">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="font-display text-xl mb-2">{title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 md:py-32 text-center">
        <SectionHeader eyebrow="Client Diaries" title="Words from our patrons" center />
        <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
          {[
            { name: "Aparna Menon", role: "Kochi", quote: "My wedding Kasavu felt like an heirloom the moment I unfolded it. The gold border catches light in the most beautiful way." },
            { name: "Divya Nair", role: "London", quote: "Shipped from Kerala to London in five days, packaged like a couture gown. The Set Mundu is now my Onam signature." },
            { name: "Reshma Pillai", role: "Bengaluru", quote: "Every year I return for a new saree. The craftsmanship is unmatched, and their client atelier is genuinely personal." },
          ].map((t) => (
            <figure key={t.name} className="bg-secondary/40 p-8 border border-border">
              <div className="text-accent flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="font-serif text-lg italic leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">
        <SectionHeader eyebrow="@manacouture" title="Follow the atelier" center />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-12">
          {[assets.hero, assets.bridal, assets.kasavu, assets.setmundu, assets.festival, assets.accessories].map((src, i) => (
            <a key={i} href="#" className="relative aspect-square group overflow-hidden bg-secondary">
              <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors grid place-items-center">
                <Instagram className="h-6 w-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <div className="eyebrow mb-4">The Letter</div>
          <h2 className="font-display text-4xl md:text-5xl">
            Private previews, in your inbox.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Be the first to see our new collections, artisan stories and
            private atelier events.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 h-12 px-4 bg-background border border-border focus:border-accent outline-none text-sm"
            />
            <button type="submit" className="btn-luxe btn-luxe-hover">Subscribe</button>
          </form>
          <p className="mt-4 text-[11px] text-muted-foreground tracking-wide">
            By subscribing you agree to our privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ eyebrow, title, center, compact }: { eyebrow: string; title: string; center?: boolean; compact?: boolean }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="eyebrow mb-4">{eyebrow}</div>
      <h2 className={`font-display leading-[1.05] ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}>
        {title}
      </h2>
    </div>
  );
}
