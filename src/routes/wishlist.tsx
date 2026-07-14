import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — ManaCouture" }] }),
  component: WishlistPage,
});

function WishlistPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24">
      <div className="eyebrow mb-3">Saved for later</div>
      <h1 className="font-display text-4xl md:text-5xl">My Wishlist</h1>
      <p className="text-muted-foreground mt-2">{products.length} pieces saved</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-14">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
