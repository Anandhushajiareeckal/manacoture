import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Package, Heart, MapPin, Star, Bell, Wallet, Award, Settings, ChevronRight } from "lucide-react";
import { products, formatINR } from "@/lib/products";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account — ManaCouture" }] }),
  component: AccountPage,
});

const tabs = [
  { id: "overview", label: "Overview", icon: User },
  { id: "orders", label: "Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "loyalty", label: "Loyalty", icon: Award },
  { id: "settings", label: "Settings", icon: Settings },
];

function AccountPage() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
      <div className="eyebrow mb-3">My Atelier</div>
      <h1 className="font-display text-4xl md:text-5xl">Welcome back, Aparna</h1>
      <p className="text-muted-foreground mt-2">Gold Member · 2,480 loyalty points</p>

      <div className="grid lg:grid-cols-[240px_1fr] gap-10 mt-12">
        <aside>
          <nav className="space-y-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${
                  tab === t.id ? "bg-secondary border-l-2 border-accent" : "hover:bg-secondary/50 border-l-2 border-transparent"
                }`}
              >
                <t.icon className="h-4 w-4" />
                <span className="flex-1">{t.label}</span>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
              </button>
            ))}
          </nav>
          <Link to="/" className="mt-6 block text-xs eyebrow text-muted-foreground hover:text-foreground">Sign out</Link>
        </aside>

        <section className="min-h-[400px]">
          {tab === "overview" && (
            <div className="space-y-8">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Orders", value: "12" },
                  { label: "Wishlist", value: "8" },
                  { label: "Loyalty Points", value: "2,480" },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary/40 border border-border p-6">
                    <div className="eyebrow text-[10px]">{s.label}</div>
                    <div className="font-display text-3xl mt-1">{s.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Recent orders</h2>
                <div className="space-y-3">
                  {products.slice(0, 3).map((p, i) => (
                    <div key={p.id} className="grid grid-cols-[64px_1fr_auto] gap-4 items-center border border-border p-4">
                      <img src={p.image} alt={p.name} loading="lazy" className="h-16 w-16 object-cover" />
                      <div className="min-w-0">
                        <div className="font-display text-lg truncate">{p.name}</div>
                        <div className="text-xs text-muted-foreground">Order #MC00{i + 1} · {i === 0 ? "Delivered" : i === 1 ? "In transit" : "Processing"}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">{formatINR(p.price)}</div>
                        <button className="text-xs link-underline mt-1">Track</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "wishlist" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.slice(0, 3).map((p) => (
                <div key={p.id} className="border border-border">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-[4/5] object-cover" />
                  <div className="p-4">
                    <div className="font-display text-lg">{p.name}</div>
                    <div className="text-sm">{formatINR(p.price)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab !== "overview" && tab !== "wishlist" && (
            <div className="border border-border p-16 text-center">
              <div className="eyebrow mb-3">{tab}</div>
              <p className="text-muted-foreground">This section is being prepared by our atelier.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
