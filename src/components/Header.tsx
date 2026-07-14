import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?c=kasavu", label: "Kasavu" },
  { to: "/shop?c=bridal", label: "Bridal" },
  { to: "/shop?c=festival", label: "Festival" },
  { to: "/about", label: "Journal" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-[11px] tracking-[0.24em] uppercase py-2.5 text-center overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="mx-8">Complimentary shipping across India</span>
          <span className="mx-8">·</span>
          <span className="mx-8">Handwoven in Kerala</span>
          <span className="mx-8">·</span>
          <span className="mx-8">New Onam Collection 2026</span>
          <span className="mx-8">·</span>
          <span className="mx-8">Complimentary shipping across India</span>
          <span className="mx-8">·</span>
          <span className="mx-8">Handwoven in Kerala</span>
          <span className="mx-8">·</span>
          <span className="mx-8">New Onam Collection 2026</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-background"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">
            <button
              className="lg:hidden -ml-2 p-2"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            <nav className="hidden lg:flex items-center gap-9 text-[13px] tracking-wide">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="link-underline text-foreground/80 hover:text-foreground">
                  {n.label}
                </Link>
              ))}
            </nav>

            <Link to="/" className="justify-self-center text-center">
              <div className="font-display text-2xl md:text-3xl leading-none tracking-tight">
                ManaCouture
              </div>
              <div className="eyebrow mt-1 text-[9px]">Kerala · Est. 2018</div>
            </Link>

            <div className="flex items-center gap-1 md:gap-2 justify-self-end">
              <button aria-label="Search" className="p-2 hover:text-accent transition-colors">
                <Search className="h-[18px] w-[18px]" />
              </button>
              <Link to="/account" aria-label="Account" className="p-2 hover:text-accent transition-colors hidden md:inline-flex">
                <User className="h-[18px] w-[18px]" />
              </Link>
              <Link to="/wishlist" aria-label="Wishlist" className="p-2 hover:text-accent transition-colors">
                <Heart className="h-[18px] w-[18px]" />
              </Link>
              <Link to="/cart" aria-label="Cart" className="p-2 hover:text-accent transition-colors relative">
                <ShoppingBag className="h-[18px] w-[18px]" />
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-medium rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-[86%] max-w-sm bg-background p-8 flex flex-col animate-fade-up">
            <div className="flex items-center justify-between mb-10">
              <span className="font-display text-2xl">ManaCouture</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-5 text-lg font-display">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              ))}
              <Link to="/account" onClick={() => setOpen(false)}>Account</Link>
              <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
            </nav>
            <div className="mt-auto eyebrow">Made in Kerala · Loved worldwide</div>
          </aside>
        </div>
      )}
    </>
  );
}
