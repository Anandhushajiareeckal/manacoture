import { a as products, r as formatINR } from "./products-BA9_wfGS.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, Bell, ChevronRight, Heart, MapPin, Package, Settings, Star, User, Wallet } from "lucide-react";
//#region src/routes/account.tsx?tsr-split=component
var tabs = [
	{
		id: "overview",
		label: "Overview",
		icon: User
	},
	{
		id: "orders",
		label: "Orders",
		icon: Package
	},
	{
		id: "wishlist",
		label: "Wishlist",
		icon: Heart
	},
	{
		id: "addresses",
		label: "Addresses",
		icon: MapPin
	},
	{
		id: "reviews",
		label: "Reviews",
		icon: Star
	},
	{
		id: "notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		id: "wallet",
		label: "Wallet",
		icon: Wallet
	},
	{
		id: "loyalty",
		label: "Loyalty",
		icon: Award
	},
	{
		id: "settings",
		label: "Settings",
		icon: Settings
	}
];
function AccountPage() {
	const [tab, setTab] = useState("overview");
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-16",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "eyebrow mb-3",
				children: "My Atelier"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl md:text-5xl",
				children: "Welcome back, Aparna"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground mt-2",
				children: "Gold Member · 2,480 loyalty points"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-[240px_1fr] gap-10 mt-12",
				children: [/* @__PURE__ */ jsxs("aside", { children: [/* @__PURE__ */ jsx("nav", {
					className: "space-y-1",
					children: tabs.map((t) => /* @__PURE__ */ jsxs("button", {
						onClick: () => setTab(t.id),
						className: `w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${tab === t.id ? "bg-secondary border-l-2 border-accent" : "hover:bg-secondary/50 border-l-2 border-transparent"}`,
						children: [
							/* @__PURE__ */ jsx(t.icon, { className: "h-4 w-4" }),
							/* @__PURE__ */ jsx("span", {
								className: "flex-1",
								children: t.label
							}),
							/* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-muted-foreground" })
						]
					}, t.id))
				}), /* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "mt-6 block text-xs eyebrow text-muted-foreground hover:text-foreground",
					children: "Sign out"
				})] }), /* @__PURE__ */ jsxs("section", {
					className: "min-h-[400px]",
					children: [
						tab === "overview" && /* @__PURE__ */ jsxs("div", {
							className: "space-y-8",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid sm:grid-cols-3 gap-4",
								children: [
									{
										label: "Orders",
										value: "12"
									},
									{
										label: "Wishlist",
										value: "8"
									},
									{
										label: "Loyalty Points",
										value: "2,480"
									}
								].map((s) => /* @__PURE__ */ jsxs("div", {
									className: "bg-secondary/40 border border-border p-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "eyebrow text-[10px]",
										children: s.label
									}), /* @__PURE__ */ jsx("div", {
										className: "font-display text-3xl mt-1",
										children: s.value
									})]
								}, s.label))
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
								className: "font-display text-2xl mb-4",
								children: "Recent orders"
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-3",
								children: products.slice(0, 3).map((p, i) => /* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-[64px_1fr_auto] gap-4 items-center border border-border p-4",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: p.image,
											alt: p.name,
											loading: "lazy",
											className: "h-16 w-16 object-cover"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-display text-lg truncate",
												children: p.name
											}), /* @__PURE__ */ jsxs("div", {
												className: "text-xs text-muted-foreground",
												children: [
													"Order #MC00",
													i + 1,
													" · ",
													i === 0 ? "Delivered" : i === 1 ? "In transit" : "Processing"
												]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "text-right",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-sm",
												children: formatINR(p.price)
											}), /* @__PURE__ */ jsx("button", {
												className: "text-xs link-underline mt-1",
												children: "Track"
											})]
										})
									]
								}, p.id))
							})] })]
						}),
						tab === "wishlist" && /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 md:grid-cols-3 gap-6",
							children: products.slice(0, 3).map((p) => /* @__PURE__ */ jsxs("div", {
								className: "border border-border",
								children: [/* @__PURE__ */ jsx("img", {
									src: p.image,
									alt: p.name,
									loading: "lazy",
									className: "w-full aspect-[4/5] object-cover"
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-display text-lg",
										children: p.name
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm",
										children: formatINR(p.price)
									})]
								})]
							}, p.id))
						}),
						tab !== "overview" && tab !== "wishlist" && /* @__PURE__ */ jsxs("div", {
							className: "border border-border p-16 text-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "eyebrow mb-3",
								children: tab
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground",
								children: "This section is being prepared by our atelier."
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { AccountPage as component };
