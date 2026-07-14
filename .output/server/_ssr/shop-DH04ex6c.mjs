import { n as __toESM } from "../_runtime.mjs";
import { a as products, n as categories } from "./products-BA9_wfGS.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Rows3, j as ChevronDown, l as SlidersHorizontal, w as LayoutGrid } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-BYgd7t5C.mjs";
import { t as Route } from "./shop-B9L67fGw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DH04ex6c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		name: "Category",
		options: [
			"Kerala Sarees",
			"Kasavu",
			"Bridal",
			"Set Mundu",
			"Kurtis",
			"Salwar Sets",
			"Dupattas",
			"Accessories"
		]
	},
	{
		name: "Occasion",
		options: [
			"Wedding",
			"Festival",
			"Onam",
			"Vishu",
			"Temple",
			"Reception",
			"Casual"
		]
	},
	{
		name: "Fabric",
		options: [
			"Kanchipuram Silk",
			"Handloom Cotton",
			"Chanderi",
			"Georgette",
			"Cotton Silk"
		]
	},
	{
		name: "Colour",
		options: [
			"Ivory",
			"Cream",
			"Gold",
			"Maroon",
			"Emerald",
			"Blush"
		]
	},
	{
		name: "Price",
		options: [
			"Under ₹3,000",
			"₹3,000 – ₹8,000",
			"₹8,000 – ₹20,000",
			"Above ₹20,000"
		]
	}
];
function ShopPage() {
	const { c } = Route.useSearch();
	const [view, setView] = (0, import_react.useState)("grid");
	const [openFilter, setOpenFilter] = (0, import_react.useState)("Category");
	const title = c ? categories.find((x) => x.slug === c)?.name ?? "Collection" : "All Collections";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/40 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-4",
					children: "The Edit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-muted-foreground max-w-lg",
					children: [products.length, " handcrafted pieces, curated by our atelier."]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4 py-4 border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs eyebrow",
				children: [products.length, " pieces"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "hidden md:inline-flex items-center gap-2 text-xs tracking-[0.24em] uppercase",
					children: ["Sort: Featured ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Grid view",
						onClick: () => setView("grid"),
						className: `p-2 border ${view === "grid" ? "border-foreground" : "border-transparent"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "List view",
						onClick: () => setView("list"),
						className: `p-2 border ${view === "list" ? "border-foreground" : "border-transparent"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rows3, { className: "h-4 w-4" })
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[260px_1fr] gap-10 mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden lg:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Refine"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: filters.map((f) => {
						const open = openFilter === f.name;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border pb-4 pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenFilter(open ? null : f.name),
								className: "w-full flex items-center justify-between text-sm font-medium",
								children: [f.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${open ? "rotate-180" : ""}` })]
							}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: f.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "accent-accent"
									}), o]
								}) }, o))
							})]
						}, f.name);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: view === "grid" ? "grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" : "space-y-8",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		})]
	})] });
}
//#endregion
export { ShopPage as component };
