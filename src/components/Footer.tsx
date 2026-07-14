import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
          <div className="lg:col-span-2 max-w-sm">
            <div className="font-display text-3xl mb-4">ManaCouture</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Contemporary heirlooms rooted in the handloom traditions of Kerala.
              Every weave is crafted by master artisans and delivered with care.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="h-10 w-10 border border-border rounded-full grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Shop" links={[
            ["/shop", "All Collections"],
            ["/shop?c=kasavu", "Kasavu"],
            ["/shop?c=bridal", "Bridal"],
            ["/shop?c=festival", "Festival"],
            ["/shop?c=kurtis", "Kurtis"],
          ]} />
          <FooterCol title="Care" links={[
            ["/account", "My Account"],
            ["/cart", "Cart"],
            ["/about", "Shipping"],
            ["/about", "Returns"],
            ["/about", "Size Guide"],
          ]} />
          <FooterCol title="Atelier" links={[
            ["/about", "Our Story"],
            ["/about", "Artisans"],
            ["/about", "Sustainability"],
            ["/about", "Journal"],
            ["/about", "Contact"],
          ]} />
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} ManaCouture · Handwoven in Kerala, India</div>
          <div className="flex gap-6">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
            <a href="#" className="link-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="eyebrow mb-5">{title}</div>
      <ul className="space-y-3 text-sm">
        {links.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="text-foreground/80 hover:text-accent transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
