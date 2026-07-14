import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Heart, O as Facebook, T as Instagram, i as User, m as Search, n as X, t as Youtube, u as ShoppingBag, x as Menu } from "../_libs/lucide-react.mjs";
import { t as Route$8 } from "./product._id-B7_aH0VG.mjs";
import { t as Route$9 } from "./shop-B9L67fGw.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-teLhY7w0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-K6B_r_On.css";
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
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-primary text-primary-foreground text-[11px] tracking-[0.24em] uppercase py-2.5 text-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-marquee whitespace-nowrap inline-block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "Complimentary shipping across India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "Handwoven in Kerala"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "New Onam Collection 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "Complimentary shipping across India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "Handwoven in Kerala"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-8",
						children: "New Onam Collection 2026"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: `sticky top-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-background"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[1400px] mx-auto px-6 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[auto_1fr_auto] items-center h-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden -ml-2 p-2",
							"aria-label": "Open menu",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden lg:flex items-center gap-9 text-[13px] tracking-wide",
							children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								className: "link-underline text-foreground/80 hover:text-foreground",
								children: n.label
							}, n.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "justify-self-center text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl md:text-3xl leading-none tracking-tight",
								children: "ManaCouture"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mt-1 text-[9px]",
								children: "Kerala · Est. 2018"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 md:gap-2 justify-self-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Search",
									className: "p-2 hover:text-accent transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/account",
									"aria-label": "Account",
									className: "p-2 hover:text-accent transition-colors hidden md:inline-flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/wishlist",
									"aria-label": "Wishlist",
									className: "p-2 hover:text-accent transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/cart",
									"aria-label": "Cart",
									className: "p-2 hover:text-accent transition-colors relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-[18px] w-[18px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-primary/40 backdrop-blur-sm",
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "absolute inset-y-0 left-0 w-[86%] max-w-sm bg-background p-8 flex flex-col animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl",
							children: "ManaCouture"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Close menu",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col gap-5 text-lg font-display",
						children: [
							nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								onClick: () => setOpen(false),
								children: n.label
							}, n.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/account",
								onClick: () => setOpen(false),
								children: "Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								onClick: () => setOpen(false),
								children: "Cart"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-auto eyebrow",
						children: "Made in Kerala · Loved worldwide"
					})
				]
			})]
		})
	] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-32 border-t border-border bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl mb-4",
								children: "ManaCouture"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Contemporary heirlooms rooted in the handloom traditions of Kerala. Every weave is crafted by master artisans and delivered with care."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-3 mt-6",
								children: [
									Instagram,
									Facebook,
									Youtube
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Social",
									className: "h-10 w-10 border border-border rounded-full grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Shop",
						links: [
							["/shop", "All Collections"],
							["/shop?c=kasavu", "Kasavu"],
							["/shop?c=bridal", "Bridal"],
							["/shop?c=festival", "Festival"],
							["/shop?c=kurtis", "Kurtis"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Care",
						links: [
							["/account", "My Account"],
							["/cart", "Cart"],
							["/about", "Shipping"],
							["/about", "Returns"],
							["/about", "Size Guide"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ManaCouture · Handwoven in Kerala, India"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "link-underline",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "link-underline",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "eyebrow mb-5",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3 text-sm",
		children: links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: "text-foreground/80 hover:text-accent transition-colors",
			children: label
		}) }, label))
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[80vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-6",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl mb-4",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "The atelier door you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[80vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "Something went awry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Please try again in a moment."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$6 = () => import("./wishlist-DO-yhxtb.mjs");
var Route$6 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Wishlist — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./checkout-D9lOGNRP.mjs");
var Route$5 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./cart-CEGl8rmI.mjs");
var Route$4 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Shopping Bag — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./auth-2hMTS-Fv.mjs");
var Route$3 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign In — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./account-Da57G-d-.mjs");
var Route$2 = createFileRoute("/account")({
	head: () => ({ meta: [{ title: "My Account — ManaCouture" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-sD1CdxZN.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "Our Story — ManaCouture" }, {
		name: "description",
		content: "The atelier, the weavers and the philosophy behind ManaCouture."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-cRfXXnOx.mjs");
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
var WishlistRoute = Route$6.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$7
});
var ShopRoute = Route$9.update({
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
	ProductIdRoute: Route$8.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
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
