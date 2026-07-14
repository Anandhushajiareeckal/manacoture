import { a as products, r as formatINR } from "./products-BA9_wfGS.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, Lock } from "lucide-react";
//#region src/routes/checkout.tsx?tsr-split=component
var steps = [
	"Contact",
	"Shipping",
	"Payment"
];
function CheckoutPage() {
	const [step, setStep] = useState(0);
	const [payment, setPayment] = useState("card");
	const items = products.slice(0, 2);
	const subtotal = items.reduce((s, i) => s + i.price, 0);
	const total = subtotal;
	return /* @__PURE__ */ jsx("div", {
		className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-[1fr_420px] gap-16",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "font-display text-3xl",
					children: "ManaCouture"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-3 mt-10 mb-10",
					children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: `h-7 w-7 grid place-items-center rounded-full text-xs ${i <= step ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
								children: i < step ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : i + 1
							}),
							/* @__PURE__ */ jsx("span", {
								className: `text-xs eyebrow ${i === step ? "text-foreground" : "text-muted-foreground"}`,
								children: s
							}),
							i < steps.length - 1 && /* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-border" })
						]
					}, s))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsx(Section, {
							title: "Contact information",
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid gap-3",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Email address",
									type: "email",
									placeholder: "you@example.com"
								}), /* @__PURE__ */ jsxs("label", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										className: "accent-accent",
										defaultChecked: true
									}), " Email me with private previews and offers"]
								})]
							})
						}),
						/* @__PURE__ */ jsx(Section, {
							title: "Shipping address",
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: [
									/* @__PURE__ */ jsx(Field, { label: "First name" }),
									/* @__PURE__ */ jsx(Field, { label: "Last name" }),
									/* @__PURE__ */ jsx(Field, {
										label: "Address",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Apartment, suite (optional)",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ jsx(Field, { label: "City" }),
									/* @__PURE__ */ jsx(Field, { label: "State" }),
									/* @__PURE__ */ jsx(Field, { label: "PIN code" }),
									/* @__PURE__ */ jsx(Field, { label: "Phone" })
								]
							})
						}),
						/* @__PURE__ */ jsx(Section, {
							title: "Delivery",
							children: /* @__PURE__ */ jsx("div", {
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
								].map((d, i) => /* @__PURE__ */ jsxs("label", {
									className: "flex items-center gap-3 border border-border p-4 cursor-pointer has-[:checked]:border-foreground",
									children: [
										/* @__PURE__ */ jsx("input", {
											type: "radio",
											name: "delivery",
											defaultChecked: i === 0,
											className: "accent-accent"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "flex-1 text-sm",
											children: d.name
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-sm",
											children: d.price
										})
									]
								}, d.name))
							})
						}),
						/* @__PURE__ */ jsxs(Section, {
							title: "Payment",
							children: [/* @__PURE__ */ jsx("div", {
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
								].map((p) => /* @__PURE__ */ jsxs("label", {
									className: "flex items-center gap-3 border border-border p-4 cursor-pointer has-[:checked]:border-foreground",
									children: [/* @__PURE__ */ jsx("input", {
										type: "radio",
										name: "pay",
										checked: payment === p.id,
										onChange: () => setPayment(p.id),
										className: "accent-accent"
									}), /* @__PURE__ */ jsx("span", {
										className: "flex-1 text-sm",
										children: p.label
									})]
								}, p.id))
							}), payment === "card" && /* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-3 mt-4",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "Card number",
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ jsx(Field, { label: "Expiry (MM/YY)" }),
									/* @__PURE__ */ jsx(Field, { label: "CVV" }),
									/* @__PURE__ */ jsx(Field, {
										label: "Name on card",
										className: "sm:col-span-2"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between pt-4",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => setStep(Math.max(0, step - 1)),
								className: "link-underline text-sm",
								children: "← Back"
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => setStep(Math.min(steps.length - 1, step + 1)),
								className: "btn-luxe btn-luxe-hover",
								children: [/* @__PURE__ */ jsx(Lock, { className: "h-3.5 w-3.5" }), " Place Secure Order"]
							})]
						})
					]
				})
			] }), /* @__PURE__ */ jsxs("aside", {
				className: "bg-secondary/40 p-8 h-fit lg:sticky lg:top-10 border border-border",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl mb-6",
						children: "Order"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-5",
						children: items.map((p) => /* @__PURE__ */ jsxs("div", {
							className: "flex gap-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "h-20 w-16 shrink-0 overflow-hidden bg-secondary",
									children: /* @__PURE__ */ jsx("img", {
										src: p.image,
										alt: p.name,
										loading: "lazy",
										className: "h-full w-full object-cover"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-display text-sm truncate",
										children: p.name
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground",
										children: p.fabric
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-sm",
									children: formatINR(p.price)
								})
							]
						}, p.id))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "border-t border-border mt-6 pt-4 space-y-2 text-sm",
						children: [/* @__PURE__ */ jsx(Row, {
							label: "Subtotal",
							value: formatINR(subtotal)
						}), /* @__PURE__ */ jsx(Row, {
							label: "Shipping",
							value: "Complimentary"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "border-t border-border mt-4 pt-4 flex justify-between",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display text-lg",
							children: "Total"
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-lg",
							children: formatINR(total)
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex items-center gap-2 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Lock, { className: "h-3 w-3" }), " Secure 256-bit encrypted checkout"]
					})
				]
			})]
		})
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "border border-border p-6 md:p-8",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "font-display text-xl mb-4",
			children: title
		}), children]
	});
}
function Field({ label, type = "text", placeholder, className }) {
	return /* @__PURE__ */ jsxs("label", {
		className: `block ${className ?? ""}`,
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[11px] eyebrow block mb-1.5",
			children: label
		}), /* @__PURE__ */ jsx("input", {
			type,
			placeholder,
			className: "w-full h-11 px-3 bg-background border border-border focus:border-foreground outline-none text-sm"
		})]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", { children: value })]
	});
}
//#endregion
export { CheckoutPage as component };
