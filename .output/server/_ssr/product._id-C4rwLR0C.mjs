import { n as __toESM } from "../_runtime.mjs";
import { a as products, i as getProduct, r as formatINR } from "./products-BA9_wfGS.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Heart, _ as RefreshCw, a as Truck, b as Minus, d as Shield, f as Share2, j as ChevronDown, s as Star, u as ShoppingBag, v as Plus } from "../_libs/lucide-react.mjs";
import { t as Route } from "./product._id-B7_aH0VG.mjs";
import { t as ProductCard } from "./ProductCard-BYgd7t5C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-C4rwLR0C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { id } = Route.useParams();
	const product = getProduct(id);
	const gallery = [
		product.image,
		product.hoverImage,
		product.image,
		product.hoverImage
	];
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [size, setSize] = (0, import_react.useState)("Free");
	const [color, setColor] = (0, import_react.useState)("Ivory & Gold");
	const [qty, setQty] = (0, import_react.useState)(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 pt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs text-muted-foreground eyebrow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "Home"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-foreground",
						children: "Shop"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.category })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_480px] gap-10 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[80px_1fr] gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-3",
						children: gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelected(i),
							className: `aspect-[4/5] overflow-hidden border ${i === selected ? "border-foreground" : "border-transparent"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g,
								alt: "",
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/5] overflow-hidden bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gallery[selected],
							alt: product.name,
							className: "absolute inset-0 h-full w-full object-cover"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-28 lg:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-3",
							children: product.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl md:text-5xl leading-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mt-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-0.5 text-accent",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.rating.toFixed(1) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										"· ",
										product.reviews,
										" reviews"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-end gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-3xl font-display",
									children: formatINR(product.price)
								}),
								product.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg text-muted-foreground line-through pb-1",
									children: formatINR(product.compareAt)
								}),
								product.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs eyebrow text-accent pb-2",
									children: ["Save ", formatINR(product.compareAt - product.price)]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground leading-relaxed",
							children: "An heirloom Kasavu handwoven on pit looms in Balaramapuram. The ivory drape is edged with 22k-tested antique zari, finished with a signature ManaCouture tassel and packaged in our reusable wooden trunk."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-[10px]",
									children: "Colour"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: color
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2.5",
								children: [
									{
										name: "Ivory & Gold",
										swatch: "linear-gradient(135deg,#FAF8F5 50%,#C6A664 50%)"
									},
									{
										name: "Cream Maroon",
										swatch: "linear-gradient(135deg,#F5EDD8 50%,#7A1F2B 50%)"
									},
									{
										name: "Beige Gold",
										swatch: "linear-gradient(135deg,#EDE6DD 50%,#B8935A 50%)"
									}
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": c.name,
									onClick: () => setColor(c.name),
									style: { backgroundImage: c.swatch },
									className: `h-10 w-10 rounded-full border-2 transition-all ${color === c.name ? "border-foreground scale-110" : "border-transparent"}`
								}, c.name))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-[10px]",
									children: "Size"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-xs link-underline",
									children: "Size guide"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-4 gap-2",
								children: [
									"XS",
									"S",
									"M",
									"L",
									"XL",
									"Free",
									"Blouse Stitch",
									"Custom"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSize(s),
									className: `h-11 text-xs tracking-wide border transition-colors ${size === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`,
									children: s
								}, s))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center border border-border h-14 px-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(Math.max(1, qty - 1)),
											"aria-label": "Decrease",
											className: "p-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-8 text-center text-sm",
											children: qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(qty + 1),
											"aria-label": "Increase",
											className: "p-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "btn-luxe btn-luxe-hover flex-1 h-14",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), " Add to bag"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Wishlist",
									className: "h-14 w-14 grid place-items-center border border-foreground hover:bg-primary hover:text-primary-foreground transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-outline-luxe w-full mt-3 h-14 hover:bg-primary hover:text-primary-foreground transition-colors",
							children: "Buy Now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-4 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "In stock · Ships in 2 days" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Share",
								className: "ml-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-3 gap-4 py-6 border-y border-border",
							children: [
								{
									icon: Truck,
									label: "Free shipping"
								},
								{
									icon: RefreshCw,
									label: "14-day returns"
								},
								{
									icon: Shield,
									label: "Secure checkout"
								}
							].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-accent mx-auto mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] tracking-wide",
									children: label
								})]
							}, label))
						}),
						[
							{
								title: "Fabric & Craft",
								body: `${product.fabric}. Handwoven on pit looms by artisans in Balaramapuram. Zari is real 22k-tested antique gold.`
							},
							{
								title: "Care",
								body: "Dry clean only. Store folded in muslin. Avoid direct sunlight and perfume."
							},
							{
								title: "Shipping & Returns",
								body: "Complimentary shipping across India. International 5–7 days. Easy 14-day returns on unworn pieces."
							}
						].map((acc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							title: acc.title,
							body: acc.body
						}, acc.title))
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-4",
					children: "You may also love"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl mb-10",
					children: "Curated for you"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10",
					children: products.filter((p) => p.id !== product.id).slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})
			]
		})
	] });
}
function Accordion({ title, body }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "w-full flex items-center justify-between py-5 text-sm font-medium",
			children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${open ? "rotate-180" : ""}` })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground pb-5 leading-relaxed",
			children: body
		})]
	});
}
//#endregion
export { ProductPage as component };
