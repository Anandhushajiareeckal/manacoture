import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SlidersHorizontal, LayoutGrid, Rows3, ChevronDown } from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type Search = { c?: string; sort?: string };

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    c: typeof s.c === "string" ? s.c : undefined,
    sort: typeof s.sort === "string" ? s.sort : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop — ManaCouture Kerala Couture" },
      { name: "description", content: "Shop handwoven Kerala sarees, bridal silks, kurtis, salwar sets and accessories." },
    ],
  }),
  component: ShopPage,
});

const filters = [
  { name: "Category", options: ["Kerala Sarees", "Kasavu", "Bridal", "Set Mundu", "Kurtis", "Salwar Sets", "Dupattas", "Accessories"] },
  { name: "Occasion", options: ["Wedding", "Festival", "Onam", "Vishu", "Temple", "Reception", "Casual"] },
  { name: "Fabric", options: ["Kanchipuram Silk", "Handloom Cotton", "Chanderi", "Georgette", "Cotton Silk"] },
  { name: "Colour", options: ["Ivory", "Cream", "Gold", "Maroon", "Emerald", "Blush"] },
  { name: "Price", options: ["Under ₹3,000", "₹3,000 – ₹8,000", "₹8,000 – ₹20,000", "Above ₹20,000"] },
];

function ShopPage() {
  const { c } = Route.useSearch();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [openFilter, setOpenFilter] = useState<string | null>("Category");

  const title = c ? categories.find((x) => x.slug === c)?.name ?? "Collection" : "All Collections";

  return (
    <div>
      {/* Hero strip */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-24">
          <div className="eyebrow mb-4">The Edit</div>
          <h1 className="font-display text-5xl md:text-6xl">{title}</h1>
          <p className="mt-4 text-muted-foreground max-w-lg">
            {products.length} handcrafted pieces, curated by our atelier.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 py-4 border-b border-border">
          <div className="text-xs eyebrow">{products.length} pieces</div>
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase">
              Sort: Featured <ChevronDown className="h-3 w-3" />
            </button>
            <div className="hidden md:flex gap-1">
              <button aria-label="Grid view" onClick={() => setView("grid")} className={`p-2 border ${view === "grid" ? "border-foreground" : "border-transparent"}`}>
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button aria-label="List view" onClick={() => setView("list")} className={`p-2 border ${view === "list" ? "border-foreground" : "border-transparent"}`}>
                <Rows3 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10 mt-10">
          {/* Filters */}
          <aside className="hidden lg:block">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="eyebrow">Refine</span>
            </div>
            <div className="space-y-1">
              {filters.map((f) => {
                const open = openFilter === f.name;
                return (
                  <div key={f.name} className="border-b border-border pb-4 pt-3">
                    <button
                      onClick={() => setOpenFilter(open ? null : f.name)}
                      className="w-full flex items-center justify-between text-sm font-medium"
                    >
                      {f.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                      <ul className="mt-3 space-y-2">
                        {f.options.map((o) => (
                          <li key={o}>
                            <label className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                              <input type="checkbox" className="accent-accent" />
                              {o}
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Grid */}
          <div className={view === "grid" ? "grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" : "space-y-8"}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


