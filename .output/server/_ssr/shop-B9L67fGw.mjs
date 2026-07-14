import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-B9L67fGw.js
var $$splitComponentImporter = () => import("./shop-DH04ex6c.mjs");
var Route = createFileRoute("/shop")({
	validateSearch: (s) => ({
		c: typeof s.c === "string" ? s.c : void 0,
		sort: typeof s.sort === "string" ? s.sort : void 0
	}),
	head: () => ({ meta: [{ title: "Shop — ManaCouture Kerala Couture" }, {
		name: "description",
		content: "Shop handwoven Kerala sarees, bridal silks, kurtis, salwar sets and accessories."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
