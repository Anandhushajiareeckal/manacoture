import { t as assets } from "./products-BA9_wfGS.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative h-[70vh]",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: assets.festival,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/40" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative h-full flex flex-col items-center justify-center text-center text-primary-foreground px-6",
					children: [/* @__PURE__ */ jsx("div", {
						className: "eyebrow text-primary-foreground/80 mb-4",
						children: "Since 2018"
					}), /* @__PURE__ */ jsx("h1", {
						className: "font-display text-5xl md:text-7xl max-w-3xl leading-[1.05]",
						children: "A Kerala atelier for the modern woman."
					})]
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "max-w-3xl mx-auto px-6 py-24 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground/80",
				children: "\"We weave for the women who wear their culture with quiet pride — brides, mothers, daughters, and the friends who dance with them under Onam lamps.\""
			}), /* @__PURE__ */ jsx("div", {
				className: "eyebrow mt-8",
				children: "— Anjali Menon, Founder"
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 grid md:grid-cols-3 gap-10",
			children: [
				{
					title: "The Loom",
					body: "Every ManaCouture piece begins on a hand-pit loom in Balaramapuram, where third-generation weavers work with pure zari and combed cotton."
				},
				{
					title: "The Atelier",
					body: "Our Kochi atelier finishes each piece — hand-hemmed, pressed, wrapped in muslin and packed in reusable wooden trunks."
				},
				{
					title: "The Client",
					body: "From bridal fittings to festival curations, our client care team offers virtual and in-atelier consultations, worldwide."
				}
			].map((s) => /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("div", {
					className: "eyebrow mb-3",
					children: s.title
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl mb-3",
					children: s.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground leading-relaxed",
					children: s.body
				})
			] }, s.title))
		})
	] });
}
//#endregion
export { AboutPage as component };
