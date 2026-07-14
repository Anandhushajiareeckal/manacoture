import { a as products } from "./products-BA9_wfGS.js";
import { t as ProductCard } from "./ProductCard-BYgd7t5C.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/wishlist.tsx?tsr-split=component
function WishlistPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "eyebrow mb-3",
				children: "Saved for later"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl md:text-5xl",
				children: "My Wishlist"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "text-muted-foreground mt-2",
				children: [products.length, " pieces saved"]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-14",
				children: products.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id))
			})
		]
	});
}
//#endregion
export { WishlistPage as component };
