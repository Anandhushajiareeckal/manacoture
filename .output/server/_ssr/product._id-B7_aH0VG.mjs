import { i as getProduct } from "./products-BA9_wfGS.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-B7_aH0VG.js
var $$splitComponentImporter = () => import("./product._id-C4rwLR0C.mjs");
var Route = createFileRoute("/product/$id")({
	head: ({ params }) => ({ meta: [
		{ title: `${getProduct(params.id).name} — ManaCouture` },
		{
			name: "description",
			content: `${getProduct(params.id).name}. ${getProduct(params.id).fabric}. Handwoven in Kerala.`
		},
		{
			property: "og:title",
			content: `${getProduct(params.id).name} — ManaCouture`
		},
		{
			property: "og:image",
			content: getProduct(params.id).image
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
