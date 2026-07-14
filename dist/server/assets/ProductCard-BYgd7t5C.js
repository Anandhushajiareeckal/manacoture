import { r as formatINR } from "./products-BA9_wfGS.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Eye, Heart, Star } from "lucide-react";
//#region src/components/ProductCard.tsx
function ProductCard({ product, priority }) {
	const discount = product.compareAt ? Math.round((product.compareAt - product.price) / product.compareAt * 100) : 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "group",
		children: [/* @__PURE__ */ jsxs(Link, {
			to: "/product/$id",
			params: { id: product.id },
			className: "block relative overflow-hidden bg-secondary/50 aspect-[4/5]",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: product.image,
					alt: product.name,
					loading: priority ? "eager" : "lazy",
					className: "absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:opacity-0"
				}),
				/* @__PURE__ */ jsx("img", {
					src: product.hoverImage,
					alt: "",
					loading: "lazy",
					"aria-hidden": true,
					className: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] ease-out group-hover:opacity-100"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute top-4 left-4 flex flex-col gap-2",
					children: [
						product.badge && /* @__PURE__ */ jsx("span", {
							className: "bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1.5",
							children: product.badge
						}),
						product.isNew && /* @__PURE__ */ jsx("span", {
							className: "bg-background text-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1.5",
							children: "New"
						}),
						discount > 0 && /* @__PURE__ */ jsxs("span", {
							className: "bg-accent text-accent-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1.5",
							children: [
								"−",
								discount,
								"%"
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500",
					children: [/* @__PURE__ */ jsx("button", {
						"aria-label": "Add to wishlist",
						className: "h-9 w-9 grid place-items-center bg-background/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors",
						onClick: (e) => {
							e.preventDefault();
						},
						children: /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" })
					}), /* @__PURE__ */ jsx("button", {
						"aria-label": "Quick view",
						className: "h-9 w-9 grid place-items-center bg-background/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors",
						onClick: (e) => {
							e.preventDefault();
						},
						children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-x-4 bottom-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500",
					children: /* @__PURE__ */ jsx("button", {
						className: "w-full btn-luxe btn-luxe-hover bg-background/95 text-foreground border-foreground hover:bg-primary hover:text-primary-foreground",
						onClick: (e) => {
							e.preventDefault();
						},
						children: "Add to bag"
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "pt-5 pb-2 px-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "eyebrow text-[10px] mb-1.5",
							children: product.category
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/product/$id",
							params: { id: product.id },
							className: "font-display text-lg leading-snug hover:text-accent transition-colors block truncate",
							children: product.name
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground mt-1",
							children: product.fabric
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "text-right shrink-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-medium",
						children: formatINR(product.price)
					}), product.compareAt && /* @__PURE__ */ jsx("div", {
						className: "text-xs text-muted-foreground line-through",
						children: formatINR(product.compareAt)
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-accent text-accent" }),
					/* @__PURE__ */ jsx("span", { children: product.rating.toFixed(1) }),
					/* @__PURE__ */ jsx("span", { children: "·" }),
					/* @__PURE__ */ jsxs("span", { children: [product.reviews, " reviews"] })
				]
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
