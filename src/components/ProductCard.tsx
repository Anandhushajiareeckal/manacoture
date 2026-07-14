import { Link } from "@tanstack/react-router";
import { Heart, Eye, Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/products";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <div className="group">
      <Link to="/product/$id" params={{ id: product.id }} className="block relative overflow-hidden bg-secondary/50 aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt=""
          loading="lazy"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] ease-out group-hover:opacity-100"
        />

        {/* badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="bg-background text-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
              New
            </span>
          )}
          {discount > 0 && (
            <span className="bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
              −{discount}%
            </span>
          )}
        </div>

        {/* quick actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          <button
            aria-label="Add to wishlist"
            className="h-9 w-9 grid place-items-center bg-background/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={(e) => { e.preventDefault(); }}
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            aria-label="Quick view"
            className="h-9 w-9 grid place-items-center bg-background/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={(e) => { e.preventDefault(); }}
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* add to cart slide */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <button
            className="w-full btn-luxe btn-luxe-hover bg-background/95 text-foreground border-foreground hover:bg-primary hover:text-primary-foreground"
            onClick={(e) => { e.preventDefault(); }}
          >
            Add to bag
          </button>
        </div>
      </Link>

      <div className="pt-5 pb-2 px-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="eyebrow text-[10px] mb-1.5">{product.category}</div>
            <Link to="/product/$id" params={{ id: product.id }} className="font-display text-lg leading-snug hover:text-accent transition-colors block truncate">
              {product.name}
            </Link>
            <div className="text-xs text-muted-foreground mt-1">{product.fabric}</div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-medium">{formatINR(product.price)}</div>
            {product.compareAt && (
              <div className="text-xs text-muted-foreground line-through">{formatINR(product.compareAt)}</div>
            )}
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span>{product.rating.toFixed(1)}</span>
          <span>·</span>
          <span>{product.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
}
