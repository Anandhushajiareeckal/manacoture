import { a as products, r as formatINR } from "./products-BA9_wfGS.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Gift, Minus, Plus, Tag, Truck, X } from "lucide-react";
//#region src/routes/cart.tsx?tsr-split=component
function CartPage() {
	const [items, setItems] = useState(products.slice(0, 2).map((p) => ({
		...p,
		qty: 1,
		size: "Free",
		color: "Ivory & Gold"
	})));
	const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
	const shipping = subtotal > 5e3 ? 0 : 250;
	const total = subtotal + shipping;
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "eyebrow mb-4",
				children: "Your Bag"
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "font-display text-4xl md:text-5xl mb-10",
				children: [
					"Shopping Bag (",
					items.length,
					")"
				]
			}),
			items.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "text-center py-24",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground mb-6",
					children: "Your bag is currently empty."
				}), /* @__PURE__ */ jsx(Link, {
					to: "/shop",
					className: "btn-luxe btn-luxe-hover",
					children: "Continue Shopping"
				})]
			}) : /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-[1fr_400px] gap-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [items.map((item) => /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-5 md:gap-8 pb-6 border-b border-border",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/product/$id",
							params: { id: item.id },
							className: "aspect-[4/5] overflow-hidden bg-secondary",
							children: /* @__PURE__ */ jsx("img", {
								src: item.image,
								alt: item.name,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex flex-col",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "eyebrow text-[10px]",
											children: item.category
										}),
										/* @__PURE__ */ jsx(Link, {
											to: "/product/$id",
											params: { id: item.id },
											className: "font-display text-xl mt-1 block truncate hover:text-accent",
											children: item.name
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "text-xs text-muted-foreground mt-2 space-y-0.5",
											children: [
												/* @__PURE__ */ jsxs("div", { children: ["Colour: ", item.color] }),
												/* @__PURE__ */ jsxs("div", { children: ["Size: ", item.size] }),
												/* @__PURE__ */ jsxs("div", { children: ["Fabric: ", item.fabric] })
											]
										})
									]
								}), /* @__PURE__ */ jsx("button", {
									"aria-label": "Remove",
									onClick: () => setItems(items.filter((i) => i.id !== item.id)),
									className: "p-1 h-fit hover:text-accent",
									children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-auto pt-4 flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center border border-border",
									children: [
										/* @__PURE__ */ jsx("button", {
											onClick: () => setItems(items.map((i) => i.id === item.id ? {
												...i,
												qty: Math.max(1, i.qty - 1)
											} : i)),
											className: "p-2",
											"aria-label": "Decrease",
											children: /* @__PURE__ */ jsx(Minus, { className: "h-3 w-3" })
										}),
										/* @__PURE__ */ jsx("span", {
											className: "w-8 text-center text-sm",
											children: item.qty
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => setItems(items.map((i) => i.id === item.id ? {
												...i,
												qty: i.qty + 1
											} : i)),
											className: "p-2",
											"aria-label": "Increase",
											children: /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" })
										})
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "font-medium",
									children: formatINR(item.price * item.qty)
								})]
							})]
						})]
					}, item.id)), /* @__PURE__ */ jsx(Link, {
						to: "/shop",
						className: "inline-block link-underline text-sm tracking-wide mt-4",
						children: "← Continue shopping"
					})]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "bg-secondary/40 p-8 h-fit lg:sticky lg:top-28 border border-border",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-2xl mb-6",
							children: "Order Summary"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ jsx(Row, {
									label: "Subtotal",
									value: formatINR(subtotal)
								}),
								/* @__PURE__ */ jsx(Row, {
									label: "Shipping",
									value: shipping === 0 ? "Complimentary" : formatINR(shipping)
								}),
								/* @__PURE__ */ jsx(Row, {
									label: "Estimated tax",
									value: "Calculated at checkout",
									muted: true
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "border-t border-border mt-4 pt-4 flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display text-xl",
								children: "Total"
							}), /* @__PURE__ */ jsx("span", {
								className: "font-display text-xl",
								children: formatINR(total)
							})]
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/checkout",
							className: "btn-luxe btn-luxe-hover w-full mt-6",
							children: "Proceed to Checkout"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 space-y-3",
							children: [
								/* @__PURE__ */ jsxs("label", {
									className: "flex items-center gap-3 border border-border px-3 h-11 focus-within:border-foreground",
									children: [
										/* @__PURE__ */ jsx(Tag, { className: "h-4 w-4 text-muted-foreground" }),
										/* @__PURE__ */ jsx("input", {
											placeholder: "Promo code",
											className: "flex-1 bg-transparent outline-none text-sm"
										}),
										/* @__PURE__ */ jsx("button", {
											className: "text-xs eyebrow",
											children: "Apply"
										})
									]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "flex items-center gap-3 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ jsx("input", {
											type: "checkbox",
											className: "accent-accent"
										}),
										/* @__PURE__ */ jsx(Gift, { className: "h-4 w-4" }),
										" Add gift wrapping (₹250)"
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Truck, { className: "h-4 w-4 text-accent" }), shipping === 0 ? "You've unlocked complimentary shipping" : `Add ${formatINR(5e3 - subtotal)} more for free shipping`]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Row({ label, value, muted }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: muted ? "text-muted-foreground" : "",
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
