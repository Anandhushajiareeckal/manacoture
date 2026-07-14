import { r as __toESM } from "../_runtime.mjs";
import { a as products, r as formatINR } from "./products-BA9_wfGS.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Lock, M as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-D9lOGNRP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Contact",
	"Shipping",
	"Payment"
];
function CheckoutPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [payment, setPayment] = (0, import_react.useState)("card");
	const items = products.slice(0, 2);
	const subtotal = items.reduce((s, i) => s + i.price, 0);
	const total = subtotal;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[1fr_420px] gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-3xl",
					children: "ManaCouture"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3 mt-10 mb-10",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-7 w-7 grid place-items-center rounded-full text-xs ${i <= step ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
								children: i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs eyebrow ${i === step ? "text-foreground" : "text-muted-foreground"}`,
								children: s
							}),
							i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-px bg-border" })
						]
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Contact information",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email address",
									type: "email",
									placeholder: "you@example.com"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "accent-accent",
										defaultChecked: true
									}), " Email me with private previews and offers"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Shipping address",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "First name" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Last name" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Address",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Apartment, suite (optional)",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "City" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "State" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "PIN code" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Phone" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Delivery",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									{
										name: "Standard · 3–5 days",
										price: "Complimentary"
									},
									{
										name: "Express · 1–2 days",
										price: "₹450"
									},
									{
										name: "International Express · 5–7 days",
										price: "₹2,500"
									}
								].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 border border-border p-4 cursor-pointer has-[:checked]:border-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "delivery",
											defaultChecked: i === 0,
											className: "accent-accent"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex-1 text-sm",
											children: d.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: d.price
										})
									]
								}, d.name))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Payment",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									{
										id: "card",
										label: "Credit / Debit Card"
									},
									{
										id: "upi",
										label: "UPI"
									},
									{
										id: "netbanking",
										label: "Net Banking"
									},
									{
										id: "cod",
										label: "Cash on Delivery"
									}
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-3 border border-border p-4 cursor-pointer has-[:checked]:border-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "pay",
										checked: payment === p.id,
										onChange: () => setPayment(p.id),
										className: "accent-accent"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 text-sm",
										children: p.label
									})]
								}, p.id))
							}), payment === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-3 mt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Card number",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Expiry (MM/YY)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "CVV" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name on card",
										className: "sm:col-span-2"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStep(Math.max(0, step - 1)),
								className: "link-underline text-sm",
								children: "← Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setStep(Math.min(steps.length - 1, step + 1)),
								className: "btn-luxe btn-luxe-hover",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " Place Secure Order"]
							})]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "bg-secondary/40 p-8 h-fit lg:sticky lg:top-10 border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl mb-6",
						children: "Order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-20 w-16 shrink-0 overflow-hidden bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.name,
										loading: "lazy",
										className: "h-full w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-sm truncate",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: p.fabric
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm",
									children: formatINR(p.price)
								})
							]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border mt-6 pt-4 space-y-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Subtotal",
							value: formatINR(subtotal)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Shipping",
							value: "Complimentary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border mt-4 pt-4 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: formatINR(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-2 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Secure 256-bit encrypted checkout"]
					})
				]
			})]
		})
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border p-6 md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-xl mb-4",
			children: title
		}), children]
	});
}
function Field({ label, type = "text", placeholder, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] eyebrow block mb-1.5",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			placeholder,
			className: "w-full h-11 px-3 bg-background border border-border focus:border-foreground outline-none text-sm"
		})]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
//#endregion
export { CheckoutPage as component };
