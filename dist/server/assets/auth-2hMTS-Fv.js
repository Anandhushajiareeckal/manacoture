import { t as assets } from "./products-BA9_wfGS.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/auth.tsx?tsr-split=component
function AuthPage() {
	const [mode, setMode] = useState("login");
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-[80vh] grid lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "hidden lg:block relative bg-secondary",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: assets.hero,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/25" }),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute bottom-16 left-16 text-primary-foreground max-w-sm",
					children: [/* @__PURE__ */ jsx("div", {
						className: "eyebrow text-primary-foreground/80 mb-3",
						children: "The Atelier"
					}), /* @__PURE__ */ jsx("div", {
						className: "font-display text-4xl leading-tight",
						children: "Sign in to unlock private previews & atelier appointments."
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center p-8 lg:p-16",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "font-display text-3xl",
						children: "ManaCouture"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-3xl md:text-4xl mt-10",
						children: mode === "login" ? "Welcome back" : "Create account"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground mt-2",
						children: mode === "login" ? "Sign in to your account" : "Join the ManaCouture atelier"
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: (e) => e.preventDefault(),
						className: "mt-8 space-y-4",
						children: [
							mode === "register" && /* @__PURE__ */ jsx(Field, { label: "Full name" }),
							/* @__PURE__ */ jsx(Field, {
								label: "Email address",
								type: "email"
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Password",
								type: "password"
							}),
							mode === "login" && /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between text-xs",
								children: [/* @__PURE__ */ jsxs("label", {
									className: "flex items-center gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										className: "accent-accent"
									}), " Remember me"]
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "link-underline",
									children: "Forgot password?"
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								className: "btn-luxe btn-luxe-hover w-full",
								children: mode === "login" ? "Sign In" : "Create Account"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "my-6 flex items-center gap-4",
						children: [
							/* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-border" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-xs eyebrow",
								children: "or"
							}),
							/* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-border" })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx("button", {
							className: "btn-outline-luxe w-full hover:bg-primary hover:text-primary-foreground transition-colors",
							children: "Continue with Google"
						}), /* @__PURE__ */ jsx("button", {
							className: "btn-outline-luxe w-full hover:bg-primary hover:text-primary-foreground transition-colors",
							children: "Continue with Apple"
						})]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-8 text-center text-sm text-muted-foreground",
						children: [
							mode === "login" ? "New to ManaCouture?" : "Already have an account?",
							" ",
							/* @__PURE__ */ jsx("button", {
								onClick: () => setMode(mode === "login" ? "register" : "login"),
								className: "link-underline text-foreground font-medium",
								children: mode === "login" ? "Create account" : "Sign in"
							})
						]
					})
				]
			})
		})]
	});
}
function Field({ label, type = "text" }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[11px] eyebrow block mb-1.5",
			children: label
		}), /* @__PURE__ */ jsx("input", {
			type,
			className: "w-full h-12 px-3 bg-background border border-border focus:border-foreground outline-none text-sm"
		})]
	});
}
//#endregion
export { AuthPage as component };
