import { t as Route$8 } from "./shop-B9L67fGw.js";
import { t as Route$9 } from "./product._id-B7_aH0VG.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Facebook, Heart, Instagram, Menu, Search, ShoppingBag, User, X, Youtube } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-gfC1SbAV.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/Header.tsx
var nav = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/shop?c=kasavu",
		label: "Kasavu"
	},
	{
		to: "/shop?c=bridal",
		label: "Bridal"
	},
	{
		to: "/shop?c=festival",
		label: "Festival"
	},
	{
		to: "/about",
		label: "Journal"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "bg-primary text-primary-foreground text-[11px] tracking-[0.24em] uppercase py-2.5 text-center overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "animate-marquee whitespace-nowrap inline-block",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "Complimentary shipping across India"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "Handwoven in Kerala"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "New Onam Collection 2026"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "Complimentary shipping across India"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "Handwoven in Kerala"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-8",
						children: "New Onam Collection 2026"
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("header", {
			className: `sticky top-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-background"}`,
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-[1400px] mx-auto px-6 lg:px-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-[auto_1fr_auto] items-center h-20",
					children: [
						/* @__PURE__ */ jsx("button", {
							className: "lg:hidden -ml-2 p-2",
							"aria-label": "Open menu",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("nav", {
							className: "hidden lg:flex items-center gap-9 text-[13px] tracking-wide",
							children: nav.map((n) => /* @__PURE__ */ jsx(Link, {
								to: n.to,
								className: "link-underline text-foreground/80 hover:text-foreground",
								children: n.label
							}, n.to))
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "justify-self-center text-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-2xl md:text-3xl leading-none tracking-tight",
								children: "ManaCouture"
							}), /* @__PURE__ */ jsx("div", {
								className: "eyebrow mt-1 text-[9px]",
								children: "Kerala · Est. 2018"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1 md:gap-2 justify-self-end",
							children: [
								/* @__PURE__ */ jsx("button", {
									"aria-label": "Search",
									className: "p-2 hover:text-accent transition-colors",
									children: /* @__PURE__ */ jsx(Search, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/account",
									"aria-label": "Account",
									className: "p-2 hover:text-accent transition-colors hidden md:inline-flex",
									children: /* @__PURE__ */ jsx(User, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/wishlist",
									"aria-label": "Wishlist",
									className: "p-2 hover:text-accent transition-colors",
									children: /* @__PURE__ */ jsx(Heart, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/cart",
									"aria-label": "Cart",
									className: "p-2 hover:text-accent transition-colors relative",
									children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "h-[18px] w-[18px]" }), /* @__PURE__ */ jsx("span", {
										className: "absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-medium rounded-full h-4 w-4 flex items-center justify-center",
										children: "2"
									})]
								})
							]
						})
					]
				})
			})
		}),
		open && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-50 lg:hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-primary/40 backdrop-blur-sm",
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ jsxs("aside", {
				className: "absolute inset-y-0 left-0 w-[86%] max-w-sm bg-background p-8 flex flex-col animate-fade-up",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mb-10",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display text-2xl",
							children: "ManaCouture"
						}), /* @__PURE__ */ jsx("button", {
							"aria-label": "Close menu",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "flex flex-col gap-5 text-lg font-display",
						children: [
							nav.map((n) => /* @__PURE__ */ jsx(Link, {
								to: n.to,
								onClick: () => setOpen(false),
								children: n.label
							}, n.to)),
							/* @__PURE__ */ jsx(Link, {
								to: "/account",
								onClick: () => setOpen(false),
								children: "Account"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/cart",
								onClick: () => setOpen(false),
								children: "Cart"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-auto eyebrow",
						children: "Made in Kerala · Loved worldwide"
					})
				]
			})]
		})
	] });
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "mt-32 border-t border-border bg-secondary/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2 max-w-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "font-display text-3xl mb-4",
								children: "ManaCouture"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Contemporary heirlooms rooted in the handloom traditions of Kerala. Every weave is crafted by master artisans and delivered with care."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-3 mt-6",
								children: [
									Instagram,
									Facebook,
									Youtube
								].map((Icon, i) => /* @__PURE__ */ jsx("a", {
									href: "#",
									"aria-label": "Social",
									className: "h-10 w-10 border border-border rounded-full grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Shop",
						links: [
							["/shop", "All Collections"],
							["/shop?c=kasavu", "Kasavu"],
							["/shop?c=bridal", "Bridal"],
							["/shop?c=festival", "Festival"],
							["/shop?c=kurtis", "Kurtis"]
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Care",
						links: [
							["/account", "My Account"],
							["/cart", "Cart"],
							["/about", "Shipping"],
							["/about", "Returns"],
							["/about", "Size Guide"]
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Atelier",
						links: [
							["/about", "Our Story"],
							["/about", "Artisans"],
							["/about", "Sustainability"],
							["/about", "Journal"],
							["/about", "Contact"]
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ManaCouture · Handwoven in Kerala, India"
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-underline",
							children: "Privacy"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-underline",
							children: "Terms"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "link-underline",
							children: "Cookies"
						})
					]
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
		className: "eyebrow mb-5",
		children: title
	}), /* @__PURE__ */ jsx("ul", {
		className: "space-y-3 text-sm",
		children: links.map(([to, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
			to,
			className: "text-foreground/80 hover:text-accent transition-colors",
			children: label
		}) }, label))
	})] });
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[80vh] items-center justify-center px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "eyebrow mb-6",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-5xl mb-4",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: "The atelier door you're looking for doesn't exist."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "btn-luxe btn-luxe-hover mt-8 inline-flex",
					children: "Return home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[80vh] items-center justify-center px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl",
					children: "Something went awry"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Please try again in a moment."
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "btn-luxe btn-luxe-hover mt-8",
					children: "Try again"
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ManaCouture — Kerala Handwoven Sarees & Bridal Couture" },
			{
				name: "description",
				content: "Discover ManaCouture — Kerala's atelier for handwoven Kasavu sarees, bridal silks, set mundu, and heirloom couture crafted by master artisans."
			},
			{
				name: "author",
				content: "ManaCouture"
			},
			{
				property: "og:title",
				content: "ManaCouture — Kerala Handwoven Couture"
			},
			{
				property: "og:description",
				content: "Handwoven Kasavu sarees, bridal silks and heirloom couture from Kerala."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})
	});
}
//#endregion
//#region src/routes/wishlist.tsx
var $$splitComponentImporter$6 = () => import("./wishlist-DO-yhxtb.js");
var Route$6 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Wishlist — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/checkout.tsx
var $$splitComponentImporter$5 = () => import("./checkout-D9lOGNRP.js");
var Route$5 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/cart.tsx
var $$splitComponentImporter$4 = () => import("./cart-CEGl8rmI.js");
var Route$4 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Shopping Bag — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/auth.tsx
var $$splitComponentImporter$3 = () => import("./auth-2hMTS-Fv.js");
var Route$3 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign In — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/account.tsx
var $$splitComponentImporter$2 = () => import("./account-Da57G-d-.js");
var Route$2 = createFileRoute("/account")({
	head: () => ({ meta: [{ title: "My Account — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-sD1CdxZN.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "Our Story — ManaCouture" }, {
		name: "description",
		content: "The atelier, the weavers and the philosophy behind ManaCouture."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-cRfXXnOx.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ManaCouture — Handwoven Kerala Sarees & Bridal Couture" },
		{
			name: "description",
			content: "Kasavu sarees, bridal silks, set mundu and heirloom couture handwoven in Kerala."
		},
		{
			property: "og:title",
			content: "ManaCouture — Handwoven Kerala Couture"
		},
		{
			property: "og:description",
			content: "Kasavu, bridal and festival couture, handwoven in Kerala."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var WishlistRoute = Route$6.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$7
});
var ShopRoute = Route$8.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$7
});
var CheckoutRoute = Route$5.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$7
});
var CartRoute = Route$4.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$7
});
var AuthRoute = Route$3.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$7
});
var AccountRoute = Route$2.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	AccountRoute,
	AuthRoute,
	CartRoute,
	CheckoutRoute,
	ShopRoute,
	WishlistRoute,
	ProductIdRoute: Route$9.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
